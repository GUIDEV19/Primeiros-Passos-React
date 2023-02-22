import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["matheus", "pedro", "Guilherme"]);
    const condicional = useState(false);

    const [users, setUsers] = useState([
        {id: 1, name: "matheus", age: 34},
        {id: 2, name: "neto", age: 20},
        {id: 3, name: "Guilherme", age: 22}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            console.log("estou aqui")
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.name}, {item.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
            
            <h1>texte Condicional Simples</h1>
            {condicional &&  <p>condicional verdadeira</p>}
        </div>
    )
}

export default ListRender