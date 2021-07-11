import React from 'react'

class Errorboundary extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            activo : false
        }
    }

    isActive = () => {
        return this.state.activo?  'IsActive' : 'NoActive';
    }

    onClickHandler = () => {
        this.setState({activo : !this.state.activo});
    }

    componentDidMount(){
        console.log('Componente fue montado');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Estado previo activo', prevState.activo);
        console.log('Componente fue actualizado');
        console.log('Estado actualizado', this.state.activo);
    }

    componentWillUnmount(){
        console.log('El componente fue desmontado');
    }

    render(){
        return (

            <div>
                <button onClick={this.onClickHandler}>{this.state.activo? 'Desactivar' : 'Activar'}</button>
                <h1>
                    Error voundary {this.props.saludo}
                    {this.isActive()}
                </h1>

            </div>

            ) 
    }
}


export default Errorboundary;