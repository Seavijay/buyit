import { leftMenuItems } from '../../../constants/menuItems'
import WebNavi from './webNavi.js'
import dropdownCreator from '../../../utils/dropdownCreator'


const Right=()=>(
    <div className='header-right'>
        {leftMenuItems.map((item,index)=>(dropdownCreator(item)))}
        <WebNavi />
    </div>
)

/*const Right = () => (
    <div className='header-right'>
        <WebNavi />
        {leftMenuItems.map((supItem, index) => (
            <Dropdown className='header-right-item'
                key={Math.random()}
                overlay={
                    <Menu>
                        {supItem.subItems.map((subItem, index) => (
                            <Menu.Item key={Math.random()}>
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
)*/

export default Right
