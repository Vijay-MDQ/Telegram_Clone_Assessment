/* eslint-disable react/prop-types */
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <Box
      p={2}
      sx={{
        width: { xs: "100%", md: "100%", sm: "100%", lg: "100%" },
        scrollbarWidth: "thin",
      }}
      height="80vh"
      overflow="auto"
    >
      <List>
        {chats?.map((chat, index) => (
          <Box key={index}>
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
                  primary={chat.creator.name}
                  secondary={chat.status}
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
