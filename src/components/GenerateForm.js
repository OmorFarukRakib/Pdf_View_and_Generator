import React, { useState } from "react";
import { PDFViewer, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
import {
  Typography,
  Container,
  TextField,
  Button,
  CardMedia,
  Card,
} from "@material-ui/core";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import MyDocument from "./GeneratePdf";

const styles = StyleSheet.create({
  pdfView: {
    height: "800px",
    width: "500px",
  },
});

const GenerateForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [photoForPdf, setPhotoForPdf] = useState(null);
  const [dataForPdf, setDataForPdf] = useState(null);
  console.log(photoForPdf);

  const onChangePhotoFileHandler = (e) => {
    const files = e.target.files;
    files.length > 0 && setPhotoForPdf(URL.createObjectURL(files[0]));
    console.log(`Ata img er url-> ${photoForPdf}`);
  };

  const submitFormhandler = () => {
    if (firstName && lastName && email && photoForPdf) {
      let data = {
        firstName,
        lastName,
        email,
        //photoForPdf,
      };
      setDataForPdf(data);
    } else {
      alert("Please Fill up the form");
    }
  };

  return (
    <>
      <Container maxWidth="sm" align="center">
        <Typography variant="h2" align="center">
          PDF Generator
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            required
            style={{ marginRight: "15px" }}
            id="firstName"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <br />
          <br />
          <br />
          <input
            required
            accept="image/*"
            onChange={onChangePhotoFileHandler}
            //style={{ display: "none" }}
            id="photoForPdf"
            multiple
            type="file"
          />
          <br />
          <br />
          <br />
          {photoForPdf ? (
            <img style={{ width: "200px", heigh: "200px" }} src={photoForPdf} />
          ) : null}
          <br />
          <br />
          <Button
            variant="contained"
            //component="span"
            onClick={submitFormhandler}
            color="default"
            startIcon={<CloudUploadIcon />}
          >
            Generate
          </Button>
        </form>
        <br />
        <br />
      </Container>
      {dataForPdf ? (
        <Container align="center" maxWidth="sm">
          <PDFViewer style={styles.pdfView}>
            <MyDocument data={{ firstName, lastName, email, photoForPdf }} />
          </PDFViewer>
          <br />
          <br />
          <PDFDownloadLink
            document={
              <MyDocument data={{ firstName, lastName, email, photoForPdf }} />
            }
            fileName={`Certificate_of_${firstName}.pdf`}
            style={{
              textDecoration: "none",
              padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a",
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF!"
            }
          </PDFDownloadLink>
        </Container>
      ) : null}
    </>
  );
};

export default GenerateForm;

{
  /* <PDFDownloadLink
  document={<MyDocument data={dataForPdf} />}
  fileName={`Certificate_of_${firstName}.pdf`}
  style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
>
  {({ blob, url, loading, error }) =>
    loading ? "Loading document..." : "Download PDF!"
  }
</PDFDownloadLink>; */
}
