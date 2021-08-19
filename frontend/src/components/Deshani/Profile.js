import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Profile = props => {
    return (
        
        <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col space-y-6 max-w-xl mt-6 mb-6 p-8 rounded-xl shadow-lg text-black bg-gamboge'>
        <h1 className='font-boldTallFont font-semibold text-4xl'>Profile</h1>
        
        <img src="https://thumbs.dreamstime.com/b/cute-rabbit-sitting-brick-wall-green-field-spring-meadow-easter-bunny-hunt-egg-grass-flower-outdoor-nature-background-141613432.jpg" alt="Whats-App-Image-2021-06-27-at-3-51-27-PM" border="0" ></img> 
        <List>
       
        <ListItem>
          <ListItemText
            primary="Single-line item:1"
            
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Single-line item:2"
            
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Single-line item:3"
            
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Single-line item:4"
            
          />
        </ListItem>
        </List>
        <div className='grid grid-flow-col grid-cols-3 '>
            <div>
            <Button variant="contained" color="primary">
            Edit Details
          </Button>
          </div>
            <div>
            <Button variant="contained"  style={{width:"14rem",marginLeft:"-1.1rem"}}>
            Update Profile Picture
            </Button>
            </div>
            <div>
            <Button
            variant="contained"
            color="secondary"
            style={{marginLeft:"4.5rem"}}
            startIcon={<DeleteIcon />}
          >  Delete
          </Button>
          </div>
        </div>
        
        </div>
        
        </div>


    )
}

export default Profile
