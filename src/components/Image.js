import React from 'react'
import {StyledImage} from './StyledComponents'

export default function Image(props) {
    return (
        <React.Fragment>
            <StyledImage src={props.url} alt="some unsplash"/>
        </React.Fragment>
    )
}
