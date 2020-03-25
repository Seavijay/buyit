import { Link } from 'react-router-dom'
import '../css/dropdownCreator.less'
import arrow_down from '../assets/arrow_down.svg'
import arrow_up from '../assets/arrow_up.svg'

const dropdownCreator = (object) => (
    <div className='dropdown'>
        <Link to={object.url} className='dropdown-text'>
            {object.text}
            <img src={arrow_down} className='arrow-down' />
            <img src={arrow_up} className='arrow-up' />
        </Link>
        <div className='dropdown-content'>{
            object.subItems.map((subItem, index) => (
                <Link key={Math.random()}
                    to={subItem.url}
                    className='dropdown-item'>
                    {subItem.text}
                </Link>

            ))
        }
        </div>
    </div>
)

export default dropdownCreator