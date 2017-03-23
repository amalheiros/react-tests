import React from 'react'
import {childrenWithProps} from '../Utils/reactUtil'

export default props => (
    <div>
        <h1>Family</h1>
        { childrenWithProps(props.children,props) }
    </div>
)