---
layout: ec-guide-post.njk
title: Shopify多语言设置教程｜添加语言的方法与翻译插件怎么选
description: 详解Shopify店铺如何实现多语言：Shopify自带功能能做什么、如何添加和发布语言、Translate & Adapt自动翻译的语言数量上限、Weglot等主流翻译插件的价格对比，以及无法翻译的内容和多语言SEO注意事项。
thumbnail: https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-11-11
topic: cross-border
locale: zh-hans
tags:
  - ec-guide
  - Shopify
  - 多语言
  - 翻译插件
  - 跨境电商
author: Leap编辑部
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: 电商业务专家团队
---

## 【一分钟速览】Shopify多语言设置

Shopify自带功能最多支持20种语言（Shopify Plus最多30种）。不过，仅添加语言时，只有兼容主题和结账页面中的固定文字会被翻译。商品描述和页面正文需要借助Shopify官方的免费应用Translate & Adapt或第三方翻译插件来翻译。

- **设置流程**：确认主题 → 在“设置”>“语言”中添加语言 → 翻译 → 发布
- **免费方案**：Translate & Adapt。位于日本的店铺，除默认语言外最多可自动翻译2种语言
- **想自动翻译3种以上语言**：Weglot、Langify等付费插件
- **注意事项**：标签、商品图片等内容无法翻译；取消发布某种语言后，该语言的网址会返回404

本文根据2026年11月Shopify帮助中心和Shopify App Store的信息，介绍设置步骤和翻译插件的选择方法，并说明翻译与本地化的区别。

## Shopify的多语言功能是什么

Shopify的多语言功能，是指在一个店铺中添加多种语言，让海外顾客能用自己的语言浏览和购物的功能。语言发布后，每种语言都会有独立的网址，结账页面和通知邮件也会以顾客的语言显示。没有翻译的内容会以默认语言显示。

### Shopify自带功能与需要插件的部分

Shopify自带功能负责“添加和发布语言”以及“翻译固定文字”。根据Shopify帮助中心的说明，添加语言后，只有受支持的主题和结账页面会加入翻译，其他内容需要导入翻译或使用应用。

| 项目 | 自带功能 | 需要翻译插件 |
|---|---|---|
| 添加和发布语言 | 支持 | – |
| 主题中的固定文字（按钮等） | 支持（仅限兼容主题） | – |
| 结账页面 | 支持（提供49种语言的翻译） | 进一步自定义需第三方应用 |
| 商品、商品系列、博客、页面 | 不支持（可通过CSV导入） | 支持 |
| 各语言独立网址和hreflang | 支持（自动） | – |

### Shopify最多支持几种语言

Basic、Grow、Shopify、Advanced套餐最多可使用20种语言销售，Shopify Plus最多30种（以2026年11月Shopify帮助中心为准）。Shopify日本官网的价格页面也显示，Basic、Grow、Advanced、Plus所有套餐都包含店面翻译功能。

## Shopify多语言设置方法

在Shopify中设置多语言，分为以下4步。

1. **确认主题是否支持多语言**：Shopify的免费主题全部支持。第三方主题请向开发者确认
2. **开启语言切换器**：大多数主题自带语言选择器，可在主题设置中开启。没有的话可通过应用添加
3. **添加语言**：在Shopify后台进入“设置”>“语言”，点击“添加语言”，选择语言，并开启要使用该语言的域名
4. **翻译并发布**：用Translate & Adapt等应用添加翻译，然后在“设置”>“语言”中，通过该语言旁边的菜单发布

Shopify建议在添加语言前准备好翻译，或先安装翻译应用。如果在没有翻译的情况下发布语言，只有主题和结账页面的固定文字会被翻译。

### 设置前需要了解的3个注意事项

1. **更改默认语言**：切换后的目标语言原有的翻译会被删除，请先导出翻译
2. **取消发布语言**：翻译不会被删除，但该语言的链接会返回404错误，请提前设置重定向
3. **按市场设置语言**：如果想为不同市场设置不同语言，需要使用子目录等国际域名。否则，所有市场将共用同一套语言设置

## Translate & Adapt的用法与自动翻译上限

Translate & Adapt是Shopify提供的免费翻译应用。添加新语言时会自动安装，可翻译商品、商品系列、博客文章、政策和页面。

### 日本的店铺最多可自动翻译2种语言

位于日本的店铺，原则上除默认语言外最多可自动翻译2种语言。Shopify帮助中心列出的美国、加拿大、德国等14个国家的店铺，最多可自动翻译8种语言，并可使用每周自动更新翻译的Auto-sync功能。日本不在该列表中。

使用自动翻译时请注意以下几点：

- 某种语言一旦进行了自动翻译，该名额就不能换成其他语言；删除语言也不会恢复名额
- 手动添加或编辑过的翻译，不会被自动翻译覆盖
- 法律政策（如服务条款）无法自动翻译，需要手动翻译
- 第3种及以上的语言，需要手动翻译、通过CSV导入，或使用第三方插件

### 手动翻译与按市场调整

Translate & Adapt提供对照编辑器，可以把原文和译文并排显示进行编辑。即使是同一种语言，也能按市场调整拼写、措辞、图片和标志。例如，同样是英语，可以为美国和英国分别使用不同的表达。

## Shopify翻译插件怎么选（价格对比）

选择翻译插件，主要看“想自动翻译几种语言”以及“想节省多少翻译工作量”。只需2种语言或愿意手动翻译的话，用Translate & Adapt就够了；想一次性自动翻译3种以上语言，可以考虑付费插件。

| 插件 | 免费方案 | 付费方案示例 | 特点 |
|---|---|---|---|
| Translate & Adapt（Shopify） | 免费 | 无 | 日本的店铺可自动翻译2种语言；手动翻译可按需添加语言 |
| Weglot | 1种语言、2,000词 | Business：约5,056日元/月（3种语言、50,000词） | 采用DeepL、Google、Microsoft的AI翻译；支持hreflang等SEO设置 |
| Langify | 最多5种语言（手动翻译） | Basic：约2,765日元/月（最多20种语言、含10,000词AI翻译） | 可精细管理手动翻译；支持翻译第三方应用内容 |
| Transcy | 1种语言、1种货币 | Continental：约10,902日元/月（15种语言、15种货币） | 自带语言和货币切换器 |

※以2026年11月Shopify App Store（日语页面）的显示为准。日元金额为按汇率换算的参考值，实际按店铺的结算货币收费。

### 费用估算示例：按月付费运营3种语言的店铺

Shopify Basic套餐（日本按月付费4,850日元）加上Weglot Business（约5,056日元/月），每月固定费用约为9,906日元，另外还有随销售额产生的支付手续费。如果用Translate & Adapt自动翻译2种语言、第3种语言手动翻译，就不需要插件费用。说到底，是在翻译工作量和插件费用之间做取舍。

## Shopify无法翻译的内容与多语言SEO注意事项

即使安装了翻译插件，也有一些内容无法翻译。Shopify帮助中心和Translate & Adapt的要求页面列出了以下内容：

- 商品、博客文章等的标签
- 保持默认设置的商品元标题和元描述（自定义后可以翻译）
- 网址中的“products”部分
- 商品图片、商品系列筛选器、用Shopify Forms创建的表单、手动付款方式说明
- 未采用Shopify翻译机制支持格式的第三方应用内容

遇到“翻译不生效”的情况时，先确认是否属于上述内容。图片中的文字需要为每种语言重新制作图片。

### Shopify会自动添加hreflang标签

Shopify会根据市场和语言设置，自动生成hreflang标签（告诉搜索引擎页面有哪些语言版本和地区版本的标签），并同步到站点地图中。自动重定向不适用于搜索引擎爬虫，因此各语言版本都能被收录。

网址形式可以选择子目录（例如 yourstore.com/fr/）、子域名或国家域名。Shopify帮助中心推荐大多数店铺使用子目录，因为设置简单，并能共享主域名的权重。帮助中心还指出，搜索引擎更青睐独特的本地化内容。

## 翻译与本地化的区别

翻译是把文字转换成另一种语言；本地化则是根据目标国家的文化、习惯和购物行为，重新打造表达方式和呈现形式。Shopify的多语言功能主要是翻译机制。Translate & Adapt虽然可以按市场调整内容，但改什么、怎么改，需要店主自己思考并手动修改。

本地化时通常需要检查以下内容：

- 单位和尺码（厘米／英寸、日本尺码／国际尺码）
- 商品卖点的表达方式（有的国家看重功能参数，有的国家看重品牌故事）
- 图片中的文字，以及照片中的模特和使用场景

### 借助AI完成本地化

使用连获客都能交给AI的跨境电商工具Leap，只需选择语言和目标国家，AI就会提出本地化建议，并可直接修改。

| 项目 | Shopify（自带功能＋Translate & Adapt） | Leap |
|---|---|---|
| 月费 | Basic：4,850日元起（按月付费） | 0日元起（付费方案9,800日元起，不含税） |
| 手续费 | Shopify Payments在线信用卡费率（Basic）：国内3.55%、海外3.9%；使用第三方支付时另收交易手续费（Basic为2%） | 销售额的6%（含信用卡手续费） |
| 多语言 | 最多20种（Plus为30种）；日本的店铺可自动翻译2种 | 依方案1～10种，或无限制 |
| 多币种与支付 | 以当地货币显示价格（需使用Shopify Payments） | 美元、欧元、日元；信用卡支付 |
| 本地化 | 店主按市场手动调整 | AI提出建议并修改 |
| 获客功能 | 创建邮件营销活动（所有套餐） | 邮件营销、CRM、AI撰写博客 |
| B2B | Shopify B2B（Basic～Advanced最多3个目录，Plus无限制） | B2B专用购物车 |
| 定制性 | 可通过主题和应用大幅扩展 | 不如Shopify灵活 |

※截至2026年11月，信息来自各公司的价格页面和帮助文档。

如果想通过应用精细打造设计和功能，Shopify更合适；如果不止翻译，还想把面向目标国家的本地化和海外获客都交给AI，Leap更合适。

## 常见问题（FAQ）

**Q. Shopify最多支持几种语言？**

A. Basic、Grow、Shopify、Advanced套餐最多支持20种语言，Shopify Plus最多支持30种。不过，位于日本的店铺使用Translate & Adapt，除默认语言外只能自动翻译2种语言。

**Q. 有免费的Shopify翻译插件吗？**

A. 有。Shopify官方的Translate & Adapt是免费的，可自动翻译2种语言，手动翻译则可按需添加语言。Weglot、Langify、Transcy也提供功能有限的免费方案。

**Q. 为什么在Shopify添加了语言，内容却没有被翻译？**

A. 因为仅添加语言时，只有主题和结账页面的固定文字会被翻译。商品描述等内容需要用翻译插件翻译。另外，标签、商品图片、部分第三方应用的内容等，在机制上无法翻译。

**Q. 只靠自动翻译做Shopify海外销售可以吗？**

A. 只用自动翻译也能销售，但商品名称、专业术语和品牌表达，建议由人工检查。手动修改过的翻译不会被自动翻译覆盖，因此从访问量高的商品页面开始逐一检查，效率最高。

## 总结与思考

在Shopify上，“添加语言”是自带功能，“翻译内容”则交给应用，两者分工明确。位于日本的店铺，用免费的Translate & Adapt只能自动翻译2种语言，超过这个数量就需要支付插件费用或投入手动翻译的工作量。

容易被忽视的是：翻译好了，不一定就能卖得好。把单位、表达甚至图片中的文字都调整为适合目标国家的本地化，并不是一个开关设置，而是决定“改什么、怎么改”的工作。与其先纠结要加几种语言，不如先想清楚面向哪个国家的顾客、要传达什么，这样选插件时也就不会犹豫了。

Leap是一款连获客都能交给AI的跨境电商工具。只需通过对话，即可完成多语言、多币种跨境电商网站的搭建，以及SEO、邮件营销等海外获客工作。

## 参考资料

- [Selling in multiple languages - Shopify Help Center](https://help.shopify.com/zh-CN/manual/international/languages)
- [Requirements and considerations for selling in multiple languages - Shopify Help Center](https://help.shopify.com/zh-CN/manual/international/languages/requirements)
- [Managing your store's languages - Shopify Help Center](https://help.shopify.com/zh-CN/manual/international/languages/manage-languages)
- [Add language translations using the Translate & Adapt app - Shopify Help Center](https://help.shopify.com/zh-CN/manual/international/languages/translate-adapt-app)
- [Translating content automatically using the Translate & Adapt app - Shopify Help Center](https://help.shopify.com/zh-CN/manual/international/languages/translate-adapt-app/automatic-translation)
- [Requirements and considerations for using the Translate & Adapt app - Shopify Help Center](https://help.shopify.com/zh-CN/manual/international/languages/translate-adapt-app/requirements)
- [International SEO for markets - Shopify Help Center](https://help.shopify.com/zh-CN/manual/markets/seo)
- [价格 - Shopify 日本](https://www.shopify.com/jp/pricing)
- [Shopify Translate & Adapt - Shopify App Store](https://apps.shopify.com/translate-and-adapt?locale=zh-CN)
- [Weglot ‑ Translate Your Store - Shopify App Store](https://apps.shopify.com/weglot?locale=zh-CN)
- [langify ‑ translate your store - Shopify App Store](https://apps.shopify.com/langify?locale=zh-CN)
- [Transcy - Shopify App Store](https://apps.shopify.com/transcy-multiple-languages?locale=zh-CN)
- [价格 - Leap](https://www.leap.site/zh-hans/pricing/)
