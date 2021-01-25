const initState = {
    companies: [
        { companyName: 'Tower Insurance Limited', cPersonName: 'Andrew', email: 'andrew@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 4, interest2: 8, interest3: 8 },
        { companyName: 'ANZ', cPersonName: 'Baron', email: 'baron@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 8, interest2: 5, interest3: 4 },
        { companyName: 'Chelmer', cPersonName: 'Kat', email: 'Kat@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 3, interest2: 2, interest3: 1 },
        { companyName: 'Biolumic', cPersonName: 'Dave', email: 'dave@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: false, interest1: 1, interest2: 2, interest3: 3 },
        { companyName: 'ITS - AWS Migration, UoA', cPersonName: 'Elene', email: 'elene@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 2, interest2: 1, interest3: 0 },
        { companyName: 'Bla', cPersonName: 'Fred', email: 'fred@gmail.com', ifActive: false, sdate: "1998-06-29", edate: "2003-08-02", interest1: 4, interest2: 8, interest3: 8 },
      ]
}

const companyReducer = (state = initState.companies, action) => {
    const {type, payload} = action;

    switch(type) {
        case "CREATE_COMPANY":
            console.log("payload: ", payload)
            return [...state, {
                companyName: payload.companyName,
                cPersonName: payload.cPersonName
            }]
            
        default: 
            return state
    }
}

export default companyReducer