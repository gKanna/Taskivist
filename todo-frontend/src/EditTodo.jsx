import { TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Button from "@mui/material/node/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/node/Card";
import { useState, useEffect } from "react";
import Styled from "@emotion/styled";

export function EditTodo() {
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();
  const StyledButton = Styled(Button)({
    background: "#00ADB5",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7ED7C1",
    },
  });
  let { todoid } = useParams();
  useEffect(() => {
    fetch("https://taskivist.onrender.com/todos/" + todoid, { method: "GET" }).then(
      (resp) => {
        {
          resp.json().then((data) => {
            setTodo(data);
          });
        }
      }
    );
  }, []);

  return (
    <div>
      <UpdateCard todo={todo}></UpdateCard>
    </div>
  );

  function UpdateCard(props) {
    const [title, setTitle] = useState(props.todo.title);
    const [description, setDescription] = useState(props.todo.description);
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
                <Typography variant="h4" color={"Black"}>
                  Edit Todo
                </Typography>
                <TextField
                  label="Title"
                  variant="filled"
                  defaultValue={todo.title}
                  fullWidth
                  sx={{ input: { backgroundColor: "white" } }}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <TextField
                  label="Description"
                  variant="filled"
                  style={{ margin: "5px 0" }}
                  fullWidth
                  sx={{ input: { backgroundColor: "white" } }}
                  defaultValue={todo.description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    fetch("https://taskivist.onrender.com/todos/" + props.todo.id, {
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
                        alert("Todo Updated Succesfully");
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
