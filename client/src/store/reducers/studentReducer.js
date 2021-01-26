const initState = {
    students: [
        { studentName: 'Amy', email: 'amy@gmail.com', state: 1, interest1: 2, interest2: 3, interest3: 1},
        { studentName: 'Dell', email: 'dell@gmail.com', state: 1, interest1: 2, interest2: 3, interest3: 1},
        { studentName: 'Bella', email: 'bella@gmail.com', state: 0, interest1: 2, interest2: 3, interest3: 1},
        { studentName: 'Cook', email: 'cook@gmail.com', state: 0, interest1: 2, interest2: 3, interest3: 1},
      ]
}

const studentReducer = (state = initState.students, action) => {
    const {type, payload} = action;

    // switch(type) {
    //     case "CREATE_COMPANY":
    //         return [...state, {
    //             companyName: payload.companyName,
    //             cPersonName: payload.cPersonName,
    //             email: payload.email,
    //             ifActive: payload.ifActive,
    //             sdate: payload.sdate,
    //             edate: payload.edate,
    //             interest1: payload.interest1,
    //             interest2: payload.interest2,
    //             interest3: payload.interest3,
    //         }];
    //     case "DELETE_COMPANY":
    //         const newState = [...state];
    //         const i = newState.findIndex(x => x.companyName == payload.companyName);
    //         newState.splice(i, 1);
    //         return [...newState];
    //     case "UPDATE_COMPANY":
    //         const dataUpdate = [...state];
    //         const index = payload.index;

    //         //console.log(payload) 
    //         //console.log([...state][index])

    //         dataUpdate[index] = {
    //             companyName: payload.companyName,
    //             cPersonName: payload.cPersonName,
    //             email: payload.email,
    //             ifActive: payload.ifActive,
    //             sdate: payload.sdate,
    //             edate: payload.edate,
    //             interest1: payload.interest1,
    //             interest2: payload.interest2,
    //             interest3: payload.interest3,
    //         }
    //         return [...dataUpdate];
            
    //     default: 
            return state
    //}
}

export default studentReducer