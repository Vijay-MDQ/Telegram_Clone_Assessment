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

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        width={250}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <Box
          bgcolor="#72A0C1"
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
          <Typography
            variant="h6"
            textAlign="left"
            gutterBottom
            align="center"
            mt={2}
          >
            Vijayaprasath
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="left"
            gutterBottom
            align="center"
            mt={1}
          >
            +91-9876543210
          </Typography>
        </Box>

        <Divider />
        <List>
          <ListItem button>
            <CallIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            <ListItemText primary="Calls" />
          </ListItem>
          <ListItem button>
            <CallIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            <ListItemText primary="People Nearby" />
          </ListItem>
          <ListItem button>
            <CallIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            <ListItemText primary="Saved Messages" />
          </ListItem>
          <ListItem button>
            <SettingsIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            <ListItemText primary="Settings" />
          </ListItem>

          <Divider />

          <ListItem button>
            <UpdateIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            <ListItemText primary="Check for Update" />
          </ListItem>

          <ListItem button>
            <PersonAddIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            <ListItemText primary="Invite Friends" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
