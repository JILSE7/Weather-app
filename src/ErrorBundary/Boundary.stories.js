import React from 'react'

import Boundary from './Boundary';

export default {
    title: 'Boundary',
    component: Boundary
}

const error = undefined;
const ComponentWithError = () => <h1>{error.hola}</h1>
const ComponentWithOutError = () => (<h1>Hola</h1>)

export const BoundaryWithError =  () => (
    <Boundary>
        <ComponentWithError/>
    </Boundary>
)


export const BoundaryWithOutError =  () => (
    <Boundary>
        <ComponentWithOutError/>
    </Boundary>
)