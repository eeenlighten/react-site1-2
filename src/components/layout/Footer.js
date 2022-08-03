import React from "react";

function Footerinfo({title, text1, text2, text3, text4, text5}){
  return (
    <>
    <div>
      <h3>{title}</h3>
      <ul>
        <li>
          <a href="/">{text1}</a>
        </li>
        <li>
          <a href="/">{text2}</a>
        </li>
        <li>
          <a href="/">{text3}</a>
        </li>
        <li>
          <a href="/">{text4}</a>
        </li>
        <li>
          <a href="/">{text5}</a>
        </li>        
      </ul>
    </div>
   </>
   )
}

function Footer({footertxt}) {
  return (
    <footer
      id="footerType"
      className="footer__wrap section nexon gray"
    >
      <h2 className="ir_so">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
            {footertxt.map((txt) => (
                  <Footerinfo 
                  title = {txt.title}
                  text1 = {txt.text1}
                  text2 = {txt.text2}
                  text3 = {txt.text3}
                  text4 = {txt.text4}
                  text5 = {txt.text5}
                  key = {txt.text1}
                  />
                ))}      
        </div>
        <address className="footer__right">
          ©2022 webstroyboy. All rights reserved.
        </address>
      </div>
    </footer>
  );
}

export default Footer;
