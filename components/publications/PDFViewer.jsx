"use client";

import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const maxWidth = 900;

export default function PDFViewer({ file, width, setIsLoading }) {
  const [numPages, setNumPages] = useState();
  const pdfWidth = Math.max(250, Math.min(width * 0.75, maxWidth));
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setIsLoading(false);
  }

  return (
    <div>
      <div>
        <div>
          <Document
            className="flex flex-col justify-center items-center"
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            loading={" "}
          >
            {Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pdfWidth}
                loading={" "}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
