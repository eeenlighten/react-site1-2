import { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import SliderCont from '../includes/SliderCont';

function Slider() {
  const [slidetxt, setSliderTxt] = useState([]);

  useEffect(() => {
    const requestOption = {
    method: "GET",
    redirect: "follow",
  };
  fetch(
    "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/slider.json",
    requestOption
  )
    .then((response) => response.json())
    .then((result) => setSliderTxt(result.data.slidetxt))
    .then((error) => console.log("error", error));
}, []);

const [slidetxt2, setSliderTxt2] = useState([]);

useEffect(() => {
  const requestOption = {
  method: "GET",
  redirect: "follow",
};
fetch(
  "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/slider.json",
  requestOption
)
  .then((response) => response.json())
  .then((result) => setSliderTxt2(result.data.slidetxt2))
  .then((error) => console.log("error", error));
}, []);

const [textInfor, setHeaderTxt] = useState([]);

useEffect(() => {
  const requestOption = {
  method: "GET",
  redirect: "follow",
};
fetch(
  "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/header.json",
  requestOption
)
  .then((response) => response.json())
  .then((result) => setHeaderTxt(result.data.textInfor))
  .then((error) => console.log("error", error));
}, []);

  return (
    <>
      <Header textInfor={textInfor} />
      <Contents>
        <SliderCont slidetxt={slidetxt} slidetxt2={slidetxt2} />
      </Contents>
    </>
  )
}

export default Slider;
