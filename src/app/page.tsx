import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/TechStack';
import { Services } from '@/components/Services';
import { Clients } from '@/components/Clients';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <TechStack />
      <Clients />
      <Services />

      <Footer />
    </main>
  );
}
