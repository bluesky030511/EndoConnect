"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { supabase } from '@/lib/supabase';
import { FcGoogle } from 'react-icons/fc'; // Google icon with original colors

export default function SignInPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = async () => {
    try {
      setIsLoading(true);
      setError("");
      
      await login(email, password);
    } catch (error: any) {
      setError(error.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-black">Welcome back</h1>
          <p className="text-gray-600 text-sm mt-2">Please enter your details</p>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5542]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="• • • • • • • •"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5542]"
            />
          </div>

          <div className="flex justify-end">
            <button className="text-sm text-[#FF8C00] hover:underline">
              Forgot password?
            </button>
          </div>

          <button
            onClick={handleSignin}
            disabled={isLoading}
            className="w-full bg-[#1E5542] text-white py-2 rounded-md hover:bg-[#164434] transition-colors disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

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
            className="w-full flex items-center justify-center gap-2 border text-black border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-[#FF8C00] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
