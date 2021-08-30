import React, { useEffect, useState } from "react";
// import MenuBar from "../MenuBar/MenuBar";
import { Container, Typography , Button} from '@material-ui/core';
import {useStyles} from "./style"
import SideBar from "../SideBar/SideBar";
// import { Input } from '@material-ui/core';
import {Formik, Form} from "formik";
import { TextField } from "./TextField";
import { CheckBox } from "./CheckBox";
import { SelectBox } from "./SelectBox";
import { useHistory } from "react-router-dom";
import { TextArea } from "./TextArea";
import { TextArea1 } from "./TextArea1";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {postData} from "../../Redux/PatientReg/action"
import {v4 as uuid} from "uuid";
// import { TextFields } from "@material-ui/icons";




function PatientForm() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [finalData, setFinalData] = useState({id : uuid()});
    
    const [stepOne, setStepOne] = useState(true);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);

    const stepOneInitData = {
        patientName: "",
        isDiabetic: false,
        isHyperTension: false,
        policyNumber: "",
        bloodPressure: "",
        emergency: "",
        bmiCount: "",
        gender: ""
    }

    const stepOneValidate = Yup.object({
        patientName: Yup.string().max(15, "Must be 15 character or less").required("Required"),
        policyNumber: Yup.string().min(10, "Minimun 10 character").max(10, "Must be 10 charcters" ).required("Required"),
        bloodPressure: Yup.string().max(2, "Maximum 2 character allowed" ).required("Required"),
        emergency: Yup.string().max(15, "Must be 15 character or less").required("Required"),
        bmiCount: Yup.string().max(2, "Maximum 2 character allowed" ).required("Required"),
        gender: Yup.mixed().oneOf(["male", "female", "others"], "select valid option")
    })

    const stepTwoInitData = {
        prescription: ""
    }

    const stepTwoValidate = Yup.object({
        prescription: Yup.string().max(250, "Must be 250 character or less").required("Required"),
    })

    const stepThreeInitData = {
        additionInformation: ""
    }

    const stepThreeValidate = Yup.object({
        additionInformation: Yup.string().max(250, "Must be 250 character or less").required("Required"),
    })

    const [stepOneData, setStepOneData] = useState(stepOneInitData);
    const [stepTwoData, setStepTwoData] = useState(stepTwoInitData);
    const [stepThreeData, setStepThreeData] = useState(stepThreeInitData);

    const handleCancel = () => {
        history.push("/")
    }

    const handleTwoBack = () => {
        setStepOne(true);
        setStepTwo(false);
        setStepThree(false);
    }

    const handleThreeBack = () => {
        setStepOne(false);
        setStepTwo(true);
        setStepThree(false);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const handleOneNext = (data) => {
        // console.log(data);
        // handleSubmit();
        setStepOneData(data);
        setFinalData({...finalData, ...data});
        setStepOne(false);
        setStepTwo(true);
        setStepThree(false);
    }

    const handleTwoNext = (data) => {
        setStepTwoData(data);
        setFinalData({...finalData, ...data});
        setStepOne(false);
        setStepTwo(false);
        setStepThree(true);
    }

    const handleFinalSubmit = (data) => {
        setStepThreeData(data);
        setFinalData({...finalData, ...data});
        dispatch(postData(finalData));
        // console.log(finalData);
        setStepOne(true);
        setStepTwo(false);
        setStepThree(false);
        alert("New patient added successfully!");
        history.push("/");
    }


    // console.log(stepOneData);

    // useEffect(() => {
    //     console.log(finalData);
    //     console.log(stepOneData);
    //     console.log(stepTwoData);
    //     console.log(stepThreeData);
    // }, [stepOneData, stepTwoData, stepThreeData, finalData]);
    

    return (
        <div>
            {/* <MenuBar /> */}
            <Container maxWidth="xl" className={classes.main_cont}>
                <SideBar />
                <Container maxWidth="lg" className={classes.right_cont}>
                    <Container maxWidth="lg" className={classes.form_main_cont}>
                        <Typography className={classes.form_heading} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>New Patient Entry</Typography>
                       { stepOne ? <>  <Container className={classes.status_bar_cont}>
                            <Typography className={classes.current_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>1</Typography>
                            <Typography className={classes.empty_bar}></Typography>
                            <Typography className={classes.empty_circle} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>2</Typography>
                            <Typography className={classes.empty_bar}></Typography>
                            <Typography className={classes.empty_circle} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>3</Typography>
                        </Container>
                        <Container className={classes.details_cont}>
                            <Formik 
                            initialValues ={stepOneInitData} validationSchema={stepOneValidate}
                            >
                                {formik => (
                                    <div>
                                        {/* {console.log(formik.values)} */}
                                        <Form>
                                        <Container  style={{display: "flex"}}>
                                            <Typography className={classes.input_cont}>
                                                <TextField label="Patient Name" name="patientName" type="text" placeholder="Patient Name"/>
                                            </Typography>
                                            <CheckBox label="Diabetic" title="Diabetic" name="isDiabetic" type="checkbox" color="primary"/>
                                            <CheckBox label="Hyper Tension" title="Hyper Tension" name="isHyperTension" type="checkbox" color="secondary"/>
                                        </Container>
                                        <Container  style={{display: "flex"}}>
                                            <Typography className={classes.input_cont}>
                                                <TextField label="Policy Number" name="policyNumber" type="text" placeholder="Policy Number"/>
                                            </Typography>
                                            <Typography className={classes.input_cont}>
                                                <TextField label="Blood Pressure" name="bloodPressure" type="number" placeholder="Blood Pressure"/>
                                            </Typography>
                                        </Container>
                                        <Container  style={{display: "flex"}}>
                                            <Typography className={classes.input_cont}>
                                                <TextField label="Emergency" name="emergency" type="text" placeholder="Emergency / Sickness"/>
                                            </Typography>
                                            <Typography className={classes.input_cont}>
                                                <TextField label="BMI Count" name="bmiCount" type="number" placeholder="BMI Count"/>
                                            </Typography>
                                        </Container>
                                        <Container  style={{display: "flex"}}>
                                            <Typography className={classes.input_cont} style={{paddingTop: "0px", paddingBottom:"0px"}}>
                                                <SelectBox label="Gender" name="gender"/>
                                            </Typography>
                                        </Container>
                                        <Container style={{display: "flex", border: "0px solid red", justifyContent:"space-between", width:"200px", marginLeft:"575px", marginTop:"20px"}}>
                                        <Button size="small" variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500"}} onClick={handleCancel}>Cancel</Button>
                                        <Button size="small" variant="contained" onClick={ formik.values.gender ? () => handleOneNext(formik.values) : ""} color="primary" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500"}}> Next </Button>
                                        </Container>
                                    </Form>
                                </div>
                                )}  
                            </Formik>
                        </Container> </> : stepTwo ? <>
                        <Container className={classes.status_bar_cont}>
                            <Typography className={classes.filled_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>1</Typography>
                            <Typography className={classes.filled_bar}></Typography>
                            <Typography className={classes.current_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>2</Typography>
                            <Typography className={classes.empty_bar}></Typography>
                            <Typography className={classes.empty_circle} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>3</Typography>
                        </Container>
                        <Container className={classes.details_cont}>
                            <Formik 
                            initialValues ={stepTwoInitData} validationSchema={stepTwoValidate}
                            >
                                {formik => (
                                    <div>
                                        {/* {console.log(formik.values)} */}
                                        <Form>
                                        <h1 style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontSize:"25px", fontWeight:"500", marginTop:"40px", textDecoration:"underline"}}>Prescription</h1>
                                        <TextArea label="Prescription" value={formik.values.prescription} name="prescription" type="text" placeholder="Add prescription..."/>
                                        <Container style={{display: "flex", border: "0px solid red", justifyContent:"space-between", width:"200px", marginLeft:"575px", marginTop:"20px"}}>
                                        <Button size="small" variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500"}} onClick={handleTwoBack}>Back</Button>
                                        <Button size="small" variant="contained" onClick={ formik.values.prescription ? () => handleTwoNext(formik.values) : ""} color="primary" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500"}}> Next </Button>
                                        </Container>
                                    </Form>
                                </div>
                                )}  
                            </Formik>
                        </Container>
                         </> : stepThree ? <>
                         <Container className={classes.status_bar_cont}>
                            <Typography className={classes.filled_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>1</Typography>
                            <Typography className={classes.filled_bar}></Typography>
                            <Typography className={classes.filled_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>2</Typography>
                            <Typography className={classes.filled_bar}></Typography>
                            <Typography className={classes.current_round} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`}}>3</Typography>
                        </Container>
                        <Container className={classes.details_cont}>
                            <Formik 
                            initialValues ={stepThreeInitData} validationSchema={stepThreeValidate}
                            >
                                {formik => (
                                    <div>
                                        {/* {console.log(formik.values)} */}
                                        <Form>
                                        <h1 style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontSize:"25px", fontWeight:"500", marginTop:"40px", textDecoration:"underline"}}>Addition Information</h1>
                                        <TextArea1 label="Addition Information" value={formik.values.additionInformation} name="additionInformation" type="text" placeholder="Addition Information..."/>
                                        <Container style={{display: "flex", border: "0px solid red", justifyContent:"space-between", width:"200px", marginLeft:"575px", marginTop:"20px"}}>
                                        <Button size="small" variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500"}} onClick={handleThreeBack}>Back</Button>
                                        <Button size="small" variant="contained" onClick={ formik.values.additionInformation ? () => handleFinalSubmit(formik.values) : ""} color="primary" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500"}}> Submit </Button>
                                        </Container>
                                    </Form>
                                </div>
                                )}  
                            </Formik>
                        </Container>
                          </> : ""}
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default PatientForm;