import React from 'react'

const UserDetails = ({ name, age }) => {
    return (
        <div>
            <h1>{name} {age}</h1>
        </div>
    )
}

export default UserDetails