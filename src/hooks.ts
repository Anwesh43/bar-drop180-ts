import {useState, useEffect} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [dir, setDir] = useState(1)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1 || prev < 0) {
                            setAnimated(false)
                            clearInterval(interval)
                            setDir(prevDir => prevDir * -1)
                            if (prev > 1) {
                                return 1
                            }
                            return 0
                        }
                        return prev + dir * scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return window.onresize = () => {
            
        }
    })
    return {
        w, 
        h
    }
}