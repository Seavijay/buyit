import React from 'react'
import MenuLevel from './menuLevel'
import '../../css/topBar.css'

const menuitems = [
  {
    text: '我的买它',
    url: 'http://qq.com',
    submenu: [
      {
        text: '已买到的宝贝',
        url: 'http://qq.com',
      },
      {
        text: '我的足迹',
        url: 'http://qq.com',
      },
    ]
  },
  {
    text: '购物车',
    url: 'http://qq.com',
    submenu: [
      {
        text: '1',
        url: 'http://qq.com',
      },
      {
        text: '2',
        url: 'http://qq.com',
      },
    ]
  },
  {
    text: '收藏夹',
    url: 'http://qq.com',
    submenu: [
        {
            text:'我收藏的宝贝',
            url:'http://qq.com'
        },
        {
            text:'我收藏的店铺',
            url:'http://qq.com'
        }
    ]
  }
]

class TopBar extends React.Component {
  constructor() {
    super()

    this.state = {
      showMenuItem: -1,
      showSubMenuItem: -1,
    }
  }

  handleMenuLevelHover = (index) => {
    this.setState({ showMenuItem: index })
  }

  handleMenuLevelLeave = () => {
    this.setState({ showMenuItem: -1 })
  }

  handleSubMenuLevelHover = (index, e) => {
    this.setState({
      showMenuItem: index,
      showSubMenuItem: +e.target.attributes.getNamedItem('data-id').value
    })
  }

  handleSubMenuLevelLeave = (e) => {
    this.setState({ showSubMenuItem: -1 })
  }

  render() {
    return (
      <ul>
        {
          menuitems.map((level, index) => (
             <MenuLevel
               text={level.text}
               url={level.url}
               key={index}
               index={index}
               onMouseOver={() => { this.handleMenuLevelHover(index) }}
               onMouseLeave={this.handleMenuLevelLeave}
               onSubItemMouseOver={(e) => { this.handleSubMenuLevelHover(index, e) }}
               onSubItemMouseLeave={this.handleSubMenuLevelLeave}
               showSubMenuItem={this.state.showSubMenuItem}
               showMenuItem={this.state.showMenuItem}
             >
               {level.submenu}
             </MenuLevel>
         ))
       }
      </ul>
    )
  }
}

export default TopBar