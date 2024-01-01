import { TextField, TextareaAutosize, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Button from "@mui/material/node/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/node/Card";
import { useState, useEffect } from "react";
import Styled from "@emotion/styled";
//EditNote component
export function EditNote() {
  // note variable with state management
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  //Mui Button Styling
  const StyledButton = Styled(Button)({
    background: "#00ADB5",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7ED7C1",
    },
  });
  let { noteid } = useParams();
  //Fetching a specific note from server
  useEffect(() => {
    fetch("https://taskivist.onrender.com/notes/" + noteid, { method: "GET" }).then(
      (resp) => {
        {
          resp.json().then((data) => {
            setNote(data);
          });
        }
      }
    );
  }, []);

  return (
    // Edit note card
    <div>
      <UpdateCard note={note}></UpdateCard>
    </div>
  );

  function UpdateCard(props) {
    const [title, setTitle] = useState(props.note.title);
    const [description, setDescription] = useState(props.note.description);
    return (
      <div>
{/*         //Button to goto homepage */}
        <StyledButton
          variant="contained"
          style={{ margin: "20px 20px" }}
          onClick={() => {
            navigate("/notes");
          }}
        >
          Back
        </StyledButton>
        
{/*         //Edit note card */}
        <div style={{ paddingTop: "100px" }}>
          <center>
            <Card style={{ width: "400px" }}>
              <div style={{ backgroundColor: "#EEEEEE", padding: "10px" }}>

{/*                 //Edit Note Title */}
                <TextField
                  variant="standard"
                  defaultValue={note.title}
                  sx={{ input: { backgroundColor: "#EEEEEE" } }}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />

{/*                 //Edit note description */}
                <TextareaAutosize
                  label="Description"
                  fullWidth
                  style={{ margin: "5px 0", width: "100%" }}
                  minRows={20}
                  sx={{ input: { backgroundColor: "#EEEEEE" } }}
                  defaultValue={note.description}
                  onChange={(e) => setDescription(e.target.value)}
                />

{/*                 //Save edit button */}
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    fetch("https://taskivist.onrender.com/notes/" + props.note.id, {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        title: title,
                        description: description,
                      }),
                    }).then((res) => {
                      res.json().then((data) => {
                        alert("Note Updated Succesfully");
                        console.log(data);
                        navigate("/notes");
                      });
                    });
                  }}
                >
                  Save
                </StyledButton>
              </div>
            </Card>
          </center>
          ;
        </div>
      </div>
    );
  }
}
