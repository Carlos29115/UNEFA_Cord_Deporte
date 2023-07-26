import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { searchItemLocal } from "utils/helpers";
const dataUser = searchItemLocal("dataUser");
const ListMenu: React.FC<{}> = () => {
  return (
    <>
      <ListItem key="1" disablePadding>
        <ListItemButton>
          <NavLink style={{ width: "100%" }} to="/dashboard" end>
            <ListItemText
              primary="Dashboard"
              sx={{ color: "#333", textTransform: "capitalize" }}
            />
          </NavLink>
        </ListItemButton>
      </ListItem>
      {dataUser?.userRole?.roleId === 4 ? null : (
        <ListItem key="3" disablePadding>
          <ListItemButton>
            <NavLink style={{ width: "100%" }} to="/dashboard/usuarios" end>
              <ListItemText
                primary="Usuarios"
                sx={{ color: "#333", textTransform: "capitalize" }}
              />
            </NavLink>
          </ListItemButton>
        </ListItem>
      )}
    </>
  );
};

export default ListMenu;
