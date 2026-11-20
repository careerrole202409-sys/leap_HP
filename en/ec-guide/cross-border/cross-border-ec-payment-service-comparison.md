---
layout: ec-guide-post.njk
title: "Cross-Border Ecommerce Payment Services Compared: Fees and Currency Support"
description: Comparing Stripe, PayPal, Payoneer, and other payment services used for cross-border ecommerce on fees, currency conversion, and supported currencies, with a sample monthly fee calculation.
thumbnail: https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-11-20
topic: cross-border
locale: en
tags:
  - ec-guide
  - cross-border ecommerce
  - payment processing
  - Stripe
  - PayPal
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: A team of ecommerce business experts
---

## Quick Overview: Compare Cross-Border Payment Services on Fees PLUS Currency Conversion

A cross-border payment service is what lets you accept payment from an overseas customer and receive it in whatever currency you actually want. Comparing them isn't just about the headline processing fee — you also need to factor in the extra fee that kicks in when currency conversion is involved, which payment methods are actually supported, and how you get the money into your own account. This guide checks Stripe, PayPal, and Payoneer against what's confirmed on their official sites, and includes Leap — whose cross-border fee is a flat 6% of sales — as a comparison point.

## Four Things to Compare

When comparing cross-border payment services, it helps to break the comparison into four parts:

1. **Processing fee**: the rate charged on the credit card transaction itself
2. **Currency conversion fee**: the extra charge that applies when the customer's currency differs from what you want to receive
3. **Supported payment methods**: whether it goes beyond credit cards to cover payment methods popular overseas, like Alipay, WeChat Pay, or UnionPay
4. **Payout method**: how and how often you can actually move the money into your own bank account

## Main Services Compared (as of November 2026)

| Service | Processing fee | Currency conversion fee | Notes |
|---|---|---|---|
| Stripe | 3.6% | +2% when conversion is needed (5.6% total) | Simple, flat-rate pricing; strong developer tooling |
| PayPal | 3.60%+¥40 domestic, +0.5% for cross-border payments (4.10%+¥40 total) | Up to 4% built into the exchange rate in some cases | Globally recognized, easy for overseas buyers to use |
| Payoneer | Only confirmed official figure is the annual account fee (see below) | Sources disagreed and we couldn't confirm | A multi-currency receiving account; transfers between Payoneer accounts are reported to carry no fee on the receiving side |
| Leap (checkout built into the storefront itself) | 6% of sales (processing fee included) | No additional conversion fee — pick one base currency per product and it auto-converts daily at the prior day's rate | Supports Visa and Mastercard; no separate payment-processor contract needed |

We also looked into Airwallex, but the fee figures for Japan varied significantly between sources (one put it at 3.20%+¥40, another at 1.2%+a flat fee), and we couldn't confirm either figure on Airwallex's own official site. We've left specific rates out of this guide as a result — check directly with Airwallex before signing up.

## Total Cost, Including Overseas Cards and Currency Conversion

Stripe's "3.6%" sounds simple, but once currency conversion is needed, +2% applies, bringing the total to 5.6%. PayPal's domestic rate is 3.60%+¥40, but cross-border payments add another +0.5%, landing at 4.10%+¥40, and the exchange rate applied can include up to a 4% conversion margin. In both cases, the "headline rate" alone understates what you'll actually pay once an overseas customer's payment is involved.

## Comparing Payout Methods

Payoneer is a multi-currency receiving account, and transfers to another Payoneer account holder are reported to come with no fee on the receiving end. What we could confirm directly on Payoneer's own FAQ page is the annual account fee: it's charged 12 months after signup, and waived if you've received at least $6,000 (or the equivalent) during that period. We couldn't confirm Payoneer's actual transaction or receiving fee rates on an official pricing page, so this guide only covers the annual fee.

## A Sample Calculation: ¥3 Million in Monthly Sales

Using the publicly confirmed rates above, here's what the fees would look like for a merchant doing ¥3 million a month in sales, averaging ¥10,000 per order (300 orders), assuming currency conversion applies:

- **Stripe**: ¥3,000,000 × 5.6% = ¥168,000
- **PayPal**: ¥3,000,000 × 4.10% + ¥40 × 300 orders = ¥123,000 + ¥12,000 = ¥135,000
- **Leap**: ¥3,000,000 × 6% = ¥180,000 (processing and currency conversion included)

On this calculation, Leap's flat 6% looks higher than Stripe's or PayPal's base rates alone — but Leap's fee replaces the need to separately contract a payment processor or set up currency conversion; it's bundled into building and running the storefront itself. Whether that trade-off makes sense depends on how much time you want to spend managing a payment processor separately.

## FAQ

**Q. Which cross-border payment service is cheapest?**

A. Looking only at the base processing fee, Stripe's 3.6% looks lowest, but it rises to 5.6% once currency conversion applies. PayPal can reach 4.10%+¥40 plus an exchange rate margin for cross-border payments. The real total depends on which countries and currencies your customers are actually paying from, so it's worth avoiding judging on a single headline rate.

**Q. Is there a separate fee for currency conversion, on top of the processing fee?**

A. Yes, in most cases. When the customer's currency differs from what you want to receive, most services add a currency conversion fee on top of the base processing rate — that's exactly how Stripe's and PayPal's pricing works.

**Q. Do these services support local payment methods like Alipay or WeChat Pay?**

A. It varies by service. PayPal, covered in this guide, supports methods like UnionPay cards, but which local payment methods each service supports needs checking directly on that service's own site.

**Q. Is there a way to run cross-border ecommerce without using a separate payment processor?**

A. Yes — tools like Leap build payment acceptance into the storefront itself from the start, so you can accept overseas credit card payments without a separate contract with a payment processor.

## Summary and Key Takeaway

If you pick a cross-border payment service by looking only at the headline processing fee, it's easy to miss the extra cost from currency conversion or overseas-issued cards. Services like Stripe and PayPal publish their rates clearly enough to compare directly, but others have conflicting figures across sources, so it's worth confirming the current terms directly with the provider before signing up. If you'd rather not manage a payment processor separately, a tool with payment acceptance built in from the start is worth considering as an alternative.

Leap is a cross-border ecommerce tool that lets AI handle marketing too. Just chat with it to build a multilingual, multi-currency online store and run overseas marketing such as SEO and email newsletters.

## References

- [Pricing - Stripe official](https://stripe.com/jp/pricing)
- [Merchant fees - PayPal official](https://www.paypal.com/jp/business/fees)
- [Comparing cross-border-capable payment processors by payment method and fee - MCB FinTech Catalog](https://catalog.monex.co.jp/article/?p=52407)
- [FAQ - Annual Fee - Payoneer official](https://payoneer-japanese.custhelp.com/app/answers/detail/a_id/44320/)
