import { leftMenuItems } from '../../../constants/menuItems'
import { Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import WebNavi from './webNavi.js'

export default () => (
    <div className='topBar-right'>
        <WebNavi />
        {leftMenuItems.map((supItem, index) => (
            <Dropdown overlay={(
                <Menu key={supItem.text+index}>{
                    supItem.subItem.map((subItem, index) => (
                        <Menu.Item key={subItem.text+index}>
                            <Link to={subItem.url}>
                                {subItem.text}
                            </Link>
                        </Menu.Item>
                    ))
                }</Menu>
            )}>
                <Link to={supItem.url}>{supItem.text}</Link>
            </Dropdown>
        ))}
    </div>
)