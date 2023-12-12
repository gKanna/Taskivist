import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
function Todolist() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://taskivist.onrender.com/todos", { method: "GET" }).then((resp) => {
      {
        resp.json().then((data) => {
          console.log(data);
          setTodos(data);
        });
      }
    });
  }, []);
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      ></div>

      {todos.map((todo) => {
        const id = todo.id;
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
                {todo.title}
              </Typography>
              <Typography variant="subtitle2" color={"Black"}>
                {todo.description}
              </Typography>

              <Button
                variant="contained"
                onClick={() => {
                  console.log("Todo id :", todo.id);
                  navigate("/todo/" + todo.id);
                }}
              >
                <EditIcon></EditIcon>
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  fetch(`https://taskivist.onrender.com/todos/${id}`, {
                    method: "DELETE",
                  });
                  alert("Todo deleted successfully ");
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
export default Todolist;
