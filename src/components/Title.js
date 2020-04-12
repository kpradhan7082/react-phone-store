import React from 'react'

export default function Title(props) {
    return (
        <div className="row">
            <div className="text-title text-center col-10 mx-auto my-2">
                <h1 className="font-weight-bold">
                {props.name} {props.title}
                </h1>
            </div>
          
        </div>
    )
}
