import mongoose from 'mongoose';

const PortfolioDataSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    value: mongoose.Schema.Types.Mixed,
    dataType: {
      type: String,
      enum: ['string', 'array', 'object', 'number', 'boolean'],
      default: 'string',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.PortfolioData || mongoose.model('PortfolioData', PortfolioDataSchema);
