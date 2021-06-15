import React from 'react'
import {render  } from '@testing-library/react'
import '@testing-library/jest-dom';
import Forecats from './Forecats';
import { list } from '../../helpers/forecastList';


describe('Test sobre Forecast', () => {
    
    test('Renderizado de forecastIte, ', async() => {
        
        const {findAllByTestId} = (render(<Forecats forecastItemList={list}/>)); 

        const ids = await findAllByTestId('forecast-item');

        expect(ids).toHaveLength(7);
    })
    
})
