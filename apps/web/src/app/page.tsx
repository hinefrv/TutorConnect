export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f9f9ff] px-6 py-16 text-center text-[#111c2d]">
      <div className="max-w-xl space-y-4 rounded-2xl border border-[#c1c7d1] bg-white p-10 shadow-sm">
        <span className="inline-block rounded-full bg-[#e7eeff] px-3 py-1 text-xs font-semibold text-[#004271]">
          Project Setup
        </span>
        <h1 className="text-3xl font-bold text-[#004271]">
          Tutor Booking Platform
        </h1>
        <p className="text-base leading-7 text-[#414750]">
          Monorepo skeleton with Next.js frontend and NestJS backend is ready.
        </p>
      </div>
    </main>
  );
}
