"use client";
import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Avatar,
  Badge,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Search,
  Home,
  OndemandVideo,
  Storefront,
  Groups,
  Extension,
} from "@mui/icons-material";

export default function Header() {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#3A3B3C",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FacebookIcon
            color="primary"
            sx={{
              fontSize: 30,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            ml: 2,
            display: "flex",
            alignItems: "center",
            bgcolor: "#f0f2f4",
            borderRadius: "15px",
            p: "4px 16px",
          }}
        >
          <Search sx={{ color: "text.secondary", mr: 1 }} />
          <InputBase placeholder="Search" sx={{ width: "150px" }} />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "block" },
            px: 5,
          }}
        >
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              icon={<Home sx={{ fontSize: 30 }} />}
              sx={{ minWidth: "100px", color: "white" }}
            />
            <Tab
              icon={<OndemandVideo sx={{ fontSize: 30 }} />}
              sx={{ minWidth: "100px", color: "white" }}
            />
            <Tab
              icon={<Storefront sx={{ fontSize: 30 }} />}
              sx={{ minWidth: "100px", color: "white" }}
            />
            <Tab
              icon={<Groups sx={{ fontSize: 30 }} />}
              sx={{ minWidth: "100px", color: "white" }}
            />
            <Tab
              icon={<Extension sx={{ fontSize: 30 }} />}
              sx={{ minWidth: "100px", color: "white" }}
            />
          </Tabs>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ bgcolor: "#333333", ml: 2, color: "white" }}>
            <AppsIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "#333333", ml: 2, color: "white" }}>
            <Badge badgeContent={3} color="primary">
              <MessageIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ bgcolor: "#333333", ml: 2, color: "white" }}>
            <Badge badgeContent={2} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            src="personal.jpg"
            sx={{
              ml: 2,
              width: 40,
              height: 40,
            }}
          ></Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
