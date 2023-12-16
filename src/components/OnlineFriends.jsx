import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function OnlineFriends() {
  return (
    <Box display="flex" alignItems="flex-start" flexDirection="column" mb={2} p={1}>
      <Typography variant="h6" fontWeight={300} mb={1}>
        Online Friends
      </Typography>
      <AvatarGroup max={5}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com//static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com//static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </Box>
  );
}

export default OnlineFriends;
