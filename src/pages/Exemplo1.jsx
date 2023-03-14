import React, { useEffect, useState} from "react";

function Exemplo1(){
    const [count, setCount] = useState(0);
    const [color, setColor] =useState('red')

    useEffect(() => {
        document.title = `Você clicou ${count} vezes`;
        });

    function incrementar(){
        setCount(count + 1);
    }
    return (
        <div>
        <h1>Contagem: {count}</h1>
        <button onClick={incrementar} className=" bg-black text-white rounded-lg ">
            Adicionar
        </button>
        

        </div>
    
    )
}

export default Exemplo1; //exportou o componente
