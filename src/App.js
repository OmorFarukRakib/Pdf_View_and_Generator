import React from "react";
import { Container, Grid } from '@material-ui/core'

import ShowPdf from "./components/ShowPdf";
import GenerateForm from "./components/GenerateForm";

const App = () => {
  return (
    <>
      <Container style={{marginTop: "10px"}}>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <GenerateForm />
          </Grid>
          <Grid item sm={12} md={6}>
            <ShowPdf />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
