'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PocketBase from 'pocketbase'

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    name: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const pb = new PocketBase('https://laugh-consonant.pockethost.io')
      
      const data = {
        ...formData,
        emailVisibility: true,
      }

      const record = await pb.collection('users').create(data)
      await pb.collection('users').requestVerification(formData.email)

      // Reset form after successful signup
      setFormData({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
        name: ''
      })

      alert('Signup successful! Please check your email for verification.')
    } catch (error) {
      console.error('Signup error:', error)
      alert('Signup failed. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='min-h-screen w-full flex flex-col bg-gray-50'>
      <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8 my-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="passwordConfirm">Confirm Password</Label>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required
                value={formData.passwordConfirm}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-500">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
