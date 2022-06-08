import * as React from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const CertificateDocument = ({certificateText,certificateName}) => {
  const pdfExportComponent = React.useRef(null);
  const [text,setText]=React.useState(certificateText)
  const [name,setName]=React.useState(certificateName)

  const exportPDFWithMethod = () => {
    let element = document.querySelector(".k-grid") || document.body;
    savePDF(element, {
      paperSize: "A4",
    });
  };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <div className="example-config">
        <div className="flex w-full items-center justify-end">
        <button
          className="submit-button-black"
          onClick={exportPDFWithComponent}
        >
          Export Certificate
        </button>
        </div>

        {/* <button
          className="submit-button-black"
          onClick={exportPDFWithMethod}
        >
          Export Certificate
        </button> */}
      </div>

      <PDFExport ref={pdfExportComponent} paperSize="A4" className="flex flex-col items-center justify-center">
        <div className="p-5">
          <h1 className="font-bold text-lg text-center pb-3">{name}</h1>
          <p>{text}</p>
        </div>
      </PDFExport>
    </div>
  );
};

export default CertificateDocument