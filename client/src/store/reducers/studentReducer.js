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

    switch(type) {
        case "CREATE_STUDENT":
            return [...state, {
                studentName: payload.studentName,
                email: payload.email,
                state: payload.state,
                interest1: payload.interest1,
                interest2: payload.interest2,
                interest3: payload.interest3,
            }];
        case "DELETE_STUDENT":
            const newState = [...state];
            const i = newState.findIndex(x => x.studentName == payload.studentName);
            newState.splice(i, 1);
            return [...newState];
        case "UPDATE_STUDENT":
            const dataUpdate = [...state];
            const index = payload.index;

            dataUpdate[index] = {
                studentName: payload.studentName,
                email: payload.email,
                state: payload.state,
                interest1: payload.interest1,
                interest2: payload.interest2,
                interest3: payload.interest3,
            }
            return [...dataUpdate];
            
        default: 
            return state
    }
}

export default studentReducer