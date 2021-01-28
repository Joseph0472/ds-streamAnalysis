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
import readXlsxFile from 'read-excel-file';
import XLSX from 'xlsx'
import { Fireplace } from "@material-ui/icons";


// MaterialTable ref: https://material-table.com/#/
// TODO: Add the full object to dispatch and reducer DONE
//       Finish the other three dispatch function, DONE
//       Duplicated them to student table, DONE
//       Backend, DONE
//       Dashboard modi, DONE
//       DB...

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
    { title: 'Company Name', field: 'companyName' },
    { title: 'Contact Person', field: 'cPersonName'},
    { title: 'Contact Email', field: 'email'},
    { title: 'If Active', field: 'ifActive', type: 'boolean'},
    { title: 'Convo start date', field: 'sdate', type: 'date'},
    { title: 'Convo end date', field: 'edate', type: 'date'},   
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

  const state = useSelector((state) => state.company)
  console.log(state)  // A company array

  var [data, setData] = useState(state);

  const readExcel = (file) => {
    const promise = new Promise((res, rej) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        
        const wb = XLSX.read(bufferArray, {type: 'buffer'});

        const wsname = wb.SheetNames[0];
        
        const ws=wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws)

        res(data)
      };

      fileReader.onerror=(error) => {
        rej(error);
      };
    });

    promise.then((d)=>{
      console.log(d)
      
    }

    )
  }

  const addCompany = (ndata) => {
    dispatch({
        type: "CREATE_COMPANY",
        payload: {
          companyName: ndata.companyName,
          cPersonName: ndata.cPersonName,
          email: ndata.email,
          ifActive: ndata.ifActive,
          sdate: ndata.sdate,
          edate: ndata.edate,
          interest1: ndata.interest1,
          interest2: ndata.interest2,
          interest3: ndata.interest3,
        }
      })
  }

  const deleteCompany = (id) => {
    var dcomName = state[id].companyName;
    dispatch({
      type: "DELETE_COMPANY",
      payload: {
        companyName: dcomName,
      }
    })
  }

  const updateCompany = (ndata) => {
    console.log(ndata)
    dispatch({
      type: "UPDATE_COMPANY",
      payload: {
          index: ndata.tableData.id,
          companyName: ndata.companyName,
          cPersonName: ndata.cPersonName,
          email: ndata.email,
          ifActive: ndata.ifActive,
          sdate: ndata.sdate,
          edate: ndata.edate,
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
            <h4 className={classes.cardTitleWhite}>Companies List</h4>
            <p className={classes.cardCategoryWhite}>
              Detailed companies information
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
              addCompany(newData);
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
              updateCompany(newData)
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
              deleteCompany(index);
              resolve()
            }, 1000)
          }),
      }}
    />
          </CardBody>
        </Card>
        <Button
        variant="contained"
        color="primary"
        component="label"
        >
        Upload File
        <input
          type="file"
          onChange = {(e)=>{
            const file = e.target.files[0];
            readExcel(file);
          }}
          hidden
        />
        </Button>
          {/* <input type="file"
          onChange = {(e)=>{
            const file = e.target.files[0];
            readExcel(file);
          }}
          /> */}
          
      </GridItem>
    </GridContainer>
  );
}