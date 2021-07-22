import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TeamRow from '../teamRow/teamRow';
import Grid from '@material-ui/core/Grid';
import { getTeams } from '../../api/soccer-app-api';
import SetFavorites  from '../../actions/setFavorites';
import { useSelector, useDispatch } from 'react-redux';
 
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



function TeamsList() {
  const [rows, setRows] = useState([]);
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    getTeamsList();
      
  },[]);

  async function getTeamsList () {
    let items = await getTeams();
    if(items && items.length > 0) {
      let _Favorites = items.filter((obj) => {return obj.IsFavorite=== true });
      dispatch(SetFavorites(_Favorites.length))
      setRows(items);

    }
  }

  return (
    <Grid title="teamsList">
      <TableContainer >
        <Table >
            <TableHead >
            <TableRow>
                <StyledTableCell >Crest</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Year Founded</StyledTableCell>
                <StyledTableCell align="center">Is Favorite ({favorites}/{rows.length})</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows && rows.length > 0 && rows.map((row, i) => (
                <TeamRow key={i} row={row}></TeamRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Grid>
        
  );
}
export default TeamsList;