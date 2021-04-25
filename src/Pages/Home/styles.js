import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  homeContainer: {
    width: '100%',
    height: '100%',
  },
  homeGrid: {
    width: '100%',
    hight: '100%',
    position: 'relative',
  },
  homeSearchButton: {
    position: 'absolute',
    bottom: '24px',
    right: '24px',
    zIndex: 999,
  },
}));
