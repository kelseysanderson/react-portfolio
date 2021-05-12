import React from "react";

function Project() {
  return (
      <section className="about-me-section">
            <div className="container">
                <div className="row d-flex justify-content-around mb-10 h-100" id="about-me-row">
                    <div className="col-12 col-md-5 about-me-box align-self-center" id="resume-box">
                        resume?
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <div className="row">
                            <div className="col-12 about-me-box" id="bio-box">
                                bio
                            </div>
                        </div>
                        <div className="row justify-content-around" id="picture-row">
                            <div className="col-4 about-me-box" >
                                pic1
                            </div>
                            <div className="col-4 about-me-box" >
                                pic2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
}

export default Project;