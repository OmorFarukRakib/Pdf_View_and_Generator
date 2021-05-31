import React, { useState, useEffect } from "react";
import { Worker, Viewer, OpenFile } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { getFilePlugin, RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";

import { Button, Input, Container, Typography } from "@material-ui/core";
// Import the main component
//import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import styles
import "@react-pdf-viewer/toolbar/lib/styles/index.css";

const App = () => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const toolbarPluginInstance = toolbarPlugin({
    fileNameGenerator: (file: OpenFile) => {
      // `file.name` is the URL of opened file
      const fileName = pdfFileName;
      return `a-copy-of-${fileName}`;
    },
  });
  const { Toolbar } = toolbarPluginInstance;
  //const getFilePluginInstance = getFilePlugin();
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: (file: OpenFile) => {
      // `file.name` is the URL of opened file
      const fileName = pdfFileName;
      return `a-copy-of-${fileName}`;
    },
  });
  const { Download } = getFilePluginInstance;
  const {
    CurrentPageInput,
    GoToFirstPageButton,
    GoToLastPageButton,
    GoToNextPageButton,
    GoToPreviousPage,
  } = pageNavigationPluginInstance;
  const [pdfFileValue, setpdfFileValue] = useState(null);
  const [pdfFileName, setpdfFileName] = useState("");

  const onChangePdfFileHandler = (e) => {
    const fileName = e.target.files[0].name;
    setpdfFileName(fileName);
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
      </Container>
      {pdfFileValue ? (
        <Container aligh="center">
          {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"> */}
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
                width: "60vw",
              }}
            >
              {/* <div style={{ padding: "0px 2px" }}>
                <GoToFirstPageButton />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToPreviousPage />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <CurrentPageInput />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToNextPageButton />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToLastPageButton />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Download>
                  {(props: RenderDownloadProps) => (
                    <button
                      style={{
                        backgroundColor: "#357edd",
                        border: "none",
                        borderRadius: "4px",
                        color: "#ffffff",
                        cursor: "pointer",
                        padding: "8px",
                      }}
                      onClick={props.onClick}
                    >
                      Download
                    </button>
                  )}
                </Download>
              </div> */}
              <Toolbar />
            </div>

            <div
              style={{
                border: "1px solid rgba(0, 0, 0, 0.3)",
                margin: "auto",
                height: "80vh",
                width: "60vw",
              }}
            >
              {/* <Viewer fileUrl="/assets/CV_of_Tanvir_Rahman.pdf" /> */}
              <Viewer
                fileUrl={pdfFileValue}
                plugins={[
                  pageNavigationPluginInstance,
                  getFilePluginInstance,
                  toolbarPluginInstance,
                ]}
              />
            </div>
          </Worker>
        </Container>
      ) : null}
    </>
  );
};

export default App;
