import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";

import signature from "../signature.png";
import certificateBackGround from "../certificateBackGround.png";

// Create styles
const styles = StyleSheet.create({
  document: {
    width: "80vw",
    backgroundImage: 'url("../certificateBackGround.png")',
    height: "80vh",
  },
  page: {
    flexDirection: "column",
    backgroundImage: 'url("../certificateBackGround.png")',
    height: "500px",
  },
  header: {
    marginTop: "10px",
    padding: 5,
  },
  name: {
    marginTop: "1px",
    padding: "15px",
  },
  headerText: {
    fontSize: "50px",
    textAlign: "center",
  },
  bodySection: {
    marginTop: "5px",
    padding: "15px",
  },
  bodyText: {
    fontSize: "20px",
    textAlign: "left",
  },
  conclusionSection: {
    marginTop: "15px",
    padding: "15px",
  },
  img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "40%",
    //width: "100px",
    height: "80%",
    marginBottom: "5px",
  },
  signatureBody: {
    textAlign: "right",
  },
  signature: {
    marginLeft: "70%",
    marginTop: "5px",
    width: "20%",
    //width: "100px",
    height: "50%",
  },
  signatureName: {
    marginLeft: "80%",
  },
  link: {
    textDecoration: "underline",
    fontSize: "20px",
    textAlign: "left",
  },
});

// Create Document Component
const MyDocument = (props) => {
  console.log(props.data.firstName);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Certificate To</Text>
        </View>
        <br />
        <View>
          <Image src={props.data.photoForPdf} style={styles.img} />
        </View>
        <View style={styles.name}>
          <Text
            style={styles.headerText}
          >{`Mr. ${props.data.firstName} ${props.data.lastName}`}</Text>
        </View>
        <View style={styles.bodySection}>
          <Text style={styles.bodyText}>
            {`Thank you Mr. ${props.data.firstName} ${props.data.lastName} For your success! We have sent all the information to your email account [ ${props.data.email} ] for further contact. Wish you a very successfull career.`}{" "}
          </Text>
        </View>
        <View style={styles.conclusionSection}>
          <Text style={styles.bodyText}>
            {`If you have any question please mail us at askAnyQus@gmail.com and for more info please visit `}
            <Link style={styles.link} src="www.google.com">
              "This Link"
            </Link>
          </Text>
        </View>
        <View style={styles.signatureBody}>
          <Image src={signature} style={styles.signature} />
        </View>
        <View>
          <Text style={styles.signatureName}>{`Authority`} </Text>
        </View>
        <br />
      </Page>
    </Document>
  );
};

export default MyDocument;
