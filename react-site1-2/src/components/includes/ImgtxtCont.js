import React from 'react'

// const imgconttxt = [
//   {
//     text1: "이미지/텍스트 유형",
//     text2: "유용한 사이트",
//     text3: "살펴보기",
//     text4: "사이트 제작에 있어 이미지와 텍스트를 혼합해서 사용하는 경우가 많다.",
//     text5: "기본 레이아웃은 동일하기 때문에 이미지나 배치에 따라서 느낌은 얼마든지 다르게 표현할 수 있다.",
//     text6: "Gmarket Sans 50px, Medium",
//     text7: "NEXON Lv1 Gothic 18px (153%)",
//     text8: "더 많은 유형 살펴보기",
//     id: 0
//   }
// ]

function ImgcontInfo({id, text1, text2, text3, text4, text5, text6, text7, text8}){
  return (
    <>
        <div className="txt">
          <span className="small">{text1}</span>
          <h3 className="title">
            {text2}
            <br />
            {text3}
          </h3>
          <p className="desc">
            {text4}
            <br />
            {text5}
            <br />
            {text6}
            <br />
            {text7}
          </p>
          <a href="/" className="btn">
            {text8}
          </a>
        </div>
     </>
  )
}


function ImgtxtCont({imgconttxt}) {
  return (
    <section
      id="imgTextType"
      className= "imgText__wrap section nexon gray"
    >
      <h2 className="ir_so">이미지 텍스트 영역</h2>
      <div className="imgText__inner container">
        {imgconttxt.map((txt) => (
              <ImgcontInfo
                key = {txt.id}
                text1 = {txt.text1}
                text2 = {txt.text2}
                text3 = {txt.text3}
                text4 = {txt.text4}
                text5 = {txt.text5}
                text6 = {txt.text6}
                text7 = {txt.text7}
                text8 = {txt.text8}
              />
            ))}
        <div className="img bg1"></div>
        <div className="img bg2"></div>
      </div>
    </section>
  )
}

export default ImgtxtCont