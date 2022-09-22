import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css';

const UserList = (props) => {
    // const deleteHandler = (id) => {
    //     props.map((id) => (

    //     ));
    // }
    return (
        <Card className = {classes.users}>
            <ul>
                {props.users.map((user) => (
                    <li
                        key={user.id}
                        // onClick={deleteHandler}
                    >
                        {user.name} ({user.age} Years Old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;