import mongoose from "mongoose";

const InvestmentFundSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true }, 
    title: { type: String }, 
    contactEmail: { type: String, unique: true, required: true }, 
    contactPhone: { type: String }, 
    firmName: { type: String, required: true }, 
    firmEmail: { type: String }, 
    firmPhone: { type: String }, 
    firmWebsite: { type: String }, 
    firmAddress: { type: String }, 
    firmCity: { type: String }, 
    firmState: { type: String }, 
    firmZip: { type: String }, 
    firmCountry: { type: String }, 
    officeType: { type: String }, 
    financingType: [{ type: String }], 
    industryPreferences: [{ type: String }], 
    geographicPreferences: [{ type: String }], 
    stagePreferences: [{ type: String }], 
    capitalManaged: { type: Number }, 
    minInvestment: { type: Number }, 
    maxInvestment: { type: Number }, 
    firmType: { type: String } 
  },
  {
    timestamps: true,
    collection: 'funds' 
  }
);

export default mongoose.models.InvestmentFund || mongoose.model("InvestmentFund", InvestmentFundSchema);