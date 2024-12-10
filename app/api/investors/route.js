// app/api/investors/route.js
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Investor from "@/models/Investor";

export async function GET(request) {
  try {
    await connectMongo();
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 10;
    const search = url.searchParams.get("search") || "";
    const industry = url.searchParams.get("industry") || "";
    const country = url.searchParams.get("country") || "";

    let query = {};

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { firmName: { $regex: search, $options: 'i' } }
      ];
    }

    if (industry) {
      query.industryPreferences = { $in: [industry] };
    }

    if (country) {
      query.country = { $regex: country, $options: 'i' };
    }

    const skip = (page - 1) * limit;
    const total = await Investor.countDocuments(query);
    
    const investors = await Investor
      .find(query)
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json({
      investors,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}