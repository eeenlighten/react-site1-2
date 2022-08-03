import { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ImgtxtCont from '../includes/ImgtxtCont';

function Imgtxt() {
  const [imgconttxt, setImgcontTxt] = useState([]);

  useEffect(() => {
    const requestOption = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/imgtxt.json",
    requestOption
  )
    .then((response) => response.json())
    .then((result) => setImgcontTxt(result.data.imgconttxt))
    .then((error) => console.log("error", error));
}, []);

  return (
    <>
      <Contents>
        <ImgtxtCont imgconttxt={imgconttxt} />
      </Contents>
    </>
  )
}

export default Imgtxt;