import React from 'react'

export default function ChuckNorris(props) {
    return (
        <div>
            <img src={props.icon_url} alt=""/>
            <div>{props.created_at}</div>
            <div>{props.value}</div>
        </div>
    )
}
