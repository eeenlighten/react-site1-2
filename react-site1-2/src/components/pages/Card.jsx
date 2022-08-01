import { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import CardCont from '../includes/CardCont';

function Card() {
  const [cardtxt, setCardTxt] = useState([]);

  useEffect(() => {
    const requestOption = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/card.json",
    requestOption
  )
    .then((response) => response.json())
    .then((result) => setCardTxt(result.data.cardtxt))
    .then((error) => console.log("error", error));
}, []);

const [cardtxt2, setCardTxt2] = useState([]);

useEffect(() => {
  const requestOption = {
  method: "GET",
  redirect: "follow",
};
fetch(
  "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/card.json",
  requestOption
)
  .then((response) => response.json())
  .then((result) => setCardTxt2(result.data.cardtxt2))
  .then((error) => console.log("error", error));
}, []);

  return (
    <>
      <Contents>
        <CardCont cardtxt={cardtxt} cardtxt2={cardtxt2}/>
      </Contents>
    </>
  )
}

export default Card;
