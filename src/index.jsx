import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from 'App';

const rootElement = document.querySelector('#root');
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d3fbff',
      main: '#3BA3BA',
      dark: '#297a82',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ba703b',
      main: '#824f29',
      dark: '#5b361d',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Hind',
      'Quicksand',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'font-family': 'Quicksand',
        },
      },
    },
  },
});
function Main() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.render(<Main />, rootElement);
