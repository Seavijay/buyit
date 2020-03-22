import { Select } from 'antd'
import { Link } from 'react-router-dom'
import { location } from '../../../constants/menuItems'

export default () => (
    <Select>
        {location.map((item, index) => (
            <Select.Option key={item.text + index}>
                <Link to={item.url} text={item.url + index}>
                    {item.text}
                </Link>
            </Select.Option>
        ))}
    </Select>
)
