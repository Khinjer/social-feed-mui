import Box from "@mui/material/Box";

import OnlineFriends from "./OnlineFriends";
import CustomImageList from "./CustomImageList";
import Conversations from "./Conversations";


function RightBar() {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          xl: "block",
        },
      }}
    >
      <Box height="93vh" overflow="scroll">
        <OnlineFriends />
        <CustomImageList />
        <Conversations/>
      </Box>
    </Box>
  );
}

export default RightBar;
