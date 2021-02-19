import React from 'react'
import logo from '../../images/logo1.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane,faLocationArrow,faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
        return <div className="footer-clean">
                <footer>
                    <div className="container col-12 col-md-11">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Services</h3>
                                <ul>

                                    <li className="aradhna_footerli"><Link to="/petMate">Pet Adoption</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Pet Grooming</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Vaccination</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Dog Traning</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Pet Daycare</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Pet Sitter</Link></li>
                                    <li className="aradhna_footerli"><Link to="/petMate">Veterinary Help</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li className="aradhna_footerli"><Link to="/">Home</Link></li>
                                    <li className="aradhna_footerli"><Link to="/shopping">Shopping</Link></li>
                                    <li className="aradhna_footerli"><Link to="/services">Services</Link></li>
                                    <li className="aradhna_footerli"><Link to="/community">Community</Link></li>
                                    <li className="aradhna_footerli"><Link to="/about us">About us</Link></li>
                                    <li className="aradhna_footerli"><Link to="/contact">Contact</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-3 item col-lg-2">
                                <h3>Have a question</h3>
                                <ul>
                                    <li className="aradhna_footerli"><Link to="/featured">
                                    <FontAwesomeIcon icon={faLocationArrow} className=" fa-lg" style={{color:"#ffb116"}}/>{' '}
                                    201,1-5-600/1, SVS Heights, New Maruthi Nagar, Chaitanyapuri, Hyderabad, Telangana - 500035
                                    </Link></li>
                                    <li className="aradhna_footerli"><Link to="/featured">
                                    <FontAwesomeIcon icon={faPhone} className="fa-lg" style={{color:"#ffb116"}}/>{' '}
                                        +2 392 3929 210
                                    </Link></li>
                                    <li className="aradhna_footerli"><Link to=""></Link></li>
                                    <li className="aradhna_footerli"><Link to="/roadmaps">
                                    <FontAwesomeIcon icon={faPaperPlane} className="fa-lg" style={{color:"#ffb116"}}/>{' '}
                                        support@petswonder.in
                                    </Link></li>
                                </ul>
                            </div>

                            <div className="col-sm-4 col-md-4  col-lg-3 item social">
                            
                               <a href="https://www.facebook.com/petswonder.in" target="_blank" > <i class="fab fa-facebook-square"></i> </a>
                               <a href="https://www.instagram.com/petswonder_official/" target="_blank" > <i class="fab fa-instagram-square"></i> </a>
                               <a href="https://www.linkedin.com/company/petswonder/?viewAsMember=true" target="_blank" > <i class="fab fa-twitter-square"></i> </a>
                               <a href="https://twitter.com/PetsWonder1" target="_blank" > <i class="fab fa-linkedin-square"></i> </a>
                                <a href="https://play.google.com/store" target="_blank" > <i class="fab fa-google-play"></i></a>

                                <p className="copyright"> <img src={logo} id="aradhna_footer_logo" /> </p>
                                <p className="copyright" style={{fontSize:"16px"}}>
                                Far far away, behind the word mountains, far from the countries.                             
                                </p>
                            </div>
                            
                                {/* <p className="copyright">Terms &amp; Conditions</p>
                                <p className="copyright">Privacy Policy</p> */}
                            
                            
                        </div>
                    </div>
                </footer>
            </div>;
    
}

export default Footer
