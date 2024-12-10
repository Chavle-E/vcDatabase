// app/api/investment-funds/route.js
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import InvestmentFund from "@/models/InvestmentFund";

export async function GET(request) {
  try {
    await connectMongo();
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 10;
    const search = url.searchParams.get("search") || "";
    const industry = url.searchParams.get("industry") || "";
    const country = url.searchParams.get("country") || "";
    const minInvestment = url.searchParams.get("minInvestment") || 0;
    const maxInvestment = url.searchParams.get("maxInvestment") || Infinity;

    let query = {};

    if (search) {
      query.$or = [
        { firmName: { $regex: search, $options: 'i' } },
        { firmCity: { $regex: search, $options: 'i' } },
        { firmCountry: { $regex: search, $options: 'i' } }
      ];
    }

    if (industry) {
      query.industryPreferences = { $in: [industry] };
    }

    if (country) {
      query.firmCountry = { $regex: country, $options: 'i' };
    }

    if (minInvestment || maxInvestment) {
      query.minInvestment = { 
        $gte: parseFloat(minInvestment),
        $lte: parseFloat(maxInvestment)
      };
    }

    const skip = (page - 1) * limit;
    const total = await InvestmentFund.countDocuments(query);
    
    const funds = await InvestmentFund
      .find(query)
      .skip(skip)
      .limit(limit)
      .lean();

    return NextResponse.json({
      funds,
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