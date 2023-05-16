import React, { useState } from 'react';
import './Todo.css';


function UserNmae({ task, index,  removeUser}) {
    return (
        <div className="user">
            {task.name}
            <button style={{ background: "red" }} onClick={() => removeUser(index)}>Delete</button>
            </div>
    );
}

function CreateUser({ addUser }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addUser(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Add a User"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}

function User() {
   
    const [users, setUser] = useState([
        {
            name: "ram",
          
        },
        {
            name: "shyam",
          
        },
        {
            name: "mohan",
           
        }
    ]);

   
    const addUser = name => {
        const newUser = [...users, { name }];
        setUser(newUser);
    };

    const removeUser = index => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUser(newUsers);
    };

    return (
        <div className="User-container">
           

            <div className="user">
                {users.map((task, index) => (
                    <UserNmae
                    task={task}
                    index={index}
                    removeUser={removeUser}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-user" >
                <CreateUser addUser={addUser} />
            </div>
        </div>
    );
}

export default User;
