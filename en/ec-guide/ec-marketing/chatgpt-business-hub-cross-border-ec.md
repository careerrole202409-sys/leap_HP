---
layout: ec-guide-post.njk
title: "ChatGPT Business Hub Explained: Can Non-US Ecommerce Sellers Join? Product Feeds and Limits (November 2026)"
description: "OpenAI launched Businesses in ChatGPT on November 10, 2026. Based on OpenAI's announcement, help center and feed spec, we cover what Business Hub can and can't do, how non-US sellers are treated, setup steps, required product feed fields and ChatGPT Wallet."
thumbnail: https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-11-27
topic: ec-marketing
locale: en
tags:
  - ec-guide
  - ChatGPT
  - Business Hub
  - AI search
  - AI agents
  - cross-border ecommerce
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: A team of e-commerce business experts
---

## Quick Overview: What Is ChatGPT Business Hub?

ChatGPT Business Hub is a dashboard where businesses claim and manage their profile on ChatGPT and see how often ChatGPT's answers feature them. OpenAI announced Businesses in ChatGPT in beta on November 10, 2026, and in a November 19 update said that ecommerce and online service businesses based outside the U.S. can now claim their business and publish a Business Agent (a branded AI agent for the business).

For cross-border ecommerce sellers, three points matter most:

1. **What you can do**: claim and verify your profile, update details such as delivery and return policies, add a product feed with pricing and availability, and see mentions and website clicks over the past 28 days
2. **What you can't do**: claiming does not guarantee better placement in ChatGPT's recommendations. Business Agents cannot complete purchases, make bookings or check orders; they explain products and policies and link to your website
3. **Watch out for**: as of November 2026, the product feed spec says the shared country format currently represents the US, Canada and Mexico, and standard uploads are treated as targeting "US"

This article draws on OpenAI's official announcement, help center and specifications to lay out what sellers shipping internationally can do right now.

## What Is ChatGPT Business Hub?

Business Hub is the business-facing dashboard at the center of OpenAI's Businesses in ChatGPT. It lets a business claim and verify the profile that appears when ChatGPT mentions it, and keep that information accurate.

With Business Hub, you can check how often ChatGPT references your business in AI search (being cited in AI answers, sometimes called AIO or GEO) using figures aggregated by OpenAI itself.

### Key Dates

Here is the timeline of OpenAI's announcement and related pages (as of November 2026).

| Date | What happened |
|---|---|
| November 10, 2026 | OpenAI published "Introducing Businesses in ChatGPT," launching Business Hub and Business Agents in beta |
| November 13, 2026 | OpenAI announced ChatGPT Wallet, which lets agents pay on a user's behalf |
| November 18, 2026 | The Businesses in ChatGPT Terms were updated |
| November 19, 2026 | The announcement was updated: ecommerce and online service businesses based outside the U.S. can now claim their business and publish agents |

### What Business Hub Does

The announcement and help center describe four main features.

| Feature | Details |
|---|---|
| Claim and verify | Claim your listing on ChatGPT and verify it by business phone, business email, website domain or Shopify store. Verified profiles get a blue check |
| Update information | Edit your website, description, product or service category, logo, delivery policy, return policy and more |
| Product feed | Add product data with pricing and availability by CSV upload or a hosted feed URL |
| Insights | See mentions, website clicks and discovery topics (common themes in answers that featured you) over the past 28 days |

For online businesses, a "mention" counts only when ChatGPT references your website; your brand name alone doesn't count. Individual prompts and conversations are never shared with businesses. Metrics appear only once certain thresholds are met, so the help center notes that a blank metric doesn't necessarily mean zero activity.

## Can Businesses Outside the US Use ChatGPT Business Hub?

Yes, businesses outside the US, including cross-border sellers in Japan, are within scope to claim a profile. OpenAI says eligible businesses located where ChatGPT is available can claim through Business Hub. Eligibility still depends on industry, location and verification, so not every business will qualify.

### How Non-US Businesses and Business Agents Are Treated

Business Agents were initially limited to eligible ecommerce and online service businesses in the US. The November 19, 2026 update to the announcement added that such businesses based outside the U.S. can now claim their business and publish agents.

However, as of November 2026, the FAQ on the Businesses in ChatGPT landing page still says Business Agents are available "in the US with access expanding to more types of businesses over time." The most reliable way to confirm availability is to start a claim in Business Hub and see what it shows you. The help center also notes that local stores and restaurants can currently claim only an existing U.S. listing.

### Three Limits Cross-Border Sellers Should Know

1. **Product feeds target limited countries**: the product feed spec (as of November 2026) says the shared format for `target_countries` currently represents the US, Canada and Mexico, and that standard uploads use "US" for `target_countries` and `store_country` regardless of the column values. Assume feeds can't yet list products for shoppers in other markets
2. **Business Agents don't sell**: the help center states that agents can't complete purchases, make bookings or check orders. They explain products and policies and link to your website, where the purchase happens
3. **Claiming doesn't guarantee visibility**: the official FAQ says claiming doesn't guarantee higher placement or sales, and ChatGPT keeps making independent recommendations and comparisons. The terms also state that a listing can be displayed whether or not you claim it, and that OpenAI may supplement or edit information using other sources

## How to Set Up ChatGPT Business Hub

The help center lays out setup in five steps (as of November 2026). Steps 4 and 5 are optional.

1. **Claim your business**: sign in to ChatGPT, open "Business Hub" from the sidebar and search for your business. Select the matching listing and choose a verification method: business phone, business email, a DNS TXT record on your website domain, or connecting your Shopify store. OpenAI emails you its decision
2. **Complete Persona verification**: an approved claim alone doesn't let you publish changes, view insights, connect a product feed or create an agent. Persona, an identity verification service, may ask for a government-issued ID, business registration details and proof that you're authorized to represent the business. Enter the name on your registration documents in "Legal business name" and your trading name separately
3. **Update your business information**: add your website, description, category, logo, delivery policy, return policy and so on. OpenAI reviews changes before they appear
4. **Connect a product feed (optional)**: upload a CSV that follows the spec, or enter a URL that points to your feed file. Shopify stores connected through Business Hub don't need a separate feed
5. **Set up and publish a Business Agent (optional)**: review the product details and return policy the agent uses, write instructions, test it with common customer questions, then publish

The help center also notes that a successful upload only confirms receipt, and that connecting a feed doesn't publish an agent or guarantee recommendations.

## Required Product Feed Fields and What Sellers Need to Prepare

The product feed spec (file upload version) defines nine required basic fields plus two required geo fields. The table below maps each field to what a seller in another country selling to US shoppers needs to prepare.

| Required field | Meaning | What to prepare |
|---|---|---|
| `item_id` | ID per product or variant | Your store's product ID (one row per color or size) |
| `title` | Product name | English product name |
| `description` | Product description | English product description |
| `url` | Product page URL | URL of the English product page |
| `brand` | Brand name | Brand name |
| `seller_name` | Seller name | Store or company name |
| `image_url` | Product image URL | Product image URL |
| `availability` | Stock status | One of `in_stock`, `out_of_stock`, `pre_order`, `backorder`, `unknown` |
| `price` | Price | A USD price written as amount, space, currency code, e.g. `79.99 USD` |
| `target_countries` | Target countries | ISO country codes ("US" for standard uploads as of November 2026) |
| `store_country` | Store country | ISO country code (same as above) |

The spec requires a decimal point with no thousands separators, and rejects rows where availability is blank or unrecognized. In practice, you need English product pages, USD prices and up-to-date stock.

## What Is ChatGPT Wallet, Announced the Same Week?

ChatGPT Wallet is a payment feature that lets ChatGPT agents pay on a user's behalf on websites. OpenAI announced it on November 13, 2026.

| Item | Details (as of November 2026) |
|---|---|
| Who can use it | ChatGPT Pro subscribers aged 18+ in the US with eligible US-issued cards, starting with the "dots" agent |
| How it works | Users add a card once and approve each purchase with a biometric check such as Face ID or a fingerprint. Merchants and agents receive a network-issued token instead of the real card number |
| Partners | American Express, Chase, Mastercard, Visa |
| What merchants do | No new payment integration is needed; tokens work with existing checkout flows. To avoid blocked purchases, OpenAI suggests claiming your business and uploading a product feed, and configuring CDNs or firewalls to recognize signed requests (Web Bot Auth) |

OpenAI says businesses keep their customer relationships, pricing, fulfillment, returns and customer service. Although only US users can use it, sellers who already ship to the US should prepare alongside their Business Hub claim.

## What Cross-Border Sellers Should Do Now

The priority for cross-border sellers is to make sure ChatGPT can reference their own website accurately. Because Business Hub counts a mention only when your website is referenced, having English information on your site that AI can read is the starting point.

1. **Claim your business in Business Hub and complete Persona verification**: this also tells you whether a claim from your country goes through
2. **Publish clear delivery and return policies in English**: they appear in your Business Hub profile and in the information an agent uses
3. **Start with products you sell to the US: prepare English product pages and USD prices**: this covers the required feed fields directly
4. **Check insights once a month**: use mentions, clicks and discovery topics to see which topics ChatGPT associates with you

To prepare your own store, you can also use Leap, a cross-border ecommerce tool that lets AI handle marketing too. In Leap, you choose a base currency per product and prices are shown daily in USD, EUR and JPY using the previous day's exchange rate; you can set which countries each product is sold in, and on the Basic plan and above, AI writes multilingual blog posts for SEO and AIO (as of November 2026).

For selling through Shopify's AI channels, see "[Shopify Editions Fall '26: New AI Agent Features](/en/ec-guide/ec-marketing/shopify-editions-fall-2026-ai-agent/)." For Google, see "[Google Universal Cart and UCP: Latest Status](/en/ec-guide/cross-border/google-universal-cart-ucp-cross-border-status/)."

## FAQ

**Q. Can a business outside the US join ChatGPT Business Hub?**

A. Yes, it is within scope. OpenAI says eligible businesses located where ChatGPT is available can claim, and its November 19, 2026 update added that ecommerce and online service businesses based outside the U.S. can claim and publish agents. Some businesses may still be ineligible depending on industry, location and verification.

**Q. Will claiming my business make ChatGPT recommend it more?**

A. No, there is no such guarantee. The official FAQ says claiming doesn't guarantee higher placement or sales, and ChatGPT keeps making independent recommendations and comparisons. Ads also don't influence ChatGPT's independent answers.

**Q. Does ChatGPT Business Hub cost anything?**

A. As of November 2026, OpenAI's announcement, help center and terms don't mention any fee for claiming or managing a business. Separately, sponsoring a Business Agent as an ad destination is part of ChatGPT Ads.

**Q. Can a Business Agent take orders?**

A. No. The help center says Business Agents can't complete purchases, make bookings or check orders; they explain products and policies and link to your website.

**Q. Are Business Hub website clicks the same as website visits?**

A. Not necessarily. Website clicks count how often people click the link to your website in ChatGPT. Use your own analytics to confirm actual visits and purchases.

## Summary and Key Takeaway

ChatGPT Business Hub lets businesses officially manage and check how they appear in AI answers. The November 19, 2026 update opened it to businesses outside the US, but the default feed target is still the US, and Business Agents don't sell.

The key takeaway: even in the age of AI search, the purchase still happens on your own store. Mentions count only when your site is referenced, and both Business Agents and ChatGPT Wallet are designed to send shoppers to your own checkout. English product pages AI can read, accurate prices and stock, and clear delivery and return policies on your own site are the fastest way to make the most of ChatGPT as a new entry point.

Leap is a cross-border ecommerce tool that lets AI handle marketing too. Just chat with it to build a multilingual, multi-currency online store and run overseas marketing such as SEO and email newsletters.

## References

- [Introducing Businesses in ChatGPT - OpenAI](https://openai.com/index/introducing-businesses-chatgpt/)
- [Businesses in ChatGPT: Claim Your Business - OpenAI](https://openai.com/business/businesses-in-chatgpt/)
- [Setting up your business on ChatGPT - OpenAI Help Center](https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt)
- [Businesses in ChatGPT Terms - OpenAI](https://openai.com/policies/businesses-in-chatgpt-terms/)
- [Business Agents Policy - OpenAI](https://openai.com/policies/business-agents-policy/)
- [Product feed schema - OpenAI Developers](https://developers.openai.com/commerce/specs/file-upload/products)
- [Introducing ChatGPT Wallet - OpenAI](https://openai.com/index/introducing-chatgpt-wallet/)
- [Pricing - Leap](https://www.leap.site/en/pricing/)
