import { useEffect, useState } from "react";
import { getAllChats, getChatMessages } from "./Services/Services";
import { ChatList, ChatWindow, Sidebar } from "./Components";
import { Button, Box, IconButton, Typography, Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0088cc",
    },
    background: {
      default: "#333",
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#333",
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
  const [total, setTotal] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetchChats(currentPage);
  }, [currentPage]);

  const fetchChats = (page) => {
    getAllChats(page).then((response) => {
      setChats(response.data.data.data);
      setTotalPages(response.data.data.last_page);
      setTotal(response.data.data.total);
    });
  };

  useEffect(() => {
    if (selectedChat) {
      getChatMessages(selectedChat.id).then((response) => {
        setMessages(response.data.data);
      });
    }
  }, [selectedChat]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ width: { xs: "100%", md: "100%", sm: "100%", lg: "100%" } }}
        boxShadow={3}
        height="100vh"
        bgcolor=" #3f515a"
      >
        <Box display="flex" flexDirection="column" boxShadow={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
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
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>{" "}
              <Typography variant="h6" color="#fff" gutterBottom mt={1}>
                Telegram
              </Typography>
            </Box>
            <SearchIcon sx={{ color: "#fff" }} />
          </Box>

          <Box width={{ xs: "100%", lg: "100%" }}>
            <Tabs
              sx={{ mt: 0.5 }}
              value={tabIndex}
              onChange={handleTabChange}
              indicatorColor="success"
              textColor="inherit"
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="full width tabs example"
            >
              <Tab
                sx={{
                  borderBottom: tabIndex === 0 && "2px solid #89CFF0",
                  color: tabIndex === 0 ? "#fff" : "#000",
                  textTransform: "none",
                }}
                {...a11yProps(0)}
                label={
                  <Box display="flex" flexDirection="row" gap={1}>
                    <Typography>All</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        verticalAlign: "middle",
                        borderRadius: "50%",
                        bgcolor: "#0066b2",
                        color: "#fff",
                        width: 22,
                        height: 22,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        mt: 0.2,
                      }}
                    >
                      {total}
                    </Typography>
                  </Box>
                }
              />
              <Tab
                sx={{
                  borderBottom: tabIndex === 1 && "2px solid #89CFF0",
                  color: tabIndex === 1 ? "#fff" : "#000",
                  textTransform: "none",
                }}
                {...a11yProps(1)}
                label={
                  <Box display="flex" flexDirection="row" gap={1}>
                    <Typography>Regulars</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        verticalAlign: "middle",
                        borderRadius: "50%",
                        bgcolor: "#0066b2",
                        color: "#fff",
                        width: 22,
                        height: 22,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        mt: 0.2,
                      }}
                    >
                      {total}
                    </Typography>
                  </Box>
                }
              />
              <Tab
                sx={{
                  borderBottom: tabIndex === 2 && "2px solid #89CFF0",
                  color: tabIndex === 2 ? "#fff" : "#000",
                  textTransform: "none",
                }}
                {...a11yProps(2)}
                label={
                  <Box display="flex" flexDirection="row" gap={1}>
                    <Typography>Unread</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        verticalAlign: "middle",
                        borderRadius: "50%",
                        bgcolor: "#0066b2",
                        color: "#fff",
                        width: 22,
                        height: 22,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        mt: 0.2,
                      }}
                    >
                      {total}
                    </Typography>
                  </Box>
                }
              />
              <Tab
                label={
                  <Box display="flex" flexDirection="row" gap={1}>
                    <Typography>Personal</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        verticalAlign: "middle",
                        borderRadius: "50%",
                        bgcolor: "#0066b2",
                        color: "#fff",
                        width: 22,
                        height: 22,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        mt: 0.2,
                      }}
                    >
                      {total}
                    </Typography>
                  </Box>
                }
                sx={{
                  borderBottom: tabIndex === 3 && "2px solid #89CFF0",
                  color: tabIndex === 3 ? "#fff" : "#000",
                  textTransform: "none",
                }}
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
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
