import {Card, Typography} from "@mui/material";  
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import {useState} from "react";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return <>
        <div style ={{paddingTop: 150,
            paddingBottom: 20,
            display: "flex",
            justifyContent: "center"}}>
            <Typography variant = {"h4"}>Welcome to Coursera!</Typography>
        </div>
        <div style={{display: "flex",
                    justifyContent: "center"}}>
            <Card variant="outlined" style = {{width:400, padding:20}}>
                <TextField 
                fullWidth label="Email" 
                variant="outlined" 
                onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                <br></br><br></br>
                <TextField 
                fullWidth 
                label="Password" 
                variant="outlined" 
                type="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <br></br><br></br>
                <Button 
                variant="contained"
                onClick={async() => {
                    const response = await axios.post("http://localhost:3000/admin/signup", {
                        username: email,
                        password: password
                    })
                    let data = response.data;
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("id", data.id);
                    window.location = "/"
                }}>Signup</Button>
            </Card>
        </div>
    </>
}
export default Signup;