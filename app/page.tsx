import { Footer } from '@/components/Footer';
import { Header } from '@/components/home/Header';
import { Hero } from '@/components/home/Hero';
import { Quotes } from '@/components/home/Quotes';
import { Skills } from '@/components/home/Skills';

export default function Home() {
  return (
    <main className="dark:bg-slate-900 w-full font-montserrat">
      <Header />
      <Hero />
      <Quotes />
      <Skills />
      <Footer />
    </main>
  );
}
