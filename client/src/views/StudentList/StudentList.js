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
import MaterialTable from 'material-table'
import Button from "components/CustomButtons/Button.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// MaterialTable ref: https://material-table.com/#/
// TODO: Add the full object to dispatch and reducer DONE
//       Finish the other three dispatch function, DONE
//       Duplicated them to student table (id should be implemted well)
//       Backend, DB...
//       Forecasting: using 

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
  const { useState } = React;
  const dispatch = useDispatch();

  const [columns, setColumns] = useState([
    { title: 'Student Name', field: 'studentName' },
    { title: 'Email', field: 'email'},
    {
      title: 'State',
      field: 'state',
      lookup: { 0: 'Not active', 1: 'Seeking for Interviews', 2: 'Waiting for Response', 3: 'Got the Internship'},
    }, 
    {
      title: 'First Interest',
      field: 'interest1',
      lookup: { 0: 'No Preference', 1: 'Frontend Developer', 2: 'Backend Developer', 3: 'Full Stack Developer', 4: 'Data Analyst', 5: 'UI Designer', 6: 'Tester', 7: 'Consultant', 8: 'Doc Manager' },
    },
    {
      title: 'Second Interest',
      field: 'interest2',
      lookup: { 0: 'No Preference', 1: 'Frontend Developer', 2: 'Backend Developer', 3: 'Full Stack Developer', 4: 'Data Analyst', 5: 'UI Designer', 6: 'Tester', 7: 'Consultant', 8: 'Doc Manager' },
    },
    {
      title: 'Third Interest',
      field: 'interest3',
      lookup: { 0: 'No Preference', 1: 'Frontend Developer', 2: 'Backend Developer', 3: 'Full Stack Developer', 4: 'Data Analyst', 5: 'UI Designer', 6: 'Tester', 7: 'Consultant', 8: 'Doc Manager' },
    },
  ]);

  const state = useSelector((state) => state.student)
  console.log(state)  // A student array

  var [data, setData] = useState(state);

  const addStudent = (ndata) => {
    dispatch({
        type: "CREATE_STUDENT",
        payload: {
          studentName: ndata.studentName,
          email: ndata.email,
          state: ndata.state,
          interest1: ndata.interest1,
          interest2: ndata.interest2,
          interest3: ndata.interest3,
        }
      })
  }

  const deleteStudent = (index) => {
    var dstuName = state[index].studentName;
    dispatch({
      type: "DELETE_STUDENT",
      payload: {
        studentName: dstuName,
      }
    })
  }

  const updateStudent = (ndata) => {
    console.log(ndata)
    dispatch({
      type: "UPDATE_STUDENT",
      payload: {
          index: ndata.tableData.id,
          studentName: ndata.studentName,
          email: ndata.email,
          state: ndata.state,
          interest1: ndata.interest1,
          interest2: ndata.interest2,
          interest3: ndata.interest3,
      }
    })
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Students List</h4>
            <p className={classes.cardCategoryWhite}>
              Detailed students information
            </p>
          </CardHeader>
          <CardBody>
    <MaterialTable
      title=""
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              addStudent(newData);
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              updateStudent(newData)
              resolve();
            }, 1000)
          }).then(console.log(newData)),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              deleteStudent(index);
              resolve()
            }, 1000)
          }),
      }}
    />
          </CardBody>
        </Card>
        <Button
          color="primary"
          onClick={()=>console.log(state)}
          >
          show state
          </Button>
      </GridItem>
    </GridContainer>
  );
}