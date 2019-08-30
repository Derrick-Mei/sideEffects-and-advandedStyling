import React from 'react'
import Author from './Author'
import Image from './Image'

export default function Card(props) {
    return (
        <React.Fragment>
            <Author author={props.author} />
            <Image url={props.url} />
        </React.Fragment>
    )
}
