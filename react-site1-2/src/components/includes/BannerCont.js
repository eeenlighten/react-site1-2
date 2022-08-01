import React from 'react'

function BannerInfo({id, text1, text2, text3, text4, text5}){
  return (
    <>
      <h2 className="ir_so">{text1}</h2>
      <div className="banner__inner">
        <h3 className='banner__title'>{text2}</h3>
        <p className='banner__desc'>
        {text3}
          <a href="/">{text4}</a>
        </p>
      <span className='banner__sub'>{text5}</span>
     </div>
     </>
  )
}

function BannerCont({bannertxt}) {
    return (
        <section id="bannerType" className="banner__wrap section gmarket">
          {bannertxt.map((txt) => (
            <BannerInfo
              key = {txt.id}
              text1 = {txt.text1}
              text2 = {txt.text2}
              text3 = {txt.text3}
              text4 = {txt.text4}
              text5 = {txt.text5}
            />
          ))}
        </section>
    )
}

export default BannerCont