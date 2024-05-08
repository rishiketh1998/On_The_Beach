import { Meta, StoryFn } from '@storybook/react'
import { Card, CardProps } from './Card'
import hotelImage1 from '../../assets/images/hotel-image-1.png'

export default {
  title: 'components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    hotel: {
      description: 'Hotel information',
    },
  },
} as Meta

const Template: StoryFn<CardProps> = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  hotel: {
    id: 1,
    name: 'Hilton Garden Inn',
    location: 'Costa Adeje, Tenerife',
    rating: 5,

    price: 1136.5,
    image: hotelImage1,
    departingAirport: 'East Midlands',
    date: '3rd July 2019',
    days: 7,
    adults: 2,
    children: 2,
    infant: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum.',
  },
}
