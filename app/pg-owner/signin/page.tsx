'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PocketBase from 'pocketbase'

const SigninPage = () => {
  const router = useRouter()
  const pb = new PocketBase('https://laugh-consonant.pockethost.io')
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const authData = await pb.collection('users').authWithPassword(
        formData.email,
        formData.password
      )
      router.push('/pg-owner/dashboard')
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="text-gray-600 mt-2">Welcome back! Please sign in to your account.</p>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <Button type="submit" className="w-full bg-green-600 hover:bg-green-500">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninPage

