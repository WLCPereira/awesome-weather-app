import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Routes from 'Routes';
import useStyles from './styles';

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="sticky">
        <Toolbar>
          <Typography variant="h5">Awesome weather app</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Routes />
      </div>
    </div>
  );
}
