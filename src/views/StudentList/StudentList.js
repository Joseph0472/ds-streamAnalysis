import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
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
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Active Students List</h4>
            <p className={classes.cardCategoryWhite}>
              Students require internship opportunities
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Company Name", "City", "Contact Email", "Status"]}
              tableData={[
                ["David Lee", "Auckland", "workemail1@gmail.com", "Vacant"],
                ["Lebron James", "Auckland", "workemail2@gmail.com", "Vacant"],
                ["Sage Rodriguez", "Auckland", "workemail3@gmail.com", "Interviews in process"],
                ["Philip Chaney", "Auckland", "workemail4@gmail.com", "Interviews in process"],
                ["Doris Greene", "Auckland", "workemail5@gmail.com", "Occupied"],
                ["Mason Porter", "Auckland", "workemail6@gmail.com", "Occupied"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Inactive Students List</h4>
            <p className={classes.cardCategoryWhite}>
              Students have got internship opportunities
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Company Name", "City", "Contact Email", "Status"]}
              tableData={[
                ["Philip Chaney", "Auckland", "workemail1@gmail.com", "Vacant"],
                ["Anthony Davis", "Auckland", "workemail2@gmail.com", "Vacant"],
                ["Sage Rodriguez", "Auckland", "workemail3@gmail.com", "Interviews in process"],
                ["Philip Chaney", "Auckland", "workemail4@gmail.com", "Interviews in process"],
                ["Doris Greene", "Auckland", "workemail5@gmail.com", "Occupied"],
                ["Mason Porter", "Auckland", "workemail6@gmail.com", "Occupied"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
