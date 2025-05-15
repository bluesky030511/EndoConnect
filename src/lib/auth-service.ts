import { supabase } from './supabase';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const authService = {
  async signIn({ email, password }: SignInData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    return data;
  },

  async signUp(data: SignUpData) {
    const { email, password, ...profileData } = data;

    // First create the auth user
    const { data: authData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw error;
    }

    // After successful authentication, insert user info into user_info table
    const { error: userInfoError } = await supabase
      .from('chearful_users')
      .insert({
        user_id: authData.user?.id,
        first_name: profileData.firstName,
        last_name: profileData.lastName,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

    if (userInfoError) {
      throw userInfoError;
    }

    return authData;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  }
};