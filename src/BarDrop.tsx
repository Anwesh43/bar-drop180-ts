import React from 'react'
import withContainer from './withContainer'
import {useStyle} from './hooks'
interface BarDropProps  {
    w : number, 
    h : number,
    scale : number, 
    onClick : Function 
}

const BarDrop : React.FC<BarDropProps> = (props : BarDropProps) => {
    const {parentStyle, barStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()}>
            <div style = {barStyle()} onClick = {() => props.onClick()}></div>
        </div>
    )
}

export default withContainer(BarDrop)