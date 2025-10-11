import { Box } from "@mui/material";
import { styled } from "@mui/system";
const styles = {
  color: "darkslategray",
  padding: "2em",
  borderRadius: "1em",
  border: "1px solid darkslategray",
  margin: "1em 0",
};
export const StyledDiv = styled("div")(styles);
export const StyledBox = styled(Box)(styles);
export default function BasicUsage() {
  return (
    <>
      <StyledDiv>This div includes styles</StyledDiv>
      <StyledBox>This box has the same styles</StyledBox>
    </>
  );
}
