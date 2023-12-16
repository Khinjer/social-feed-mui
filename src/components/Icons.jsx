import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";


const UserAvatar = styled(Box)(({ theme }) => {
  return {
    display: "none",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  };
});

function Icons({handleOpenMenu,xref}) {
  return (
    <Stack direction="row" spacing={2.5}>
      <Badge badgeContent={2} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={1} color="secondary">
        <Notifications />
      </Badge>
      <Avatar
        alt="Cindy Baker"
        src="https://mui.com/static/images/avatar/3.jpg"
        sx={{ width: 25, height: 25, display: { sm: "none" } }}
        onClick={handleOpenMenu}
      />
      <UserAvatar onClick={handleOpenMenu}>
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ width: 25, height: 25 }}
        />
        <Typography variant="span">John Doe</Typography>
      </UserAvatar>
    </Stack>
  );
}

export default Icons;
