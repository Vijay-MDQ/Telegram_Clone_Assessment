/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Grid,
  Avatar,
  TextField,
  InputAdornment,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

const ChatWindow = ({ chat, messages, setSelectedChat }) => {
  return (
    <Box flex={1} mt={1} p={2} bgcolor="#fff" borderRadius="8px" boxShadow={3}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <ArrowBackIcon
            onClick={() => setSelectedChat(null)}
            sx={{ cursor: "pointer" }}
          />
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
            }}
            alt={chat.creator.name}
            src="/broken-image.jpg"
          />
          <Typography variant="h5" gutterBottom mt={1} ml={1}>
            {chat.creator.name}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <CallIcon
            sx={{
              verticalAlign: "middle",
              color: "#72A0C1",
              cursor: "pointer",
            }}
          />
          <VideocamIcon
            sx={{
              verticalAlign: "middle",
              color: "#72A0C1",
              cursor: "pointer",
            }}
          />
          <MoreVertIcon
            sx={{
              verticalAlign: "middle",
              color: "#72A0C1",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>

      <Box height="60vh" overflow="auto">
        <List>
          {messages.map((message, index) => (
            <Grid
              container
              justifyContent={
                message.sender_id === 1 ? "flex-end" : "flex-start"
              }
              key={index}
            >
              <Grid
                item
                xs={12}
                sm={8}
                md={6}
                lg={4}
                margin={1}
                padding={2}
                borderRadius={2}
                bgcolor={message.sender_id === 1 ? "#DCF8C6" : "#F0F8FF"}
                textAlign={message.sender_id === 1 ? "right" : "left"}
              >
                <ListItem>
                  <ListItemText
                    primary={message.message}
                    secondary={`Sent by ${message.sender.name} on ${new Date(
                      message.created_at
                    ).toLocaleString()}`}
                  />
                </ListItem>
              </Grid>
            </Grid>
          ))}
        </List>
      </Box>
      <Box>
        <TextField
          label="Type Your Message"
          id="filled-end-adornment"
          sx={{ mt: 2, width: "100%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MoodIcon
                  sx={{
                    verticalAlign: "middle",
                    color: "#72A0C1",
                    ml: 1,
                    cursor: "pointer",
                  }}
                />
                <AttachFileIcon
                  sx={{
                    verticalAlign: "middle",
                    color: "#72A0C1",
                    ml: 1,
                    cursor: "pointer",
                  }}
                />
                <MicIcon
                  sx={{
                    verticalAlign: "middle",
                    color: "#72A0C1",
                    ml: 1,
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default ChatWindow;
