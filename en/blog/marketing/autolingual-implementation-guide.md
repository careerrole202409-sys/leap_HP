---
layout: blog-post.njk
title: "How to Set Up Autolingual: A Step-by-Step Guide from Script Installation to Multilingual Launch"
description: A complete walkthrough for implementing Autolingual, the website multilingualization SaaS by Enju Inc. Covers all six steps — from script installation and dictionary registration to SEO configuration — for going live in multiple languages.
thumbnail: https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-06-12
topic: marketing
locale: en
tags:
  - blog
  - multilingual
  - web-marketing
  - global-expansion
  - saas
  - seo
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: Expert team in global business expansion
---

## [1-Minute Overview] What Is Autolingual — and What Changes When You Implement It?

Autolingual is a website multilingualization SaaS developed by Enju Inc. By adding a single line of script to the head tag of an existing site, the AI automatically translates and multilingualizs the entire site. The service promises a live multilingual site in as little as three minutes — eliminating the need to coordinate with engineers or go back and forth with a translation agency.

This article walks through the following six implementation steps for web managers and business owners who are actively evaluating Autolingual:

- Embedding the script in the head tag and registering pages in the management dashboard
- Using the live editor to preview translations, fix layout issues, and swap out images
- Registering a dictionary to prevent mistranslation of proper nouns and industry terminology
- Configuring language-specific URLs (subdirectory vs. subdomain) for SEO
- Understanding what happens when page or PV limits are exceeded, and how to manage it
- Using the optional native translator review service

For companies targeting markets in Southeast Asia, East Asia, or North America, this guide explains why Autolingual has become a go-to choice — and what the full implementation process looks like.

## Why Autolingual Gets Chosen — What Sets It Apart from Traditional Multilingualization

### Three Structural Problems with the Traditional Approach

When Japanese companies have tried to multilingualize their websites, they have historically run into three major obstacles. First, **translation costs**: engaging a professional agency can cost tens of thousands of yen per page, and with a large site, total costs can easily exceed several million yen. Second, **update overhead**: every time a Japanese page is updated, a new translation order and a new round of developer implementation is required — meaning multilingual versions are perpetually lagging behind. Third, **the technical knowledge barrier**: setting up a properly structured multilingual site (subdirectory vs. subdomain architecture, accurate hreflang tag configuration) requires specialized expertise that most in-house teams simply don't have.

Autolingual resolves all three of these issues with a single script embed and a management dashboard UI. The fact that organizations as varied as Zojirushi, the Nishi-Tetsu Group, and Japan's Ministry of Health, Labour and Welfare have all adopted it speaks to its versatility across different industries and scales.

### The Speed and Flexibility of the Script-Based Approach

Autolingual uses what is known as a "proxy-based" multilingualization model. It retrieves the HTML of the original site in real time, substitutes translated content, and serves the result to the user — which means it works regardless of whether the underlying site is built on WordPress, a custom CMS, or an e-commerce platform. When the Japanese site is updated, the change is automatically detected and immediately reflected across all language versions. There is no need to manage multilingual pages separately, and content freshness is maintained uniformly across languages.

Pricing starts with the Starter plan at ¥4,000/month, with higher tiers (Lite, Standard, etc.) available as the number of pages and monthly PV volume grows. The ability to start small and scale based on results is another reason small and mid-sized businesses find Autolingual easy to adopt.

## STEP 1: Script Installation and Page Registration — Initial Setup in as Little as 3 Minutes

### How to Embed the Script in the Head Tag

Getting started with Autolingual begins with copying the dedicated script tag generated in the management dashboard and pasting it into the head tag of any page you want to multilingualize. The steps are as follows.

First, create an account at the Autolingual official site (autolingual.io) and log in to the management dashboard. From the "Script Settings" menu in the dashboard, copy your site's unique script tag. In WordPress, open header.php via Appearance > Theme File Editor and paste the script immediately before the closing `</head>` tag. For custom CMS or static HTML sites, add the script to the shared header template file that appears on every page.

After placing the script, register the URLs you want to multilingualize via the "Page Management" section of the dashboard. If you want to cover the entire site, you can register pages in bulk by domain. Once registration is complete, Autolingual's AI engine automatically collects the text from each page and begins the translation process.

### How Long Does the First Translation Take?

Depending on the number of pages and the volume of content, initial translation for a straightforward site typically completes in five to ten minutes — at which point you can preview the results. Translation quality is handled by a proprietary AI model built on DeepL and Google Translate and optimized for website-specific expressions, such as short headings, product names, and CTA button text.

## STEP 2: Live Editor — Previewing Translations, Fixing Layouts, and Swapping Images

### What the Live Editor Does

Autolingual's live editor lets you view and edit translated pages directly in the browser in real time. Because you can see the page outside the management dashboard — exactly as a visitor would — you can make adjustments while seeing exactly how the result looks.

The most critical use case is **fixing layout breakage**. When Japanese text is translated into English or German, the translated text is often longer than the original, causing buttons or headings to overflow their containers. By shortening or rewording text directly in the live editor, you can correct the translation without compromising the design.

### Image Replacement

Autolingual also includes an image replacement feature. If a banner image or other visual has Japanese text embedded in it, machine translation will naturally leave that text untranslated. Through the live editor, you can upload a language-specific version of the image and configure it to display the appropriate image for each language — for example, an English-text banner for English-speaking markets and a Chinese-text banner for Chinese-speaking markets.

This feature is particularly useful for manufacturers and e-commerce operators who need language-specific versions of campaign banners or product specification images.

## STEP 3: Dictionary Registration — Preventing Mistranslation of Proper Nouns and Industry Terms

### Why Dictionary Registration Matters

AI-powered automatic translation delivers consistent general-purpose quality, but company-specific product names, service names, and industry jargon are prone to mistranslation or unnatural phrasing. For example, manufacturing process names such as "annealing" or "press forming," or ingredient and raw material names in the food industry, may be assigned contextually inappropriate translations by general-purpose translation engines.

Autolingual's dictionary registration feature allows you to specify terms that should not be translated, lock in fixed translations for specific phrases, and filter expressions before they are passed to the translation engine. The Starter plan allows up to 50 registered terms; higher-tier plans extend this limit.

### How to Register Dictionary Entries

From the "Dictionary Management" menu in the management dashboard, enter source terms and their target translations as pairs. For example, if you want the brand name "花菱" to appear as "Hanabishi" in all languages, enter "花菱" as the source term and "Hanabishi" as the translation — the setting takes effect across the entire site immediately.

For industries with dense specialist vocabulary — medical device manufacturers, chemical materials companies, precision parts makers — the quality of the dictionary directly determines the quality of the output. We strongly recommend taking the time during the early implementation phase to comprehensively register all key technical terms.

## STEP 4: Language-Specific URL Configuration (Subdirectory vs. Subdomain) and SEO Impact

### Two URL Structures: Which Should You Choose?

Autolingual allows you to configure how multilingual page URLs are structured. There are two main options: the **subdirectory (path) method** and the **subdomain method**.

The **subdirectory method** creates URLs like example.com/en/ or example.com/zh/ by placing language code directories under the main domain. This approach concentrates domain authority under a single domain, which is generally considered the stronger option from an SEO standpoint. It lets you leverage the existing domain's established authority while expanding to multiple languages.

The **subdomain method** assigns a separate subdomain to each language — for example, en.example.com. This makes it easier to treat each language version as a fully independent site and gives greater flexibility for server placement and content configuration targeting specific countries. However, from an SEO perspective, each subdomain is treated as an independent domain by search engines, which means authority tends to be spread more thinly.

### Automatic hreflang Tag Configuration

One indispensable element of multilingual SEO is the **hreflang tag** — the meta tag that tells Google which language and region a given page is targeting. Autolingual automatically generates and injects hreflang tags regardless of whether you choose the subdirectory or subdomain method. For small and mid-sized businesses without dedicated technical staff, eliminating the risk of SEO penalties from manual tag configuration errors is a significant benefit.

## STEP 5: What Happens When Page or PV Limits Are Exceeded — Operational Considerations

### Know Your Plan's Limits

Each Autolingual plan sets limits on the number of translated pages and the monthly PV volume. According to information published on BOXIL, the Starter plan supports up to 30 translated pages and up to 300,000 monthly PVs. The Lite plan starts at ¥18,000/month and comes with expanded limits.

What matters most is understanding the behavior when limits are exceeded. If the page count limit is reached, the translation script will not be applied to any unregistered pages — they will display in Japanese. If the monthly PV limit is exceeded, translated display stops entirely and the original Japanese page is shown. Since overseas users would suddenly be seeing Japanese content, it is important to choose a plan with enough headroom to accommodate traffic spikes around events such as promotions or trade shows.

### Operational Checkpoints

We recommend building a habit of checking the PV consumption status on the dashboard on a monthly basis. For businesses running cross-border e-commerce or inbound tourism campaigns, viral social media posts or media coverage can trigger sudden access spikes. The dashboard provides real-time PV consumption data — when the remaining allowance gets low, act promptly to upgrade your plan.

Also, whenever you undertake a site redesign or CMS migration, always verify that the script in the head tag has been carried over correctly. If the script is lost, translated display stops for all language versions. Add a multilingual display check to your post-deployment checklist to ensure nothing slips through.

## STEP 6: Using the Native Translator Review Service

### The Quality Ceiling That AI Translation Alone Can't Reach

For content where corporate credibility and brand image are on the line — the lead copy of a product catalog, the top message on a company overview page, the culture section of a recruitment page — AI translation quality alone may not be sufficient. Even grammatically correct text can read as "foreign-accented" to a native speaker, which can undermine trust. In B2B contexts targeting English-speaking or Chinese-speaking markets in particular, buyers and procurement managers often assess a supplier's quality standards from their first impression — which means the naturalness of the writing can directly affect whether a business conversation happens at all.

### How to Request the Native Review Option

Autolingual offers a native translator review service as an optional add-on to further refine AI translation output. From the management dashboard, select the pages or text sections you want reviewed, specify the target language, and submit the request. A native translator reviews and corrects the AI-generated output, and the improved translation overwrites the original.

One context where this option sees strong use is manufacturing. Companies such as Torishima Pump Mfg. Co., Ltd. and Meidensha Corporation — both in the heavy industry space — are among Autolingual's adopters. It is likely that they combine native translator review with AI translation for technical catalogs and product specification documents to ensure precise communication of technical information to overseas buyers. The most practical approach is to apply native review selectively to the highest-priority content, keeping costs manageable while maintaining quality where it matters most.

## Frequently Asked Questions (FAQ)

**Q1. Does it work with WordPress or Shopify?**

Yes. Autolingual can be implemented on any type of site — WordPress, Shopify, custom CMS, and others. Since it operates by embedding a script in the head tag, WordPress users can add it with a single line in a plugin or theme file. For Shopify, it can be added to the theme's Liquid file. Note that for single-page applications (SPAs) that rely heavily on JavaScript-based dynamic rendering, separate verification is recommended.

**Q2. When are translations updated?**

Changes to the Japanese site are automatically detected and reflected across all language versions in real time. However, depending on cache conditions, some changes may experience a lag of a few minutes to several tens of minutes before appearing. For time-sensitive updates, you can manually trigger a translation refresh from the management dashboard. For major announcements or campaign launches, we recommend making it a habit to manually confirm that the update has propagated correctly.

**Q3. Will multilingual SEO be properly recognized by Google?**

Autolingual supports automatic hreflang tag configuration, which is designed to correctly communicate language and regional targeting to Google. When the subdirectory (path) method is selected, multilingual pages inherit the SEO authority of the main domain. That said, if translated content lacks originality — relying entirely on AI translation without customization — Google's assessment may be limited. For key pages, it is worth considering native translator review or the addition of original, locally tailored content.

## In Closing: What Becomes Possible Once You've Cleared the Multilingual Launch Barrier

Breaking down the Autolingual implementation process, it falls into six phases: script installation, page registration, live editing, dictionary registration, SEO configuration, and quality assurance. Each phase is handled entirely through intuitive management dashboard operations, with no dependency on engineers or specialist translators.

For small and mid-sized businesses working to expand into Southeast Asian, East Asian, or North American markets, launching a multilingual site is no longer the finish line — it's the starting line. The real goal is to deliver information to local users in their natural language, and to drive inquiries and purchasing behavior from there. Autolingual is an effective tool for taking that crucial first step at significantly lower cost and effort than traditional approaches.

At the same time, as you push further into translation quality, local market localization, and serious multilingual SEO, there are areas that script-based translation tools alone cannot reach. Content architecture rooted in local user behavior — and optimized UI and conversion funnels for each language — is ultimately what drives inquiry volume from overseas markets.

Leap supports companies that have used tools like Autolingual as a starting point for multilingualization and are ready to go further with market-specific web marketing. By building new, locally localized pages — rather than simply translating existing ones — it becomes possible to run a web strategy that directly drives international inquiries and customer acquisition. We continue to share practical information on overseas web marketing on the Leap blog.

## References

- [Autolingual Official Website](https://autolingual.io/)
- [How to Make Your Website Multilingual — Essential for Global Expansion (Autolingual Blog)](https://autolingual.io/tips/wieBrNii)
- [What Is Autolingual? Pricing, Features, and How to Use It (IT Trend)](https://it-trend.jp/website_translation_tool/15831)
- [Autolingual Pricing, Features, and Case Studies (BOXIL)](https://boxil.jp/service/13113/)
- [Autolingual Features, Pricing, and Reviews (kyozon)](https://kyozon.net/service/667399ae0898c452409748/)
- [Autolingual Service Details (ASPIC Japan)](https://www.aspicjapan.org/asu/service/49043)
