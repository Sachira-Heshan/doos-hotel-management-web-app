import './App.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Home from './pages/Home';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
