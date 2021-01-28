const initState = {
    companies: [
        { companyName: 'Tower Insurance Limited', cPersonName: 'Andrew', email: 'andrew@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 4, interest2: 8, interest3: 8 },
        { companyName: 'ANZ', cPersonName: 'Baron', email: 'baron@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 8, interest2: 5, interest3: 4 },
        { companyName: 'Chelmer', cPersonName: 'Kat', email: 'Kat@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 3, interest2: 2, interest3: 1 },
        { companyName: 'Biolumic', cPersonName: 'Dave', email: 'dave@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: false, interest1: 1, interest2: 2, interest3: 3 },
        { companyName: 'ITS - AWS Migration, UoA', cPersonName: 'Elene', email: 'elene@gmail.com', sdate: "1998-06-29", edate: "2003-08-02", ifActive: true, interest1: 2, interest2: 1, interest3: 0 },
        { companyName: 'The Uni of Auckland', cPersonName: 'Fred', email: 'fred@gmail.com', ifActive: false, sdate: "1998-06-29", edate: "2003-08-02", interest1: 4, interest2: 8, interest3: 3 },
      ]
}

const companyReducer = (state = initState.companies, action) => {
    const {type, payload} = action;

    switch(type) {
        case "CREATE_COMPANY":
            return [...state, {
                companyName: payload.companyName,
                cPersonName: payload.cPersonName,
                email: payload.email,
                ifActive: payload.ifActive,
                sdate: payload.sdate,
                edate: payload.edate,
                interest1: payload.interest1,
                interest2: payload.interest2,
                interest3: payload.interest3,
            }];
        case "DELETE_COMPANY":
            const newState = [...state];
            const i = newState.findIndex(x => x.companyName == payload.companyName);
            newState.splice(i, 1);
            return [...newState];
        case "UPDATE_COMPANY":
            const dataUpdate = [...state];
            const index = payload.index;

            //console.log(payload) 
            //console.log([...state][index])

            dataUpdate[index] = {
                companyName: payload.companyName,
                cPersonName: payload.cPersonName,
                email: payload.email,
                ifActive: payload.ifActive,
                sdate: payload.sdate,
                edate: payload.edate,
                interest1: payload.interest1,
                interest2: payload.interest2,
                interest3: payload.interest3,
            }
            return [...dataUpdate];
            
        default: 
            return state
    }
}

export default companyReducer