import React,{createContext, useContext,useReducer} from 'react'

const initialdata =  {
    'users':[
        {
            name:'salloni',
            email:'salloni@gmail.com',
            id:1
        },
        {
            name:'salloni2',
            email:'salloni2@gmail.com',
            id:2
        }
    ]
}

const appReducer = (state,action) => {
        switch (action.type){
            case 'remove':

                return {
                    users:state.users.filter(
                    user => user.id !== action.payload
                )}
            case 'edit':
                const user_data = action.payload
                const updateUser = state.users.map(
                    user => {
                        if (user.id === user_data.id){
                            return user_data
                        }
                        return user
                    }
                )
                return {
                    users: updateUser
                }
            case 'add':
                return {
                    users:[action.payload,...state.users]
                }
            default:
                return state
        }
}
export const UserListData = createContext(initialdata)

export const UserListProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialdata);
    const RemoveUser = (id) => {
        dispatch({
            type:"remove",
            payload:id
        })
    }
    const AddUser = (user) => {
        dispatch({
            type:'add',
            payload:user
        })
    }
    const EditUser = (user) => {
        dispatch({
            type:"edit",
            payload:user 
        })
    }
    return (
        <UserListData.Provider value={{
            users :state.users,
            rmuser:RemoveUser,
            adduser:AddUser,
            edituser:EditUser
        }}>
            {children}
        </UserListData.Provider>
    )
}