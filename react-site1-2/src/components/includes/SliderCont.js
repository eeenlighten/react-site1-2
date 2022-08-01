import React from 'react'

function Sliderinfo({text1, text2, text3, text4, text5, text6}){
  return (
    <>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="ir_pm">{text1}</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">{text2}</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">{text3}</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">{text4}</span>
            </a>
            <a href="/" className="play">
              <span className="ir_pm">{text5}</span>
            </a>
            <a href="/" className="stop">
              <span className="ir_pm">{text6}</span>
            </a>
          </div>
    </>
   )
}

function Sliderinfo2({text7, text8, text9, text10, text11, text12}){
  return (
    <>
            <div className="desc">
              <span>{text7}</span>
              <h3>{text8}</h3>
              <p>
              {text9}
                <br /> {text10}
              </p>
              <div className="btn">
                <a href="/" className="white">
                {text11}
                </a>
                <a href="/" className="black">
                {text12}
                </a>
              </div>
            </div>
    </>
   )
}

function SliderCont({slidetxt, slidetxt2}) {
   return (
    <section id="sliderType" className= "slider__wrap nexon">
      <h2 className="ir_so">슬라이드 영역</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
          {slidetxt2.map((txt) => (
                <Sliderinfo2 
                text7={txt.text7} 
                text8={txt.text8} 
                text9={txt.text9} 
                text10={txt.text10} 
                text11={txt.text11} 
                text12={txt.text12} 
                key={txt.id}
                />
              ))} 
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="ir_pm">이전이미지</span>
            </a>
            <a href="/" className="right">
              <span className="ir_pm">다음이미지</span>
            </a>
          </div>
          {slidetxt.map((txt) => (
                <Sliderinfo 
                text1={txt.text1} 
                text2={txt.text2} 
                text3={txt.text3} 
                text4={txt.text4} 
                text5={txt.text5} 
                text6={txt.text6} 
                key={txt.id}
                />
              ))}    
        </div>
      </div>
    </section>
  )
}

export default SliderCont

