import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react'
import CityList from '../CityList/CityList' 
import { cities } from '../../helpers/cities';



describe('Renderizacion del componente CityList', () => {

    test('CityListRender ', async() => {
        //AAA ARRANGE: ARREGLAR LAS COSAS, ACT: ACTUAR, ASSERT: COMPARAR

        const {findAllByRole} = render(<CityList cities={cities}/>)

        const items = await findAllByRole('listitem');
        expect(items).toHaveLength(3);


    })
})

