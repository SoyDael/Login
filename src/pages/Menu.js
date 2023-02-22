import React, { Component } from 'react';
import Cookies from 'universal-cookie'

const cookies = new Cookies();

class Menu extends Component {
    
    cerrarSecion = () =>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('usuario', {path: "/"});
        window.location.href='./';
    }


    render() {
        console.log('id:' +cookies.get('id'));
        console.log('apellido_paterno:' +cookies.get('apellido_paterno'));
        console.log('apellido_materno:' +cookies.get('apellido_materno'));
        console.log('nombre:' +cookies.get('nombre'));
        console.log('usuario:' +cookies.get('usuario'));
        return(
            <div>Menu Principal
                 <br/>
                 <button onClick={() => this.cerrarSecion()}>Salir</button>
            </div>
           

        );
    }
}

export default Menu;