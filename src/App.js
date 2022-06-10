import React, { useState } from 'react';
import { Box, createTheme, Stack } from "@mui/material";
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { ThemeProvider } from '@mui/material';

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
