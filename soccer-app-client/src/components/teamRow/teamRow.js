import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { updateTeamFavorite } from '../../api/soccer-app-api';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import SetFavorites  from '../../actions/setFavorites';


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



function TeamRow(props) {
  const [isFavorite, setIsFavorite] = useState(props.row.IsFavorite);
  const [inProgress, setInProgress] = React.useState(false);
  const favorites = useSelector((state) => state.favoritesReducer.favorites);
  const dispatch = useDispatch();

  async function handleRowClick() {
    setInProgress(true);

    let saved = await updateTeamFavorite({_id: props.row._id, isFavorite: !isFavorite});

    if(saved != null) {
        setInProgress(false);
        setIsFavorite(!isFavorite);
        dispatch(SetFavorites(!isFavorite ? favorites+1 : favorites-1))

    } else {
        setInProgress(false);
        alert("Something went worng");
    }
  } 

  return (
    
      
      <StyledTableRow className={"table-row", isFavorite ? 'isFavorite':'isNotFavorite'} title="teamRow" onClick={()=> handleRowClick()}>
          <StyledTableCell align="center">
            <img className={"cerstImg"} src={props.row.Crest}/>
          </StyledTableCell>
          <StyledTableCell align="center">{props.row.Name}</StyledTableCell>
          <StyledTableCell align="center">{props.row.YearFounded}</StyledTableCell>
          <StyledTableCell align="center">
            {isFavorite ?
              <StarIcon fontSize="medium"/>
              :
              <StarBorderIcon  fontSize="medium"/>
            }
            {inProgress &&
              <CircularProgress size={20} />
            }
          </StyledTableCell>

      </StyledTableRow>
    );
}
export default TeamRow;