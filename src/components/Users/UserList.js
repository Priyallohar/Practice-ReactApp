import React from "react";
import './UserList.module.css'
import classes from './UserList.module.css';
import Card from "../UI/Card";

function UserList(props){
    return (
        <Card className = {classes.users}>
        <ul>
            {
                props.users.map((user)=>{
                    return <li key = {user.id}>
                        {user.name}({user.age} year old)
                    </li>
                })
            }
        </ul>
        </Card>
    )

}

export default UserList