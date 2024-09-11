import React from 'react';
import SinglePg from '../../components/SinglePg';
import { PinIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Location from '@/components/Location';

const Pg= () => {
    const propertyData = [
        {
          "id": 1,
          "name": "Chandigarh Central Apartments",
          "location": "Chandigarh Central, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7000/month",
          "description": "Modern apartments in the heart of Chandigarh. Close to shopping and entertainment. Contact: 9876543210",
          "image": "/chandigarh/img1.jpg"
        },
        {
          "id": 2,
          "name": "Lakeview Residences",
          "location": "Lakeview Road, Chandigarh",
          "city": "Chandigarh",
          "price": "₹8500/month",
          "description": "Residences with scenic views of the lake. Close to parks and recreation areas. Contact: 1234567890",
          "image": "/chandigarh/img2.jpg"
        },
        {
          "id": 3,
          "name": "Garden Grove Villas",
          "location": "Garden Grove, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7500/month",
          "description": "Spacious villas with lush garden surroundings. Perfect for families. Contact: 2345678901",
          "image": "/chandigarh/img3.jpg"
        },
        {
          "id": 4,
          "name": "Hilltop Haven Apartments",
          "location": "Hilltop Haven, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7800/month",
          "description": "Apartments located on a hilltop, offering panoramic views. Close to schools and hospitals. Contact: 3456789012",
          "image": "/chandigarh/img4.jpg"
        },
        {
          "id": 5,
          "name": "Serenity Towers",
          "location": "Serenity Avenue, Chandigarh",
          "city": "Chandigarh",
          "price": "₹8000/month",
          "description": "Towers offering serene living spaces. Close to shopping and dining. Contact: 4567890123",
          "image": "/chandigarh/img5.jpg"
        },
        {
          "id": 6,
          "name": "Cityscape Residences",
          "location": "Cityscape Lane, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7200/month",
          "description": "Modern residences with city views. Convenient location. Contact: 5678901234",
          "image": "/chandigarh/img6.jpg"
        },
        {
          "id": 7,
          "name": "Sunrise Apartments",
          "location": "Sunrise Avenue, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7400/month",
          "description": "Bright and airy apartments with stunning sunrise views. Close to schools and parks. Contact: 6789012345",
          "image": "/chandigarh/img7.jpg"
        },
        {
          "id": 8,
          "name": "Pinecrest Homes",
          "location": "Pinecrest Lane, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7700/month",
          "description": "Comfortable homes surrounded by pine trees. Family-friendly neighborhood. Contact: 7890123456",
          "image": "/chandigarh/img8.jpg"
        },
        {
          "id": 9,
          "name": "Valley View Villas",
          "location": "Valley View Road, Chandigarh",
          "city": "Chandigarh",
          "price": "₹8600/month",
          "description": "Villas with picturesque views of the valley. Peaceful and serene environment. Contact: 8901234567",
          "image": "/chandigarh/img9.jpg"
        },
        {
          "id": 10,
          "name": "Urban Oasis Apartments",
          "location": "Urban Oasis, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7300/month",
          "description": "Modern apartments in an urban oasis setting. Close to transportation. Contact: 9012345678",
          "image": "/chandigarh/img10.jpg"
        },
        // Add more properties here...
        {
            "id": 11,
            "name": "Chandigarh View Residences",
            "location": "Chandigarh View, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7800/month",
            "description": "Residences offering stunning views of Chandigarh. Close to amenities. Contact: 0123456789",
            "image": "/chandigarh/img11.jpg"
          },
          {
            "id": 12,
            "name": "Riverside Retreat Homes",
            "location": "Riverside Retreat, Chandigarh",
            "city": "Chandigarh",
            "price": "₹8200/month",
            "description": "Retreat-style homes with views of the river. Peaceful and tranquil atmosphere. Contact: 1234567890",
            "image": "/chandigarh/img12.jpg"
          },
          {
            "id": 13,
            "name": "Golden Glades Apartments",
            "location": "Golden Glades, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7400/month",
            "description": "Luxurious apartments surrounded by golden glades. Close to shopping and dining. Contact: 2345678901",
            "image": "/chandigarh/img13.jpg"
          },
          {
            "id": 14,
            "name": "Misty Hills Villas",
            "location": "Misty Hills, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7900/month",
            "description": "Charming villas nestled in misty hills. Serene and tranquil environment. Contact: 3456789012",
            "image": "/chandigarh/img14.jpg"
          },
          {
            "id": 15,
            "name": "Sapphire Towers",
            "location": "Sapphire Avenue, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7700/month",
            "description": "Towers offering luxurious living spaces. Close to transportation. Contact: 4567890123",
            "image": "/chandigarh/img15.jpg"
          },
          {
            "id": 16,
            "name": "Forest View Apartments",
            "location": "Forest View Road, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7500/month",
            "description": "Apartments with views of the forest. Perfect for nature enthusiasts. Contact: 5678901234",
            "image": "/chandigarh/img16.jpg"
          },
          {
            "id": 17,
            "name": "Tranquil Homes",
            "location": "Tranquil Lane, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7600/month",
            "description": "Homes offering a tranquil living environment. Close to schools and parks. Contact: 6789012345",
            "image": "/chandigarh/img17.jpg"
          },
          {
            "id": 18,
            "name": "Cityscape Villas",
            "location": "Cityscape Lane, Chandigarh",
            "city": "Chandigarh",
            "price": "₹8300/month",
            "description": "Luxurious villas with city views. Exclusive and elegant living spaces. Contact: 7890123456",
            "image": "/chandigarh/img18.jpg"
          },
          {
            "id": 19,
            "name": "Gardenia Apartments",
            "location": "Gardenia Avenue, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7200/month",
            "description": "Modern apartments with beautiful garden views. Close to shopping centers. Contact: 8901234567",
            "image": "/chandigarh/img19.jpg"
          },
          {
            "id": 20,
            "name": "Hillcrest Residences",
            "location": "Hillcrest Road, Chandigarh",
            "city": "Chandigarh",
            "price": "₹7800/month",
            "description": "Residences situated on a hillcrest, offering scenic views of Chandigarh. Contact: 9012345678",
            "image": "/chandigarh/img20.jpg"
          },
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
      <h1 className="text-3xl font-bold tracking-tight">Available PGs & Flats for Students in Chandigarh</h1>
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
