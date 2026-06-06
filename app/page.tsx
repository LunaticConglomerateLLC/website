import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background px-6">
      <main className="flex flex-col items-center justify-center pb-12">
        <header className="mb-8 flex items-center justify-center">
          <Image
            src="/hero.png"
            alt="Lunatic Conglomerate LLC – Acquire Your Sanity"
            width={1600}
            height={1050}
            className="max-w-full md:w-1/2 h-auto"
            priority
          />
        </header>

        <div className="mb-10 overflow-hidden rounded-xl"></div>

        <h1 className="glitch-on-hover mb-6 max-w-4xl text-center text-3xl font-bold leading-tight transition-transform duration-200 hover:skew-x-3 sm:text-5xl md:text-6xl lg:text-7xl">
          We acquire your sanity. No refunds. No pull requests.
        </h1>

        <p className="mb-12 max-w-xl text-center text-base text-secondary/80 sm:text-lg md:text-xl">
          Lunatic Conglomerate LLC – because venture capital needs more chaos.
        </p>

        <a
          href="https://github.com/LunaticConglomerateLLC"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our GitHub repository"
          className="rounded-lg border border-accent bg-accent px-8 py-3 text-base font-semibold text-background shadow-[0_0_20px_rgba(247,37,133,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(247,37,133,0.5)] hover:brightness-110 sm:text-lg"
        >
          Enter the asylum
        </a>
      </main>

      <footer className="mt-auto text-center text-xs text-foreground/40 pb-4">
        &copy; 2026 Lunatic Conglomerate LLC. All rights reserved. Probably.
      </footer>
    </div>
  );
}
