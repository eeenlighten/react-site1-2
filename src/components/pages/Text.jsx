import { useEffect, useState } from 'react';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import TextCont from '../includes/TextCont';

function Text() {
    const [texttxt, setText] = useState([]);
  
    useEffect(() => {
      const requestOption = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/text.json",
        requestOption
      )
      .then((reponse) => reponse.json())
      .then((result) => setText(result.data.texttxt))
      .then((error) => console.log("error", error));
    }, []);

    const [texttxt2, setText2] = useState([]);
  
    useEffect(() => {
      const requestOption = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/text.json",
        requestOption
      )
      .then((reponse) => reponse.json())
      .then((result) => setText2(result.data.texttxt2))
      .then((error) => console.log("error", error));
    }, []);

    const [footertxt, setFooter] = useState([]);
  
    useEffect(() => {
      const requestOption = {
        method: "GET",
        redirect: "follow",
      };
      fetch(
        "https://raw.githubusercontent.com/eeenlighten/react1data/main/json/footer.json",
        requestOption
      )
      .then((reponse) => reponse.json())
      .then((result) => setFooter(result.data.footertxt))
      .then((error) => console.log("error", error));
    }, []);    

  return (
    <>
      <Contents>
        <TextCont texttxt={texttxt} texttxt2={texttxt2} />
      </Contents>
      <Footer footertxt={footertxt} />
    </>
  )
}

export default Text;