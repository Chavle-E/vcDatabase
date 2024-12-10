import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import InvestmentFund from "@/models/InvestmentFund";

export async function GET(request) {
  try {
    await connectMongo();
    console.log("Fetching investment funds with pagination...");

    // Get URL parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 50;
    const skip = (page - 1) * limit;

    // Get search parameters
    const searchTerm = url.searchParams.get("search") || "";
    const country = url.searchParams.get("country") || "";
    const industry = url.searchParams.get("industry") || "";

    // Build query
    let query = {};
    
    // Add search conditions if search term exists
    if (searchTerm) {
      query.$or = [
        { firmName: { $regex: searchTerm, $options: 'i' } },
        { fullName: { $regex: searchTerm, $options: 'i' } },
        { firmEmail: { $regex: searchTerm, $options: 'i' } },
        { contactEmail: { $regex: searchTerm, $options: 'i' } }
      ];
    }

    // Add country filter if specified
    if (country) {
      query.firmCountry = { $regex: country, $options: 'i' };
    }

    // Add industry filter if specified
    if (industry) {
      query.industryPreferences = { $elemMatch: { $regex: industry, $options: 'i' } };
    }

    // Get total count for pagination
    const total = await InvestmentFund.countDocuments(query);
    console.log(`Total investment funds matching query: ${total}`);

    // Get paginated results
    const funds = await InvestmentFund.find(query)
      .select('-__v') // Exclude version field
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit)
      .lean();

    console.log(`Found ${funds.length} investment funds for page ${page}`);

    // Return response with pagination metadata
    return NextResponse.json({
      funds,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasMore: page * limit < total
      }
    });

  } catch (error) {
    console.error("Error fetching investment funds:", error);
    return NextResponse.json(
      { error: "Failed to fetch investment funds" }, 
      { status: 500 }
    );
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
    return NextResponse.json(
      { error: "Failed to create investment fund" }, 
      { status: 500 }
    );
  }
}