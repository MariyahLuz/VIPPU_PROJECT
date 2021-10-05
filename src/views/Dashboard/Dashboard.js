import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CasesIcon from "@mui/icons-material/Cases";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
//core imports
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <CasesIcon />
              </CardIcon>
              <p className={classes.cardCategory}>COURT CASES</p>
              <h3 className={classes.cardTitle}>
                +449<small>cases</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  view cases
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <TransferWithinAStationIcon />
              </CardIcon>
              <p className={classes.cardCategory}>TRANSFERED OFFICERS</p>
              <h3 className={classes.cardTitle}>15</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 72 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <DoneAllIcon />
              </CardIcon>
              <p className={classes.cardCategory}>SOLVED CASES</p>
              <h3 className={classes.cardTitle}>32</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 72 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <PendingActionsIcon />
              </CardIcon>
              <p className={classes.cardCategory}>PENDING CASES</p>
              <h3 className={classes.cardTitle}>
                +145<small>pending</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Court Cases</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today cases.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Solved Cases per month</h4>
              <p className={classes.cardCategory}>Court Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Performance sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}> Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 12 hours ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Employees Status</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th October, 2021
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="success"
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
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>
                Available Employee details
              </h4>
              <p className={classes.cardCategoryWhite}>
                Overall Employees 2021
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
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
