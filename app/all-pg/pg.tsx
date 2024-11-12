"use client"
import React, { useState, useEffect } from 'react';
import SinglePg from '../../components/SinglePg';
import { PinIcon, SearchIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Location from '@/components/Location';
import PocketBase from 'pocketbase';
import { motion } from 'framer-motion';

const pb = new PocketBase('https://laugh-consonant.pockethost.io');

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hero Section Component
const HeroSection = () => {
  return (
    <motion.div 
      variants={fadeIn}
      className="container px-4 md:px-6 relative overflow-hidden bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8"
    >
      <div className="grid md:grid-cols-3 items-center gap-6 lg:gap-12">
        <div className="flex flex-col justify-center gap-6 md:col-span-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Find your perfect home away from home
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
              Browse through our curated list of Paying Guest accommodations and flats near your college or university.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <PinIcon className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium">India</span>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl transform rotate-6" />
          <Image
            alt="Banner"
            className="relative rounded-3xl object-cover shadow-2xl transform transition-transform hover:scale-105"
            height={400}
            src="/banner.jpg"
            width={600}
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Search and Filter Component
const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCity, setSelectedCity, priceRange, setPriceRange }: { searchTerm: string, setSearchTerm: (value: string) => void, selectedCity: string, setSelectedCity: (value: string) => void, priceRange: string, setPriceRange: (value: string) => void }) => {
  const cities = ['All', 'Mohali', 'Chandigarh', 'Kharar'];
  const priceRanges = ['All', '₹6000-₹7000', '₹7000-₹8000', '₹8000+'];

  return (
    <motion.div 
      variants={fadeIn}
      className="w-[300px] p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg top-4 sticky"
    >
      <div className="flex flex-col gap-8">
        <motion.div variants={staggerChildren} className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Filters
          </h2>
          
          <motion.div variants={fadeIn} className="relative w-full">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-xl border-2 border-primary/20 focus:border-primary transition-colors"
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div variants={fadeIn} className="flex flex-col gap-3">
              <Label className="text-lg font-semibold">City</Label>
              <div className="flex flex-col gap-2">
                {cities.map(city => (
                  <Button
                    key={city}
                    variant={selectedCity === city ? "default" : "outline"}
                    onClick={() => setSelectedCity(city)}
                    className="w-full justify-start"
                  >
                    {city}
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-col gap-3">
              <Label className="text-lg font-semibold">Price Range</Label>
              <div className="flex flex-col gap-2">
                {priceRanges.map(range => (
                  <Button
                    key={range}
                    variant={priceRange === range ? "default" : "outline"}
                    onClick={() => setPriceRange(range)}
                    className="w-full justify-start"
                  >
                    {range}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Property Grid Component
const PropertyGrid = ({ filteredProperties }: { filteredProperties: any[] }) => {
  return (
    <motion.div 
      variants={staggerChildren}
      className="flex-1 grid grid-cols-1 gap-8 p-6 overflow-y-auto"
    >
      {filteredProperties.map((property: any) => (
        <motion.div
          key={property.id}
          variants={fadeIn}
          whileHover={{ y: -10 }}
          className="transform transition-all"
        >
          <SinglePg
            name={property.title}
            location={property.address}
            city={property.city}
            price={property.price}
            description={property.description}
            imageURL={`https://laugh-consonant.pockethost.io/api/files/pg/${property.id}/${property.images}`}
          />
        </motion.div>
      ))}

      {filteredProperties.length === 0 && (
        <motion.div 
          variants={fadeIn}
          className="text-center py-12 col-span-2"
        >
          <p className="text-xl text-gray-500">No properties found matching your criteria.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

// Main Component
const Pg = () => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [propertyData, setPropertyData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPgs() {
      try {
        const records = await pb
          .collection("pg")
          .getFullList({
            sort: "-created",
          });
        setPropertyData(records);
      } catch (error) {
        console.error("Error fetching PGs:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPgs();
  }, []);

  const filterProperties = () => {
    return propertyData.filter((property: any) => {
      if (!property.price || !property.title || !property.description || !property.address) {
        return false;
      }

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
    <motion.div 
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className='flex flex-col space-y-8'
    >
      <HeroSection />
      
      <motion.div variants={fadeIn}>
        <Location />
      </motion.div>

      <div className="container mx-auto flex gap-8 relative">
        <SearchAndFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <PropertyGrid filteredProperties={filterProperties()} />
      </div>
    </motion.div>
  );
};

export default Pg;
