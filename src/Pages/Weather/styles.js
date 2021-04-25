import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => {
  return {
    weatherContainer: {
      width: '100%',
      height: '100%',
      position: 'relative',
      boxSizing: 'border-box',
    },
    weatherMapGrid: {
      width: '100%',
      height: '100%',

      [theme.breakpoints.only('xs')]: {
        height: 'calc(100% - 240px)',
        order: 2,
      },
    },
    weatherInfoGrid: {
      width: '360px',
      height: '420px',
      position: 'absolute',
      top: '50%',
      bottom: '50%',
      right: '32px',
      margin: 'auto',
      zIndex: 999,
      [theme.breakpoints.only('xs')]: {
        width: '100%',
        height: 'fill-available',
        maxHeight: '248px',
        position: 'relative',
        order: 1,
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
      },
    },
    weatherInfoPaper: {
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(5px)',
      padding: '8px',
      backgroundColor: 'rgba(255, 255, 255,0.4)',
    },
    weatherInfoBoxStatusNull: {
      width: '100%',
      height: 'auto',
      minHeight: '240px',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'left',
    },
    weatherInfoBox: {
      width: '100%',
      height: '100%',
    },
    weatherInfoBox_header: {
      width: '100%',
      height: 'auto',
      marginBottom: '12px',
      display: 'flex',
      alignItens: 'center',
      justifyContent: 'space-between',
    },
    weatherInfoBox_body: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
    weatherPaperTemp: {
      width: '100%',
      minHeight: '80px',
      display: 'inherit',
      flexFlow: 'inherit',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
    },
    weatherPaperTemp_header: {
      width: '100%',
      padding: '0 14px',
    },
    weatherPaperTemp_content: {
      display: 'inherit',
      flexFlow: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit',
      padding: '0 14px',
      width: 'auto',
      height: 'auto',
      flex: 1,
      minHeight: '100px',
    },
    weatherPaperTemp_content_main: {
      width: '100%',
      display: 'block',
      textAlign: 'center',
      fontSize: '48px',
    },
    weatherPaperTemp_content_minMax: {
      width: '40px',
      minHeight: '40px',
      textAlign: 'center',
      flex: 1,
    },
    weatherPaperTemp_content_img: {
      witdh: '100%',
      maxWidth: '84px',
      height: 'auto',
      objectFit: 'cover',
    },
  };
});
