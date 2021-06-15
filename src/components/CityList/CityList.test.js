import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent} from '@testing-library/react'
import CityList from '../CityList/CityList' 
import { cities } from '../../helpers/cities';



describe('Renderizacion del componente CityList', () => {

    test('CityListRender ', async() => {
        //AAA ARRANGE: ARREGLAR LAS COSAS, ACT: ACTUAR, ASSERT: COMPARAR

        const {findAllByRole} = render(<CityList cities={cities}/>)

        const items = await findAllByRole('listitem');
        expect(items).toHaveLength(3);


    });

    test('CityList click on item', async() => {
        
        //Debemos imitar una accion del usuario: click sobre un item.
        //Para eso vamos a usar una funcion mock//(simula una funcion real)

        const fnClickOnItem = jest.fn();

        const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

        const items = await findAllByRole('listitem');

        //Ahora, para somilar la acción, vamos a utilizar fireEvent
        //fireEvent es parte de la libreria testing library

        fireEvent.click(items[0]);

        //Se debio llamar a la funcion fnClickOnItem UNA unica vez
        expect(fnClickOnItem).toHaveBeenCalled();



    })
    
})

