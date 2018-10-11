const initialState = {
    report:{},
    student:{},
    updated:{},
    delete:{},
    addStudent:{}
}
export default function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case 'DASHBOARD_REPORT':
            return {
                ...state,
                report:action.payload
            }
        case 'DASHBOARD_LESSON':
            return {
                ...state,
                report:action.payload
            }
        case 'DASHBOARD_STUDENT':
            return {
                ...state,
                student:action.payload
            }
        case 'UPDATE_DATA':
            return {
                ...state,
                updated:action.payload
            }
        case 'DELETE_DATA':
            return {
                ...state,
                delete:action.payload
            }
        case 'ADD_STUDENT':
        return {
            ...state,
            addStudent:action.payload
        }     
            
        default:
            return state
    }
}
