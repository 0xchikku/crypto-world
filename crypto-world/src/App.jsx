import { Layout, Typography, Space } from 'antd';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link } from 'react-router-dom';
import './App.css'
import { RootLayout, CryptoExchange, CryptoCurrency, Home, News } from './components';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path='/cryptocurrency' element={<CryptoCurrency />} />
      <Route path='/cryptoexchange' element={<CryptoExchange />} />
      <Route path='/news' element={<News />} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
