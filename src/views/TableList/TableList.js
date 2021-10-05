import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import AutoStoriesIcon from "@mui/icons-material/AutoStories";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Employee details</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a list of all the employees in the department
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={[
                "F.Name",
                "L.Name",
                "DOB",
                "Salary",
                "Title",
                "Rank",
                "Department",
                "Gender",
              ]}
              tableData={[
                [
                  "Mwesigwa",
                  "Joshua",
                  "16/12/1999",
                  "1000000",
                  "COO",
                  "HOD",
                  "HRD",
                  "M",
                ],
                [
                  "Luzinda",
                  "Mariyah",
                  "16/12/1999",
                  "2000000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Wafula",
                  "Nelly",
                  "16/12/1999",
                  "500000",
                  "COO",
                  "HOD",
                  "HRD",
                  "M",
                ],
                [
                  "Apollo",
                  "Jackie",
                  "16/12/1999",
                  "500000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Apio",
                  "Jennifer",
                  "16/12/1999",
                  "100000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Akoll",
                  "Donnah",
                  "16/12/1999",
                  "1200000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Mwesigwa",
                  "Joshua",
                  "16/12/1999",
                  "1000000",
                  "COO",
                  "HOD",
                  "HRD",
                  "M",
                ],
                [
                  "Luzinda",
                  "Mariyah",
                  "16/12/1999",
                  "2000000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Wafula",
                  "Nelly",
                  "16/12/1999",
                  "500000",
                  "COO",
                  "HOD",
                  "HRD",
                  "M",
                ],
                [
                  "Apollo",
                  "Jackie",
                  "16/12/1999",
                  "500000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Apio",
                  "Jennifer",
                  "16/12/1999",
                  "100000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Akoll",
                  "Donnah",
                  "16/12/1999",
                  "1200000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Mwesigwa",
                  "Joshua",
                  "16/12/1999",
                  "1000000",
                  "COO",
                  "HOD",
                  "HRD",
                  "M",
                ],
                [
                  "Luzinda",
                  "Mariyah",
                  "16/12/1999",
                  "2000000",
                  "COO",
                  "HOD",
                  "HRD",
                  "F",
                ],
                [
                  "Wafula",
                  "Nelly",
                  "16/12/1999",
                  "500000",
                  "COO",
                  "HOD",
                  "HRD",
                  "M",
                ],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
