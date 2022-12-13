import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { menuItems } from "./menu-items";
import { Link } from "react-router-dom";

export function MenuList() {
  return (
    <List>
      {menuItems.map(({ item, to, icon, hidden }, index) =>
        hidden ? (
          <></>
        ) : (
          <Link key={index} to={to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        )
      )}
    </List>
  );
}
