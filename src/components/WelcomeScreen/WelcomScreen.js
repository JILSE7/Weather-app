import React , {useEffect, useRef, useState}from 'react'
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import *  as THREE from 'three'

const WelcomScreen = ({children}) => {
    const divRef = useRef(null);
    const [vanta, setvanta] = useState(0);

    useEffect(() => {
            if(!vanta) {  // sero es falsy por lo tanto se puede negar
                console.log('Moficamos el estado vanta');

                setvanta(Clouds({
                    THREE,
                    el: divRef.current
                }))
            }

            return () =>{
                if(vanta) {
                    vanta.destroy();
                    console.log('libero los recursos');
                }
            }
    }, [vanta])


    return (
        <div className="full" ref={divRef}>
            {children}
        </div>
    )
}

WelcomScreen.propTypes = {
children : PropTypes.node,
}

export default WelcomScreen
