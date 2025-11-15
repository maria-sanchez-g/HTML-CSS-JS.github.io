// Components/NavBar.jsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge"
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useUser } from "../Context/UserContext";
import { useProducts } from "../Context/ProductContext.jsx";


export default function NavBar() {
  const navigate = useNavigate();
  const { totalQty, totalPrice } = useCart();
  const { items: products } = useProducts();
  const grandTotal = totalPrice(products);

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
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
            About
         </Button>
          <Button color="inherit" onClick={() => navigate("/cart")}>
            <Badge badgeContent={totalQty} color="error">
            Cart
           </Badge>
          <Typography variant="body2">
             ${grandTotal.toFixed(2)}           
          </Typography>
         </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}