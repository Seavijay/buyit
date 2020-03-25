import { webNavi } from '../../../constants/menuItems'
import { Link } from 'react-router-dom'
import { Dropdown, Menu} from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import React from 'react'

const menu = (
    <Menu>
        {webNavi.map((item, index) => (
            <SubMenu title={item.text} className={item.text} key={Math.random()}>
                {item.subItems.map((item, index) => (
                    <Menu.Item key={Math.random()}>
                        <Link to={item.url}>{item.text}</Link>
                    </Menu.Item>
                ))}
            </SubMenu>
        ))}
    </Menu>
)
const WebNavi =() => (
    <Dropdown overlay={menu} className='header-right-item'>
        <Link to="/webNavi" onClick={e => e.preventDefault()}>网站导航</Link>
    </Dropdown>
)
export default WebNavi
