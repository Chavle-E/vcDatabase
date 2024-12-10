import mongoose from "mongoose";

const InvestorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  prefix: String,
  gender: String,
  email: String,
  phone: String,
  firmName: String,
  contactTitle: String,
  city: String,
  country: String,
  officeWebsite: String,
  capitalManaged: Number,
  minInvestment: Number,
  maxInvestment: Number,
  industryPreferences: [String],
  geographicPreferences: [String],
  stagePreferences: [String],
  typeOfFinancing: [String]
},
{
  timestamps:true,
  collection:'investors'
}
);

export default mongoose.models.Investor || 
  mongoose.model("Investor", InvestorSchema);