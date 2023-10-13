import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Appbar(){
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        function callTwo(data){
            if(data.username){
                setUser(data.username);
            }
        }
        function callOne(res){
            res.json().then(callTwo);
        }
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "authorization" : "Bearer " + localStorage.getItem("token")
            }
        }).then(callOne)
    },[]);

    if(user){
        return  <div style = {{display: "flex", 
                      justifyContent: "space-between"}}>
            <div style = {{paddingLeft: 10, paddingTop: 10}}>
                <Typography variant = {"h5"} >Coursera</Typography>
            </div>
            <div style={{paddingTop: 10, paddingRight: 10}}>
                <Typography 
                    variant = {"h6"}
                    style={{
                        marginRight: 10,
                    }}>Welcome back! {user}</Typography>
                <Button size = "large" 
                    variant = "outlined"
                    style={{marginRight:10}}
                    onClick={() => {
                        window.location = "/getcourses"
                    }}>Courses</Button>
                <Button size = "large" 
                    variant = "outlined"
                    style={{marginRight:10}}
                    onClick={() => {
                        window.location = "/addcourse"
                    }}>Add Course</Button>
                <Button size = "large" 
                    variant = "contained"
                    onClick={() => {
                        localStorage.setItem("token", null);
                        window.location = "/"
                    }}>Logout</Button>
            </div>
        </div>
    }
    else{
        return <div style = {{display: "flex", 
                      justifyContent: "space-between"}}>
            <div style = {{paddingLeft: 10, paddingTop: 10}}>
                <Typography variant = {"h5"} >Coursera</Typography>
            </div>
            <div style={{paddingTop: 10, paddingRight: 10}}>
                <Button size = "large"
                 variant = "outlined" 
                 style={{marginRight: 10}}
                 onClick={() => {
                    navigate("/signup")
                 }}>Signup</Button>
                <Button size = "large" 
                variant = "outlined"
                onClick={() => {
                    navigate("/login")
                }}>Signin</Button>
            </div>
        </div>
    }

}
export default Appbar;