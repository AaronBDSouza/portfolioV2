import React, { useMemo, useState } from 'react';
import './pdfViewer.scss';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfViewer({loadPdf, closePdf}) {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [displayPdf, setDisplayPdf] = useState(false);

  var filePath = process.env.REACT_APP_PUBLIC_URL + '/assets/cv/CV-AaronBDSouza.pdf';

  const convertPdfFile = async(filePath) => {
    var result = null;
    var file_object = await fetch(filePath).then(r => r.blob(filePath))
    .then(blob => {
        var file_name = 'CV-AaronBDSouza.pdf';
        var file_object = new File([blob], file_name, {type: 'application/pdf'});
        return file_object;
    });

    let reader = new FileReader();
    await reader.readAsDataURL(file_object);
    reader.onload = (e) => {
      result = e.target.result;
      setPdfFile(result);
    }

    setViewPdf(pdfFile);
    return result;
  }
  
  useMemo(() => {
    convertPdfFile(filePath);
    setTimeout(() => {
      setDisplayPdf(true);
    }, 1000);
  }, [pdfFile]);

  const newplugin = defaultLayoutPlugin();

  return (
    <div>
      <div className="pdfControlContainer">
        <button type="button" className="closePDFButton" onClick={() => {setDisplayPdf(false); closePdf(true)}}>X</button>
      </div>
      <div className="pdf-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            {displayPdf && <>
              <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
            </>}
          </Worker>
        </div>
    </div>

  )
}