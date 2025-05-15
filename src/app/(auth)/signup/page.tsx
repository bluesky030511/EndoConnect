'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { authService } from '@/lib/auth-service'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'

export default function SignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      await authService.signUp(formData)
      router.push('/onboarding')
    } catch (err: any) {
      setError(err.message || 'Failed to sign up')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/onboarding`,
      },
    })

    if (error) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-gray-600 text-sm mt-2">Enter your details to get started</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5542]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5542]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5542]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={6}
              className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5542]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1E5542] text-white py-2 rounded-md hover:bg-[#164434] transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 text-black py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          <FcGoogle className="text-xl" />
          Sign up with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/signin" className="text-[#FF8C00] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}