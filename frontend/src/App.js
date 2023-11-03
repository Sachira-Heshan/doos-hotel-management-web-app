import './App.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Home from './pages/Home';
import Login from './pages/Login';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Login />
    </ChakraProvider>
  );
}

export default App;
