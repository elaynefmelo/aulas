import React from "react";

function Teste(props){
    const {passo = 1} = props;
    return (
        <div className="bg-red-300 flex flex-row items-center justify-center p-4">
            <div className="bg-white w-10 h-10 flex flex-row itens-center justify-center rounded-full text-3xl">1</div>
            <div className="bg-white w-10 h-3 ">&nbsp;</div>
            <div className="bg-white w-10 h-10 flex flex-row itens-center justify-center rounded-full text-3xl">2</div>
            <div className="bg-white w-10 h-3">&nbsp;</div>
            <div className="bg-white w-10 h-10 flex flex-row itens-center justify-center rounded-full text-3xl">3</div>
            <div className="bg-white w-10 h-3">&nbsp;</div>
            <div className="bg-white w-10 h-10 flex flex-row itens-center justify-center rounded-full text-3xl">4</div>
            
        </div>
    );
}

export default Teste;