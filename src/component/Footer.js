import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Regan</span>CODES</h3>
                            <p>Hey, I'm Regan Thapa, a student in Kathmandu with big dreams of being a remote coder. I'm deep into computer science, loving the tech world's excitement, and always eager to learn new stuff.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i>+977 9812340673</p>
                            <p><i class="fa-solid fa-envelope"></i> reganthapa011@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Kathmandu, Nepal.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By ReganThapa</p>
            </div>
        </>
    )
}

export default Footer