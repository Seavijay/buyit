import Location from './location'
import { Link } from 'react-router-dom'

const Left= () => (
    <div className="header-left">
        <Location className='header-left-item'/>
        <Link to="/signIn" className='header-left-item'>
            登陆
        </Link>
        <Link to="/signUp" className='header-left-item'>
            注册
        </Link>
    </div>
)
 export default Left