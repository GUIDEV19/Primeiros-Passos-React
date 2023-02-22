import { useState } from "react";

function CondicionalRender() {
    const [x] = useState(false);
    const [name, setname] = useState("jp");
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p> Agora X e false</p>}
        {name === "joão" ? (<p>O nome é  João</p>) : (<p>O nome é {name}</p>)}
        <button onClick={() => setname("joão")}>Pesquisar base de nomes</button>
    </div>
  )
}

export default CondicionalRender;