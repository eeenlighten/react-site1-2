import React from 'react'

// const imgtxt = [
//   {
//   image: "../img/image_bg01.jpg",
//   title: "애교만점 웰시코기",
//   desc1: "제목은 넥슨 풋볼 고딕 폰트입니다.",
//   desc2: "설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
//   text:  "자세히 보기"
//   }, {
//   image: "img/image_bg02.jpg",
//   title: "코카스 파니엘",
//   desc1: "제목은 넥슨 풋볼 고딕 폰트입니다.",
//   desc2: "설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
//   text:  "자세히 보기"
//   }
// ]

// const imgtxt2 = [
//   {
//     title : "포트폴리오가 실력이다.",
//     text : "이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다."
//   }
// ]

  function Imginfo2({title, text}){
    return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
    </>
    )
  }

  function Imginfo({title, text, image, desc1, desc2}){
    return (
    <>
        <article className="image">
          <div className="image__header">
            <figure className="image__figure">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className="image__body">
            <h3 className="image__title">{title}</h3>
            <p className="image__desc">
              {desc1}
              <br />
              {desc2}
            </p>
            <a href="/" className="image__btn">
              {text}
            </a>
          </div>
        </article>
    </>
    )
  }

  function ImageCont({imgtxt, imgtxt2}) {
    return (
      <section
        id="imageType"
        className="image__wrap section nexon"
      >
          {imgtxt2.map((txt) => (
                  <Imginfo2
                  title={txt.title}
                  text={txt.text}
                  key={txt.title}/>
                ))}   
        <div className="image__inner container">
          {imgtxt.map((txt) => (
                  <Imginfo 
                  title={txt.title}
                  text={txt.text}
                  image={txt.image} 
                  desc1={txt.desc1}
                  desc2={txt.desc2}
                  key={txt.title}/>
                ))}   
        </div>
      </section>
    )
  }

export default ImageCont