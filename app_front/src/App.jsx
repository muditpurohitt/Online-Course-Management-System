import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup.jsx";
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx";
import Addcourse from "./Addcourse.jsx";
import Getcourses from "./getcourses";
import Course from "./Course";

function App() {
  return <>
    <div style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1621351841224-e2e3a9960f17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)",
                height: "100vh",
                width: "100vw",
                backgroundSize : "cover",
                backgroundPosition : "center center",
                backgroundRepeat : "repeat-y"
              }}>

      <Router>
        <Appbar/>
        <Routes>
          <Route path = {"/signup"} element = {<Signup/>}></Route>
          <Route path = {"/login"} element = {<Signin/>}></Route>
          <Route path = {"/addcourse"} element = {<Addcourse/>}></Route>
          <Route path = {"/getcourses"} element = {<Getcourses/>}></Route>
          <Route path = {"/course/:courseId"} element={<Course />}></Route>
        </Routes>
      </Router>

    </div>
  </>
}

export default App;
