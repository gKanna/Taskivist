import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { TextareaAutosize } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Styled from "@emotion/styled";

function NewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const StyledButton = Styled(Button)({
    background: "#00ADB5",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7ED7C1",
    },
  });

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#EEEEEE",
          }}
        >
          Add Note
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Card */}
        <Card style={{ width: "800px", padding: "20px" }}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="standard"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextareaAutosize
            fullWidth
            label="Note"
            Textarea
            style={{ width: "100%" }}
            minRows={20}
            size="lg"
            // variant="filled"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <br />
          <br />
          <StyledButton
            variant="contained"
            fullWidth
            onClick={() => {
              fetch("http://localhost:3000/notes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  title: title,
                  description: description,
                }),
              }).then((resp) => {
                resp.json().then((data) => {
                  console.log(data);
                  alert("Note Added successfully");
                  window.location.reload();
                });
              });
            }}
          >
            Create
          </StyledButton>
        </Card>
      </div>
    </div>
  );
}
export default NewNote;
