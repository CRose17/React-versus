import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5 className="text-light">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home' className="text-warning">Home</Link></li>
                            {/* <li><Link to='/directory' className="text-warning">Directory</Link></li> */}
                            <li><Link to='/aboutus' className="text-warning">About</Link></li>
                            <li><Link to='/schedule' className="text-warning">Schedule</Link></li>
                            <li><Link to='/pricing' className="text-warning">Pricing</Link></li>
                            <li><Link to='/contactus' className="text-warning">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text center">
                        <h5 className="text-light">Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link text-warning" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link text-warning" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> obstacles@versus.com</a>
                    </div>
                </div>
            </div>            
        </footer>
    );
}

export default Footer;