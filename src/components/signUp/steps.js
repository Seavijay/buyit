import arrow_right from '../../assets/arrow_right.svg'


const Steps = () => (
    <div className='steps'>
        <div className='steps1'>
            <div>1</div>
            <p>验证手机号</p>
        </div>
        <img src={arrow_right} />
        <div className='steps2'>
            <div>2</div>
            <p>填写个人信息</p>
        </div>
        <img src={arrow_right} />
        <div className='steps3'>
            <div>3</div>
            <p>注册成功</p>
        </div>
    </div>
)