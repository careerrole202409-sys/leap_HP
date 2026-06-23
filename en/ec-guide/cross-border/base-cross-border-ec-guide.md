---
layout: ec-guide-post.njk
title: "Selling Internationally on BASE | How to Use the English & Foreign Currency App"
description: A step-by-step guide to enabling cross-border sales on BASE — covering the English & Foreign Currency App, international shipping setup, PayPal payment integration, customs duties, and the practical limits of BASE's translation capabilities.
thumbnail: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-06-24
topic: cross-border
locale: en
tags:
  - ec-guide
  - BASE
  - cross-border-ec
  - international-selling
  - multilingual
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: A team of experts in overseas business
---

### [Quick Summary] What You Need to Know Before Starting Cross-Border Sales on BASE

BASE (pronounced "bah-zeh") is a Japan-based e-commerce platform that lets you launch an online store with no upfront fees or monthly charges. If you're already running a domestic Japanese store on BASE and want to start selling internationally, it's one of the most accessible entry points into cross-border e-commerce.

Enabling international sales on BASE requires three core configurations. First, use the Shipping Fee Settings App to set destination-specific international shipping rates. Second, use the English & Foreign Currency App to display your shop in English and show prices in foreign currencies. Third, activate PayPal and other internationally compatible payment methods through BASE Easy Payment.

That said, BASE is fundamentally designed for the domestic Japanese market. Product names and descriptions you write yourself are not automatically translated — you'll need to prepare English content on your own. Customs handling and return policy documentation also require attention. This article walks through each configuration step and flags the practical limitations so you can go into international selling with an accurate picture of what BASE can and can't do.

### BASE's Standard Features and Where Cross-Border Support Currently Stands

BASE is built primarily for the Japanese domestic market. Its zero monthly fee structure — where you only pay when you make a sale — makes it well-suited for testing cross-border sales before committing to a larger investment.

Without additional configuration, however, BASE isn't set up for international buyers. The default checkout form doesn't support overseas address formats, which means international customers can't complete a purchase without additional setup. The shop interface displays in Japanese only by default, and foreign currency pricing isn't available out of the box. Payment options in their initial state are limited to domestic Japanese credit card processing, which international customers generally can't use.

BASE Apps — the platform's extension library — address these gaps. You can install the relevant apps to build out international selling capabilities incrementally. In November 2024, BASE updated its order screen to support overseas address formats and enabled shipping fee configuration by country and region. In March 2026, Easy International Sales was added as a built-in feature, with AI-based country detection that automatically displays an international-specific cart. The barrier to cross-border selling on BASE has come down meaningfully over the past few years.

### Setting Up the English & Foreign Currency App

#### Installation and Basic Configuration

The English & Foreign Currency App is available in the BASE Apps library and is free to install. Once installed, fixed UI text across your shop — button labels, system messages, the cart, and purchase confirmation emails — automatically switches to English.

Specifically, when a visitor's browser is set to English, the shop interface displays in English automatically. Visitors with Japanese browser settings continue to see Japanese, so your existing domestic customer experience isn't affected. Visitors can also switch language and currency manually using the language and currency toggle menu within the shop.

For foreign currency display, the app supports 34 currencies including US dollars, euros, British pounds, Korean won, and Singapore dollars. One important caveat: foreign currency prices are displayed as approximate figures for reference only. Actual billing happens in Japanese yen. The exchange rate used is locked in when the shipment status is updated to "shipped." Because the displayed price and the actual charge may differ slightly, it's important to note this clearly on your shop page — something like "All transactions are billed in Japanese yen."

#### What Is and Isn't Translated Automatically

This is the most important limitation to understand before installing the app. The English & Foreign Currency App only converts the fixed interface text that BASE itself generates. It does not translate the content you write — product names, product descriptions, and your shop description are all left as-is.

To communicate your products effectively to international buyers, you'll need to write English descriptions yourself. If writing in English isn't your strong suit, tools like DeepL Translator and ChatGPT can handle a working translation at no cost. If you want higher-quality output, hiring a native speaker to review or rewrite the translations is worth considering. Product description quality has a direct impact on purchase rates, so this isn't an area to cut corners on.

### International Payment Options: PayPal and Beyond

#### Payment Methods Available Through BASE Easy Payment

Giving international customers a familiar, trustworthy way to pay is essential to converting visits into purchases. BASE Easy Payment lets you enable the following internationally compatible payment methods from the payment settings screen.

PayPal is an international payment service used by more than 200 million people worldwide. It accepts international credit cards and is particularly effective for sales to customers in the United States, Europe, and Australia. One operational note: orders paid via PayPal are automatically cancelled if not shipped within 10 days, so you'll need a fulfillment process that can move quickly.

Amazon Pay also supports payments from international buyers, with a longer auto-cancellation window of 30 days. Bank transfer is technically available for international customers, but be upfront with buyers that confirmation takes time and that wire transfer fees are their responsibility.

One constraint to be aware of: BASE's native credit card processing does not accept cards issued outside of Japan. Enabling PayPal and Amazon Pay is the standard workaround for this limitation.

### International Shipping: Setup and Documentation

#### Configuring International Shipping with the Shipping Fee Settings App

Installing the Shipping Fee Settings App gives you access to international shipping configuration. The app is free. From the shipping settings screen, select "Add Shipping Method" → "International Shipping Method" to get started.

The name you give the shipping method will appear in the customer's cart, so use an English label like "EMS" or "DHL" rather than Japanese. Shipping rates can be set as a flat international rate or broken down by region.

Major international shipping options available from Japan include Japan Post EMS (Express Mail Service), Yamato Transport International Express, DHL, and FedEx.

Japan Post EMS is a tracked international service with built-in insurance coverage up to ¥20,000 (approx. $130 USD) at no additional charge. Coverage can be extended in ¥20,000 increments for ¥50 each, up to a maximum of ¥2,000,000. Rates vary by destination country and package weight — check the official Japan Post website for the EMS rate table before configuring your settings.

#### Shipping Documentation Requirements

International shipments require a commercial invoice, packing list, and customs declaration. Your commercial invoice must accurately include the product name, quantity, unit price, total value, and the full addresses of both the sender and recipient.

An HS code (Harmonized System code) declaration is also required. Customs authorities use this six-digit international classification code to calculate duties, so accuracy matters. Japan Post's International Mail MyPage portal can auto-generate the required documents, making it a practical tool for sellers handling their first international shipments. Addresses on all documentation should be in English, written in the order: country, address, recipient name.

### Customs Duties: What Cross-Border Sellers Need to Know

#### The Standard Approach: DAP (Delivered At Place)

In virtually all cross-border sales, customs duties apply when goods enter the destination country. The standard international convention is DAP (Delivered At Place), where the buyer (as the importer) is responsible for paying any applicable duties. BASE cross-border sales generally follow this model.

Unexpected duty charges at delivery are a common source of buyer complaints and package refusals. To prevent this, include a clear English notice on your shop and product pages — something like: "International orders may be subject to customs duties and import taxes in the destination country, in accordance with local regulations."

Alternatively, some sellers opt for DDP (Delivered Duty Paid), where the seller covers all duties and the buyer sees no additional charges at delivery. This removes purchase anxiety and can reduce cart abandonment, but it increases your cost base and needs to be factored into your pricing.

#### EU Sales Require VAT Compliance

If you're selling to customers in the European Union, VAT (Value Added Tax) applies on top of customs duties. As of the July 2021 EU reform, all imported goods from outside the EU are subject to VAT regardless of value. Orders exceeding €150 also incur customs duties. If you plan to sell into the EU at meaningful volume, registering for IOSS (Import One Stop Shop) is worth investigating.

Tax compliance in cross-border contexts requires specialist knowledge that goes beyond what BASE handles on its end. For sellers making a serious push into international markets, consulting a tax accountant or customs broker familiar with cross-border e-commerce is advisable.

### Case Studies: Shop Owners Using Easy International Sales

BASE published a press release in March 2026 highlighting real shop owners who had used the Easy International Sales feature.

One case involved a shop owner selling crafts and handmade goods. They had been fielding inquiries from international customers through Instagram DMs for some time, but the complexity of international shipping and the high shipping costs had prevented them from actually enabling international sales. When they tried Easy International Sales, they were struck by how closely the process mirrored their domestic selling workflow — no special configuration required, and the fee structure felt manageable.

They now write product pages in both Japanese and English using DeepL and ChatGPT, and have incorporated English into their social media posting to reach customers internationally.

The same press release featured a second shop owner selling original artwork. Previously, tasks like HS code research and shipping label preparation had required specialist knowledge they didn't have. Being able to hand those off to a dedicated team made international selling feel as straightforward as selling domestically. They also noted a direct impact from payment expansion: "Once international credit cards were accepted, the number of purchases increased dramatically" — confirming that payment method coverage has a measurable effect on conversion.

### FAQ

**Q. Can the English & Foreign Currency App alone enable full cross-border selling on BASE?**

Unfortunately, no. Cross-border selling on BASE requires three things working together: the Shipping Fee Settings App to configure international shipping, the English & Foreign Currency App to display the shop in English and foreign currencies, and BASE Easy Payment to activate PayPal and other internationally accepted payment methods. The English & Foreign Currency App only converts BASE's built-in interface text to English — product names, descriptions, and shop copy that you've written yourself are not translated automatically. Preparing English product descriptions using tools like DeepL or ChatGPT is essential for achieving meaningful international purchase rates.

**Q. When an international customer buys from my shop, what currency are they actually charged in?**

The foreign currency display is a reference tool — actual billing occurs in Japanese yen. The yen-equivalent amount is what the buyer is charged, which can differ slightly from the displayed foreign currency price. This is a potential source of confusion, so it's strongly recommended to include a clear statement on your shop page: "All purchases are billed in Japanese yen." The exchange rate is fixed at the time the shipment status is updated to "shipped."

**Q. If an international customer complains about unexpected customs charges, how should I respond?**

The best approach is preventing the issue before it happens. Include a clear English notice on your product pages and purchase guide: "International orders may be subject to import duties and taxes in accordance with the regulations of the destination country. These charges are the buyer's responsibility." If a complaint does arise, use a translation tool to respond clearly and courteously, and handle cancellations or refunds where appropriate. Because return shipping on international orders is typically expensive and logistically complex, having a pre-written English returns policy helps contain the scope of disputes when they occur.

### Conclusion: Three Steps to Cross-Border Selling on BASE — and What Comes Next

Cross-border selling on BASE is achievable by configuring three things: the Shipping Fee Settings App, the English & Foreign Currency App, and BASE Easy Payment (with PayPal and other international methods enabled). The platform's international capabilities have improved steadily — Easy International Sales is now a standard built-in feature — and the entry barrier is genuinely lower than it used to be.

That said, as you try to build real traction in international markets through BASE, the limitations become clearer. Translating product descriptions is your own responsibility, which means balancing quality and workload. BASE's native credit card processing still doesn't accept internationally issued cards. And the platform's language support is limited to English — serving customers in Chinese, Korean, or other languages isn't currently possible through BASE alone.

When you start targeting specific countries or regions seriously, a store that's been "translated into English" often falls short of what local customers expect. Localization — adapting your content to the cultural context, search behavior, and purchasing expectations of each market — is what separates cross-border stores that convert from those that don't.

Leap's approach to multilingual web marketing centers on localization over translation: building market-specific pages from the ground up rather than adapting Japanese content. For sellers who've started with BASE's cross-border capabilities and are ready to expand further, Leap's services are built for that next step.

### From Leap | Resources for Cross-Border and Overseas Business

Leap publishes practical resources on cross-border EC, multilingual strategy, and international marketing on an ongoing basis.

- [EC Operations Guide](https://www.leap.site/en/ec-guide)
- [Global Business Blog](https://www.leap.site/en/blog)

### References

- [BASE Apps | English & Foreign Currency](https://apps.thebase.com/detail/33)
- [BASE U | How to Start Selling Internationally on BASE (Practical Guide)](https://baseu.jp/15741)
- [BASE U | Can This Product Sell Overseas? 5 Questions to Ask Before Going International](https://baseu.jp/39543)
- [BASE Press Release | Easy International Sales Now a Standard Feature](https://prtimes.jp/main/html/rd/p/000000288.000030814.html)
- [BASE Design Info | How to Sell Internationally on BASE](https://basedesign.info/2024/11/29/base-shipping-international/)
- [Order! | How to Ship Internationally on BASE](https://order-us.jp/article-base-overseas-shipping/)
- [Pochilogi Column | A Complete Guide to Customs Duties in Cross-Border EC](https://corporate.beforward.jp/pochilogi/blog/%E8%B6%8A%E5%A2%83ec%E3%81%AE%E9%96%A2%E7%A8%8E%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E5%BE%B9%E5%BA%95%E8%A7%A3%E8%AA%AC)
- [J-Net21 | Customs Duties in Cross-Border EC: What You Need to Know](https://j-net21.smrj.go.jp/qa/development/Q1441.html)
