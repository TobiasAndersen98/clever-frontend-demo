'use client';
import { Input } from '@/components/atoms/Input/Input';
import { useState } from 'react';

export default function Home() {

  const [email, setEmail] = useState('')
  return (
    <div className="">
      <h1 className="">Welcome to Next.js!</h1>
      <p className="">
        Get started by editing <code className="">pages/index.js</code>
      </p>
      <Input label="Email *" type='text' error="Error" floating={true} 
        value={email}
       onChange={(e) => setEmail((e.target.value))}/>
    </div>
  );
}
