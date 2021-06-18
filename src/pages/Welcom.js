import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Welcom = props => {
    return (
        <div>
            <div>
                <Link to="/main">Volver</Link>
            </div>
            <h1>Welcom Page</h1>
        </div>
    )
}

Welcom.propTypes = {

}

export default Welcom
