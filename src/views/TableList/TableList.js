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
            <h4 className={classes.cardTitleWhite}>Active Companies List</h4>
            <p className={classes.cardCategoryWhite}>
              Companies seeking for interns
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Company Name", "City", "Contact Email", "Status"]}
              tableData={[
                ["The University of Auckland", "Auckland", "workemail1@gmail.com", "Vacant"],
                ["Spark", "Auckland", "workemail2@gmail.com", "Vacant"],
                ["Orion", "Auckland", "workemail3@gmail.com", "Interviews in process"],
                ["The tower", "Auckland", "workemail4@gmail.com", "Interviews in process"],
                ["Parkable", "Auckland", "workemail5@gmail.com", "Occupied"],
                ["ANZ", "Auckland", "workemail6@gmail.com", "Occupied"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Inactive Companies List</h4>
            <p className={classes.cardCategoryWhite}>
              Companies have recruited interns
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Company Name", "City", "Contact Email", "Status"]}
              tableData={[
                ["The University of Auckland", "Auckland", "workemail1@gmail.com", "Vacant"],
                ["Spark", "Auckland", "workemail2@gmail.com", "Vacant"],
                ["Orion", "Auckland", "workemail3@gmail.com", "Interviews in process"],
                ["The tower", "Auckland", "workemail4@gmail.com", "Interviews in process"],
                ["Parkable", "Auckland", "workemail5@gmail.com", "Occupied"],
                ["ANZ", "Auckland", "workemail6@gmail.com", "Occupied"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
