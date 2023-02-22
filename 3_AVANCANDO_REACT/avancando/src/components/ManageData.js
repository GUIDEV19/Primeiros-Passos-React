import { useState } from "react";

const ManageData = () => {
    let someData = 12;

    const [number, setNumber] = useState(someData);
    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => {
                someData = 15;
            }}>
                mudar valor
            </button>

            <p>Valor: {number}</p>
            <button onClick={() => {
                setNumber(25)
            }}>
                mudar valor
            </button>
        </div>
    )
}

export default ManageData