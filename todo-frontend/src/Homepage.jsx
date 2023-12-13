import Grid from "@mui/material/Grid";
import Button from "@mui/material/node/Button";
import Card from "@mui/material/node/Card";
import Todolist from "./TodoList";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { Notelist } from "./Notelist";
import Styled from "@emotion/styled";
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
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{ color: "#EEE7DA" }}
            style={{
               marginTop: "50px",
                marginLeft: "60px",
                marginRight: "50px",
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
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    navigate("/todo/addtodo");
                  }}
                >
                  Add Todo
                </StyledButton>
                <Todolist></Todolist>
              </center>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            style={{
              marginTop: "50px",
                marginLeft: "60px",
                marginRight: "50px",
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
                <StyledButton
                  variant="contained"
                  onClick={() => {
                    navigate("/note/newnote");
                    setLoading(true);
                  }}
                >
                  New Note
                </StyledButton>
                <Notelist></Notelist>
              </center>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
