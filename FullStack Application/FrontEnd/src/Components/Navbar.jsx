// Components/NavBar.jsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useUser } from "../Context/UserContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { cart } = useCart();

 // Count total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);//This line adds up all the quantities of all products in the cart to get one total count.
//.reduce() Takes an array and reduces it into one result
// cart.reduce(...)	Loop through each element in the cart array.
// (sum, item)	sum is the accumulator (running total), item is the current cart line.
// sum + item.qty	Add the quantity of the current item to the running total.
// 0	The starting value for sum is zero.

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App {totalItems}</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cart
          </Typography>          
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
            About
          </Button>
          <Button color="inherit" onClick={() => navigate("/cart")}>
            Cart
          </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}