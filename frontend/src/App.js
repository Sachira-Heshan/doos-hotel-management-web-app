import './App.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomType from './pages/RoomType';
import Reservation from './pages/Reservation';
import Navbar from './layouts/Navbar';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  }
})

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/roomtype' element={<RoomType />} />
          <Route path='/reservation' element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
