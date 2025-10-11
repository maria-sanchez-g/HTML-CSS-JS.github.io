import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { UserContext } from "../Context/UserContext";
export default function MUIDialog({ text }) {
  const { open, toggleOpen } = React.useContext(UserContext);
  // const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div>
      <Dialog open={open} onClose={toggleOpen}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpen} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
} // Render as <MUIDialog text="My first MUI Dialog" />
