"use client";
import React from "react";
import {
  Box,
  Card,
  Tabs,
  Tab,
  CardHeader,
  Avatar,
  InputBase,
  Divider,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import {
  Add,
  Public,
  MoreHoriz,
  VideoCall,
  PhotoLibrary,
  InsertEmoticon,
  ThumbUp,
  ChatBubbleOutline,
  Share,
} from "@mui/icons-material";

const stories = [
  {
    name: "Rohit Sharma",
    img: "personal.jpg",
  },
  {
    name: "Surya Kumar",
    img: "2.jpg",
  },
  {
    name: "Rishab Pant",
    img: "personal.jpg",
  },
  {
    name: "Shubhman Gill",
    img: "2.jpg",
  },
];

export default function MainContent() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: "680px",
        mx: "auto",
      }}
    >
      <Card sx={{ mb: 3, color: "white", bgcolor: "#222323" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab label="Stories" sx={{ fontWeight: 500, color: "white" }} />
          <Tab label="Reels" sx={{ fontWeight: 500, color: "white" }} />
        </Tabs>
        <Divider />
        <Box sx={{ display: "flex", p: 2, gap: 1, overflowX: "hidden" }}>
          <Card
            sx={{
              minWidth: 120,
              position: "relative",
              textAlign: "center",
            }}
          >
            <CardMedia
              component="div"
              sx={{ height: 140, bgcolor: "primary.main" }}
            />
            <Box sx={{ bgcolor: "#f5f5f5", p: 1 }}>
              <Typography variant="caption" fontWeight={600}>
                Create Story
              </Typography>
            </Box>
            <Avatar
              sx={{
                position: "absolute",
                top: "125px",
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "primary.main",
                border: `4px solid #242526`,
              }}
            >
              <Add />
            </Avatar>
          </Card>

          {stories.map((story) => (
            <Card key={story.name} sx={{ minWidth: 120, position: "relative" }}>
              <CardMedia
                component="img"
                height="200"
                image={story.img}
                alt={story.name}
              />
              <Typography
                variant="caption"
                fontWeight={500}
                sx={{
                  position: "absolute",
                  bottom: 8,
                  left: 8,
                  color: "white",
                }}
              >
                {story.name}
              </Typography>
            </Card>
          ))}
        </Box>
      </Card>

      <Card sx={{ mb: 3, bgcolor: "#222323", color: "white" }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "primary.main" }}>M</Avatar>}
          title={
            <Box
              sx={{
                borderRadius: "20px",
                p: "8px 16px",

                bgcolor: "gray",
              }}
            >
              <InputBase
                placeholder="What's on your mind, Mostafa?"
                fullWidth
                sx={{ color: "white" }}
              />
            </Box>
          }
        />
        <Divider sx={{ mx: 2 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 1,
          }}
        >
          <Button
            startIcon={<VideoCall color="error" />}
            sx={{ color: "white" }}
          >
            Live Video
          </Button>
          <Button
            startIcon={<PhotoLibrary color="success" />}
            sx={{ color: "white" }}
          >
            Photo/Video
          </Button>
          <Button
            startIcon={<InsertEmoticon color="warning" />}
            sx={{ color: "white" }}
          >
            Feeling/activity
          </Button>
        </Box>
      </Card>

      <Card sx={{ color: "white", bgcolor: "#222323" }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "primary.main" }}>IC</Avatar>}
          title={<Typography fontWeight="bold">Indian Cricket Team</Typography>}
          subheader={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography variant="caption" color="white">
                5h
              </Typography>
              <Public
                sx={{
                  fontSize: "1rem",
                  color: "white",
                }}
              />
            </Box>
          }
          action={
            <IconButton>
              <MoreHoriz sx={{ color: "white" }} />
            </IconButton>
          }
        />
        <CardContent sx={{ pt: 0 }}>
          <Typography variant="p">
            India has been touring Australia since 1947, but all that changed
            after winning the first and third Tests in Adelaide and Melbourne,
            respectively.
          </Typography>
        </CardContent>
        <CardMedia component="img" height="auto" image="3.jpg" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            borderTop: "1px solid #3E4042",
            mt: 1,
          }}
        >
          <Button
            startIcon={<ThumbUp />}
            sx={{ color: "white", flex: 1, py: 1.5 }}
          >
            Like
          </Button>
          <Button
            startIcon={<ChatBubbleOutline />}
            sx={{ color: "white", flex: 1, py: 1.5 }}
          >
            Comment
          </Button>
          <Button
            startIcon={<Share />}
            sx={{ color: "white", flex: 1, py: 1.5 }}
          >
            Share
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
