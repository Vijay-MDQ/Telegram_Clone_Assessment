/* eslint-disable react/prop-types */
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import UpdateIcon from "@mui/icons-material/Update";
import CallIcon from "@mui/icons-material/Call";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PeopleIcon from "@mui/icons-material/People";

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        width={250}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
        bgcolor=" #3f515a"
        height="100%"
      >
        <Box
          padding="10px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignContent="end"
            alignItems="end"
            mt={2}
          >
            <Box>
              <Typography
                variant="subtitle1"
                textAlign="left"
                color="#fff"
                align="center"
              >
                Vijayaprasath
              </Typography>
              <Typography
                variant="subtitle1"
                color="#fff"
                textAlign="left"
                align="center"
              >
                +91-9876543210
              </Typography>
            </Box>
            <ExpandMoreIcon sx={{ verticalAlign: "bottom", color: "#fff" }} />
          </Box>
        </Box>

        <Divider />
        <List>
          <ListItem button>
            <CallIcon sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }} />
            <ListItemText sx={{ color: "#fff" }} primary="Calls" />
          </ListItem>
          <ListItem button>
            <PeopleIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
            />
            <ListItemText sx={{ color: "#fff" }} primary="People Nearby" />
          </ListItem>
          <ListItem button>
            <ContactPageIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
            />
            <ListItemText sx={{ color: "#fff" }} primary="Contacts" />
          </ListItem>
          <ListItem button>
            <BookmarkIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
            />
            <ListItemText sx={{ color: "#fff" }} primary="Saved Messages" />
          </ListItem>
          <ListItem button>
            <SettingsIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
            />
            <ListItemText sx={{ color: "#fff" }} primary="Settings" />
          </ListItem>

          <Divider />

          <ListItem button>
            <UpdateIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
            />
            <ListItemText sx={{ color: "#fff" }} primary="Check for Update" />
          </ListItem>

          <ListItem button>
            <PersonAddIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#fff" }}
            />
            <ListItemText sx={{ color: "#fff" }} primary="Invite Friends" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
