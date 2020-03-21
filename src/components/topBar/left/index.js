import Location from './location'
import {Link} from 'react-router-dom'

export default ()=>(
    <div className='topBar-left'>
        <Location />
        <Link to='/signIn' key='signIn'>登陆</Link>
        <Link to='/signUp' key='sginUp'>注册</Link>
    </div>
)