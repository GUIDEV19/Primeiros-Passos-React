const Events = () => {
    const handleyMyEvent = (e) => {
        console.log(e)
        console.log("Click Ativado!")
    }

    const testLogic = (x) => {
        if(x){
            return <h2>Deu certo o true</h2>
        }else{
            return <h2>Deu certo do FALSE</h2>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleyMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => {console.log("clicou em mim")}}>Clique!</button>
            </div>
            {testLogic(true)}
            {testLogic(false)}
        </div>
    )
}

export default Events;