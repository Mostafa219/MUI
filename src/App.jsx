import React from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Nav from "./components/Nav";
import LeftSide from "./components/LeftSide";
import Main from "./components/Main";
import RightSide from "./components/RightSide";

function App() {
  return (
    <Box sx={{ display: "flex", bgcolor: "#333333", minHeight: "100vh" }}>
      <CssBaseline />
      <Nav />

      <Box
        component="main"
        sx={{ display: "flex", bgcolor: "#333333", flexGrow: 1, pt: "64px" }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: "300px",
            bgcolor: "#222222",
          }}
        >
          <LeftSide />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "680px",
            mx: "auto",
            bgcolor: "#333333",
            color: "white",
            mt: -5,
          }}
        >
          <Toolbar />
          <Main />
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            width: "300px",
            bgcolor: "#222222",
          }}
        >
          <RightSide />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
