import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import InventoryAddNew from "../components/Adithya/InventoryAddNew";
import InventoryEdit from "../components/Adithya/InventoryEdit";
import InventoryInStock from "../components/Adithya/InventoryInStock";
import InventoryManagerProfile from "../components/Adithya/InventoryManagerProfile";
import Wholesales from "../components/Adithya/Wholesales";
import WholesaleEdit from "../components/Adithya/WholesaleEdit";

const drawerWidth = 300;

const InventoryDashboardStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#042B58",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    backgroundColor: "#D3DCDE",
    height: "1000px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const InventoryDashboard = () => {
  const classes = InventoryDashboardStyles();
  const [inventoryOpen, setInventoryOpen] = useState(true);
  const [inventoryAddNewOpen, setInventoryAddNewOpen] = useState(false);
  const [inventoryEditOpen, setInventoryEditOpen] = useState(false);
  const [wholesalesOpe, setWholesalesOpen] = useState(false);
  const [wholesalesEditOpen, setWholesalesEditOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6 text"
            noWrap
            className={" text-3xl font-black"}
          >
            Inventory Manager
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div class="mt-10 m-auto mb-3 w-3/4 flex justify-center">
            <img
              src="https://i.ibb.co/1qjCgjz/download.jpg"
              alt="profile-pic-inventory-manager"
              width="100%"
              height="100%"
              border="0"
              className="object-contain rounded-full"
            ></img>
          </div>
          <div class="mt-2 mx-5 mb-8">
            <Typography
              variant="h6 text"
              noWrap
              class="font-extrabold text-xl ml-2"
            >
              Mr. Adithya Kahawanugoda
            </Typography>
          </div>
          <div style={{ marginTop: "50px" }}>
            <List>
              <ListItem
                button
                onClick={() => {
                  setInventoryAddNewOpen(false);
                  setInventoryEditOpen(false);
                  setWholesalesOpen(false);
                  setWholesalesEditOpen(false);
                  setProfileOpen(false);
                  setInventoryOpen(true);
                }}
              >
                <ListItemText primary={"Inventory"} />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  setInventoryEditOpen(false);
                  setWholesalesOpen(false);
                  setWholesalesEditOpen(false);
                  setProfileOpen(false);
                  setInventoryOpen(false);
                  setInventoryAddNewOpen(true);
                }}
              >
                <ListItemText primary={"Add New"} />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  setInventoryAddNewOpen(false);
                  setWholesalesOpen(false);
                  setWholesalesEditOpen(false);
                  setProfileOpen(false);
                  setInventoryOpen(false);
                  setInventoryEditOpen(true);
                }}
              >
                <ListItemText primary={"Inventory Edit / Delete"} />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  setInventoryAddNewOpen(false);
                  setInventoryEditOpen(false);
                  setWholesalesEditOpen(false);
                  setProfileOpen(false);
                  setInventoryOpen(false);
                  setWholesalesOpen(true);
                }}
              >
                <ListItemText primary={"Wholesales"} />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  setInventoryAddNewOpen(false);
                  setInventoryEditOpen(false);
                  setWholesalesOpen(false);
                  setProfileOpen(false);
                  setInventoryOpen(false);
                  setWholesalesEditOpen(true);
                }}
              >
                <ListItemText primary={"Wholesales Edit / Delete"} />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  setInventoryAddNewOpen(false);
                  setInventoryEditOpen(false);
                  setWholesalesOpen(false);
                  setWholesalesEditOpen(false);
                  setInventoryOpen(false);
                  setProfileOpen(true);
                }}
              >
                <ListItemText primary={"Profile"} />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {inventoryOpen && <InventoryInStock />}
        {inventoryAddNewOpen && <InventoryAddNew />}
        {inventoryEditOpen && <InventoryEdit />}
        {wholesalesOpe && <Wholesales />}
        {wholesalesEditOpen && <WholesaleEdit />}
        {profileOpen && <InventoryManagerProfile />}
      </main>
    </div>
  );
};

export default InventoryDashboard;
