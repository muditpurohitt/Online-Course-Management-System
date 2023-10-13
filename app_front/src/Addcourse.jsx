import { useState} from "react";
import {Card, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Addcourse(){
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [image, setImg] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();
    
    return <div>
        <div style = {{display: "flex", justifyContent: "center" }}>
            <Typography variant = {"h6"}>Add the course below!</Typography>
        </div>
        <div style = {{display: "flex", justifyContent: "center"}}>
            <Card variant = {"outlined"}
            style={{width:400, padding:20, marginTop: 40 }}>
                <TextField fullwidth  label = "Title" style = {{marginBottom: 10, display: "flex", justifyContent: "center"}}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}></TextField>
                <TextField fullwidth label = "Description" style = {{marginBottom: 10, display: "flex", justifyContent: "center"}}
                onChange={(e) => {
                    setDesc(e.target.value);
                }}></TextField>
                <TextField fullwidth label = "image" style = {{marginBottom: 10, display: "flex", justifyContent: "center"}}
                onChange={(e) => {
                    setImg(e.target.value);
                }}></TextField>
                <TextField fullwidth label = "price" style = {{marginBottom: 10, display: "flex", justifyContent: "center"}}
                onChange={(e) => {
                    setPrice(e.target.value);
                }}></TextField>
                <div style = {{display: "flex", justifyContent: "center"}}
                onClick={async() => {
                    await axios.post("http://localhost:3000/admin/courses",{
                    user_id: localStorage.getItem("id"),
                    title: title,
                    description: description,
                    imageLink: image,
                    published: true,
                price},{
                    headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            });
                alert("Coursr Added!")
                navigate("/getcourses")
                }}><Button variant = "contained">Publish</Button></div>
            </Card>
        </div>
    </div>
}

export default Addcourse;