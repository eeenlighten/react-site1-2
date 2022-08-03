import React, { useState, useEffect } from 'react';
import Contents from '../layout/Contents';
import BannerCont from '../includes/BannerCont';

function Banner() {
  const [bannertxt, setBanner] = useState([]);

  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/banner.json",
      requestOption
    )
    .then((reponse) => reponse.json())
    .then((result) => setBanner(result.data.bannertxt))
    .then((error) => console.log("error", error));
  }, [])


  return (
    <>
      <Contents>
        <BannerCont bannertxt={bannertxt} />
      </Contents>
    </>
  );
}

export default Banner;
