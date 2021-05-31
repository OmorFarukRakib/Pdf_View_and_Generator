import React, { useState, useEffect } from "react";
import { Worker, Viewer, OpenFile } from "@react-pdf-viewer/core";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";

import { Button, Input, Container, Typography } from "@material-ui/core";
// Import the main component
//import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

const ShowPdf = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const [pdfFileValue, setpdfFileValue] = useState(null);

  const onChangePdfFileHandler = (e) => {
    const files = e.target.files;
    files.length > 0 && setpdfFileValue(URL.createObjectURL(files[0]));
  };

  return (
    <>
      <Container align="center">
        <Typography variant="h2" align="center">
          PDF viewer
        </Typography>
        <input
          accept=".pdf"
          onChange={onChangePdfFileHandler}
          style={{ display: "none" }}
          id="pdfFileInput"
          multiple
          type="file"
        />
        <label htmlFor="pdfFileInput">
          <Button variant="contained" component="span" color="primary">
            Upload
          </Button>
        </label>
        <br />
        <br />
        {pdfFileValue ? (
          <Container aligh="center">
            <Worker workerUrl="./assets/pdf.worker.min.js">
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "#eeeeee",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                  padding: "4px",
                  width: "40vw",
                }}
              >
                <Toolbar />
              </div>

              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  margin: "auto",
                  height: "80vh",
                  width: "40vw",
                }}
              >
                {/* <Viewer fileUrl="/assets/CV_of_Tanvir_Rahman.pdf" /> */}
                <Viewer
                  fileUrl={pdfFileValue}
                  plugins={[toolbarPluginInstance]}
                />
              </div>
            </Worker>
          </Container>
        ) : null}
      </Container>
    </>
  );
};

export default ShowPdf;
