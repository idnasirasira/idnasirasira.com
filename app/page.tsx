import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';

export default function Home() {
  return (
    <main className="dark:bg-slate-900 w-full font-montserrat">
      <Header />
      <Hero />
    </main>
  );
}
