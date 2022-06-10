import React from "react";
import Logo from '../assets/images/logo.png';
import Navbars from "./Navbars";
import { useEffect, useState } from "react";



function Header() {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        
      } else {
        header.classList.remove("sticky");
        
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div>
      <header id="myHeader">
            <div className="full-width top-tel-row">
                <div className="fix-wrap">
                    <div className="row">
                        <div className="col-12">
                            <a className="tel-top" href="tel:+91 9873440363" title="(+91) 9873440363">(+91) 9873440363</a> 
                            <a className="top-email" href="mailto:sales@techinventive.com">sales@techinventive.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-width header-nav">
                <div className="fix-wrap">
                    <Navbars />
                </div>
            </div>
      </header>
      
    </div>
  );
}

export default Header;
