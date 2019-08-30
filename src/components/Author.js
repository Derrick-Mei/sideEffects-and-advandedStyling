import React from 'react'
import {H1} from './StyledComponents'

export default function Author(props) {
    return (
        <React.Fragment>
            <H1>{props.author}</H1>
        </React.Fragment>
    )
}
