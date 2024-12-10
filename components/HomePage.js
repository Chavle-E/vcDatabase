import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import TestimonialsAvatars from "@/components/TestimonialsAvatars";
import Testimonials3 from "@/components/Testimonials3";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ButtonSignin from "@/components/ButtonSignin";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl">InvestorDB</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/investors" className="hover:text-primary">Investors</Link>
          <Link href="/investment-funds" className="hover:text-primary">Investment Funds</Link>
          <Link href="#pricing" className="hover:text-primary">Pricing</Link>
        </nav>
        <ButtonSignin text="Get Started" />
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 text-center px-8">
          <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight mb-8">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Investment Match
            </span>
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto mb-12">
            Access our comprehensive database of verified investors and investment funds. 
            Make data-driven decisions for your fundraising journey.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/investors" className="btn btn-primary">
              Browse Investors
            </Link>
            <Link href="#pricing" className="btn btn-outline">
              View Pricing
            </Link>
          </div>
          <div className="mt-12">
            <TestimonialsAvatars priority={true} />
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-base-200">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-bold text-4xl">10K+</h3>
              <p className="opacity-80">Active Investors</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">5K+</h3>
              <p className="opacity-80">Investment Funds</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">$50B+</h3>
              <p className="opacity-80">Capital Managed</p>
            </div>
            <div>
              <h3 className="font-bold text-4xl">1K+</h3>
              <p className="opacity-80">Successful Matches</p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <FeaturesGrid />

        {/* Testimonials */}
        <Testimonials3 />

        {/* Pricing */}
        <Pricing />

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <CTA />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}