import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import {
  People,
  Storefront,
  History,
  Group,
  OndemandVideo,
  ExpandMore,
} from "@mui/icons-material";

const menuItems = [
  {
    text: "Mostafa Arafat",
    icon: <Avatar src="personal.jpg" sx={{ width: 32, height: 32 }}></Avatar>,
  },
  { text: "Friends", icon: <People sx={{ color: "#1877f2" }} /> },
  { text: "Marketplace", icon: <Storefront sx={{ color: "#1877f2" }} /> },
  { text: "Most Recent", icon: <History sx={{ color: "#1877f2" }} /> },
  { text: "Groups", icon: <Group sx={{ color: "#1877f2" }} /> },
  { text: "Watch", icon: <OndemandVideo sx={{ color: "#1877f2" }} /> },
  { text: "See More", icon: <ExpandMore sx={{ color: "white" }} /> },
];

const shortcuts = [
  {
    text: "RCB Fanclub",
    icon: (
      <Avatar
        sx={{
          width: 32,
          height: 32,
          bgcolor: "#ffffff",
          color: "#000000",
          fontSize: "1rem",
        }}
      >
        RF
      </Avatar>
    ),
  },
  {
    text: "Test Championship",
    icon: (
      <Avatar
        sx={{
          width: 32,
          height: 32,
          bgcolor: "#ffffff",
          color: "#000000",
          fontSize: "1rem",
        }}
      >
        TC
      </Avatar>
    ),
  },
];

export default function LeftSide() {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "fixed",
        p: 1,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={400}>
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 1 }} />
      <Typography
        variant="p"
        color="white"
        sx={{ color: "white", p: "8px 16px" }}
      >
        Your Shortcuts
      </Typography>
      <List>
        {shortcuts.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography color="white" fontWeight={400}>
                    {item.text}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
