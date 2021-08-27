const initState = {
    patient_data: [],
}


function patientReducer(state = initState, action) {
    switch (action.type) {
        case "":
            return {

            }
            
    
        default:
            return state;
    }
}

export {patientReducer};

