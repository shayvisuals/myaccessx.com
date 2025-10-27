class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem 2rem;
          margin-top: 4rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-section h3 {
          color: #0ea5e9;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #0ea5e9;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
          transform: translateY(-2px);
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #64748b;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>AccessX</h3>
            <p style="color: #94a3b8; line-height: 1.6;">
              Advanced Meta advertising solutions for unlimited growth and dominance in the digital space.
            </p>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-section">
            <h3>Services</h3>
            <ul class="footer-links">
              <li><a href="services.html#meta-ads">Meta Ad Solutions</a></li>
              <li><a href="services.html#unbans">Facebook Unbans</a></li>
              <li><a href="services.html#spy">Competitor Spy</a></li>
              <li><a href="services.html#accounts">Black Hat Accounts</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="shop.html">Shop</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Contact Info</h3>
            <ul class="footer-links">
              <li style="color: #94a3b8;">
                <i data-feather="mail" style="width: 16px; height: 16px; margin-right: 0.5rem;"></i>
                support@accessx.com
              </li>
              <li style="color: #94a3b8;">
                <i data-feather="clock" style="width: 16px; height: 16px; margin-right: 0.5rem;"></i>
                24/7 Support
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 AccessX. All rights reserved. | Premium Meta Advertising Solutions</p>
        </div>
      </footer>
    `;
    
    // Replace feather icons after rendering
    setTimeout(() => {
      if (typeof feather !== 'undefined') {
        feather.replace();
      }
    }, 100);
  }
}

customElements.define('custom-footer', CustomFooter);