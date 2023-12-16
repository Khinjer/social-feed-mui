import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import Feed from "./components/Feed";
import Stack from "@mui/material/Stack";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { Box, Button } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 15 : 0,
  });
};

function App() {
  const [showSideBar, setShowSideBar] = React.useState(true);
  const [mode, setMode] = React.useState("light");

  let theme = createTheme({
    palette: {
      mode: mode,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            overflow: "unset",
            padding: "32px",
          },
        },
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const handleClick = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <ElevationScroll>
          <NavBar />
        </ElevationScroll>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          {showSideBar ? (
            <SideBar handleClick={handleClick} switchTheme={setMode} />
          ) : (
            <Button
              onClick={handleClick}
              sx={
                {
                  /* bottom: "36px",
              right: "24px",
              position: "absolute",*/
                }
              }
              variant="outlined"
              size="medium"
              color="primary"
              endIcon={<StartIcon />}
            />
          )}
          <Feed />
          <RightBar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
