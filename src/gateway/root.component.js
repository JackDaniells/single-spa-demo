import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './style.css';

const App = () => {
  const [repo, setRepo] = React.useState('')

  const handleSubmit = () => {
    window.location = '#'
    window.location = `#${repo}`
  }

  return (
    <div className="gateway">

      <AppBar position="static" className="gateway-header">
        <Toolbar>
          <Typography variant="h6">
            MELI Tech Day - Microfrontends demo
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Grid container justify="center">
          <Grid md={4} sm={6} xs={12} justify="center" className="gateway-search">
            <TextField label="Repo" size="medium" fullWidth value={repo} onChange={(event) => setRepo(event.target.value)}/>
            <Button variant="contained" onClick={handleSubmit}>Search</Button>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <div id="react-app"></div>
          </Grid>
          <Grid item xs={8}>
            <div id="vue-app"></div>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default App