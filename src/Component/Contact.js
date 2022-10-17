import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row" style={{ minHeight: '630px' }}>
                        <div className="col-lg-6 aboutMe flex-row">
                            <a href="#"><i className="fa-brands fa fa-square-github "></i></a>
                            <a href="#"><i className="fa-brands fa fa-square-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa fa-square-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa fa-linkedin"></i></a>
                        </div>
                        <div className="col-md-6 text-center aboutMe flex-column">
                            <a href="https://wa.me/919149237288" target="_blank" className="btn btn-dark  text-uppercase px-3 my-1" style={{ fontSize: "17px" }}>Let's Chat &nbsp; <i className="fa-solid text-success fa-paper-plane"></i></a>
                            <a href="https://auth.geeksforgeeks.org/user/pradeep2000rawat/practice" target="_blank" className="btn btn-success  text-uppercase px-3 my-1" style={{ fontSize: "17px" }}>GFG PROFILE &nbsp;<i className="fa-sharp text-white fa-solid fa-code"></i></a>
                            <a href="https://leetcode.com/pradeep55/" target="_blank" className="btn btn-dark  text-uppercase px-3 my-1" style={{ fontSize: "17px" }}>LEETCODE PROFILE &nbsp; <i className="fa-sharp text-warning fa-solid fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
