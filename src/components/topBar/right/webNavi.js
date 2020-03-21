import {webNavi} from '../../../constants/menuItems'
import { Link } from 'react-router-dom'
import { Dropdown, Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react'

const menu = (
    <Menu >
        {
            webNavi.map((item, index) => (
                <SubMenu
                    title={item.text}
                    className={item.text}
                    key={item.text+index}>
                    {
                        item.subItem.map((item, index) => (
                            <Menu.Item key={item.text+index}>
                                <Link to={item.url}>
                                    {item.text}
                                </Link>
                            </Menu.Item>
                        ))
                    }
                </SubMenu>)
            )
        }
    </Menu>)

export default () => (
    <Dropdown overlay={menu}>
        <Link to='/webNavi'>网站导航</Link>
    </Dropdown>
)
