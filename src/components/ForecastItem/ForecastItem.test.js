import React from 'react'
import {render} from '@testing-library/react';
import'@testing-library/jest-dom';
import ForecastItem from './ForecastItem';

describe('Test sobre ForecastItem', () => {
    
    test('Renderizado del ForeCastItem ', async() => {
        const {findByText} = render(<ForecastItem weekDay="Martes" hour={20} state="sunny" temperature={70} />)

        const weekDay = await findByText(/Martes/);
        const hour = await findByText(/20/);
        const tempe = await findByText(/70/)

        expect(weekDay).toHaveTextContent("Martes");
        expect(hour).toHaveTextContent("20")
        expect(tempe).toHaveTextContent("70°")
    })
    
})
