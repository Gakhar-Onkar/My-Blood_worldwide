import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = [
  { path: '/', title: 'MyBlood - Blood Bank Management System' },
  { path: '/gallery', title: 'Gallery - MyBlood' },
  { path: '/contactus', title: 'Contact Us - MyBlood' },
  { path: '/enquiry', title: 'Enquiry - MyBlood' },
  { path: '/policy', title: 'Privacy Policies' },
  { path: '/login', title: 'login - MyBlood' },
  { path: '/buyblood', title: 'Charges - MyBlood' },
  { path: '/dashboardlogin', title: 'AuthorityLogin - MyBlood' },
  { path: '/user', title: 'User - MyBlood' },
  { path: '/dashboard', title: 'Dashboard - MyBlood' }
];

const template = readFileSync(join(__dirname, 'dist', 'index.html'), 'utf8');

routes.forEach(route => {
  const html = template
    .replace('<title>Vite + React</title>', `<title>${route.title}</title>`)
    .replace('<div id="root"></div>', `
      <div id="root">
        <div class="pre-rendered">
          <header>
            <nav>
              <div class="navbar">
                <a href="/" class="logo">MyBlood</a>
                <div class="nav-links">
                  <a href="/">Home</a>
                  <a href="/gallery">Gallery</a>
                  <a href="/contactus">Contact</a>
                  <a href="/enquiry">Services</a>
                  <a href="/dashboard">Services</a>
                  <a href="/policy">Services</a>
                  <a href="/login">Services</a>
                  <a href="/buyblood">Services</a>
                </div>
              </div>
            </nav>
          </header>
          <main>
            <div class="hero-section">
              <h1>${route.title.split(' - ')[0]}</h1>
              <p>Loading ${route.path === '/' ? 'blood bank management system' : route.path.slice(1)}...</p>
            </div>
          </main>
        </div>
      </div>
    `);

  const outputPath = route.path === '/' 
    ? join(__dirname, 'dist', 'index.html')
    : join(__dirname, 'dist', route.path, 'index.html');
  
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true });
  }
  
  writeFileSync(outputPath, html);
  console.log(`✅ Pre-rendered: ${route.path}`);
});

console.log('🚀 Pre-rendering complete!');
