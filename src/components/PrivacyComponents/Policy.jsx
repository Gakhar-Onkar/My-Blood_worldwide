import React from 'react'
import './Policy.css';

const Policy = () => {
  return (<>
  <div className="privacy-container">
      <div className="privacy-card">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-updated">Last updated: August 13, 2025</p>

        <section className="privacy-section">
          <h2>🔒 Information We Collect</h2>
          <p>
            We collect personal details such as name, contact information, and blood type to facilitate donations and ensure safety. All data is securely stored and used only for operational purposes.
          </p>
        </section>

        <section className="privacy-section">
          <h2>📦 How We Use Your Data</h2>
          <p>
            Your data helps us match donors with recipients, send alerts for urgent needs, and maintain accurate medical records. We never sell or share your information with third parties.
          </p>
        </section>

        <section className="privacy-section">
          <h2>🛡️ Data Protection</h2>
          <p>
            We use encryption, secure servers, and regular audits to protect your data. Access is restricted to authorized personnel only.
          </p>
        </section>

        <section className="privacy-section">
          <h2>📞 Contact Us</h2>
          <p>
            If you have questions or concerns about your privacy, reach out to us via <a href="/contactus">Contact Us</a>.
          </p>
        </section>
      </div>
    </div>

  </>
  )
}

export default Policy
