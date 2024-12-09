import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Investor from "@/models/Investor";

export async function GET() {
  try {
    await connectMongo();
    const investors = await Investor.find({});
    return NextResponse.json(investors);
  } catch (error) {
    console.error("Error fetching investors:", error);
    return NextResponse.json({ error: "Failed to fetch investors" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectMongo();
    const data = await req.json();
    const investor = await Investor.create(data);
    return NextResponse.json(investor);
  } catch (error) {
    console.error("Error creating investor:", error);
    return NextResponse.json({ error: "Failed to create investor" }, { status: 500 });
  }
}