import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Ribbon = (props) => {
    return (
        <div style={style.ribbon}>
            <div style={style.ribbonText}>{props.message}</div>
            <FaTimes style={style.ribbonExit} onClick={props.click} />
        </div>
    )
}

const style = {
    ribbon: {
        backgroundColor: 'pink',
        color: 'black',
        padding: '5pt 0pt 5pt 0pt',
        position: 'relative'
    },
    ribbonText: {
        paddingLeft: '5pt'
    },
    ribbonExit: {
        position: 'absolute',
        top: '5pt',
        right: '5pt',
        fontSize: '1.35em',
        cursor: 'pointer'
    }
}

export default Ribbon
