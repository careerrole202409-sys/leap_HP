---
layout: ec-guide-post.njk
title: "BASE Fee Simulation: Calculating the Real Logistics Cost, Shipping and Packaging Included"
description: How BASE's fees are calculated by plan, how to run a fee simulation that includes shipping charges, how to think about packaging and carrier costs, and a rough guide to take-home profit by monthly sales volume.
thumbnail: https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-10-21
topic: logistics
locale: en
tags:
  - ec-guide
  - BASE
  - fees
  - simulation
  - logistics cost
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: A team of e-commerce business experts
---

## Quick Overview: Looking Only at the Fee Rate Hides Your Real Take-Home Profit

Most people searching for a "BASE fee simulation" want to know what percentage of sales BASE's fees eat up — but that's not actually the number that matters most. If you fold shipping into your product price, that shipping amount gets charged a fee too, and packaging and carrier costs also eat into your final take-home profit. This guide covers how BASE's fees are calculated by plan, how to simulate fees including shipping charges, how to think about packaging and carrier costs, a rough guide to take-home profit by monthly sales volume, and how to realistically bring down your shipping costs.

## How Fees Are Calculated, by Plan

As a starting point, BASE's own pricing page lists two plans: Standard and Growth.

The Standard plan has no setup fee or monthly fee, but charges a 3.6% payment processing fee plus ¥40 per order, plus a 3% service fee. Combined, that's roughly 6.6% of sales plus ¥40 per order (payments via PayPay, Amazon Pay, or PayPal add a further 1% to the processing fee, bringing the total to roughly 7.6% plus ¥40).

The Growth plan charges a fixed monthly fee of ¥16,580 (if paid annually; ¥19,980 if paid monthly), but in exchange, the payment processing fee drops to 2.9% with no service fee at all. In other words, as monthly sales grow, there's a point where paying the fixed fee ends up cheaper than Standard's percentage-based fees. You can switch plans anytime — switching to Growth takes effect immediately, but switching back to Standard only takes effect once your current Growth contract term ends, which is worth keeping in mind.

## Running a Fee Simulation That Includes Shipping

One thing that's easy to overlook is how shipping gets treated. BASE's processing fee and service fee are calculated on the full payment amount the buyer pays — so if you fold shipping into the total amount charged at checkout, that shipping portion gets a fee applied to it as well.

Take an order with a ¥3,000 product and ¥500 shipping, for a total of ¥3,500. On the Standard plan's roughly 6.6% + ¥40 fee, that's ¥3,500 × 6.6% + ¥40 ≈ ¥271 deducted, leaving the seller with about ¥3,229. If you mistakenly estimate the fee based only on the ¥3,000 product price, you'd calculate ¥3,000 × 6.6% + ¥40 ≈ ¥238 — underestimating the actual fee by about ¥33. Multiply that across a growing number of orders, and the gap becomes significant.

## Packaging and Carrier Costs

Beyond fees, packaging and shipping are costs you can't avoid. Boxes, cushioning material, and shipping bags vary by product size and weight, but it's worth tracking them as an ongoing cost relative to your product price.

For shipping, BASE offers apps like "Easy Shipping (Yamato Transport integration)" and "Easy Shipping (Japan Post integration)," which link with carriers to cut down on the work of printing shipping labels and sending shipment notifications. These apps also support anonymous shipping, which lets you ship without disclosing your home address or name to the buyer — but using anonymous shipping costs an additional ¥50 (tax included) per item, based on information confirmed on BASE's app listing pages at the time of writing. Weigh the privacy benefit against the ¥50-per-item cost adding up across every unit, and decide whether to use it based on your product's price point.

## A Rough Guide to Take-Home Profit by Monthly Sales Volume

Factoring in the fee rates and fixed costs above, which plan comes out ahead shifts depending on your monthly sales volume. Below is a simplified simulation covering only the processing fee and service fee — excluding product cost and shipping cost — based on the rates listed on BASE's official pricing page, calculated independently for illustration and not using exact product-level data.

- At ¥200,000/month: Standard plan fees come to roughly ¥13,000. Growth plan fees come to roughly ¥5,800 plus the ¥16,580 fixed fee — the fixed fee outweighs the savings, so Standard comes out ahead.
- At ¥800,000/month: Standard plan fees come to roughly ¥53,000. Growth plan fees come to roughly ¥23,000 plus the ¥16,580 fixed fee, totaling roughly ¥40,000 — getting close to the point where Growth becomes the better deal.
- At ¥1,500,000/month: Standard plan fees come to roughly ¥99,000. Growth plan fees come to roughly ¥44,000 plus the ¥16,580 fixed fee, totaling roughly ¥60,000 — clearly favoring Growth.

Past a certain monthly sales threshold, paying the fixed fee and switching to Growth leaves more money in your pocket. To find your own store's exact break-even point, it's worth running this same calculation using your actual monthly sales and order count from the past few months.

## Realistically Bringing Down Shipping Costs

While the fee rate itself is hard to control outside of switching plans, logistics costs leave real room for improvement. Simply reviewing whether your packaging is oversized for the product can cut costs, and since carriers vary in their strengths by package size and delivery region, it's worth periodically comparing shipping methods. Rather than applying anonymous shipping uniformly to every product, it's also worth deciding product by product — skipping it for categories where issues are unlikely, for example — to balance cost against peace of mind.

Running this kind of fee, shipping, and packaging simulation by hand every time is a real burden. Launching a store isn't the finish line — stacking up this kind of detailed cost management after launch is what actually protects your bottom line. Leap, a cross-border ecommerce tool that lets AI handle marketing too, is built around the idea of supporting a wide range of day-to-day e-commerce operations through conversation with AI.

## BASE Fees and Logistics Costs When Selling Overseas

If you want to sell to overseas customers on BASE, the built-in "Kantan Kaigai Hanbai" (Easy Overseas Sales) feature lets you calculate your logistics costs in almost the same way as domestic shipping. According to BASE's press release, the feature has been available to every shop as a standard feature since March 18, 2026. When an overseas customer buys through a dedicated overseas cart, want.jp, a BASE subsidiary, purchases the item on their behalf at your domestic selling price (shipping included), and you simply ship the item to want.jp's warehouse in Japan, just like a domestic order. want.jp handles repacking and arranging international delivery, preparing international shipping labels and customs documents, and processing returns and refunds.

There is no setup fee or fixed cost. A feature fee of 5% of the payment amount (including shipping to the domestic warehouse) is charged only when an item sells overseas, and your regular BASE plan fees apply on top of that (as of November 2026).

Using the same order as earlier in this article — a ¥3,000 product with ¥500 shipping — the Standard plan fee (about 6.6% + ¥40) comes to about ¥271 and the feature fee (5%) to ¥175, for a total of about ¥446 deducted, leaving you with about ¥3,054. (This is a reference figure that applies the same rate as a credit card payment.) The only difference from a domestic sale is the ¥175 feature fee; you don't pay international shipping or international packaging materials yourself. In other words, you can estimate your overseas logistics cost as "shipping to the domestic warehouse + a 5% feature fee."

On the other hand, the amount you receive is based on your domestic price (shipping included), so if you want to set different prices by country, running your own cross-border online store is another option. With Leap, a cross-border ecommerce tool that lets AI handle marketing too, you can choose which countries each product is sold in, set prices by country, and display prices in multiple currencies.

## FAQ

**Q. Does it matter whether I show shipping as free (built into the price) or as a separate line item, for fee purposes?**

A. No — as long as the total amount the buyer pays at checkout is the same, the fee amount doesn't change either way. Fees are calculated on the full payment amount, so whether shipping is folded into the product price or shown separately doesn't affect the fee calculation.

**Q. At what monthly sales level should I consider switching to the Growth plan?**

A. As this simulation shows, it's worth seriously considering once your Standard plan fee burden approaches the level of Growth's fixed monthly fee. The exact break-even point shifts depending on your order count and payment method mix, so it's worth running the calculation with your own store's actual numbers.

**Q. Should I use anonymous shipping on every product?**

A. Anonymous shipping protects both buyer and seller privacy, but costs an extra ¥50 per item, based on information confirmed at the time of writing. For low-priced products shipped in high volume, that cost adds up, so it's realistic to decide product by product based on the nature of the item and the likelihood of disputes.

**Q. Who pays international shipping when I sell overseas on BASE?**

A. With Easy Overseas Sales, you only pay shipping to the domestic warehouse — international shipping is not your cost. International shipping is calculated automatically in the dedicated cart and handled as part of the overseas customer's checkout. You receive the amount want.jp pays at your domestic price (shipping included), and the 5% feature fee plus your plan fees are charged on that payment amount (as of November 2026).

## Summary and Key Takeaway

Focus only on "what percentage is BASE's fee," and you'll miss the fee charged on shipping, plus packaging and delivery costs. What actually matters is the real take-home profit per order — fees, shipping, packaging, and delivery costs all included. Choosing a plan isn't just about comparing fee rates either; it has to be weighed against the fixed costs at your store's actual monthly sales volume. Growing sales and accurately knowing your take-home profit look similar but are actually two separate things. Keeping an eye on both is the foundation for running an e-commerce business stably over the long term.

For more on this, see our guide on BASE's monthly fees and when to consider switching to the Growth plan.

Leap is a cross-border ecommerce tool that lets AI handle marketing too. Just chat with it to build a multilingual, multi-currency online store and run overseas marketing such as SEO and email newsletters.

## References

- [BASE Pricing Plans - BASE official](https://thebase.com/price)
- [Easy Shipping (Yamato Transport integration) App - BASE official](https://thebase.com/apps)
- [BASE to Make "Kantan Kaigai Hanbai" (Easy Overseas Sales) a Standard Feature from March 18 - BASE, Inc. (PR TIMES)](https://prtimes.jp/main/html/rd/p/000000288.000030814.html)
