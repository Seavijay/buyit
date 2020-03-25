import { Select } from 'antd'
import { Link } from 'react-router-dom'
import { location } from '../../../constants/menuItems'



  
const Location= () => (
    <Select className='select' defaultValue={location[1].text}  bordered={false}>{
        location.map((item, index) => (
            <Select.Option key={Math.random()}>
                <Link
                    to={item.url}>{item.text}
                </Link>
            </Select.Option>
        )) 
    }
    </Select>
)

export default Location
