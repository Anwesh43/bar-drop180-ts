import React from 'react' 
import { useAnimatedScale, useDimension } from './hooks'
const withContainer = (MainComponent : React.FC<any>) : React.FC<any> => {
    return () => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const props = {
            w, 
            h,
            onClick, 
            scale 
        }
        return (
            <MainComponent {...props}></MainComponent>
        )
    }
}

export default withContainer