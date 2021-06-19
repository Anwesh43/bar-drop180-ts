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

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const x : number = w / 2 
    const y : number = h / 2 
    const background = 'indigo'
    const barW : number = Math.min(w, h) / 12
    const barH : number = Math.min(w, h) / 5 
    return {
        parentStyle() {
            const left : string = `${w / 2}px`
            const top : string = `${h / 2}px`
            const transform = `rotate(${180 * scale}deg)`
            return {
                position, 
                left, 
                top,
                transform 
            }
        },
        barStyle() {
            const left = `${-barW / 2}px`
            const top = `${-barH}px`
            const width = `${barW}px`
            const height = `${barH}px`
            return {
                left, 
                top, 
                position, 
                width, 
                height,
                background 
            }
        }
    }
}