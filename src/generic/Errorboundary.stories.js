import React from 'react'

import Errorboundary from './Errorboundary';

export default {
    title: 'Errorboundary',
    component: Errorboundary
}


export const ErrorboundaryExample = () => <Errorboundary saludo="holaaa!"  activo={true}/> 