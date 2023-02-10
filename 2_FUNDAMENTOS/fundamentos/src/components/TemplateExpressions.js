import MyComponent from "./MyComponent";

// É basicamento a sitax para execução de códigos javascript dentro do jsx que fica dentro do return
const TemplateExpressions = () => {
    const names = ["matheus", "Guilherme", "Neto"]
    const data = {
        age: 31,
        job: "Programmer",
        sexualidade: "Indefinida"
    }
    return (
        <div>
            <h1>Olá {names[2]}, tudo bem?</h1>
            <p>Sua idade é: {data.age}</p>
            <p>Seu trabalho: {data.job}</p>
            <p>Sua sexualidade: {data.sexualidade}</p>
            <MyComponent />
        </div>
    )
}

export default TemplateExpressions;