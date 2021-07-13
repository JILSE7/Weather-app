import React , {useEffect, useRef, useState}from 'react'
import PropTypes from 'prop-types';

import useVanta from '../../hooks/useVanta';

const WelcomScreen = ({children}) => {
    
    //custom hook
    const [divRef] = useVanta();

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
