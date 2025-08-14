
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🚀 Starting SSR pre-rendering process...');


console.log('📦 Building application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}


const indexPath = join(__dirname, 'dist', 'index.html');
let template;
try {
  template = readFileSync(indexPath, 'utf8');
} catch (error) {
  console.error('❌ Could not read index.html:', error.message);
  process.exit(1);
}

const routes = [
  { 
    path: '/', 
    title: 'MyBlood - Blood Bank Management System', 
    description: 'Professional blood bank management system for efficient blood donation and distribution services.',
    keywords: 'blood bank, blood donation, blood management, healthcare, medical services'
  },
  { 
    path: '/gallery', 
    title: 'Gallery - MyBlood', 
    description: 'View our blood donation gallery and success stories.',
    keywords: 'blood donation gallery, medical gallery, healthcare photos'
  },
  { 
    path: '/contactus', 
    title: 'Contact Us - MyBlood', 
    description: 'Get in touch with our blood bank team for inquiries and support.',
    keywords: 'blood bank contact, medical support, healthcare contact'
  },
  { 
    path: '/enquiry', 
    title: 'Enquiry - MyBlood', 
    description: 'Submit your blood bank related enquiries and get quick responses.',
    keywords: 'blood bank enquiry, medical enquiry, healthcare questions'
  },
  { 
    path: '/buyblood', 
    title: 'Blood Charges - MyBlood', 
    description: 'View blood bank charges and pricing for different blood types and services.',
    keywords: 'blood charges, blood pricing, medical costs, healthcare pricing'
  },
  { 
    path: '/login', 
    title: 'Login - MyBlood', 
    description: 'Access your MyBlood account for blood bank management services.',
    keywords: 'blood bank login, medical portal login, healthcare access'
  }
];


routes.forEach(route => {
  const seoHtml = template
    .replace('<title>Vite + React</title>', `
      <title>${route.title}</title>
      <meta name="description" content="${route.description}">
      <meta name="keywords" content="${route.keywords}">
      <meta property="og:title" content="${route.title}">
      <meta property="og:description" content="${route.description}">
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://myblood.com${route.path}">
      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:title" content="${route.title}">
      <meta name="twitter:description" content="${route.description}">
    `)
    .replace('<div id="root"></div>', `
      <div id="root">
        <div class="ssr-container">
          <header>
            <nav class="navbar">
              <div class="nav-container">
                <a href="/" class="logo">MyBlood</a>
                <div class="nav-menu">
                  <a href="/">Home</a>
                  <a href="/gallery">Gallery</a>
                  <a href="/contactus">Contact</a>
                  <a href="/enquiry">Enquiry</a>
                  <a href="/buyblood">Services</a>
                </div>
              </div>
            </nav>
          </header>
          <main class="main-content">
            <section class="hero-section">
              <h1>${route.title.split(' - ')[0]}</h1>
              <p>${route.description}</p>
              <div class="loading-spinner"></div>
            </section>
          </main>
        </div>
      </div>
      <style>
        .ssr-container { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          margin: 0;
          padding: 0;
        }
        .navbar {
          background: linear-gradient(135deg, #ff4757, #ff3838);
          padding: 1rem 2rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
        }
        .nav-menu a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s;
        }
        .nav-menu a:hover {
          opacity: 0.8;
        }
        .main-content {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem;
        }
        .hero-section {
          text-align: center;
          max-width: 600px;
        }
        .hero-section h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        .hero-section p {
          font-size: 1.2rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #ff4757;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `);


  const outputPath = route.path === '/' 
    ? join(__dirname, 'dist', 'index.html')
    : join(__dirname, 'dist', route.path, 'index.html');
  
  if (!existsSync(dirname(outputPath))) {
    mkdirSync(dirname(outputPath), { recursive: true });
  }
  
  writeFileSync(outputPath, seoHtml);
  console.log(`✅ Pre-rendered: ${route.path}`);
});

console.log('🎉 SSR pre-rendering complete!');
console.log('📁 Generated static files:');
routes.forEach(route => {
  console.log(`   - ${route.path} → dist${route.path === '/' ? '/index.html' : route.path + '/index.html'}`);
});
