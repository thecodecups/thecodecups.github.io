"use client"; 
import react,{ useEffect } from 'react';
import Image from 'next/image'
import styles from '../page.module.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  const pathname = usePathname()
  let locationName = pathname.replace("/","");
  let locationName2 = locationName.replace("-"," ");
  let locationName3 = locationName2.replace("-"," ");
  
  return (
      <main>
      
      <head>
        <title>{locationName3  + " | TheCodeCups is the power of custom software on rental basis at an incredible price of 4999 "}</title>
        <meta name="description" content={locationName3 +" | TheCodeCups is the power of custom software on rental basis at an incredible price of 4999. Elevate your business with innovative solutions designed for your unique needs."} />
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css"/>
        
        <Script src="js/modernizr.js" />
        <Script src="js/pace.min.js" />
        <Script src="js/jquery-3.2.1.min.js" />
        <Script src="js/plugins.js" />

    {/* <Script src="js/package.js" /> */}

  
      </head>
      
      <body className={inter.className}>
         <div> 
          
      {/* header
        ================================================== */}
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src="images/logo.png" alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav">
          <a href="#0" className="header-nav__close" title="close">
            <span>Close</span>
          </a>
          <div className="header-nav__content">
            <h3 style={{color:'#E3CCAE'}}>Navigation</h3>
            <ul className="header-nav__list">
              <li className="current">
                <a className="smoothscroll" href="#home" title="home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="services">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#works" title="works">
                  Works
                </a>
              </li>
              
              <li>
                <a className="smoothscroll" href="#contact" title="contact">
                  Contact
                </a>
              </li>
            </ul>
            <p>
            Unlock Growth  <br />
              with Custom Software Rental<br />
              at Affordable Prices!<br />
              digital experiences.
            </p>
            <ul className="header-nav__social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* end header-nav__content */}
        </nav>{" "}
        {/* end header-nav */}
        <a className="header-menu-toggle" href="#0">
          <span style={{color:'#E3CCAE'}} className="header-menu-text">Menu</span>
          <span style={{color:'#E3CCAE'}} className="header-menu-icon" />
        </a>
      </header>{" "}
      {/* end s-header */}
      {/* home
        ================================================== */}
      <section
        id="home"
        className="s-home"
        data-parallax="scroll"
        data-image-src="https://giphy.com/embed/qgQUggAC3Pfv687qPC"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center"
      >
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Welcome to  <span style={{color:'white'}}>TheCodeCups</span> {locationName3}</h3>
            <h1>
              Unlock Growth  <br />
              with Custom Software Rental<br />
              at Affordable Prices!<br />
              digital experiences.
            </h1>
            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                Start a Project
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                More About Us
              </a>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>{" "}
        {/* end home-content */}
        <ul className="home-social">
          <li>
            <a href="#0">
              <i className="fa fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>Twiiter</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-behance" aria-hidden="true" />
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-dribbble" aria-hidden="true" />
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
        {/* end home-social */}
      </section>{" "}
      {/* end s-home */}
      {/* about
        ================================================== */}
      <section id="about" className="s-about">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead subhead--dark">Hello There</h3>
            <h1 className="display-1 display-1--light">We Are <span style={{color:'white'}}>TheCodeCups</span></h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row about-desc" data-aos="fade-up">
          <div className="col-full">
            <p style={{color:'#E3CCAE'}}>
            {"At Codecups, we pride ourselves on being expert software developers, capable of crafting top-notch solutions tailored to your unique needs. With a passion for innovation and cutting-edge technologies, we are committed to transforming businesses and empowering them to reach new heights."}<br />

            {"Our team of dedicated developers possesses a wealth of experience across various industries, allowing us to understand the complexities and demands of your business. Whether you're a startup, small business, or a large enterprise, we have the expertise to build custom software that aligns perfectly with your objectives."}<br />

            {"From web and mobile applications to enterprise solutions and beyond, our portfolio boasts a diverse range of successful projects. We excel in developing intuitive user interfaces, scalable backend systems, and seamless integrations, ensuring a smooth and delightful experience for both you and your end-users."}<br />
            </p>
          </div>
        </div>{" "}
        {/* end about-desc */}
        <div
          className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
          data-aos="fade-up"
        >
          <div className="col-block stats__col ">
            <div  style={{color:'white'}} className="stats__count">127</div>
            <h5 style={{color:'#E3CCAE'}}>Awards Received</h5>
          </div>
          <div className="col-block stats__col">
            <div  style={{color:'white'}} className="stats__count">1505</div>
            <h5 style={{color:'#E3CCAE'}}>Cups of Coffee</h5>
          </div>
          <div className="col-block stats__col">
            <div  style={{color:'white'}} className="stats__count">109</div>
            <h5 style={{color:'#E3CCAE'}}>Projects Completed</h5>
          </div>
          <div className="col-block stats__col">
            <div  style={{color:'white'}} className="stats__count">102</div>
            <h5 style={{color:'#E3CCAE'}}>Happy Clients</h5>
          </div>
        </div>{" "}
        {/* end about-stats */}
        <div className="about__line" />
      </section>{" "}
      {/* end s-about */}
      {/* services
        ================================================== */}
      <section style={{backgroundColor:'#E3CCAE'}} id="services" className="s-services">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead" style={{color:'#262A56'}}>What We Do</h3>
            <h1 className="display-2">
              We’ve got everything you need to launch and grow your business
            </h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row services-list block-1-2 block-tab-full">
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i style={{color:'#262A56'}} className="icon-paint-brush" />
            </div>
            <div className="service-text">
              <h3 className="h2">Android Development</h3>
              <p>
              {"At The Codecups, we are experts in Android app development. Our skilled team of developers is well-versed in the latest technologies and frameworks to create high-quality and feature-rich Android applications. Whether it's building intuitive user interfaces, integrating powerful functionalities, or ensuring seamless performance across various devices, we take pride in delivering top-notch Android apps that exceed our clients' expectations."}
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i style={{color:'#262A56'}} className="icon-group" />
            </div>
            <div className="service-text">
              <h3 className="h2">iOS Development</h3>
              <p>
                At The Codecups, we excel in iOS app development. Our dedicated team of developers is proficient in Swift and Objective-C, the primary languages for iOS app development. With a keen eye for detail and a focus on user experience, we craft elegant and intuitive iOS applications that captivate users and drive engagement.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i style={{color:'#262A56'}} className="icon-megaphone" />
            </div>
            <div className="service-text">
              <h3 className="h2">AR/VR Developments</h3>
              <p>
              we are pioneers in AR/VR development, unlocking the potential of Augmented Reality (AR) and Virtual Reality (VR) technologies to revolutionize user experiences. Our skilled team of developers and designers harness the power of AR/VR to create immersive and interactive solutions across various industries.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i style={{color:'#262A56'}} className="icon-earth" />
            </div>
            <div className="service-text">
              <h3 className="h2">Block Chain</h3>
              <p>
              we are at the forefront of blockchain development, harnessing the power of this transformative technology to build secure, transparent, and decentralized solutions. Our team of blockchain experts specializes in developing smart contracts, decentralized applications (DApps), and custom blockchain networks.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i style={{color:'#262A56'}} className="icon-cube" />
            </div>
            <div className="service-text">
              <h3 className="h2">IOTs</h3>
              <p>
                we specialize in Internet of Things (IoT) development, crafting innovative and cutting-edge solutions for various industries. Our skilled team of IoT experts leverages the latest technologies and protocols to create smart and interconnected ecosystems.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i style={{color:'#262A56'}} className="icon-lego-block" />
            </div>
            <div className="service-text">
              <h3 className="h2">VPS Clouds</h3>
              <p>
               we prioritize safety and efficiency in DevOps processes by leveraging VPS (Virtual Private Server) cloud solutions. Our DevOps experts utilize VPS cloud infrastructure to ensure secure and scalable environments for development, testing, and deployment.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end services-list */}
      </section>{" "}
      {/* end s-services */}
      {/* works
        ================================================== */}


      {/* Work Section */}


      {/* end s-works */}
      {/* clients
        ================================================== */}
     
      {/* end s-clients */}
      {/* contact
        ================================================== */}
      <section id="contact" className="s-contact">
        <div className="overlay" />
        <div className="contact__line" />
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 style={{color:'#E3CCAE'}} className="subhead">Contact Us</h3>
            <h1 className="display-2 display-2--light">
              Reach out for a new project or just say hello
            </h1>
          </div>
        </div>
        <div className="row contact-content" data-aos="fade-up">
          <div className="contact-primary">
            <h3 className="h6">Send Us A Message</h3>
            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
              noValidate="novalidate"
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    defaultValue=""
                    minLength={2}
                    required=""
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    defaultValue=""
                    required=""
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    defaultValue=""
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Your Message"
                    rows={10}
                    cols={50}
                    required=""
                    aria-required="true"
                    className="full-width"
                    defaultValue={""}
                  />
                </div>
                <div className="form-field">
                  <button style={{backgroundColor:'#E3CCAE',borderColor:'#E3CCAE',color:'black'}} className="full-width btn--primary">Submit</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {/* contact-warning */}
            <div className="message-warning">
              Something went wrong. Please try again.
            </div>
            {/* contact-success */}
            <div className="message-success">
              Your message was sent, thank you!
              <br />
            </div>
          </div>{" "}
          {/* end contact-primary */}
          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
              <div className="cinfo">
                <h5 style={{color:'#E3CCAE'}}>Where to Find Us</h5>
                <p>
                  246,floor 4
                  <br />
                  CYBERHUB,gurugram
                  <br />
                  122008 IN
                </p>
              </div>
              <div className="cinfo">
                <h5 style={{color:'#E3CCAE'}}>Email Us At</h5>
                <p>
                  sales@thecodecups.web.app
                  <br />
                  info@thecodecups.web.app
                </p>
              </div>
              <div className="cinfo">
                <h5 style={{color:'#E3CCAE'}}>Call Us At</h5>
                <p>
                  Phone: (+91) 8709 476 348
                  <br />
                  Mobile: (+91) 878 936 4071
                  <br />
                  Fax: (+91) 878 903
                </p>
              </div>
              <ul className="contact-social">
                <li>
                  <a href="#">
                    <i style={{color:'#E3CCAE'}} className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i style={{color:'#E3CCAE'}} className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i style={{color:'#E3CCAE'}} className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i style={{color:'#E3CCAE'}} className="fa fa-behance" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i style={{color:'#E3CCAE'}} className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
              </ul>{" "}
              {/* end contact-social */}
            </div>{" "}
            {/* end contact-info */}
          </div>{" "}
          {/* end contact-secondary */}
        </div>{" "}
        {/* end contact-content */}
      </section>{" "}
      {/* end s-contact */}
      {/* footer
        ================================================== */}
      <footer>
        <div className="row footer-main">
          <div className="col-six tab-full left footer-desc">
            <div className="footer-logo" />
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
            egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan
            tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </div>
          <div className="col-six tab-full right footer-subscribe">
            <h4 style={{color:'#E3CCAE'}}>Get Notified</h4>
            <p>
              Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut
              non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto
              porro.
            </p>
            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate="true">
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="email"
                  id="mc-email"
                  placeholder="Email Address"
                  required=""
                />
                <input type="submit" name="subscribe" style={{backgroundColor:'#E3CCAE',color:'black'}} defaultValue="Subscribe" />
                <label htmlFor="mc-email" className="subscribe-message" />
              </form>
            </div>
          </div>
        </div>{" "}
        {/* end footer-main */}
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright TheCodeCups 2023</span>
              <span>
                Site Template by <a href="#">TheCodeCups</a>
              </span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="tel:+918709476349">
                <i className="icon-phone" style={{color:'#E3CCAE'}} aria-hidden="true"  />
              </a>
            </div>
          </div>
        </div>{" "}
        {/* end footer-bottom */}
      </footer>{" "}
      {/* end footer */}
      {/* photoswipe background
        ================================================== */}
      <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />{" "}
              <button className="pswp__button pswp__button--share" title="Share" />{" "}
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />{" "}
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />{" "}
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end photoSwipe background */}
      {/* preloader
        ================================================== */}
      {/* <div id="preloader">
        <div id="loader">
          <div className="line-scale-pulse-out">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div> */}
    </div>
      
    
    <Script src="../js/main.js" />
    </body>
  </main>
    
   
  )
}
