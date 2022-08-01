import { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ImageCont from '../includes/ImageCont';

function Image() {
  const [imgtxt, setImgTxt] = useState([]);

  useEffect(() => {
    const requestOption = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/img.json",
    requestOption
  )
    .then((response) => response.json())
    .then((result) => setImgTxt(result.data.imgtxt))
    .then((error) => console.log("error", error));
}, []);

const [imgtxt2, setImgTxt2] = useState([]);

useEffect(() => {
  const requestOption = {
  method: "GET",
  redirect: "follow",
};
fetch(
  "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/img.json",
  requestOption
)
  .then((response) => response.json())
  .then((result) => setImgTxt2(result.data.imgtxt2))
  .then((error) => console.log("error", error));
}, []);

  return (
    <>
      <Contents>
        <ImageCont imgtxt={imgtxt} imgtxt2={imgtxt2} />
      </Contents>
    </>
  )
}

export default Image;