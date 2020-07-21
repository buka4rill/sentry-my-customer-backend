const { Schema, model } = require("mongoose");
const Debt = require("./debt_reminders");

const transactionSchema = new Schema(
  {
    amount: { type: String, required: true },
    interest: { type: String },
    total_amount: { type: String },
    description: { type: String, default: "no description" },
    ass_ref_id: { type: Schema.Types.ObjectId },
    last_reminder_date: { type: Date },
    type: { type: String, required: true },
    status: { type: Boolean, default: false },
    expected_pay_date: { type: Date },
    store_ref_id: { type: Schema.Types.ObjectId, required: true, ref: "store" },
    customer_ref_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "customer",
    },
  },
  { timestamps: true }
);

module.exports = model("transaction", transactionSchema);
