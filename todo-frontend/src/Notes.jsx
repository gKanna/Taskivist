import Card from "@mui/material/node/Card";
import { Typography } from "@mui/material";
import Styled from "@emotion/styled";
import { Notelist } from "./Notelist";
import Button from "@mui/material/node/Button";
import { useNavigate } from "react-router-dom";
export function Notes() {
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
        Back
      </StyledButton>
      <center>
        <Card
          sx={{ color: "#EEE7DA" }}
          style={{
            marginTop: "50px",
            marginLeft: "60px",
            marginRight: "50px",
            // width: "60%",
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
                Notes
              </Typography>
              <StyledButton
                variant="contained"
                onClick={() => {
                  navigate("/notes/newnote");
                }}
              >
                New Note
              </StyledButton>
              <Notelist></Notelist>
            </center>
          </div>
        </Card>
      </center>
    </div>
  );
}
