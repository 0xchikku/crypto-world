import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../assets/cryptoWorldIcon.png'

function NavBar() {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large'className='icon'/>
        <Typography.Title level={2} className='logo'>
            <Link to='/'>CryptoWorld</Link>
        </Typography.Title>
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to='/cryptocurrency'>Crypto Currency</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to='/cryptoexchange'>Crypto Exchange</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default NavBar