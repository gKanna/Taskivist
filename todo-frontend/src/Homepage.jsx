import Grid from "@mui/material/Grid";
import Card from "@mui/material/node/Card";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/node/Button";
import { Notelist } from "./Notelist";
import Styled from "@emotion/styled";
export function Homepage() {
  const navigate = useNavigate();
  const StyledButton = Styled(Button)({
    background: "#00ADB5",
    textTransform: "none",
    fontSize: 26,
    "&:hover": {
      backgroundColor: "#7ED7C1",
    },
  });

  return (
    <div style={{ marginTop: "200px" }}>
      <center>
        <StyledButton
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/todos");
          }}
        >
          Todos
        </StyledButton>
        <br />
        <br />
        <StyledButton
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/notes");
          }}
        >
          Notes
        </StyledButton>
      </center>
    </div>
  );
}
