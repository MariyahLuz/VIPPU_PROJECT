/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import ArrowUpward from "@material-ui/icons/ArrowUpward";
//import Warning from "@material-ui/icons/Warning";
//import CasesIcon from "@mui/icons-material/Cases";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
//import PendingActionsIcon from "@mui/icons-material/PendingActions";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import Danger from "components/Typography/Danger.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Transfered() {
  const classes = useStyles();
  return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <CardIcon color="success">
                <TransferWithinAStationIcon />
              </CardIcon>
              <p className={classes.cardCategory}>TRANSFERED OFFICERS</p>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Afande Mike has been transfered to the main branch</h4>
              <h4 className={classes.cardTitle}>
              Afande Apio has been transfered to mukono branch
              </h4>
              <h4 className={classes.cardTitle}>
              Afande Jackie shifted to branch B
              </h4>
              <h4 className={classes.cardTitle}>
              Afande Wafula left
              </h4>
              <h4 className={classes.cardTitle}>
              Afande Joseph has been transfered to branch C 
              </h4>

            </CardBody>
          </Card>
        </GridItem>
    </GridContainer>
  );
}
