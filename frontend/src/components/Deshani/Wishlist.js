import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Wishlist = () => {
    const classes = useStyles();
    return (
        <div className='flex w-full min-h-screen justify-center items-center '>
        <div className='flex flex-col space-y-6 bg w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-3/4 mt-6 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge'>
        <h1 className='font-boldTallFont font-semibold text-4xl'>Wishlist</h1>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
              <div className='flex bg-white max-h-24 w-24 mr-5'>
              <img src="https://thumbs.dreamstime.com/b/cute-rabbit-sitting-brick-wall-green-field-spring-meadow-easter-bunny-hunt-egg-grass-flower-outdoor-nature-background-141613432.jpg" alt="Whats-App-Image-2021-06-27-at-3-51-27-PM" border="0" ></img> 
              </div>
              </TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                    <IconButton aria-label="delete" color="secondary">
                        <DeleteIcon />
                    </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          </Table>
          </TableContainer>
        </div>
        </div>
    )
}

export default Wishlist
