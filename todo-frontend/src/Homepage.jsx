import Grid from "@mui/material/Grid";
import Button from "@mui/material/node/Button";
import Card from "@mui/material/node/Card";
import Todolist from "./TodoList";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Notelist } from "./Notelist";
import Styled from "@emotion/styled";

//Homepage Component
export function Homepage() {
  const navigate = useNavigate();
  const StyledButton = Styled(Button)({
    background: "#00ADB5",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#7ED7C1",
    },
  });
  return (
    //main Div holding grid 
    <div style={{ display: "flex", marginBottom: "110px" }}>
      <Grid container spacing={2}>
        //Todo Card grid Item
        <Grid item xs={12} md={6}>
          <center>
            //Todo card
            <Card
              sx={{ color: "#EEE7DA" }}
              style={{
                marginTop: "50px",
                marginLeft: "60px",
                marginRight: "50px",
                // width: "60%",
                backdropfilter: blur("8px"),
              }}
            >
              <div
                style={{
                  backgroundColor: "#393E46",
                  padding: "20px",
                }}
              >
                <center>
                  <Typography variant="h4" color={"White"}>
                    To-Do
                  </Typography>
                  
                  //Add todo Button
                  <StyledButton
                    variant="contained"
                    onClick={() => {
                      navigate("/todo/addtodo");
                    }}
                  >
                    Add Todo
                  </StyledButton>
                  //display TodoList Component
                  <Todolist></Todolist>
                </center>
              </div>
            </Card>
          </center>
        </Grid>
        //Note card grid item
        <Grid item xs={12} md={6}>
          //Note card
          <Card
            style={{
              marginTop: "50px",
              marginLeft: "60px",
              marginRight: "50px",
              // width: "600px",
              backdropfilter: blur("8px"),
            }}
          >
            <div
              style={{
                backgroundColor: "#393E46",
                padding: "20px",
              }}
            >
              <center>
                <Typography variant="h4" color={"#F9F7F7"}>
                  Notes
                </Typography>

                //New note Button
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    navigate("/note/newnote");
                    setLoading(true);
                  }}
                >
                  New Note
                </StyledButton>
                // Display NoteList component 
                <Notelist></Notelist>
              </center>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
