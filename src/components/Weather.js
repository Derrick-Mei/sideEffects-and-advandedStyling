import React from 'react'
import {H1} from './StyledComponents'

export default function Weather(props) {
    return (
        <H1>
            {props.headline}
        </H1>
    )
}
