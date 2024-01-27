import { children, useReducer } from "react";


export const studentsReducer=(state,action)=>{
    switch (action.type){
        case 'ADD_STUDENT':
            return {
                studentAction:action.isActive
            }
        case 'CREATE_STUDENT':
            return {
                studentAction:[action.isActive,...state.studentAction]
            }
        case 'DELETE_STUDENT':
            return{
                studentAction:state.studentAction.filter((s)=>s._id!== action.isActive._id)
            }
        default:
            return state;
    }
}

export const StudentContextProvider=({children})=>{
    const [state,dispatch]=useReducer(studentsReducer,{
        studentAction:null
    })

    return (
        <StudentContext.Provider value={{...state,dispatch}}>
            { children }
        </StudentContext.Provider>
    )
}
