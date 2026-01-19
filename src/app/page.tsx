import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/logo.png"
          alt="MedGate Rwanda logo"
          width={200}
          height={60}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-black leading-10 tracking-tight text-black dark:text-zinc-50">
            Your Trusted Gateway to Healthcare in Rwanda
          </h1>
          <p className="max-w-md text-lg font-normal leading-8 text-zinc-600 dark:text-zinc-400">
            Connect with top hospitals, get personalized care coordination, and travel with confidence.{' '}
            <a
              href="/hospitals"
              className="font-semibold text-zinc-950 dark:text-zinc-50"
            >
              Browse Hospitals
            </a>{' '}
            or{' '}
            <a
              href="/request"
              className="font-bold text-zinc-950 dark:text-zinc-50"
            >
              Get Started
            </a>{' '}
            today.
          </p>
          
          {/* Font Weight Demo */}
          <div className="mt-8 space-y-2">
            <p className="font-light text-sm text-zinc-500">Font Light (300) - Proxima Nova Light</p>
            <p className="font-normal text-sm text-zinc-600">Font Normal (400) - Proxima Nova Regular</p>
            <p className="font-semibold text-sm text-zinc-700">Font Semibold (600) - Proxima Nova Semibold</p>
            <p className="font-bold text-sm text-zinc-800">Font Bold (700) - Proxima Nova Extra Bold</p>
            <p className="font-black text-sm text-zinc-900">Font Black (800) - Proxima Nova Black</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
