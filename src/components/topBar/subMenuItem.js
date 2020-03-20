import React from 'react'
import { Link } from 'react-router-dom';

const SubMenuItem = (props) => (
    <div
      data-id = {props.index}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      className={(props.showSubMenuItem === props.index) ? 'submenuitem-hover' : '' }
      ><Link to={props.url}>{props.text}</Link>
    </div>
)

export default SubMenuItem