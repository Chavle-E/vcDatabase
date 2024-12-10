// app/investors/[id]/page.js
import { notFound } from 'next/navigation';
import InvestorProfile from '@/components/InvestorProfile';

async function getInvestor(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/investors/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching investor:', error);
    return null;
  }
}

export default async function InvestorPage({ params }) {
  const investor = await getInvestor(params.id);
  
  if (!investor) {
    notFound();
  }

  return <InvestorProfile data={investor} />;
}