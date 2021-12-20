import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Feedback from './pages/Feedback';

const theme = createTheme({
  palette: {
    primary: {
      main: '#11C4B0',
    },
  },
});

const App = function () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Feedback />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
