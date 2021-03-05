import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormularioRegistro from "./FormularioRegistro";

export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <Switch>
                <Route path="/register" exact>
                    <FormularioRegistro />
                </Route>
            </Switch>
        </div>
    )
}
