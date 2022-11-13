import React,{useState,useContext} from 'react'
import { UserListData } from './Userdata'
import { useNavigate  } from "react-router-dom";
function AddUser() {
    const nav = useNavigate()
    const {adduser,users} = useContext(UserListData)
    const [isErr,setIsErr] = useState(false)
    const [suser,setSuser] = useState({
        name:'',
        email:'',
        id:''
    })
    const [error,setError] = useState({
        name:'',
        email:''
    })

    const changeemail = (e) => {
        if(e.target.value === ""){
            setError({...error,email:'enter email'})
            setSuser({
                ...suser,email:e.target.value
            })
        }else{
            setError({...error,email:""})
        setSuser({
            ...suser,email:e.target.value
        })}
    }
    const changename = (e) => {
        if(e.target.value === ""){
            setError({...error,name:'enter name'})
            setSuser({
                ...suser,name:e.target.value
            })
        }else{
            setError({...error,name:''})
        setSuser({
            ...suser,name:e.target.value
        })}
    }
    const addthisuser = () => {
        if(suser.email === ''){
            setError({
                ...error,email:'enter email'
            })
            setIsErr(true)
            return 
        }else if(!suser.email.includes("@")){
            setError({
                ...error,email:'invalid email'
            })
            setIsErr(true)
            return
        }
        if(suser.name === ""){
            setError({
                ...error,name:'enter name'
            })
            setIsErr(true)
            return
        }
        if(error.name !== "" || error.email !== ""){
            setIsErr(true)
            return 
        }
        suser.id = users.length + 1
        adduser(suser)
        nav('/')
    }
  return (
    <div>
                <input type="text" onChange={changeemail} value={suser.email} />
                {isErr&&<span>{error.email}</span>}
                <input type="text" onChange={changename} value={suser.name} />
                {isErr&&<span>{error.name}</span>}
                <button onClick={addthisuser} >add</button>
    </div>
  )
}

export default AddUser
