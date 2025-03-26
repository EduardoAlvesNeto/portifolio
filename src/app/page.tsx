'use client';

import Image from "next/image";

import Header from "@/components/Header";
import Particles from "@/components/Particle";

export default function Home() {
  return (
    <div className="overflow-y-hidden h-auto">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={300}
        particleSpread={10}
        speed={0.01}
        particleBaseSize={70}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={false}
      />
      <main className="flex h-screen gap-4 flex-col justify-center items-center w-full">
        <Header />
        <div className="bg-emerald-800/40 py-1 px-4 rounded-xl">
          <span className="text-emerald-600 font-semibold">Bem-vindo</span>
        </div>
        <h1 className="font-bold text-6xl text-zinc-200">Olá, Sou Eduardo Alves</h1>
      </main>
    </div>
  )
}
