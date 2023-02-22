import React, {Component} from 'react';
import '../css/Login.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component{

    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        
    }

    iniciarSesion = async e => {
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response =>{
            return(response.data);
        })
        .then(response => {
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('usuario', respuesta.usuario, {path: "/"});
                alert('Bienvenido');
                window.location.href="./menu";
            }else{
                alert('usuario o contraseña incorrectos');
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }


    render() {
        return(
           <div className="box">
           <span className="borderLine"></span>
           <form>
           <h1>Login</h1>
           <div className="inputBox">
           <input type="text" required="required" name='username' onChange={this.handleChange}/>
           <span>Username</span>
           <i></i>
           </div>
           <div className="inputBox">
           <input type="password" required="required" name='password' onChange={this.handleChange}/>
           <span>Password</span>
           <i></i>
           </div>
           <input type="submit" onClick={()=> this.iniciarSesion()} value="Login" />
           </form>            
       </div>
        );
    }
}

export default Login;