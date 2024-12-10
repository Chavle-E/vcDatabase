import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";
import Investor from "@/models/Investor";

export async function GET(request) {
  try {
    await connectMongo();
    console.log("Fetching investors with pagination...");

    // Get URL parameters
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page")) || 1;
    const limit = parseInt(url.searchParams.get("limit")) || 50;
    const skip = (page - 1) * limit;

    // Get total count for pagination
    const total = await Investor.countDocuments();
    console.log(`Total investors: ${total}`);

    // Get paginated results
    const investors = await Investor.find({})
      .select('-__v') // Exclude version field
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit)
      .lean();

    console.log(`Found ${investors.length} investors for page ${page}`);

    return NextResponse.json({
      investors,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasMore: page * limit < total
      }
    });

  } catch (error) {
    console.error("Error fetching investors:", error);
    return NextResponse.json(
      { error: "Failed to fetch investors" }, 
      { status: 500 }
    );
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
    return NextResponse.json(
      { error: "Failed to create investor" }, 
      { status: 500 }
    );
  }
}