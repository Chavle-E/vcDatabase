import mongoose from "mongoose";

const InvestorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String },
    contactTitle: { type: String },
    email: { type: String, unique: true, required: true },
    phone: { type: String },
    firmName: { type: String },
    city: { type: String },
    country: { type: String },
    geographicPreferences: [{ type: String }],
    industryPreferences: [{ type: String }],
    stagePreferences: [{ type: String }],
    capitalManaged: { type: Number },
    minInvestment: { type: Number },
    maxInvestment: { type: Number },
  },
  { 
    timestamps: true,
    collection: "investors"
   }
);

export default mongoose.models.Investor || mongoose.model("Investor", InvestorSchema);