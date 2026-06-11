---
layout: blog-post.njk
title: "How to Set Up Shutto Translation: A Complete Visual Guide from JavaScript Tag Installation to Launch"
description: A step-by-step implementation guide for Shutto Translation, the tool that can multilingualize your website in as little as 3 minutes. Covers account registration, JavaScript tag installation, platform-specific setup for WordPress, Shopify, and more, translation exclusion settings, and a pre-launch checklist — everything engineers and web managers need in one place.
thumbnail: https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-06-11
topic: marketing
locale: en
tags:
  - blog
  - multilingual
  - shutto-translation
  - website-building
  - localization
author: Leap Editorial Team
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: A team of experts in international business
---

## [1-Minute Overview] The Big Picture of Shutto Translation Setup and How to Use This Guide
Website owners who want to go multilingual but find building translated pages from scratch too costly and time-consuming have turned to "Shutto Translation." This SaaS multilingualization tool from e-365 Co., Ltd. (formerly e-Agency) lets you make your entire site multilingual in as little as 3 minutes by adding just one line of JavaScript to your `<head>` tag.

This article is structured as a complete implementation guide for engineers and web managers working through the setup process. Specifically, it covers: ① the basic 3 steps from account registration to URL registration in the dashboard and tag installation; ② platform-specific installation instructions for static sites, WordPress, Shopify, ColorMeShop, and futureshop; ③ setup via Google Tag Manager and key caveats; ④ translation exclusion settings to protect personal and confidential information; and ⑤ pre-launch verification checkpoints.

Whether you're still evaluating Shutto Translation or you've already signed up and are stuck on the tag installation step, this guide is structured so you can follow along and reach launch — read on to the end.

## What Is Shutto Translation? Essential Knowledge Before You Get Started
Shutto Translation is a tool that multilingualizesyour entire website using AI-powered automatic translation — all by inserting a single JavaScript tag (the "implementation tag") into the `<head>` section of your HTML. It supports over 100 languages, covering virtually everything you need for Southeast Asia, East Asia, and the Americas, including English, Chinese (Simplified and Traditional), Korean, Thai, Vietnamese, and Indonesian.

The key to how it works is its "tag-based" approach. Because it requires only minimal changes to your existing site's source code, it can be applied broadly regardless of CMS type or whether the site is static or dynamic. Any page that outputs HTML — blogs, e-commerce sites, corporate sites, member portals, forms — is a candidate for translation.

In addition to automatic translation, the dashboard offers robust features: self-editing of translations, a dictionary registration function to prevent mistranslation of proper nouns, and design customization of the language-switcher bar. With the overseas search engine support feature, you can also auto-generate static pages to get your translated content indexed by Google and other search engines abroad.

Pricing (as revised in March 2026) starts at ¥8,800/month (tax included) for the Entry Plan (100 pages, 500,000 characters/month). No initial fees, and a 30-day free trial is available.

### A Real-World Example: NTT DATA Intramart
NTT DATA Intramart, a provider of IT platforms for enterprise customers, used Shutto Translation to multilingualize a site with over one million characters — cutting their conventional translation costs to roughly one-tenth. The factors they cited in their adoption decision included "high translation accuracy," "an intuitive dashboard," "operability that allows even staff with limited IT literacy to self-translate," and "strong cost performance." It has been recognized as a practical multilingualization solution for operating large-scale sites.

## The Basic 3-Step Setup — From Account Registration to Tag Installation and Launch
The Shutto Translation onboarding flow breaks down into three main steps. Following them in order prevents unnecessary rework.

### STEP 1: Create Your Account and Register URLs in the Dashboard
First, sign up for a free trial on the official Shutto Translation website (https://www.submit.ne.jp/shutto-translation). Enter your email address and basic information to create your account, which gives you access to the dashboard.

Once logged in to the dashboard, register the URLs of the pages you want to translate. URLs can be imported in bulk via CSV, which makes setup efficient even for e-commerce sites with hundreds of product pages. Once URLs are registered, pages are automatically loaded and the target text is extracted. At this stage, you'll also choose your translation languages and configure whether automatic translation publishing is enabled or disabled.

### STEP 2: Retrieve the Implementation Tag (JavaScript Tag) and Add It to Your `<head>`
In the dashboard, go to "Site Settings" and copy your "Implementation Tag." This tag is unique to your account and looks like this:
`<script src="https://xxxxxxxx.shutto-translation.com/st.js"></script>`

Insert this tag into the `<head>` section of every page on your website. Keep the following points in mind:

- Place the tag after (below) the `<title>` and `<link rel="canonical">` tags
- Even if you manage multiple accounts, use only one implementation tag per site — duplicate tags can cause unexpected issues
- If you cannot place the tag inside `<head>`, placing it immediately after the opening `<body>` tag is acceptable
- For sites where URLs or source code differ by device (e.g., separate HTML for desktop and mobile), install the tag in all device-specific source files

If you do not manage the site yourself, share the code and these notes with your web agency or development vendor and ask them to handle the installation.

### STEP 3: Publish Translations and Verify the Language Switcher
If you have "Auto Translation Publishing: Disabled" set, you'll need to publish manually from the dashboard. Select the target pages from the page list and click "Publish Translation" to publish in bulk.

After publishing, check the language-switcher bar settings. If it is set to "Do not display," check "Display language switcher bar" and configure its position and the languages shown. It's also important to verify the "Initial Display Language" setting, which controls which language site visitors see on their first visit.

Finally, visit your live website, confirm that the language-switcher bar appears correctly, and verify the translated display looks as expected — at that point, you're live.

## Platform-Specific Installation — WordPress, Shopify, ColorMeShop, and futureshop
The method for installing the implementation tag varies by CMS or e-commerce platform. Review the instructions for your environment below.

### Static / HTML Sites
In environments where you can edit HTML directly, add the implementation tag inside the `<head>` tag of every page. If a shared header file exists, editing that one file will apply the tag to all pages at once.

### WordPress
On WordPress, the standard approach is to edit your theme's `header.php` file and insert the implementation tag just before the `</head>` tag. If you edit the theme directly, be aware that a theme update will overwrite your changes — using a child theme is recommended. The "Insert Headers and Footers" plugin and similar tools allow you to add scripts to the `<head>` without editing code directly.

### ColorMeShop
As of February 2026, you can now add Shutto Translation to ColorMeShop simply by installing it from the app store. Search for "shutto翻訳" in the app store, add it, and you'll be guided through account registration. Direct HTML editing is no longer required, making multilingualization easier than ever. After the 30-day free trial, proceed with the paid plan from within the Shutto Translation admin panel.

Direct HTML installation via ColorMeShop's admin panel is still an option. In that case, go to "Design" → "Edit Template" in the admin panel, open the shared HTML, and insert the implementation tag inside the `<head>` tag.

### futureshop
futureshop has an official partnership with Shutto Translation. Apply through the dedicated application form and a free trial account will be issued within 3 business days. Edit the HTML template in futureshop's admin panel and insert the implementation tag in the `<head>`. The installation location differs between "Commerce Creator" and standard futureshop, so refer to the official manual (https://www.submit.ne.jp/shutto-translation/hc/manual/futureshop) to confirm.

### Shopify
On Shopify, open the `theme.liquid` file in the theme editor and add the implementation tag immediately before the `</head>` tag. Because `theme.liquid` is the shared template for all pages in Shopify's theme structure, a single edit applies to the entire site.

## Setting Up via Google Tag Manager (GTM) — and Key Caveats
Google Tag Manager can also be used to manage the Shutto Translation implementation tag. If you're already using GTM, the benefit is that your team can configure and update tags independently without requiring development resources.

The GTM setup process is as follows:

1. Open your GTM container and select "Tags" → "New"
2. Choose "Custom HTML" as the tag type and paste the Shutto Translation implementation tag code
3. Set the trigger to "All Pages"
4. Save the tag, verify it in Preview Mode, and then publish

However, there is an important caveat with GTM-based installation. Some users' ad blockers (e.g., Adblock) block GTM itself. If the tag is deployed through GTM only, Shutto Translation will not function for users with active ad blockers. To minimize the impact of ad blockers, consider using GTM alongside a direct `<head>` tag installation, or prioritize direct installation. Also, a misconfigured trigger in GTM can result in the tag firing on only certain pages — if you intend to apply it site-wide, always confirm the trigger is set to "All Pages." The official manual (https://www.submit.ne.jp/shutto-translation/hc/manual/googletagmanager) provides detailed setup instructions.

## Translation Exclusion Settings — Essential for Protecting Personal and Confidential Information
One of the most important yet easily overlooked settings when implementing Shutto Translation is the "translation exclusion" configuration. Your site may contain information that should not be passed through a translation tool.

Common areas that require translation exclusion include:

- Pages or sections displaying personal information such as names, addresses, phone numbers, and email addresses
- Forms where users enter personal information, such as account registration and order forms
- Highly confidential business documents such as contracts, quotes, and invoices
- Numerical data like product SKUs, prices, and stock quantities, where translation could introduce errors

There are two ways to configure exclusions. The first is to add a specific attribute to the HTML element you want to exclude: adding the `translate="no"` attribute or Shutto Translation's dedicated class name to an element prevents the text inside it from being translated. The second is to use the dashboard to change the settings for a specific page and exclude the page itself from translation entirely.

Shutto Translation's official manual explicitly states that for areas containing personal information, "using translation exclusion settings or removing the page from translation targets is recommended." As engineers and web managers, do not overlook this step — it matters from the perspective of GDPR and data protection laws in various countries.

For detailed configuration instructions, refer to the official manual page (https://www.submit.ne.jp/shutto-translation/hc/manual/exclusion_setting).

## Pre-Launch Checklist
Once tag installation and translation settings are complete, work through the following checks before going live. Skipping this step risks your users seeing incorrect information on translated pages.

### Display Verification
- Does the language-switcher bar appear correctly on all pages?
- Does switching to all target languages (English, Chinese, Korean, etc.) work properly?
- Is the translated display free of layout issues on desktop, tablet, and mobile? (Use the device preview feature)

### Translation Quality Verification
- Are there any text segments where automatic translation is significantly off? (Pay particular attention to product descriptions, CTA buttons, and navigation)
- Are proper nouns such as company names, product names, and place names displaying correctly? (Verify dictionary registration is applied)
- Are there any pages where the layout has broken due to translation? (Adjust CSS using the content editing feature)

### Exclusion Setting Verification
- Are personal information forms excluded from translation?
- Are sections with exclusion settings actually not being translated?

### Functional Verification
- Is the auto-translation publishing setting (enabled/disabled) as intended?
- Is the initial display language set to the intended language?
- If installed via Google Tag Manager, is the tag firing on all pages? (Verify using GTM's Preview Mode)

If issues are found during the checklist review, correct the text using the self-translation feature in the dashboard and republish. For detailed feature documentation, visit the official manual homepage (https://www.submit.ne.jp/shutto-translation/hc/manual) and browse by category.

## Frequently Asked Questions (FAQ)
**Q1. I'm not sure I can add the tag to the `<head>`. Will placing it in the `<body>` still work?**
Placing the tag inside `<head>` is recommended, but if that is not possible for any reason, placing it immediately after the opening `<body>` tag (at the very top) will work. The condition is that the tag is loaded when the page loads, so avoid placing it at the bottom of the `<body>` tag. If placing it inside `<head>`, it must come after the `<title>` and canonical tags.

**Q2. After installing on WordPress, a theme update wiped out the tag. What should I do?**
If you edited the theme directly, a theme update will overwrite your changes. To prevent this, either create a child theme and place the tag there, or use a plugin such as "Insert Headers and Footers." A plugin-based installation is unaffected by theme updates. Managing everything through Google Tag Manager is another option, though keep in mind the potential impact of ad blockers.

**Q3. Our e-commerce site has thousands of product pages. Do I need to register every page in the dashboard?**
Shutto Translation includes an "Auto Page Registration" feature. With the implementation tag installed on your site, turning on auto page registration automatically adds pages to the dashboard as visitors access them. A bulk CSV import feature is also available — prepare a CSV file of your product page URLs and import them all at once. For an e-commerce site with thousands of pages, manual one-by-one registration is not required.

## Conclusion — Open the Door to Global Markets with Shutto Translation
Getting started with Shutto Translation begins with adding a single JavaScript tag. Follow the basic three-step flow — account registration, URL registration, tag installation, and publishing — choose the installation method that fits your environment, configure translation exclusions, and run your pre-launch verification. Your existing website can be transformed into a multilingual site in the shortest possible time.

Some organizations, like NTT DATA Intramart, have multilingualized sites with over one million characters at one-tenth the cost of conventional translation. Others, like Midori City in Gunma Prefecture, have automated their translation work to significantly reduce the workload for municipal tourism sites. The benefits of multilingualization apply regardless of industry or scale.

That said, simply delivering your site to a global audience is only the first step. The next challenge is whether the content is actually *trusted* once it reaches them. Even a fully translated page won't drive inquiries or purchases if it doesn't resonate with the values and interests of local users.

At Leap, in addition to helping clients leverage tools like Shutto Translation, we provide original multilingual page creation and localization support optimized for local markets. If you're interested in an approach that goes beyond translation to truly rebuild content for a local audience, we invite you to explore [Leap's blog and case studies](https://www.leap.site/en/blog).

## References
- [Shutto Translation Publishing Manual (STEP 3)](https://www.submit.ne.jp/shutto-translation/hc/manual/publishing)
- [Shutto Translation User Manual Index](https://www.submit.ne.jp/shutto-translation/hc/manual)
- [A Complete Guide to the Website Multilingualization Service "Shutto Translation" (bizly)](https://bizly.jp/shuttohonyaku-explanation/)
- [Easy Website Translation with "Shutto Translation" (CMS Technodoor)](https://techno-door.net/function/shutto-translation/)
- [Shutto Translation Partner Service Information (futureshop)](https://www.future-shop.jp/tieup/problem/sales/shuttotranslation/)
- [Multilingualize Your Shop in as Little as 3 Minutes! "Shutto Translation" Now in the App Store (ColorMeShop)](https://shop-pro.jp/news/20260216-shutto-translation/)
- [IT trend: Shutto Translation Product Information](https://it-trend.jp/ai_translation_tool/13717)

Leap continuously publishes information on multilingual web marketing for business owners and managers considering global expansion — from market trends in each country to multilingual e-commerce operations and cross-border sales practice. [Browse our other articles](https://www.leap.site/en/blog) for actionable insights you can use in the field.
