import { useEffect, useState } from "react";
import { getAllChats, getChatMessages } from "./Services/Services";
import { ChatList, ChatWindow, Sidebar } from "./Components";
import { Button, Box, IconButton, Typography, Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0088cc",
    },
    background: {
      default: "#f0f0f0",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#e0e0e0",
          },
        },
      },
    },
  },
});

const App = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchChats(currentPage);
  }, [currentPage]);

  const fetchChats = (page) => {
    getAllChats(page).then((response) => {
      setChats(response.data.data.data);
      setTotalPages(response.data.data.last_page);
    });
  };

  useEffect(() => {
    if (selectedChat) {
      getChatMessages(selectedChat.id).then((response) => {
        setMessages(response.data.data);
      });
    }
  }, [selectedChat]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ width: { xs: "100%", md: "100%", sm: "100%", lg: "100%" } }}
        bgcolor="#fff"
        boxShadow={3}
        height="100vh"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bgcolor="#72A0C1"
          p={2}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setSidebarOpen(true)}
              sx={{ verticalAlign: "middle" }}
            >
              <MenuIcon />
            </IconButton>{" "}
            <Typography variant="h6" gutterBottom mt={1}>
              Chats
            </Typography>
          </Box>
          <Avatar sx={{ cursor: "pointer" }}>V</Avatar>
        </Box>
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <Box
          className="app"
          display="flex"
          px={2}
          flexDirection={{ xs: "column", md: "row" }}
        >
          {selectedChat ? (
            <ChatWindow
              chat={selectedChat}
              messages={messages}
              setSelectedChat={setSelectedChat}
            />
          ) : (
            <ChatList chats={chats} onSelectChat={setSelectedChat} />
          )}
        </Box>
        {!selectedChat && (
          <Box display="flex" justifyContent="center" mt={1} gap={2}>
            <Button
              variant="contained"
              color="primary"
              disabled={currentPage === 1}
              size="small"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
