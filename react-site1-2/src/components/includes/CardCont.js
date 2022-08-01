import React from 'react'

function Cardinfo2({title, text, text2}){
  return (
    <>
      <h2>{title}</h2>
      <p>
        {text}
        <br />
        {text2}
      </p>
    </>
  )
}

function Cardinfo({title, desc, desc2, image}){
  return (
    <>
      <article className="card">
        <figure className="card__header">
          <img className="img" src={image} alt={title} />
        </figure>
        <div className="card__body">
          <h3 className="title">{title}</h3>
          <p className="desc">
            {desc}
          </p>
          <a className="btn" href="/">
            {desc2}
            <svg
              width="52"
              height="8"
              viewBox="0 0 52 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
              d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
              fill="#5B5B5B"
              />
            </svg>
          </a>
        </div>
      </article> 
  </>
  )
}


function CardCont({cardtxt, cardtxt2}) {
    return (
        <section
          id="cardType"
          className="card__wrap section nexon"
        >
              {cardtxt2.map((txt) => (
                <Cardinfo2 
                  key={txt.id}
                  title={txt.title}
                  text={txt.text}
                  text2={txt.text2}
                />
              ))}
          <div className="card__inner container">
              {cardtxt.map((txt) => (
                <Cardinfo 
                  key={txt.id}
                  title={txt.title}
                  desc={txt.desc}
                  image={txt.image}
                  desc2={txt.desc2}
                />
              ))}
          </div>
        </section>
    )
}

export default CardCont