import express from "express";
import Stripe from "stripe";

const router = express.Router();

// ✅ Create Stripe instance using secret key from .env
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ CREATE CHECKOUT SESSION
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { packageId, name, price } = req.body;

    // ✅ Basic validation
    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Package name or price missing",
      });
    }

    // ✅ Convert rupees to paise (Stripe needs smallest unit)
    const amountInPaise = Math.round(price * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: name,
            },
            unit_amount: amountInPaise,
          },
          quantity: 1,
        },
      ],

      metadata: {
        packageId: packageId || "N/A",
      },

      success_url: `${process.env.CLIENT_URL}/payment/success`,
      cancel_url: `${process.env.CLIENT_URL}/payment/cancel`,
    });

    res.status(200).json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.error("❌ Stripe Error:", error);
    res.status(500).json({
      success: false,
      message: "Payment session creation failed",
    });
  }
});

export default router;
