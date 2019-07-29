import React from 'react';

const About = () =>{
  return(
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div className="w-100">
      <h1 className="mb-0">Mbuso
        <span className="text-primary">Nkabinde</span>
      </h1>
      <div className="subheading mb-5"> (081) 829-1226 ·
        <a href="mailto:collen.nkabinde@gmail.com">collen.nkabinde@gmail.com</a>
      </div>
      <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/mbuso-nkabinde-48905790/">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/alusru">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </section>
)

}


export default About;
