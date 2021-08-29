import React from "react";
import { Route, Switch } from "react-router";
import HomeMain from "../Components/HomePage/HomeMain";
import NavBar from "../Components/NavBar/NavBar";
import PatientForm from "../Components/PatientForm/PatientFormMain";


function Routes() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <HomeMain />
                </Route>

                <Route path="/newPatientEntry" exact>
                    <PatientForm />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;