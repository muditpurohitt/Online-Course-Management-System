import {useState, useEffect} from "react";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function Getcourses(){
    const[courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data){
            setCourses(data.courses)
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses", {
            method: "GET",
            headers : {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "id": localStorage.getItem("id")
            }
        }).then(callback1)
    }, []);

    return <div style = {{marginTop: 20, display : "flex", flexWrap: "wrap",  justifyContent: "center" }}>
        {courses.map( course => {
            return <Course course = {course}></Course>
        }
        )}
    </div>
}

export function Course({course}){
    const navigate = useNavigate();

    return <Card style={{
            margin: 10,
            width: 300,
            minHeight: 200,
            padding: 20
        }}>
                <Typography textAlign = {"center"} variant = {"h5"}>{course.title}</Typography>
                <Typography textAlign = {"center"}>{course.description}</Typography>
                <img src={course.imageLink} style={{width: 300}} ></img>
            <div style = {{display : "flex", justifyContent: "center"}}>
                <Button
                variant = "contained"
                size = "large"
                onClick={() => {
                    navigate("/course/" + course._id);
                }}>Edit</Button>
            </div>
        </Card>
}
export default Getcourses;