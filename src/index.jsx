import React from 'react';
import ReactDOM from 'react-dom/client';


class OlaMundo extends React.Component{
    render(){
        return <h1>Olá mundo {this.props.nome}</h1>
    }
}
class Pagina01 extends React.Component{
    render(){
        return (
        <>
            <OlaMundo nome = {this.props.nome[0]}></OlaMundo>
            <OlaMundo nome = {this.props.nome[1]}></OlaMundo>
        </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pagina01 nome = {["Ana", "Violeta"]}/>);