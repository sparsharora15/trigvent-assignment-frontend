import React, { useState, useEffect } from "react";
import { getTableData } from "../../Config/API";
import GetRule from "../../helper/getRule";
const About = () => {
  const [textData, setTextData] = useState([]);
  const [fontSize, setFontSize] = useState();
  async function getData() {
    const response = await getTableData(GetRule("text").rule);
    if (response.status === 200) {
      setTextData(response.data);
      //   console.log(response.data);
      const fontSize = GetRule("text");
      setFontSize(fontSize.params);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-5 text-justify">
      {textData.map((text) => {
        console.log(text);
        return <p style={fontSize}>{text.content}</p>;
      })}
    </div>
  );
};

export default About;

//

// const DataTable = () => {
//
