"use client";
import { Cake, VolumeUp, Search, MoreHoriz } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  IconButton,
  Divider,
} from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  "@keyframes ripple": {
    "0%": { transform: "scale(.8)", opacity: 1 },
    "100%": { transform: "scale(2.4)", opacity: 0 },
  },
}));

const contacts = [
  { name: "Anushka Sharma", src: "personal.jpg" },
  { name: "Smriti Mandhana", src: "2.jpg" },
  { name: "MS Dhoni", src: "personal.jpg" },
  { name: "Hardik Pandya", src: "2.jpg" },
  { name: "Ellyse Perry", src: "personal.jpg" },
  { name: "Shubhman Gill", src: "2.jpg" },
  { name: "KL Rahul", src: "personal.jpg" },
];

export default function RightSide() {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "fixed",
        p: 1,
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
          Your Pages and Profiles
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ color: "#d0d0d0", borderRadius: 2 }}>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: "#1E88E5" }}>IC</Avatar>
            </ListItemIcon>
            <ListItemText primary="ICC Officials" />
            <VolumeUp />
          </ListItemButton>
        </ListItem>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
          Birthdays
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ color: "#d0d0d0", borderRadius: 2 }}>
            <ListItemIcon>
              <Cake sx={{ color: "primary.main", fontSize: 32 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <span>
                  <b>Anushka</b> and <b>2 others</b> have birthdays today.
                </span>
              }
            />
          </ListItemButton>
        </ListItem>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#d0d0d0", fontWeight: 600 }}>
            Contacts
          </Typography>
          <Box>
            <IconButton size="small">
              <Search sx={{ color: "white" }} />
            </IconButton>
            <IconButton size="small">
              <MoreHoriz sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.name} disablePadding>
              <ListItemButton sx={{ color: "#d0d0d0", borderRadius: 2 }}>
                <ListItemIcon>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    variant="dot"
                  >
                    <Avatar src={contact.src}></Avatar>
                  </StyledBadge>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography fontWeight={600}>{contact.name}</Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
