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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";

import DeliveryManagementNav from "../components/Shevon/DeliveryManagementNav";
import DeliveryCostNav from "../components/Shevon/DeliveryCostNav";
import DeliveryPersonManagement from "../components/Shevon/DeliveryPersonManagement";
import FAQmanagement from "../components/Shevon/FAQmanagement";
import InquiriesManagement from "../components/Shevon/InquiriesManagement";
import DeliveryManagerProfile from "../components/Shevon/DeliveryManagerProfile";


const drawerWidth = 250;

const DeliveryDashboard = makeStyles((theme) => ({
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
  const classes = DeliveryDashboard();

  const [deliveryManagementNavOpen, setDeliveryManagementNavOpen] = useState(true);
  const [deliveryCostNavOpen, setDeliveryCostNavOpen] = useState(false);
  const [deliveryPersonManagementOpen, setDeliveryPersonManagementOpen] = useState(false);
  const [faqManagementOpen, setFaqManagementOpen] = useState(false);
  const [inquiriesMnagementOpen, setInquiriesMnagementOpen] = useState(false);
  const [profileManagementOpen, setProfileManagementOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Delivery Manager
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
              style={{ width: "100px", height: "100px" }}
              src="/broken-image.jpg"
            />
          </div>
          <div class="mt-2 mx-5 mb-8">
            <Typography variant="h6" noWrap>
              Mr. Shevon Krishmal
            </Typography>
          </div>
          <div style={{ marginTop: "50px" }}>
            <List>
              <ListItem button>
                <ListItemText
                  primary={"Delivery Management"}
                  onClick={() => {
                    setDeliveryManagementNavOpen(true);
                    setDeliveryCostNavOpen(false);
                    setProfileManagementOpen(false);
                    setFaqManagementOpen(false);
                    setInquiriesMnagementOpen(false);
                    setDeliveryPersonManagementOpen(false);
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary={"Delivery Cost Management"}
                  onClick={() => {
                    setDeliveryManagementNavOpen(false);
                    setDeliveryCostNavOpen(true);
                    setProfileManagementOpen(false);
                    setFaqManagementOpen(false);
                    setInquiriesMnagementOpen(false);
                    setDeliveryPersonManagementOpen(false);
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary={"Delivery Person Management"}
                  onClick={() => {
                    setDeliveryManagementNavOpen(false);
                    setDeliveryCostNavOpen(false);
                    setProfileManagementOpen(false);
                    setFaqManagementOpen(false);
                    setInquiriesMnagementOpen(false);
                    setDeliveryPersonManagementOpen(true);
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary={"FAQ Management"}
                  onClick={() => {
                    setDeliveryManagementNavOpen(false);
                    setDeliveryCostNavOpen(false);
                    setProfileManagementOpen(false);
                    setFaqManagementOpen(true);
                    setInquiriesMnagementOpen(false);
                    setDeliveryPersonManagementOpen(false);
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary={"Inquiries Management"}
                  onClick={() => {
                    setDeliveryManagementNavOpen(false);
                    setDeliveryCostNavOpen(false);
                    setProfileManagementOpen(false);
                    setFaqManagementOpen(false);
                    setInquiriesMnagementOpen(true);
                    setDeliveryPersonManagementOpen(false);
                  }}
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary={"Profile Infromation"}
                  onClick={() => {
                    setDeliveryManagementNavOpen(false);
                    setDeliveryCostNavOpen(false);
                    setProfileManagementOpen(true);
                    setFaqManagementOpen(false);
                    setInquiriesMnagementOpen(false);
                    setDeliveryPersonManagementOpen(false);
                  }}
                />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />

        {deliveryManagementNavOpen && <DeliveryManagementNav />}
        {deliveryCostNavOpen && <DeliveryCostNav />}
        {deliveryPersonManagementOpen && <DeliveryPersonManagement />}
        {faqManagementOpen && <FAQmanagement />}
        {inquiriesMnagementOpen && <InquiriesManagement />}
        {profileManagementOpen && <DeliveryManagerProfile />}
      </main>
    </div>
  );
}
