import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.palette.grey[100],
  },
  container: {
    width: '100%',
    height: 'calc(100vh - 64px)',
  },
}));
