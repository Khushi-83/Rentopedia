'use client'

import React, { useState, useEffect, useRef } from 'react';
import PocketBase from 'pocketbase';
import { Plus, Pencil, Trash2, Eye, Search, User, Building2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Listing {
  id: string;
  title: string;
  description: string;
  price: string;
  city: string;
  address: string;
  type: string;
  userId: string;
  image?: string;
}

interface FormData extends Omit<Listing, 'id'> {
  image?: string;
}

const PGDashboard = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [userName, setUserName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    price: '',
    city: '',
    address: '',
    type: '',
    userId: '',
    image: undefined
  });

  const pb = new PocketBase('https://laugh-consonant.pockethost.io');

  useEffect(() => {
    fetchListings();
    const authData = pb.authStore.model;
    if (authData) {
      setFormData(prev => ({
        ...prev,
        userId: authData.id
      }));
      setUserName(authData.name);
    }
  }, []);

  const fetchListings = async () => {
    try {
      const authData = pb.authStore.model;
      if (!authData) {
        console.error('No authenticated user found');
        return;
      }

      const records = await pb.collection('pg').getFullList<Listing>({
        filter: `userId = "${authData.id}"`,
        sort: '-created'
      });
      setListings(records);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        alert('File size should be less than 5MB');
        return;
      }

      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const handleCreate = async () => {
    try {
      const authData = pb.authStore.model;
      if (!authData) return;

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value && key !== 'image') formDataToSend.append(key, value);
      });
      
      if (formData.image instanceof File) {
        formDataToSend.append('image', formData.image);
      }

      await pb.collection('pg').create(formDataToSend);
      setIsCreateOpen(false);
      resetForm(authData.id);
      await fetchListings();
    } catch (error) {
      console.error('Error creating listing:', error);
      alert('Error creating listing. Please try again.');
    }
  };

  const handleUpdate = async () => {
    try {
      if (!selectedListing?.id) return;

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value && key !== 'image') formDataToSend.append(key, value);
      });

      if (formData.image instanceof File) {
        formDataToSend.append('image', formData.image);
      }

      await pb.collection('pg').update(selectedListing.id, formDataToSend);
      setIsUpdateOpen(false);
      setSelectedListing(null);
      resetForm(formData.userId);
      await fetchListings();
    } catch (error) {
      console.error('Error updating listing:', error);
      alert('Error updating listing. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this listing?')) return;
    
    try {
      await pb.collection('pg').delete(id);
      await fetchListings();
    } catch (error) {
      console.error('Error deleting listing:', error);
      alert('Error deleting listing. Please try again.');
    }
  };

  const resetForm = (userId: string) => {
    setFormData({
      title: '',
      description: '',
      price: '',
      city: '',
      address: '',
      type: '',
      userId,
      image: undefined
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const filteredListings = listings.filter(listing => 
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ListingCard = ({ listing }: { listing: Listing }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        {listing.image ? (
          <Image
            src={`https://laugh-consonant.pockethost.io/api/files/pg/${listing.id}/${listing.image}`}
            alt={listing.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
        <p className="text-lg font-bold text-primary mb-2">₹{listing.price}</p>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <span>{listing.city}</span> • <span>{listing.type}</span>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedListing(listing);
              setIsViewOpen(true);
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            View
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedListing(listing);
              setFormData({
                ...listing,
                image: listing.image
              });
              setIsUpdateOpen(true);
            }}
          >
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-red-600 hover:bg-red-50"
            onClick={() => handleDelete(listing.id)}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const FormFields = () => (
    <div className="grid gap-4">
      <Input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="price"
          type="text"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <Input
          name="type"
          placeholder="Type (e.g., PG, Flat)"
          value={formData.type}
          onChange={handleInputChange}
          required
        />
      </div>
      <Input
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleInputChange}
        required
      />
      <Input
        name="address"
        placeholder="Full Address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      <div className="space-y-2">
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="cursor-pointer"
          id="image"
        />
        {formData.image instanceof File && (
          <p className="text-sm text-gray-500">
            Selected: {formData.image.name}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 border-b pb-6">
        <div className="flex items-center gap-3 mb-2">
          <User className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-medium text-gray-700">Welcome, {userName}</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Building2 className="w-4 h-4" />
          <span>Property Manager Dashboard</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Your Properties</h1>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search listings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button className="whitespace-nowrap">
                <Plus className="w-4 h-4 mr-2" />
                Add Property
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Add New Property</DialogTitle>
              </DialogHeader>
              <FormFields />
              <Button onClick={handleCreate} className="w-full">Create Listing</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      <Dialog open={isUpdateOpen} onOpenChange={setIsUpdateOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Update Property</DialogTitle>
          </DialogHeader>
          <FormFields />
          <Button onClick={handleUpdate} className="w-full">Update Listing</Button>
        </DialogContent>
      </Dialog>

      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Property Details</DialogTitle>
          </DialogHeader>
          {selectedListing && (
            <div className="space-y-6">
              {selectedListing.image && (
                <div className="relative w-full h-64">
                  <Image
                    src={`https://laugh-consonant.pockethost.io/api/files/pg/${selectedListing.id}/${selectedListing.image}`}
                    alt={selectedListing.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="grid gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{selectedListing.title}</h3>
                  <p className="text-xl font-bold text-primary">₹{selectedListing.price}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Description</h4>
                  <p className="text-gray-600">{selectedListing.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700">City</h4>
                    <p className="text-gray-600">{selectedListing.city}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Type</h4>
                    <p className="text-gray-600">{selectedListing.type}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">{selectedListing.address}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PGDashboard;
