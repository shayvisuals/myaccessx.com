class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-links a:hover {
          color: #0ea5e9;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .cta-button {
          background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-links.active {
            display: flex;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav>
        <a href="index.html" class="logo">AccessX</a>
        
        <div class="nav-links" id="navLinks">
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="shop.html">Shop</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="contact.html" class="cta-button">Get Started</a>
        </div>
        
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
    
    // Add mobile menu functionality
    const mobileMenuBtn = this.shadowRoot.getElementById('mobileMenuBtn');
    const navLinks = this.shadowRoot.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      feather.replace();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);