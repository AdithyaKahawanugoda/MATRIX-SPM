import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
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
        <div className='flex flex-col space-y-6 bg w-full xl:max-w-6xl sm:max-w-xl md:max-w-3xl h-4/5 mt-3 mb-10 p-8 rounded-xl shadow-lg text-black bg-gamboge'>
        <h1 className='font-boldTallFont font-semibold text-4xl'>Wishlist</h1>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
              <div className='flex bg-white max-h-32 w-28 mr-5'>
              <img src="https://toppsta.com/images/covers/5/1/4/1/9781444935141.jpg" alt="Famous five book" border="0" ></img> 
              </div>
              </TableCell>
              <TableCell align="right">Famous Five</TableCell>
              <TableCell align="right">Rs.1500</TableCell>
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
