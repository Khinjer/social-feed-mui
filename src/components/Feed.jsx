import Box from "@mui/material/Box";
import CardList from "./CardList";

function Feed() {
  return (
    <Box mt={4} p={2} flex={4} display="flex" justifyContent="center" sx={{ flex:{
      "xs" : 4,
      "sm" : 3
    }}}>
        <CardList />
    </Box>
  );
}

export default Feed;
