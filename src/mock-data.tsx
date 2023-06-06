import hotelImage1 from "./assets/images/hotel-image-1.png";
import hotelImage2 from "./assets/images/hotel-image-2.png";
import hotelImage3 from "./assets/images/hotel-image-3.png";
import type { Hotel } from "./types/interfaces/hotel";

export const hotelsInformation: Hotel[] = [
  {
    id: 1,
    name: "Iberostar Grand Salome",
    location: "Costa Adeje, Tenerife",
    rating: 5,
    price: 1136.5,
    image: hotelImage1,
    departingAirport: "East Midlands",
    date: "3rd July 2019",
    days: 7,
    adults: 2,
    children: 2,
    infant: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    name: "Aguamarina Golf Hotel",
    location: "Costa Adeje, Tenerife",
    rating: 4,
    price: 696.5,
    image: hotelImage2,
    departingAirport: "Liverpool",
    date: "27th May 2019",
    days: 7,
    adults: 2,
    children: 1,
    infant: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    name: "Las Piramides Resort",
    location: "Costa Adeje, Tenerife",
    rating: 3,
    price: 499.99,
    image: hotelImage3,
    departingAirport: "Manchester",
    date: "3rd July 2019",
    days: 7,
    adults: 2,
    children: 2,
    infant: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet, consectetur adiasdasd elit. Quisquam, voluptatum.",
  },
];
