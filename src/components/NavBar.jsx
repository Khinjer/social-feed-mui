import { useState, useRef } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {orange} from "@mui/material/colors";


import SearchTopBar from "./SearchTopBar";
import Icons from "./Icons";



export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <AppBar elevation={3} position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          MUI
        </Typography>
        <PeopleAltIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <SearchTopBar />
        <Icons
          handleOpenMenu={(e) => {
            setAnchorEl(e.currentTarget);
            setOpen(true);
          }}
        />
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
          setOpen(false);
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
