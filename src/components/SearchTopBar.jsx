import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

function SearchTopBar() {
  return (
    <Box
      width="30%"
      bgcolor="white"
      borderRadius="6px"
      p={0.75}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <InputBase fullWidth placeholder="search..."  />
    </Box>
  );
}

export default SearchTopBar;
