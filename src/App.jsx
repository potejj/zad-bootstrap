import React from "react";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-light py-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="logo h4">MedicalFunc</h1>
          <nav className="nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <button className="btn btn-primary">Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero container text-center text-md-left my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="hero-title">Online Appointment</h2>
            <p className="hero-text">
              Medical Function is most focused in helping you discover your most
              beautiful smile
            </p>
            <button className="btn btn-primary m-2">Set Schedule</button>
            <button className="btn btn-outline-primary m-2">Learn More</button>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Doctor"
              className="hero-image img-fluid"
            />
          </div>
        </div>
      </section>

      {/* Activity Section */}
      <section className="activity bg-light py-5">
        <div className="container text-center">
          <h3>Our Activity</h3>
          <p>
            We are engaged in various medical functions that help people with
            health problems in different areas.
          </p>
          <div className="row">
            <div className="col-md-4 p-3">
              <div className="card p-4 shadow-sm">
                <h4>Emergency Case</h4>
                <p>Immediate help for urgent cases.</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card p-4 shadow-sm">
                <h4>Health Queries</h4>
                <p>Get advice on health-related issues.</p>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card p-4 shadow-sm">
                <h4>Service Protection</h4>
                <p>Ensuring the safety and well-being of our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Medicine Section */}
      <section className="leading-medicine my-5">
        <div className="container text-center">
          <h3>Leading Medicine</h3>
          <p>
            Our team of experienced doctors provides world-class medical
            services with a focus on innovation and compassion.
          </p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors py-5 bg-light">
        <div className="container text-center">
          <h3>Our Doctors Specialize in you</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="doctor-card card p-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Doctor 1"
                  className="doctor-image img-fluid rounded-circle mb-3"
                />
                <h4>Dr. Anna Smith</h4>
                <p>Specialized in Cardiology</p>
                <p className="price">$50.00</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="doctor-card card p-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Doctor 2"
                  className="doctor-image img-fluid rounded-circle mb-3"
                />
                <h4>Dr. John Doe</h4>
                <p>Specialized in Neurology</p>
                <p className="price">$60.00</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="doctor-card card p-4 shadow-sm">
                <img
                  src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Doctor 3"
                  className="doctor-image img-fluid rounded-circle mb-3"
                />
                <h4>Dr. Emily Davis</h4>
                <p>Specialized in Ophthalmology</p>
                <p className="price">$55.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing my-5">
        <div className="container text-center">
          <h3>Pricing</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="pricing-card card p-4 shadow-sm">
                <h4>Basic Plan</h4>
                <p className="price">$19 per month</p>
                <button className="btn btn-primary">Try for Free</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card card p-4 shadow-sm">
                <h4>Standard Plan</h4>
                <p className="price">$29 per month</p>
                <button className="btn btn-primary">Try for Free</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card card p-4 shadow-sm">
                <h4>Premium Plan</h4>
                <p className="price">$39 per month</p>
                <button className="btn btn-primary">Try for Free</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5 bg-light">
        <div className="container text-center">
          <h3>Each and every client is important</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card card p-3 shadow-sm">
                <p>“Amazing experience with professional care.”</p>
                <h5>Client Name</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card card p-3 shadow-sm">
                <p>“Exceptional service and attention to details.”</p>
                <h5>Client Name</h5>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card card p-3 shadow-sm">
                <p>“Highly recommend this team of professionals.”</p>
                <h5>Client Name</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white text-center py-4">
        <div className="container">
          <h4>Join Us</h4>
          <p>Subscribe to our newsletter for the latest updates and offers.</p>
          <div className="input-group mb-3 w-50 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <div>
            <a href="#about" className="text-white mx-2">
              About Us
            </a>
            <a href="#privacy" className="text-white mx-2">
              Privacy Policy
            </a>
            <a href="#contact" className="text-white mx-2">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

