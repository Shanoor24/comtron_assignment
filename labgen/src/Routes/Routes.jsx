import React from "react";
import { Route, Switch } from "react-router";
import ChartMain from "../Components/ChartsPage/ChartMain";
import DownloadMain from "../Components/DownloadsPage/DownloadsMain";
import HomeMain from "../Components/HomePage/HomeMain";
import MenuBar from "../Components/MenuBar/MenuBar";
import NavBar from "../Components/NavBar/NavBar";
import PatientForm from "../Components/PatientForm/PatientFormMain";


function Routes() {
    return (
        <div>
            <NavBar />
            <MenuBar />
            <Switch>
                <Route path="/" exact>
                    <HomeMain />
                </Route>

                <Route path="/charts" exact>
                    <ChartMain />
                </Route>

                <Route path="/downloads" exact>
                    <DownloadMain />
                </Route>

                <Route path="/newPatientEntry" exact>
                    <PatientForm />
                </Route>
            </Switch>
        </div>
    );
};

export default Routes;