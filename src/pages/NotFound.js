import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <div>
                <Link to="/main">Volver</Link >
            </div>
            404
        </div>
    )
}
