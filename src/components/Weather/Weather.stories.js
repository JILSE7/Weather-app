import React from 'react'
import Weather from './index.js'

export default {
    title: 'Weather',
    component : Weather
}

const Template = (args) => <Weather {...args} />

export const weatherCloud = Template.bind({});
weatherCloud.args = {temperature : 10, weather: 'clouds'}


export const weatherSunny = Template.bind({});
weatherSunny.args = {temperature : 10, weather: 'clear'}