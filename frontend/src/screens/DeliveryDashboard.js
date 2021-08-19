import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';



import AllOrders from "../components/Shevon/AllOrders";
import RetailDeliveryCost from "../components/Shevon/RetailDeliveryCost";

//import DeliveryPersonProfile from "../components/Shevon/DeliveryPersonProfile";
// import DeliveryManagerProfile from "../components/Shevon/DeliveryManagerProfile"
//import BulkDeliveryCost from "../components/Shevon/BulkDeliveryCost";
// import DeliveredOrders from "../components/Shevon/DeliveredOrders"
//import DeliveredOrdersDP from "../components/Shevon/DeliveredOrdersDP"
// import InTransitOrders from "../components/Shevon/InTransitOrders"
// import InTransitOrdersDP from "../components/Shevon/InTransitOrdersDP"
// import PendingOrders from "../components/Shevon/PendingOrders";
// import TrainCost from "../components/Shevon/TrainCost"

const drawerWidth = 240;

const DeliveryDashboard = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    overflow: 'auto',
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar >
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
        <div className={classes.drawerContainer} >

<div class="mt-10 mx-16 mb-3"><Avatar  style={{width:"100px", height:"100px" }} src="/broken-image.jpg" />

</div>
<div class="mt-2 mx-5 mb-8"><Typography  variant="h6" noWrap>
           Mr. Shevon Krishmal
          </Typography>


</div>
        <div style={{marginTop:"50px"}} >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          </div>
        </div>
      </Drawer>
      <main className={classes.content}>
      <Toolbar />






       <AllOrders/>
      








      </main>
    </div>
  );
}


