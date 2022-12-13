import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { menuItems } from "./menu-items";
import { Link, matchPath, useLocation } from "react-router-dom";

export function MenuList() {
  const { pathname } = useLocation();

  const path = "/:route";
  const match = matchPath(path, pathname);

  const route = match?.params.route;

  return (
    <List>
      {menuItems.map(({ item, name, to, icon, hidden }, index) =>
        hidden ? (
          <></>
        ) : (
          <Link key={index} to={to}>
            <ListItem disablePadding>
              <ListItemButton selected={route === name}>
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
