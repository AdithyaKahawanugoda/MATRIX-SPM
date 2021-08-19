import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import AdminDashboard from "../components/Randika/AdminDashboard";
import RevenueComponents from "../components/Randika/RevenueComponents";
import SalesComponent from "../components/Randika/SalesComponent";
import AdminNewsletter from "../components/Randika/AdminNewsletter";
import FAQ from "../components/Randika/FAQ";
import AdminUserAccount from "../components/Randika/AdminUserAccount";
import AdminUsers from "../components/Randika/AdminUsers";
import BookRequest from "../components/Randika/BookRequest";
// import Check3 from "./check3";

const drawerWidth = 240;

const AdminNavBar = makeStyles((theme) => ({
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

export default function ClippedDrawer() {
  const classes = AdminNavBar();
  const [openAdminDashboard, setOpenAdminDashboard] = useState(true);
  const [openRevenueComponent, setOpenRevenueComponent] = useState(false);
  const [openSalesComponent, setOpenSalesComponent] = useState(false);
  const [openDiscountComponent, setOpenDiscountComponent] = useState(false);
  const [openAdminNewsLetter, setOpenAdminNewsLetter] = useState(false);
  const [openAdminUsers, setOpenAdminUsers] = useState(false);
  const [openFAQ, setopenFAQ] = useState(false);
  const [openAdminUserAccount, setopenAdminUserAccount] = useState(false);
  const [OpenBookRequest, setopenBookRequest] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
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
          <div class="mt-10 mx-16 mb-3">
            <Avatar
              style={{ width: "100px", height: "100px", margin: "auto" }}
              src="/broken-image.jpg"
            />
          </div>
          <div class="mt-2 mx-5 mb-8">
            <Typography variant="h6" noWrap className="text-center">
              Admin
            </Typography>
          </div>
          <div style={{ marginTop: "50px" }}>
            <List>
              <ListItem button>
                <ListItemText
                  primary={"Dashboard"}
                  onClick={() => {
                    setOpenAdminDashboard(true);
                    setOpenRevenueComponent(false);
                    setOpenSalesComponent(false);
                    setOpenDiscountComponent(false);
                    setOpenAdminNewsLetter(false);
                    setOpenAdminUsers(false);
                    setopenFAQ(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"Revenue"}
                  onClick={() => {
                    setOpenRevenueComponent(true);
                    setOpenAdminDashboard(false);
                    setOpenSalesComponent(false);
                    setOpenDiscountComponent(false);
                    setOpenAdminNewsLetter(false);
                    setOpenAdminUsers(false);
                    setopenFAQ(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"Sales"}
                  onClick={() => {
                    setOpenSalesComponent(true);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setOpenDiscountComponent(false);
                    setOpenAdminNewsLetter(false);
                    setOpenAdminUsers(false);
                    setopenFAQ(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"Discount"}
                  onClick={() => {
                    setOpenDiscountComponent(true);
                    setOpenSalesComponent(false);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setOpenAdminNewsLetter(false);
                    setOpenAdminUsers(false);
                    setopenFAQ(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"Newsletter"}
                  onClick={() => {
                    setOpenAdminNewsLetter(true);
                    setOpenDiscountComponent(false);
                    setOpenSalesComponent(false);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setOpenAdminUsers(false);
                    setopenFAQ(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"Users"}
                  onClick={() => {
                    setOpenAdminUsers(true);
                    setOpenAdminNewsLetter(false);
                    setOpenDiscountComponent(false);
                    setOpenSalesComponent(false);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setopenFAQ(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"FAQ"}
                  onClick={() => {
                    setopenFAQ(true);
                    setOpenAdminUsers(false);
                    setOpenAdminNewsLetter(false);
                    setOpenDiscountComponent(false);
                    setOpenSalesComponent(false);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setopenAdminUserAccount(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary={"Book Requests"}
                  onClick={() => {
                    setopenBookRequest(true);
                    setopenFAQ(false);
                    setOpenAdminUsers(false);
                    setOpenAdminNewsLetter(false);
                    setOpenDiscountComponent(false);
                    setOpenSalesComponent(false);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setopenAdminUserAccount(false);
                  }}
                />
              </ListItem>

              <ListItem button>
                <ListItemText
                  primary={"My Account"}
                  onClick={() => {
                    setopenAdminUserAccount(true);
                    setopenFAQ(false);
                    setOpenAdminUsers(false);
                    setOpenAdminNewsLetter(false);
                    setOpenDiscountComponent(false);
                    setOpenSalesComponent(false);
                    setOpenRevenueComponent(false);
                    setOpenAdminDashboard(false);
                    setopenBookRequest(false);
                  }}
                />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        {openAdminDashboard && <AdminDashboard />}
        {openRevenueComponent && <RevenueComponents />}
        {openSalesComponent && <SalesComponent />}
        {openDiscountComponent && <openDiscountComponent />}
        {openAdminNewsLetter && <AdminNewsletter />}
        {openFAQ && <FAQ />}
        {openAdminUserAccount && <AdminUserAccount />}
        {openAdminUsers && <AdminUsers />}
        {OpenBookRequest && <BookRequest />}
      </main>
    </div>
  );
}
