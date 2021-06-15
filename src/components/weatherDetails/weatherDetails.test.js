import React from 'react'
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import WeatherDetails from '../weatherDetails';


describe('Testing sobre componente WeatherDetails', () => {
    
    //FindByText: Permite encontrar un componente por el texto que muestra
    test('Renderizacion del componente ', async() => {
        const {findByText} = render(<WeatherDetails humidity={80} wind={10}/>)

        //AL utilizar las barras utilizamos un REGEXP, una expresion regular
        const wind = await findByText(/10/);
        const humidity = await findByText(/80/);

        expect(wind).toHaveTextContent("Viento:10Km/h");
        expect(humidity).toHaveTextContent('Humedad:80%');
    })
    
})
