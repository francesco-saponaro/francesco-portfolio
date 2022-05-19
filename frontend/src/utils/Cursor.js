import React, { useEffect, useState, useRef } from 'react'

let cursorRef;

// Custom Cursor component
const Cursor = () => {

    cursorRef = useRef();

    const [mousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })

    const outOfScreenBoolean = mousePosition.left <= window.pageXOffset + 3 || 
                               mousePosition.left >= (document.documentElement.clientWidth + window.pageXOffset) - 20 ||
                               mousePosition.top <= window.pageYOffset + 3 ||
                               mousePosition.top >= (document.documentElement.clientHeight + window.pageYOffset) - 8;

    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            setMousePosition({
              top: e.pageY,
              left: e.pageX
            })
        })

        return () => {
            document.removeEventListener('mousemove', setMousePosition);
        }
    }, [])

    return(
        <div ref={cursorRef} className='cursor' 
             style={{left:mousePosition.left + 'px', 
                     top:mousePosition.top + 'px', 
                     display: outOfScreenBoolean && 'none'
                    }}
        /> 
    )
}

// Scale cursor function
const cursorScale = (size) => {
    cursorRef.current.style.transform = `scale(${size})`;
}

// Unscale cursor function
const cursorUnScale = () => {
    cursorRef.current.style.transform = "scale(1)";
}

export { Cursor, cursorScale, cursorUnScale }