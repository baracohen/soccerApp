import Logo from './images/syteImg.jpeg';
import './App.css';
import TeamsList from './components/teamsList/teamsList'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

function App() {

  return (

      <Grid container direction="column" className="App">
        <Grid item></Grid>
        <Grid item container>
          <Grid item xs={0} sm={1} >
          </Grid>
          <Grid item xs={12} sm={10}>
              <img className={"logo"} src={Logo} />
              <Typography className={"header"} variant="h3">Soccer Teams</Typography>
              <TeamsList />
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
  );
}

export default App;
