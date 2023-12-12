import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
export function Notelist() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("taskivist-api.vercel.app/notes", { method: "GET" }).then((resp) => {
      {
        resp.json().then((data) => {
          console.log(data);
          setNotes(data);
        });
      }
    });
  }, []);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      ></div>

      {notes.map((note) => {
        const id = note.id;
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Card
              style={{
                backgroundColor: "#EEEEEE",
                padding: "10px",
                width: "400px",
              }}
            >
              <Typography variant="h6" color={"Black"}>
                {note.title}
              </Typography>
              {/* <Typography variant="subtitle2" color={"white"}>
                {note.description}
              </Typography> */}

              <Button
                variant="contained"
                onClick={() => {
                  //   console.log("Note id :", note.id);
                  navigate("/note/" + note.id);
                }}
              >
                <EditIcon></EditIcon>
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  fetch(`taskivist-api.vercel.app/notes/${id}`, {
                    method: "DELETE",
                  });
                  alert("Note deleted successfully ");
                  window.location.reload();
                }}
                color="error"
                style={{ marginLeft: "5px" }}
              >
                <DeleteOutlineIcon></DeleteOutlineIcon>
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
