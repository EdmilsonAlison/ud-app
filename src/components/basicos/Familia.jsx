import React, {cloneElement} from "react";

export default function Familia(props){

    return(
        <div>
            {
                props.children.map( (el, i) => {
                    return cloneElement(el, {...props, key: i} )
                })
            }
        </div>
    )
}