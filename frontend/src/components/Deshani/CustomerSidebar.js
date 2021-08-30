import React,{useState,useEffect} from 'react';
import { Drawer,ListItem,List,ListItemIcon,ListItemText} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { withRouter } from "react-router-dom";
import Header from '../Adithya/Header';

const drawerWidth = 240;
const useStyles = makeStyles((theme)=>({

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop:"2rem"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
    // container: {
    //   display: "flex"
    // }
  }));

const CustomerSidebar = props => {

    // const [profile, setProfile] = useState(true);
    // const [orderHistory,setOrderHistory] = useState(false);
    // const [wishlist,setWishlist] = useState(false);
    // const [requestBook,setRequestBook] = useState(false);
    // const [review,setReview] = useState(false);

    const { history } = props;

    const classes = useStyles();
    const itemsList = [
      {
        text: "Profile",
        icon: <PersonIcon />,
        onClick: () => history.push("/customer")
      },
      {
        text: "Order History",
        icon: <HistoryIcon />,
        onClick: () => history.push("/customer/orderHistory")
      },
      {
        text: "Wishlist",
        icon: <FavoriteIcon />,
        onClick: () => history.push("/customer/wishList")
      },
      {
        text: "Request Book",
        icon: <MenuBookIcon />,
        onClick: () => history.push("/customer/requestBook")
      },
      {
        text: "My Reviews",
        icon: <RateReviewIcon />,
        onClick: () => history.push("/customer/myReviews")
      }
    ];
    return (
     <div>
        <Drawer variant="permanent" className={classes.drawer} classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerContainer}>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        </div> 
      </Drawer>
    </div>
    )
}

export default withRouter(CustomerSidebar);
