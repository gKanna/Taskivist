import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Homepage } from "./Homepage.jsx";
import NewTodo from "./NewTodo.jsx";
import { EditTodo } from "./EditTodo.jsx";
import { EditNote } from "./EditNote.jsx";
import NewNote from "./NewNote.jsx";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const [Loading, SetLoading] = useState(false);
  useEffect(() => {
    SetLoading(true);
    setTimeout(() => {
      SetLoading(false);
    }, 1000);
  }, []);
  if (Loading) {
    return (
      <div style={{ width: "100vw" }}>
        <center>
          <LinearProgress />
        </center>
      </div>
    );
  }
  return (
    <div
      style={{
        margin: "0px",
        // height: "100vh",
        // width: "100vw",
      }}
    >
      <BrowserRouter>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="\WhatsApp_Image_2023-12-12_at_12.05.22_bb56d0b9-removebg-preview.png"
              alt=""
              style={{ height: "10 0px",
                position: "relative",
                top: "10px",
                left: "20px",
                width: "100px" }}
            />
          </div>
          <div>
            <Typography
              variant="h2"
              style={{
                marginTop: "10px",
                color: "White",
                fontFamily: ["Nova Square", "sans-serif"],
              }}
            >
              Taskivist
            </Typography>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo/addtodo" element={<NewTodo />} />
          <Route path="/todo/:todoid" element={<EditTodo />} />
          <Route path="/note/newnote" element={<NewNote />} />
          <Route path="/note/:noteid" element={<EditNote />} />
        </Routes>
        
      </BrowserRouter>
      <footer
        style={{
          backgroundColor: "#393e46" /* Darker footer background color */,
          padding: "20px",
          textAlign: "center",
          position: "absolute",
          bottom: "0",
          width: "100vw",
        }}
      >
        <p style={{ fontFamily: [" Arial", "sans-serif"], color: "#ffffff" }}>
          &copy; 2023 Taskivist <br />
        </p>
      </footer>
    </div>
  );
}

export default App;
