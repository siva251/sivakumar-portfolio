import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../Assets/Sivakumar_Softwareengineer.pdf";
import { AiOutlineDownload } from "react-icons/ai";

const PdfViewer = () => {
  const [width, setWidth] = useState(window.innerWidth);
  //   const pdfFile = "../"; // Replace with the path to your PDF file

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleDownload = () => {
    // Trigger the download
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Sivakumar_resume.pdf"; // The name of the downloaded file
    link.click();
  };

  return (
    <>
      <div className="justifycontent_center downloadButton">
        <div className="">
          <button onClick={handleDownload} className="downloadButtonName">
            <AiOutlineDownload style={{ paddingRight: "5%", fontSize: "25" }} />
            Download CV
          </button>
        </div>
        <Document file={pdfFile} className="resume">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>
    </>
  );
};

export default PdfViewer;
