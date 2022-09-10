import React from 'react';
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {BiHome} from "react-icons/bi"
import {BiEnvelope} from "react-icons/bi"
import {FaPhoneAlt} from "react-icons/fa"
import {BiPrinter} from "react-icons/bi"



function Footer() {
    return (
        <><head>
            <link rel="stylesheet" href="boxicons.min.css" />
        </head><body>
                <div className="my-5" name="footer">
                    <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: "#ECEFF1" }}>
                        <section className="p-4 text-white" style={{ backgroundColor: "#21D192" }}>
                            <div className="logos">
                                <a href="#/" className="me-4">
                                    <FaFacebookF style={{ color: "rgb(255, 255, 255)"}}  />
                                </a>
                                <a href="#/" className="me-4">
                                    <FaTwitter style={{ color: "rgb(255, 255, 255)"}}  />
                                </a>
                                <a href="#/" className="me-4">
                                    <FaGoogle style={{ color: "rgb(255, 255, 255)"}}  />
                                </a>
                                <a href="#/" className="me-4">
                                    <FaInstagram style={{ color: "rgb(255, 255, 255)"}}  />
                                </a>
                                <a href="#/" className="me-4">
                                    <FaLinkedinIn style={{ color: "rgb(255, 255, 255)"}}  />
                                </a>
                                <a href="#/" className="me-4">
                                    <FaGithub style={{ color: "rgb(255, 255, 255)"}}  />
                                </a>
                            </div>
                        </section>

                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold">Tuitor</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px; background-color: #7c4dff; height: 2px" }} />
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos magni repellat odio dolorem, optio minus voluptatibus, quaerat sint quod assumenda qui velit tempore et architecto vel! Unde totam ipsum veniam!
                                        </p>
                                    </div>

                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" name='Zaza'>
                                        <h6 className="text-uppercase fw-bold">For customers</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px; backgroundColor: #7c4dff; height: 2px; textDecoration: none" }} />
                                        <p>
                                            <a href="#!" className="text-dark">Find a professional</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">How it works</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">Login</a>
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px; backgroundColor: #7c4dff; height: 2px" }} />
                                        <p>
                                            <a href="#!" className="text-dark">Your Account</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">Become a professional</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">Mobile App</a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">Help</a>
                                        </p>
                                    </div>
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <h6 className="text-uppercase fw-bold">Contact</h6>
                                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px; backgroundColor: #7c4dff; height: 2px" }} />
                                        <p className="info">
                                            <BiHome style={{  marginRight: "15px" }}  /> Accra,GHANA</p>
                                        <p className="info">
                                            <BiEnvelope style={{  marginRight: "15px" }} /> info@example.com</p>
                                        <p className="info">
                                            <FaPhoneAlt style={{  marginRight: "15px" }} /> + 01 234 567 88</p>
                                        <p className="info">
                                            <BiPrinter style={{  marginRight: "15px" }} /> + 01 234 567 89</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                            © 2022 Copyright
                        </div>
                    </footer>
                </div>
                <script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
            </body></>
    );
}



export default Footer;