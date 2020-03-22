import { leftMenuItems } from '../../../constants/menuItems'
import { Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom'
import WebNavi from './webNavi.js'

const LeftTopBar = () => (
    <div className="topBar-right">
        <WebNavi />
        {leftMenuItems.map((supItem, index) => (
            <Dropdown
                key={Math.random() + 'nmsl'}
                overlay={
                    <Menu>
                        {supItem.subItem.map((subItem, index) => (
                            <Menu.Item key={subItem.text + index}>
                                <Link to={subItem.url}>{subItem.text}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                }
            >
                <Link to={supItem.url}>{supItem.text}</Link>
            </Dropdown>
        ))}
    </div>
)

export default LeftTopBar
