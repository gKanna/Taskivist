import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Styled from "@emotion/styled";
function NewTodo() {
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
          navigate("/todos");
        }}
      >
        Back
      </StyledButton>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#EEEEEE",
          }}
        >
          Add Todo
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Card */}
        <Card style={{ padding: "20px" }}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="filled"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="filled"
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
              fetch("https://taskivist.onrender.com/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  title: title,
                  description: description,
                }),
              }).then((resp) => {
                resp.json().then((data) => {
                  console.log(data);
                  alert("Todo Added successfully");
                  navigate("/todos");
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
export default NewTodo;
