import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';

// To override the default theme properties, use createMuiTheme and Themeprovider
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3e2723',
    },
    secondary: {
      main: '#8d6e63',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
// Layout component need to WRAP the Switch components but NOT the Router component
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Notes />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
