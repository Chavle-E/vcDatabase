import mongoose from "mongoose";

const InvestmentFundSchema = new mongoose.Schema({
  firmName: String,
  firmType: String,
  firmAddress: String,
  firmCity: String,
  firmState: String,
  firmCountry: String,
  firmZip: String,
  firmEmail: String,
  firmPhone: String,
  firmWebsite: String,
  contactEmail: String,
  contactPhone: String,
  financingType: String,
  capitalManaged: Number,
  minInvestment: Number,
  maxInvestment: Number,
  industryPreferences: [String],
  geographicPreferences: [String],
  stagePreferences: [String],
  fullName: String,
  title: String,
  officeType: String
},
{
  timestamps: true,
  collection: "funds"
}
);

export default mongoose.models.InvestmentFund || 
  mongoose.model("InvestmentFund", InvestmentFundSchema);