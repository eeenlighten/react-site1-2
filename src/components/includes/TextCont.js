import React from 'react'

function Textinfo({title, desc}){
  return (
    <>
        <div className="text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
  </>
  )
}

function Textinfo2({title, text}){
  return (
    <>
      <h2>{title}</h2>
      <p>{text}</p>
  </>
  )
}

function TextCont({texttxt, texttxt2}) {
  return (
    <section
      id="textType"
      className="text__wrap section nexon"
    >
        {texttxt2.map((txt) => (
                <Textinfo2
                desc={txt.desc}
                title={txt.title}
                key={txt.id}/>
              ))}   
      
      <div className="text__inner container">
        {texttxt.map((txt) => (
                <Textinfo 
                desc={txt.desc}
                title={txt.title}
                key={txt.id}/>
              ))}   
      </div>
    </section>
  )
}

export default TextCont