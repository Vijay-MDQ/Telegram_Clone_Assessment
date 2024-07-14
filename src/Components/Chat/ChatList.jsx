/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <Box
      p={2}
      sx={{
        width: { xs: "100%", md: "100%", sm: "100%", lg: "100%" },
        scrollbarWidth: "none",
      }}
      height="70vh"
      overflow="auto"
    >
      <List>
        {chats?.map((chat, index) => (
          <Box key={index} borderBottom="1px solid rgb(0, 0, 0, 0.1)">
            {chat.creator.name !== null && (
              <ListItem button onClick={() => onSelectChat(chat)}>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor:
                        index % 2 === 0 ? deepOrange[500] : deepPurple[500],
                    }}
                    alt={chat.creator.name}
                    src="/broken-image.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "#fff", fontWeight: 600 }}>
                      {chat.creator.name}
                    </Typography>
                  }
                  secondary={
                    <Typography sx={{ color: "#fff" }}>
                      {chat.status}
                    </Typography>
                  }
                />
              </ListItem>
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
