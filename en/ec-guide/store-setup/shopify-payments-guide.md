---
layout: ec-guide-post.njk
title: "What Is Shopify Payments? Setup, Benefits, and Prohibited Items Explained"
description: A comprehensive guide to Shopify's built-in payment service — covering how it works, the zero transaction fee advantage, prohibited product categories, the setup process, and how Apple Pay and Shop Pay reduce cart abandonment and lift conversion rates.
thumbnail: https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-06-24
topic: store-setup
locale: en
tags:
  - ec-guide
  - Shopify
  - store-setup
  - payments
  - Shopify-Payments
  - cart-abandonment
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: A team of experts in overseas business
---

### [Quick Summary] Get the Full Picture on Shopify Payments Before You Set It Up

Payment infrastructure is one of the most consequential decisions in building an EC store — it directly shapes the customer experience from checkout through to completion. This article covers Shopify Payments, Shopify's own built-in payment service: what it is, why it matters beyond just eliminating transaction fees, what product categories are prohibited, and how to configure it step by step.

The defining feature of Shopify Payments is that it lets any Shopify paid-plan subscriber accept credit cards, Apple Pay, Google Pay, and Shop Pay in a single integration — no separate payment processor contract required.

It also eliminates the transaction fees Shopify charges when you use a third-party payment processor (0.6%–2.0% depending on your plan) — a meaningful difference for operators focused on margin. And the ability to offer express checkout through Apple Pay and Shop Pay has a measurable impact on conversion rate (CVR) and cart abandonment — a marketing-level benefit that often gets buried in setup guides. This article covers that angle too.

### What Shopify Payments Is and How It Works

Shopify Payments is Shopify's official, native payment service. Normally, adding credit card payment to an EC store means applying to a third-party payment processor — GMO Payment Gateway, Stripe, or similar — going through their approval process, and then completing the integration. That review typically takes two weeks to a month, creating a real window of missed sales at store launch.

Shopify Payments removes that friction. Entering your business information and bank account details directly in the Shopify admin activates the service immediately — no upfront review required. The payment methods it covers include:

- Credit cards (Visa, Mastercard, American Express, JCB, Diners Club)
- Apple Pay / Google Pay
- Shop Pay (Shopify's proprietary quick checkout)
- Shop Pay Installments (in supported countries)

Payouts land in your bank account within 5 to 11 business days — a significant improvement over traditional month-end settlement cycles that can stretch cash flow. Order management, revenue, refunds, and payout status are all visible in a single dashboard within your Shopify admin, which cuts down on the operational overhead of reconciling across separate systems.

As of June 2025, Shopify Payments is available in approximately 40 countries including Japan, the United States, Canada, Australia, and the United Kingdom. Stores based outside these countries cannot use the service.

### The Biggest Advantage Isn't Just Zero Transaction Fees

The zero transaction fee benefit gets the most attention, and it deserves to. Shopify charges a separate transaction fee when you use a third-party payment processor — ranging from 0.5% to 2.0% depending on your plan. Enabling Shopify Payments eliminates that fee entirely. For stores doing tens of millions to hundreds of millions of yen in annual revenue, the annual difference is real money.

But the transaction fee savings are only part of the story. The more underappreciated benefit is what express checkout — Apple Pay, Google Pay — does to conversion rate.

Cart abandonment in EC isn't just a function of price or product appeal. The two biggest friction points at checkout are the effort of entering information and anxiety about payment security. Apple Pay resolves both: registered card details and biometric authentication (Face ID or Touch ID) complete a purchase in a few taps. No address entry, no card number entry — the friction that causes last-second drop-offs is eliminated at the source.

Shop Pay works on the same principle. Once a customer registers, their shipping and payment details auto-fill on every subsequent visit. For brands focused on repeat purchase rates and long-term customer value (LTV), the improvement to the returning customer experience is significant.

Shopify Payments also includes built-in 3D Secure (EMV 3DS) compliance. In Japan, the April 2025 credit card security guideline mandate is met automatically — no separate configuration needed. For small-to-mid-sized businesses that would otherwise need to budget for security compliance work, this is a meaningful operational savings.

### Prohibited Product Categories: What Shopify Payments Won't Cover

Shopify Payments has no upfront review, but its terms of service include a defined list of prohibited product categories. Stores selling these products aren't rejected at setup — they risk having their accounts suspended mid-operation, often without warning. Pre-checking your product line against the prohibited list is essential.

Categories that are prohibited or subject to restrictions include:

- Adult and sexual content
- Cryptocurrency and virtual assets
- Regulated financial services
- Information products and multi-level marketing schemes
- Certain health devices (those that conflict with Japan's Pharmaceuticals and Medical Devices Act, or equivalent regulations in other countries)
- Regulated drugs and certain tobacco products
- Any illegal goods or services

The most important thing to understand is the timing risk: a store can operate for months without issue, and then face suspension when Shopify runs a secondary review triggered by rising sales volume. If a violation is found at that point, payouts can be held and the account frozen. If you have any doubt about whether your products fall into a gray area, verify with Shopify support before going live — or consider building your payment stack around a third-party processor instead.

One additional note for legitimate operators: if you don't complete the required business information within 21 days of your first sale, Shopify automatically initiates refunds to customers. The post-launch period is busy, but payment setup completion should be treated as a priority from day one.

### How to Set Up Shopify Payments

Enabling Shopify Payments is straightforward and completed entirely within the admin. Here are the standard steps.

#### Activation Steps

1. Log into your Shopify admin and click "Settings" in the left menu.
2. Navigate to the "Payments" page and click "Activate" under Shopify Payments.
3. Business information: Enter your business type (sole proprietor, corporation, etc.), location, and business phone number.
4. Personal information: Enter the name, date of birth, and address of the representative or owner.
5. Bank account: Register the bank account where payouts will be deposited (bank name, account number, account holder name).
6. Product information: Select your product category and set the statement descriptor (the name that appears on customers' card statements).
7. Save your settings — setup is complete.

#### Using Test Mode

After completing setup, switch to test mode and run through the checkout flow before going live. Use Shopify's test credit card numbers and walk through the full sequence: add to cart, checkout, payment, order confirmation. When everything behaves as expected, disable test mode and begin live operation.

#### Enabling Apple Pay and Google Pay

Activating Shopify Payments automatically makes Apple Pay and Google Pay available as payment options. For Apple Pay specifically, a domain verification step may be required — check the "Payments" settings in your admin to confirm. Your store must be running on a custom domain with HTTPS enabled.

### Case Studies: How Express Checkout Transforms the Purchase Experience

Businesses using Shopify both in Japan and internationally have documented meaningful improvements to purchase experience by enabling Apple Pay and Shop Pay.

Data published by Shopify shows that checkouts completed through Shop Pay have a conversion rate up to 50% higher than standard checkout flows (source: Shopify official site). The gap is even larger for mobile users — and as mobile commerce continues to grow as a share of overall EC traffic, the advantage of express checkout compounds.

In Japan, Anker Japan — the Japanese operations of the global mobile charging brand — has made checkout experience optimization a priority in its mobile-first strategy. Anker's Japanese Shopify store offers Apple Pay alongside a range of other payment methods, with the design goal of minimizing the number of steps from product page to purchase completion on a smartphone. In an environment where mobile commerce is expanding year over year, shortening the payment path is widely recognized as a direct revenue lever.

These cases point to the same conclusion: adding Shopify Payments isn't a payment configuration task — it's a strategic decision to make the checkout experience work for customers rather than against them.

### FAQ

**Q1. What are Shopify Payments' credit card processing fees?**

The credit card rate depends on your Shopify plan. On annual billing, the approximate rates as of 2025 are: Basic plan at 3.4% + ¥0, Shopify plan at 3.3% + ¥0, and Advanced plan at 3.25% + ¥0. Rates may vary by card type and currency. The critical point is that the separate Shopify transaction fee (0.5%–2.0%) that applies when using a third-party processor is completely eliminated. The higher your sales volume, the more that difference matters.

**Q2. What does the Shopify Payments review process look like? Can accounts be suspended?**

There is no review required at initial activation — entering the required information is enough to start immediately. That said, as sales volume grows, Shopify may request additional identity and business verification. If prohibited products are found to be in the catalog, or if the terms of service are otherwise violated, the account can be suspended and payouts held without prior notice. It's strongly recommended to check your product catalog against Shopify's terms before launching, either through the support documentation or by asking Shopify support directly.

**Q3. Can I use other payment methods alongside Shopify Payments?**

Yes. With Shopify Payments enabled, you can add supplementary payment methods — buy-now-pay-later services (NP Atobarai, GMO Atobarai), convenience store payment, and others — through third-party app integrations. The important caveat: using an external payment processor alongside Shopify Payments (outside of direct Shopify integrations) still triggers Shopify's transaction fee on those transactions. Design your payment method mix based on your target customer's purchasing behavior and payment preferences, not just on what's available.

### Conclusion: Payment Infrastructure Is an Investment in Customer Experience

Shopify Payments combines three things that are hard to find together: no upfront review, zero transaction fees, and a single integration covering all major payment methods. For Shopify store operators, there's rarely a good reason not to enable it.

The setup is simple, but as this article has outlined, the real value is in what Apple Pay and Shop Pay do to the checkout experience. Reducing the steps between "add to cart" and "purchase complete" is one of the highest-ROI improvements available — it converts customers you've already acquired through advertising rather than losing them at the final step.

Three things to get right: confirm your product categories are compliant before launch, complete the payment setup early, and activate express checkout from day one. Those three moves determine how much of Shopify Payments' value you actually capture.

Leap supports businesses building on Shopify — from EC platform setup and cross-border expansion to multilingual site builds and international market entry. If you're designing an EC store with overseas sales in mind, or looking to build a multilingual storefront from scratch, the resources below are a good starting point.

- [EC Operations Guide](https://www.leap.site/en/ec-guide)
- [Global Business Blog](https://www.leap.site/en/blog)

### References

- [Shopify Help Center | Shopify Payments](https://help.shopify.com/ja/manual/payments/shopify-payments)
- [Shopify Help Center | Shopify Payments Requirements (Japan)](https://help.shopify.com/ja/manual/payments/shopify-payments/supported-countries/japan)
- [Shopify Official Blog | What Is Shopify Payments?](https://www.shopify.com/jp/blog/what-is-shopify-payments)
- [FBL | Benefits and Setup of Shopify Payments](https://fbl.jp/column/shopify-payments/)
- [Growth Cat | Shopify Payments Pros and Cons](https://growth-cat.com/blog/shopify-payments/)
- [Commerce Media | Shopify Payments: Fees and Setup](https://commerce-media.info/blogs/ec/shopify-payments)
- [SB Payment Service | About Shopify Payments](https://www.sbpayment.jp/support/ec/shopify-payment/)
- [KOMOJU | Payment Services](https://ja.komoju.com/%E3%82%AB%E3%83%86%E3%82%B4%E3%83%AA%E3%83%BC%E3%81%AA%E3%81%97/payment/)
- [BINDEC | The Impact of Shopify Payments](https://bindec.jp/media/555953150512/)
- [Plus Shipping | How to Configure Shopify Payments](https://plus-shipping.com/blogs/shopify-payments)
- [Flagship | Shop Pay and 3D Secure](https://flagship.cc/blogs/columns/shoppay-3ds)
