import React from 'react';

const Education = () =>{
  return(
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Tshwane University of Technology</h3>
            <div className="subheading mb-3">Diploma Web and Multimedia</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: 3.23</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">January 2011 - December 2014</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
            <h3 className="mb-0">Petit High School</h3>
            <div className="subheading mb-3">Grade 12 Matric</div>
            <p>GPA: 3.56</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">December 2010</span>
          </div>
        </div>

      </div>
    </section>
)

}


export default Education;
