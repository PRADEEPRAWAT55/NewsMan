import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5" >
                    <h4 className="text-primary text-center pt-3 pb-3 h3 text-uppercase" style={{ textShadow: '0px 1px 2px black' }}>About Me</h4>

                    <div className="row message-div" style={{ minHeight: '520px' }}>
                        <div className="col-md-6  aboutMe flex-column">
                            <p className="p">
                                Hello, my name is Pradeep Singh Rawat And I'm From Tehri Garhwal and currently doing my graduation form graphic era hill university in Computer Science & engineering, and also completed My diploma In Information Technology.<br/><br/>
                                I have completed 2 Internships in web Development and have An experience Of 8 months in web development.<br/>
                                I'm Passionate about web development, and Want To work As Web Developer in a good repetitive company where I can enhance my Knowledge.
                            </p>
                            <p className="p"><span className="text-primary">NOTE: &nbsp;</span> Available For Freelance</p>

                        </div>
                        <div className="col-md-6 text-center aboutMe">
                            <a href="./Resume/resume.pdf" className="btn btn-outline-dark resume-btn" download>Download Resume &nbsp; <i className="fa-sharp fa-solid fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
