import Right from './right'
import Left from './left'
import '../../css/header.less'

const Header = () => (
    <div className='Header-container'>
        <div className="header">
            <Left />
            <Right />
        </div>
    </div>
)

export default Header
