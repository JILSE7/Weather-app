import React from 'react';
import Weather from './Weather';
//Para el testing
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';


describe('Testig al componente prueba', () => {
    
    //AAA Arrange Act Assert
    test('Weather Render ', async() => {
        
        const {findByRole} =  render(<Weather temperature = {10} weather="clouds"/>);

        const tem = await findByRole('heading');

        expect(tem).toHaveTextContent("10");
    });

    
    
    
})

