import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import { Layout } from 'antd'

function RootLayout() {
  return (
    <div className='app'>
      <div className='navbar'>
        <NavBar />
      </div>  
      <div className='main'>
        {/* <main>s */}
          {/* <Layout> */}
            <Outlet/>
          {/* </Layout> */}
        {/* </main> */}
      </div>
    </div>
  )
}

export default RootLayout