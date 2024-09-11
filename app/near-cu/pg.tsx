import React from 'react';
import SinglePg from '../../components/SinglePg';
import { PinIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Location from '@/components/Location';

const Pg= () => {
  const propertyData= [
      {
        "id": 1,
        "name": "Sai Residency",
        "location": "Near University Campus, Hyderabad",
        "city": "Kharar",
        "price": "₹5000/month",
        "description": "Well-furnished rooms with AC, 24/7 Wi-Fi, and a common kitchen. 2 mins walk to the campus. Contact: 9876543210",
        "image": "/img1.jpg"
      },
      {
        "id": 2,
        "name": "ABC Apartments",
        "location": "Downtown, City Center",
        "city": "New York",
        "price": "₹7000/month",
        "description": "Modern apartments with breathtaking city views. Close to all amenities. Contact: 1234567890",
        "image": "/img2.jpg"
      },
      {
        "id": 3,
        "name": "Sunrise Heights",
        "location": "Beach Road, Santa Monica",
        "city": "Los Angeles",
        "price": "₹8000/month",
        "description": "Luxurious beachfront apartments with access to private beach. Contact: 0987654321",
        "image": "/img3.jpg"
      },
      {
        "id": 4,
        "name": "Green Valley Villas",
        "location": "Suburban Paradise, Green Valley",
        "city": "Chicago",
        "price": "₹6000/month",
        "description": "Spacious villas surrounded by lush greenery. Ideal for nature lovers. Contact: 4567890123",
        "image": "/img4.jpg"
      },
      {
        "id": 5,
        "name": "Golden Towers",
        "location": "Financial District, Downtown",
        "city": "San Francisco",
        "price": "₹9000/month",
        "description": "Executive suites with panoramic city views. Perfect for professionals. Contact: 5678901234",
        "image": "/img5.jpg"
      },
      {
        "id": 6,
        "name": "Royal Gardens",
        "location": "Countryside, Surrey",
        "city": "London",
        "price": "£4000/month",
        "description": "Elegant garden homes with traditional British charm. Contact: +44 1234 567890",
        "image": "/img6.jpg"
      },
      {
        "id": 7,
        "name": "Misty Meadows",
        "location": "Hillside Drive, Hollywood Hills",
        "city": "Los Angeles",
        "price": "₹10000/month",
        "description": "Secluded hilltop retreat with stunning views of the city skyline. Contact: 3456789012",
        "image": "/img7.jpg"
      },
      {
        "id": 8,
        "name": "Tranquil Haven",
        "location": "Lakeview Terrace, Lake District",
        "city": "Manchester",
        "price": "£3500/month",
        "description": "Peaceful cottages overlooking the serene lake. Ideal for relaxation. Contact: +44 9876 543210",
        "image": "/img8.jpg"
      },
      {
        "id": 9,
        "name": "Skyline Residences",
        "location": "Skyscraper Avenue, Downtown",
        "city": "Singapore",
        "price": "SGD 12000/month",
        "description": "Modern high-rise apartments with breathtaking cityscape views. Contact: +65 1234 5678",
        "image": "/img9.jpg"
      },
      {
        "id": 10,
        "name": "Cherry Blossom Heights",
        "location": "Cherry Blossom Lane, Tokyo",
        "city": "Tokyo",
        "price": "¥150000/month",
        "description": "Sakura-themed apartments in the heart of Tokyo. Contact: +81 987-654-3210",
        "image": "/img10.jpg"
      }
  ];

  return (
    <div className='flex flex-col justify-center'>
      <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 items-start gap-6 lg:gap-12 xl:gap-24">
            <div className="flex flex-col justify-center gap-4 md:col-start-1 md:col-span-2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Find your perfect home away <br /> from home
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Browse through our curated list of Paying Guest accommodations and flats near <br /> your college or
                  university.
                </p>
              </div>
              <form className="grid gap-4 md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_200px] xl:grid-cols-[1fr_200px] items-start">
                <div className="flex items-center gap-4">
                  <Label className="sr-only" htmlFor="location">
                    Location
                  </Label>
                  {/* <Input className="max-w-sm" id="location" placeholder="Enter your college or university" />
                  <Button type="submit">Search</Button> */}
                </div>
                <div className="grid gap-0.5">
                  <div className="text-xs flex items-center gap-2">
                    <PinIcon className="w-4 h-4 fill-primary" />
                    India
                  </div>
                </div>
              </form>
            </div>

            {/* <Location /> */}

            <div className="flex items-center justify-center">
              <Image
                alt="Image"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={400}
                src="/banner.jpg"
                width={600}
              />
            </div>
          </div>
        </div>
        <Location />
      <div className="grid gap-8 mx-auto md:gap-12 py-6 md:py-12 lg:py-16">
      <h1 className="text-3xl font-bold tracking-tight">Available PGs & Flats for Students near CU</h1>
        <div className='flex flex-col gap-4'>
          {propertyData.map(property => (
            <SinglePg
              key={property.id}
              name={property.name}
              location={property.location}
              city={property.city}
              price={property.price}
              description={property.description}
              image={property.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pg;
