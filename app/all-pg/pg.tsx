"use client"
import React, { useState, useEffect } from 'react';
import SinglePg from '../../components/SinglePg';
import { PinIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Location from '@/components/Location';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://laugh-consonant.pockethost.io');

const Pg = () => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyData, setPropertyData] = useState<any>([]);

  useEffect(() => {
    async function fetchPgs() {
      try {
        const records = await pb
          .collection("pg")
          .getFullList({
            sort: "-created",
          });
        console.log("Fetched records:", records); // Add this log
        setPropertyData(records);
      } catch (error) {
        console.error("Error fetching PGs:", error);
      }
    }

    fetchPgs();
  }, []);

  const cities = ['All', 'Mohali', 'Chandigarh', 'Kharar'];
  const priceRanges = [
    'All',
    '₹6000-₹7000',
    '₹7000-₹8000',
    '₹8000+'
  ];

  const filterProperties = () => {
    return propertyData.filter((property: any) => {
      // Add null checks
      if (!property.price || !property.title || !property.description || !property.address) {
        return false;
      }

      // Convert price to number by removing non-digits
      const price = typeof property.price === 'string' ? 
        parseInt(property.price.replace(/[^\d]/g, '')) :
        property.price;
        
      const matchesCity = selectedCity === 'All' || property.city?.toLowerCase() === selectedCity.toLowerCase();
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.address.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesPrice = true;
      if (priceRange === '₹6000-₹7000') {
        matchesPrice = price >= 6000 && price < 7000;
      } else if (priceRange === '₹7000-₹8000') {
        matchesPrice = price >= 7000 && price < 8000;
      } else if (priceRange === '₹8000+') {
        matchesPrice = price >= 8000;
      }

      return matchesCity && matchesPrice && matchesSearch;
    });
  };

  return (
    <div className='flex flex-col justify-center space-y-8'>
      {/* Hero Section */}
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 items-start gap-6 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center gap-4 md:col-start-1 md:col-span-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Find your perfect home away from home
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Browse through our curated list of Paying Guest accommodations and flats near your college or university.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <PinIcon className="w-5 h-5 text-primary" />
              <span className="text-base font-medium">India</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Banner"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
              height={400}
              src="/banner.jpg"
              width={600}
              priority
            />
          </div>
        </div>
      </div>

      <Location />

      {/* Search and Filters Section */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight">Available PGs & Flats</h2>
            
            <div className="w-full max-w-md">
              <Input
                type="search"
                placeholder="Search by name, description or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col gap-2">
                <Label className="text-base">Filter by City</Label>
                <div className="flex flex-wrap gap-2">
                  {cities.map(city => (
                    <Button
                      key={city}
                      variant={selectedCity === city ? "default" : "outline"}
                      onClick={() => setSelectedCity(city)}
                      className="rounded-full"
                    >
                      {city}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-base">Filter by Price Range</Label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(range => (
                    <Button
                      key={range}
                      variant={priceRange === range ? "default" : "outline"}
                      onClick={() => setPriceRange(range)}
                      className="rounded-full"
                    >
                      {range}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto" >
            {filterProperties().map((property: any) => (
              <SinglePg
                key={property.id}
                name={property.title}
                location={property.address}
                city={property.city}
                price={property.price}
                description={property.description}
                imageURL={`https://laugh-consonant.pockethost.io/api/files/pg/${property.id}/${property.images}`}
              />
            ))}
          </div>

          {filterProperties().length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pg;
