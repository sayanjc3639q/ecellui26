import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-4xl font-extrabold mb-2 text-slate-900 dark:text-white">404 - Page Not Found</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">Could not find requested resource</p>
      <Link href="/" className="px-6 py-2.5 bg-primary text-white font-bold rounded-full border-2 border-black">
        Return Home
      </Link>
    </div>
  );
}
