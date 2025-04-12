// components/Layout.tsx
import { motion } from "framer-motion";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <Head>
        <title>Muhammad Ichsan | Informatics Student</title>
      </Head>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}