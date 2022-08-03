import React from "react";

  function Info({text}){
    return (
    <>
       <li>
        <a href="/">{text}</a>
      </li>
    </>
    )
  }

function Header({textInfor}) {
  return (
    <header id="headerType" className="nexon">
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="/">
            WEB <em>site</em>
          </a>
        </h1>
        <nav className="header__menu">
          <h2 className="ir_so">메인 메뉴</h2>
          <ul>
          {textInfor.map((txt) => (
                <Info text={txt.text} key={txt.text}/>
              ))}      
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
      </div>
    </header>
  );
}

export default Header;