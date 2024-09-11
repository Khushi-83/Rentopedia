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
          "id": 2,
          "name": "Sunset View Villas",
          "location": "Sunset Valley, Mohali",
          "city": "Mohali",
          "price": "₹8500/month",
          "description": "Luxurious villas with stunning sunset views. Spacious interiors and private gardens. Contact: 1234567890",
          "image": "/mohali/img2.jpg"
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
          "id": 8,
          "name": "Palm Grove Villas",
          "location": "Palm Grove, Mohali",
          "city": "Mohali",
          "price": "₹8800/month",
          "description": "Exquisite villas surrounded by palm trees. Exclusive and luxurious living. Contact: 8901234567",
          "image": "/mohali/img8.jpg"
        },
        {
          "id": 15,
          "name": "Maplewood Villas",
          "location": "Maplewood Avenue, Mohali",
          "city": "Mohali",
          "price": "₹7400/month",
          "description": "Villas with maple wood accents. Close to shopping and dining. Contact: 6789012345",
          "image": "/mohali/img15.jpg"
        },
        {
          "id": 6,
          "name": "Sunnyvale Homes",
          "location": "Sunnyvale Street, Mohali",
          "city": "Mohali",
          "price": "₹7200/month",
          "description": "Comfortable homes in a sunny and vibrant neighborhood. Family-friendly environment. Contact: 6789012345",
          "image": "/mohali/img6.jpg"
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
          "id": 10,
          "name": "Valley View Residences",
          "location": "Valley Street, Green Meadows",
          "city": "Kharar",
          "price": "₹6900/month",
          "description": "Residences with picturesque views of the valley. Close to hiking trails. Contact: 9876543210",
          "image": "/img10.jpg"
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
        {
          "id": 15,
          "name": "Oakwood Apartments",
          "location": "Oakwood Street, Green Meadows",
          "city": "Kharar",
          "price": "₹6500/month",
          "description": "Modern apartments with oak wood finishes. Convenient location. Contact: 6789012345",
          "image": "/img15.jpg"
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
          "id": 17,
          "name": "Hilltop Retreat",
          "location": "Hilltop Drive, Mohali",
          "city": "Mohali",
          "price": "₹8200/month",
          "description": "Retreat-style living with hilltop views. Peaceful and tranquil atmosphere. Contact: 7890123456",
          "image": "/mohali/img17.jpg"
        },
        {
          "id": 12,
          "name": "Riverfront Residences",
          "location": "Riverfront Road, Green Meadows",
          "city": "Kharar",
          "price": "₹7300/month",
          "description": "Elegant residences with views of the river. Ideal for nature lovers. Contact: 3456789012",
          "image": "/img12.jpg"
        },
        {
          "id": 12,
          "name": "Forest Retreat Homes",
          "location": "Forest Retreat, Mohali",
          "city": "Mohali",
          "price": "₹7800/month",
          "description": "Homes nestled in a forested area. Peaceful and secluded living. Contact: 3456789012",
          "image": "/mohali/img12.jpg"
        },
        {
          "id": 5,
          "name": "Tranquil Heights",
          "location": "Hillside Drive, Green Meadows",
          "city": "Kharar",
          "price": "₹8000/month",
          "description": "Peaceful apartments located on a hillside, offering serene views of the valley. Contact: 5678901234",
          "image": "/img5.jpg"
        },
        {
          "id": 6,
          "name": "Lakeview Condos",
          "location": "Lakefront Drive, Green Meadows",
          "city": "Kharar",
          "price": "₹8500/month",
          "description": "Condominiums overlooking a tranquil lake. Ideal for nature enthusiasts. Contact: 7890123456",
          "image": "/img6.jpg"
        },
        {
          "id": 16,
          "name": "Riverside Retreat",
          "location": "Riverside Drive, Green Meadows",
          "city": "Kharar",
          "price": "₹7700/month",
          "description": "Retreat-style living with riverfront views. Peaceful and scenic environment. Contact: 7890123456",
          "image": "/img16.jpg"
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
          "id": 19,
          "name": "Meadowlark Residences",
          "location": "Meadowlark Lane, Green Meadows",
          "city": "Kharar",
          "price": "₹7400/month",
          "description": "Stylish residences surrounded by meadows. Serene and tranquil atmosphere. Contact: 0123456789",
          "image": "/img19.jpg"
        },
        {
          "id": 13,
          "name": "Misty Hills Apartments",
          "location": "Misty Hills Road, Green Meadows",
          "city": "Kharar",
          "price": "₹6800/month",
          "description": "Apartments nestled in misty hills. Serene and peaceful atmosphere. Contact: 4567890123",
          "image": "/img13.jpg"
        },
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
          "id": 14,
          "name": "Pinecrest Homes",
          "location": "Pinecrest Lane, Green Meadows",
          "city": "Kharar",
          "price": "₹7200/month",
          "description": "Comfortable homes surrounded by pine trees. Close to shopping and dining. Contact: 5678901234",
          "image": "/img14.jpg"
        },
        {
          "id": 8,
          "name": "Cityscape Apartments",
          "location": "City View Road, Green Meadows",
          "city": "Kharar",
          "price": "₹6800/month",
          "description": "Modern apartments offering panoramic views of the city skyline. Contact: 9012345678",
          "image": "/img8.jpg"
        },
        {
          "id": 7,
          "name": "Riverside Apartments",
          "location": "Riverside Drive, Mohali",
          "city": "Mohali",
          "price": "₹7000/month",
          "description": "Apartments overlooking the river. Tranquil and peaceful living spaces. Contact: 7890123456",
          "image": "/mohali/img7.jpg"
        },
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
          "id": 17,
          "name": "Tranquil Homes",
          "location": "Tranquil Lane, Chandigarh",
          "city": "Chandigarh",
          "price": "₹7600/month",
          "description": "Homes offering a tranquil living environment. Close to schools and parks. Contact: 6789012345",
          "image": "/chandigarh/img17.jpg"
        },
        {
          "id": 20,
          "name": "Sapphire Towers",
          "location": "Sapphire Avenue, Mohali",
          "city": "Mohali",
          "price": "₹7700/month",
          "description": "Towers offering luxurious living spaces. Close to transportation. Contact: 1234567890",
          "image": "/mohali/img20.jpg"
        },
        {
          "id": 11,
          "name": "Sunrise View Residences",
          "location": "Sunrise View, Mohali",
          "city": "Mohali",
          "price": "₹6900/month",
          "description": "Residences offering stunning sunrise views. Close to amenities. Contact: 2345678901",
          "image": "/mohali/img11.jpg"
        },
        {
          "id": 15,
          "name": "Oakwood Apartments",
          "location": "Oakwood Street, Green Meadows",
          "city": "Kharar",
          "price": "₹6500/month",
          "description": "Modern apartments with oak wood finishes. Convenient location. Contact: 6789012345",
          "image": "/img15.jpg"
        },
        {
          "id": 13,
          "name": "Golden Glades Apartments",
          "location": "Golden Glades, Green Meadows",
          "city": "Kharar",
          "price": "₹7000/month",
          "description": "Luxurious apartments with golden sunset views. Close to schools and parks. Contact: 9012345678",
          "image": "/img13.jpg"
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
          "id": 2,
          "name": "Sunset Valley Villas",
          "location": "Sunset Valley, Mohali",
          "city": "Mohali",
          "price": "₹8500/month",
          "description": "Luxurious villas with stunning sunset views. Spacious interiors and private gardens. Contact: 1234567890",
          "image": "/mohali/img2.jpg"
        },
        {
          "id": 20,
          "name": "Maplewood Villas",
          "location": "Maplewood Avenue, Mohali",
          "city": "Mohali",
          "price": "₹7800/month",
          "description": "Charming villas with maple wood accents. Close to shopping and dining. Contact: 1234567890",
          "image": "/mohali/img20.jpg"
        },
        {
          "id": 14,
          "name": "Misty Hills Apartments",
          "location": "Misty Hills, Mohali",
          "city": "Mohali",
          "price": "₹6900/month",
          "description": "Apartments nestled in misty hills. Tranquil and serene atmosphere. Contact: 9012345678",
          "image": "/mohali/img14.jpg"
        },
        {
          "id": 1,
          "name": "Green Meadows Apartments",
          "location": "Green Meadows, Kharar",
          "city": "Kharar",
          "price": "₹6000/month",
          "description": "Modern apartments with beautiful green surroundings. Close to schools and shopping centers. Contact: 9876543210",
          "image": "/img1.jpg"
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
          "id": 5,
          "name": "Highland Towers",
          "location": "Highland Avenue, Mohali",
          "city": "Mohali",
          "price": "₹8000/month",
          "description": "High-rise towers offering panoramic city views. Modern amenities and convenient location. Contact: 5678901234",
          "image": "/mohali/img5.jpg"
        },
        {
          "id": 17,
          "name": "Hilltop Retreat",
          "location": "Hilltop Drive, Mohali",
          "city": "Mohali",
          "price": "₹8200/month",
          "description": "Retreat-style living with hilltop views. Peaceful and tranquil atmosphere. Contact: 7890123456",
          "image": "/mohali/img17.jpg"
        },
        {
          "id": 17,
          "name": "Riverfront Homes",
          "location": "Riverfront Lane, Mohali",
          "city": "Mohali",
          "price": "₹7300/month",
          "description": "Homes with views of the river. Scenic and serene environment. Contact: 8901234567",
          "image": "/mohali/img17.jpg"
        },
        {
          "id": 6,
          "name": "Sunnyvale Homes",
          "location": "Sunnyvale Street, Mohali",
          "city": "Mohali",
          "price": "₹7200/month",
          "description": "Comfortable homes in a sunny and vibrant neighborhood. Family-friendly environment. Contact: 6789012345",
          "image": "/mohali/img6.jpg"
        },
        {
          "id": 20,
          "name": "Urban Oasis Residences",
          "location": "Urban Oasis, Mohali",
          "city": "Mohali",
          "price": "₹8000/month",
          "description": "Residences in an urban oasis setting. Close to amenities. Contact: 0123456789",
          "image": "/mohali/img19.jpg"
        },
        {
          "id": 15,
          "name": "Maplewood Villas",
          "location": "Maplewood Avenue, Mohali",
          "city": "Mohali",
          "price": "₹7400/month",
          "description": "Villas with maple wood accents. Close to shopping and dining. Contact: 6789012345",
          "image": "/mohali/img15.jpg"
        },
        {
          "id": 15,
          "name": "Maplewood Apartments",
          "location": "Maplewood Street, Mohali",
          "city": "Mohali",
          "price": "₹7800/month",
          "description": "Modern apartments with maple wood finishes. Convenient location. Contact: 7890123456",
          "image": "/mohali/img15.jpg"
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
                {/* <div className="flex items-center gap-4">
                  <Label className="sr-only" htmlFor="location">
                    Location
                  </Label>
                  <Input className="max-w-sm" id="location" placeholder="Enter your college or university" />
                  <Button type="submit">Search</Button>
                </div> */}
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
      <h1 className="text-3xl font-bold tracking-tight">Available All PGs & Flats for Students.</h1>
        <div className='flex flex-col gap-6'>
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
