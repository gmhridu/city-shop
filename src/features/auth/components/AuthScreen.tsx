/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useState } from 'react'
import { AuthFlow } from '../types'
import { LoginForm } from '@/components/login-form';

export default function AuthScreen() {
  const [state, setState] = useState<AuthFlow>('signIn');
  return (
    <div className=''>
      <LoginForm/>
    </div>
  )
}
