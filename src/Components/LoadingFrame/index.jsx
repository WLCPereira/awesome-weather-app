import { CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles';

export default function LoadingFrame() {
  const classes = useStyles();
  return (
    <Grid className={classes.loadingFrame}>
      <CircularProgress color="primary" />
    </Grid>
  );
}
