import { TextField, TextareaAutosize, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Button from "@mui/material/node/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/node/Card";
import { useState, useEffect } from "react";
import Styled from "@emotion/styled";

export function EditNote() {
  const [note, setNote] = useState([]);
  const navigate = useNavigate();
  const StyledButton = Styled(Button)({
    background: "#00ADB5",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7ED7C1",
    },
  });
  let { noteid } = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/notes/" + noteid, { method: "GET" }).then(
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
    <div>
      <UpdateCard note={note}></UpdateCard>
    </div>
  );

  function UpdateCard(props) {
    const [title, setTitle] = useState(props.note.title);
    const [description, setDescription] = useState(props.note.description);
    return (
      <div>
        <StyledButton
          variant="contained"
          style={{ margin: "20px 20px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Dashboard
        </StyledButton>
        <div style={{ paddingTop: "100px" }}>
          <center>
            <Card style={{ width: "400px" }}>
              <div style={{ backgroundColor: "#EEEEEE", padding: "10px" }}>
                {/* <Typography variant="h4" color={"white"}>
                  Edit Note
                </Typography> */}
                <TextField
                  variant="standard"
                  defaultValue={note.title}
                  sx={{ input: { backgroundColor: "#EEEEEE" } }}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <TextareaAutosize
                  label="Description"
                  fullWidth
                  style={{ margin: "5px 0", width: "100%" }}
                  minRows={20}
                  sx={{ input: { backgroundColor: "#EEEEEE" } }}
                  defaultValue={note.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    fetch("http://localhost:3000/notes/" + props.note.id, {
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
