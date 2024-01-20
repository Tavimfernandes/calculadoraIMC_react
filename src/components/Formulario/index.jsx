import { useState, useEffect } from "react"

const Formulario = () => {
    const [imc, setImc] = useState(0)
    const [listaPeso, setListaPeso] = useState([]);
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    useEffect(() => {
        if (altura > 0 && peso > 0) {
            const novoImc = (peso / (altura * altura));
            console.log(novoImc)
            setImc(novoImc);
            setListaPeso((prevLista) => [...prevLista, novoImc]);
        }
    }, [altura, peso]);

    const handleAlturaChange = (event) => {
        const novoAltura = (event.target.value);
        if (!isNaN(novoAltura)) {
            setAltura(novoAltura);
        }
    };

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
        console.log("Peso changed")
    };

    const classificaIMC = () => {
        if (imc <= 18.5) return "Magreza";
        if (imc <= 24.9) return "Normal";
        if (imc <= 29.9) return "Sobrepeso";
        if (imc <= 39.9) return "Obesidade";
        return "Obesidade grave";
    };

    return (
        <form>
            <label htmlFor="peso">Peso:</label>
            <input type="text" name="peso" value={peso} onChange={handlePesoChange} />

            <label htmlFor="altura">Altura:</label>
            <input type="text" name="altura" value={altura} onChange={handleAlturaChange} />

            {imc > 0 && (
                <>
                    <p>IMC: {imc.toFixed(2)}</p>
                    <p>Classificação: {classificaIMC()}</p>
                </>
            )}
        </form>
    )
}

export default Formulario