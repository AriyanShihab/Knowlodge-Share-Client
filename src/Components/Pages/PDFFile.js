import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#efefef",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    fontSize: 25,
    marginBottom: 40,
    paddingBottom: 10,
  },
  description: {
    marginTop: 45,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#ddd",
    padding: 10,
  },
  img: {
    maxWidth: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
const PDFFile = ({ course }) => {
  const { name, description, image, rattings, student, totalHours } = course;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text fixed>{name}</Text>
        </View>
        <View>
          <Image style={styles.img} src={image}></Image>
        </View>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        <View style={styles.description}>
          <Text>Rattings: {rattings}</Text>
          <Text>total student: {student}</Text>
          <Text>Total Time: {totalHours}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
