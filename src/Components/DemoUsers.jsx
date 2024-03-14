import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DemoUsers() {
    const [users, setUsers] = useState([])

    const demoUsers = async () => {
        const res = await fetch("https://capobiz-backend.vercel.app/api/auth/getDemoUsers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setUsers(data)
    }

    useEffect(() => {
        demoUsers()
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-end">
                <Link to="/">
                    <button className="btn btn-primary">Log Out</button>
                </Link>
            </div>
            <table className="table table-bordered mt-3" style={{ backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>School Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((User) => {
                        return (
                            <tr>
                                <td>{User.name}</td>
                                <td>{User.email}</td>
                                <td>{User.schoolName}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}