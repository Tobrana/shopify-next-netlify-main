export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          
           <h2>
            HD ATHLETIC
          </h2>
          <button>
            Contact a consultant
          </button>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <p className="newsletter-text">Get the latest news and fitness tips from Life Fitness Atlanta</p>
          <form name="contact" netlify>
            <p>
              <label>Name <input className="newsletter-input" type="text" name="name" placeholder="Enter your First Name" /></label>
            </p>
            <p>
              <label>Email <input type="email" className="newsletter-input" name="email" placeholder="Enter your email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          </div>
        </section>
        <div className="project-credit">
          <p className="text-muted" style={{ textAlign: "center" }}>
          <small>&copy; {new Date().getFullYear()} LifeFitness</small>
        </p>
        </div>
      </footer>
    </>
  );
}
