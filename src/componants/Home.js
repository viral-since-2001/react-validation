import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserListData } from './Userdata'
function Home() {
    const { users, rmuser } = useContext(UserListData)

    return (
        <div>
            <h1>Home page</h1>
            <Link to='/add' >User Add</Link>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First</th>
                        <th>Last</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            (user, index) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                <Link className="btn btn-danger mx-3" to={`/edit/${user.id}`}>Edit</Link>
                                            </td>
                                            <td>
                                                <button onClick={() => rmuser(user.id)} className="btn btn-outline-warning mx-3">Remove</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            }

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
