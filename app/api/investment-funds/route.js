import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import InvestmentFund from "@/models/InvestmentFund";

export async function GET() {
  try {
    await connectMongo();
    const funds = await InvestmentFund.find({});
    return NextResponse.json(funds);
  } catch (error) {
    console.error("Error fetching investment funds:", error);
    return NextResponse.json({ error: "Failed to fetch investment funds" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectMongo();
    const data = await req.json();
    const fund = await InvestmentFund.create(data);
    return NextResponse.json(fund);
  } catch (error) {
    console.error("Error creating investment fund:", error);
    return NextResponse.json({ error: "Failed to create investment fund" }, { status: 500 });
  }
}