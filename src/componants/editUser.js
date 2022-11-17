import React, { useContext, useState, useEffect } from 'react'
import { UserListData } from './Userdata'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function EditUser() {
    const { edituser, users } = useContext(UserListData)
    const { id } = useParams()
    const nav = useNavigate()
    const [isErr, setIsErr] = useState(false)
    const [suser, setSuser] = useState({
        name: '',
        email: '',
        id: ''
    })
    const [error, setError] = useState({
        name: '',
        email: ''
    })

    // const changeemail = (e) => {
    //     if(e.target.value === ""){
    //         setError({...error,email:'enter email'})
    //         setSuser({
    //             ...suser,email:e.target.value
    //         })
    //     }else{
    //         setError({...error,email:""})
    //     setSuser({
    //         ...suser,email:e.target.value
    //     })}
    // }
    // const changename = (e) => {
    //     if(e.target.value === ""){
    //         setError({...error,name:'enter name'})
    //         setSuser({
    //             ...suser,name:e.target.value
    //         })
    //     }else{
    //     setError({...error,name:''})
    //     setSuser({
    //         ...suser,name:e.target.value
    //     })}
    // }
    
    const changeData = (e) => {
        switch (e.target.name) {
            case "email":
                if (e.target.value === "") {
                    setError({ ...error, email: 'enter email' })
                    setSuser({
                        ...suser, email: e.target.value
                    })
                } else {
                    setError({ ...error, email: "" })
                    setSuser({
                        ...suser, email: e.target.value
                    })
                }

                break
            case "name":
                if (e.target.value === "") {
                    setError({ ...error, name: 'enter name' })
                    setSuser({
                        ...suser, name: e.target.value
                    })
                } else {
                    setError({ ...error, name: '' })
                    setSuser({
                        ...suser, name: e.target.value
                    })
                }

                break
            default:
                break
        }
    }
    const editthisuser = () => {

        if (error.name !== "" || error.email !== "") {
            setIsErr(true)
            return
        }
        if (!suser.email.includes("@")) {
            setError({
                ...error, email: 'invalid email'
            })
            setIsErr(true)
            return
        }
        edituser(suser)
        nav('/')
    }
    useEffect(() => {
        const thisuser = users.find(user => user.id == id)
        setSuser(thisuser)
    }, [])
    return (
        <div>
            <input type="text" name='email' onChange={(e) => changeData(e)} value={suser.email} />
            {isErr && <span>{error.email}</span>}
            <input type="text" name='name' onChange={(e) => changeData(e)} value={suser.name} />
            {isErr && <span>{error.name}</span>}
            <button onClick={editthisuser} >edit</button>
        </div>
    )
}

export default EditUser
