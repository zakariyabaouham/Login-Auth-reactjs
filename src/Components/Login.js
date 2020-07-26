import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null ){
            loggedIn= false
        }

        this.state = {
            username : '',
            password: '',
           loggedIn

        }
        this.onChange = this.onChange.bind(this)
        this.SubmitForm = this.SubmitForm.bind(this)

    }


    //function onChange
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    SubmitForm(e){
        e.preventDefault() 
        const {username, password} = this.state
            //login magic
            if(username === "A" && password === "B"){
                localStorage.setItem("token", "jdgdfiuadgydfgauysdguyas")
            this.setState({
                loggedIn: true
            })
        }
        }
    
    render()
     {
         //si loggedIn redirection vers un page
        if(this.state.loggedIn){
            return <Redirect to="/admin"/>
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.SubmitForm}>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange} />
                    <br/>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br/>
                    <input type="submit" />
                    <br/>

                </form>
            </div>
        );
    }
}
