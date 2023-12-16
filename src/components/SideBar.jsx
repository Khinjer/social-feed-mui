import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Button, ListItem, Switch } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";

import {
  Home,
  Pages,
  Settings,
  AccountBox,
  People,
  Storefront,
  Person,
  Groups,
  DarkMode,
} from "@mui/icons-material";

export default function SideBar({handleClick, switchTheme}) {

  const handleSwitchChange = (e) => {
    if(e.target.checked){
      switchTheme("dark");
    }else{
      switchTheme("light");
    }
  }
  return (
    <Box
      position="relative"
      flex={1}
      sx={{
        display: {
          xs: "none",
          lg: "block",
        },
      }}
    >
      <Box
        p={2}
        overflow="scroll"
        position="fixed"
        height="93vh"
        sx={{
          overflowX: "hidden",
          width: "360px",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              components="a"
              href="#"
              disableRipple
              disableTouchRipple
            >
              <ListItemIcon>
                <DarkMode />
              </ListItemIcon>
              <Switch disableRipple color="default" onChange={handleSwitchChange} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider variant="fullWidth" />
      </Box>

      <Button
        onClick={handleClick}
        sx={{
          bottom: "50px",
          right: "24px",
          position: "absolute",
        }}
        variant="outlined"
        size="medium"
        color="primary"
        endIcon={<StartIcon sx={{ transform: "rotate(180deg)" }} />}
      />
    </Box>
  );
}
