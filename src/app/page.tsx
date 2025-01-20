'use client';
import { Input } from '@/components/atoms/Input/Input';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button/Button';

export default function Home() {
  const storedEmail = process.env.NEXT_PUBLIC_USER_EMAIL;
  const storedPassword = process.env.NEXT_PUBLIC_USER_PASSWORD;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateUser = () => {
    if (email === storedEmail) {
      if (password === storedPassword) {
        console.log('User is valid');
        setError('');
        window.location.href = '/dashboard';
      } else {
        console.log('Password is invalid');
        setError('Den e-mail eller adgangskode du har indtastet, er ugyldig. Prøv igen.');
      }
    } else {
      console.log('User is invalid');
      setError('Den e-mail eller adgangskode du har indtastet, er ugyldig. Prøv igen.');
    }
  };

  return (
    <div className="mx-auto">
      <Image
        src={'/logo.svg'}
        alt="Clever"
        width={120}
        height={22}
        className="relative top-[113px] left-20"
      />
      <div className="flex w-full -mt-[22px]">
        <div className="w-1/2 m-auto">
          <div className="w-[70%] ml-20">
            <h1 className="text-4xl font-350">
              Velkommen til <br /> Selvbetjening Erhverv
            </h1>
            <p className="mt-10 text-base font-normal leading-[140%]">
              Log ind med din brugerkonto
            </p>
            <div className="mt-6">
              <Input
                label="Email *"
                type="email"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
              />
            </div>
            <div className="mt-6">
              <Input
                label="Adgangskode *"
                type="password"
                error={error}
                value={password}
                onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
              />
            </div>

            <div className="mt-5">
              <Button
                className="bg-[#003732] px-4 py-[10px] text-[#fff] text-sm leading-[140%] tracking-[0.056px]"
                onClick={validateUser}
              >
                Log ind
              </Button>
            </div>
            <div className="mt-4">
              <Button variant="link">Glemt Adgangskode?</Button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            src="/img/Clever_corporate_charging_mand_2021.png"
            alt="Picture of the author"
            className="relative w-full h-screen"
            width={720}
            height={1024}
          />
        </div>
      </div>
    </div>
  );
}
