import React from 'react'
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import CityInfo from './CityInfo' // SUT: System under testing

test('CityInfo Render ', async() => {
    // AAA
    //Arrange
    //Act
    //Assert -> Asercion
    
    const city = 'Guadalajara',
          country = 'México';

    const {findAllByRole} = render(<CityInfo city={city} country={country}/>);

    //Assert
    //findAllByRoll nos va a buscar todos los componentes que sean de tipo
    //heading --> H1, H2, H3, ... etc
    const cityComponents = await findAllByRole('heading');


    //Cuando el test va a ser correcto
    expect(cityComponents[0]).toHaveTextContent("Guadalajara");
    expect(cityComponents[1]).toHaveTextContent("México");
})
