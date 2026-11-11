---
layout: ec-guide-post.njk
title: Shopify国际运费设置教程｜配送区域、运费计算方法与注意事项
description: 依据Shopify官方帮助中心，分步骤讲解Shopify国际物流的配送区域与运费设置方法。以日本邮政EMS价目表为例，演示如何搭建按重量计费的运费，并整理关税、禁寄物品、测试下单等国际配送中需要注意的要点。
thumbnail: https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-11-11
topic: cross-border
locale: zh-hans
tags:
  - ec-guide
  - Shopify
  - 国际物流
  - 运费设置
  - 跨境电商
author: Leap编辑部
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: 电商业务专家团队
---

## 【一分钟速览】Shopify国际发货，关键在于配送区域和运费

在Shopify上开始国际发货，需要先把目标国家加入市场（Markets），再把这些国家加入配送区域，并为该区域设置运费。所有设置都在后台的 **Settings（设置）> Shipping and delivery（发货与配送）** 中完成，运费可以选择固定运费、按订单金额计费、按重量计费等方式。

运费定多少，基本做法是根据所用物流服务的价目表倒推。本文以从日本发货的商家为例，演示如何根据日本邮政EMS的价目表搭建Shopify按重量计费的运费。同时整理国际配送中需要注意的几点：关税由谁承担、国际邮件不能寄送的物品，以及如何通过测试下单确认运费显示。

如果还在挑选物流商，可以参考[跨境电商海外物流商比较指南](https://www.leap.site/zh-hans/ec-guide/cross-border/overseas-carrier-comparison-dhl-fedex-ems/)。本文只聚焦Shopify内部的设置和运费定价方法。

※本文中的后台菜单名称以Shopify英文后台为准，括号内为中文说明。

## Shopify国际发货需要完成哪些设置

在Shopify上做国际发货，需要处理三件事：把国家加入市场、设置配送区域和运费、填写商品重量。前两项缺少任何一项，海外顾客在结账时都无法选择运费，也就无法下单。

1. **把国家加入市场**：根据Shopify帮助中心的说明，要向某个国家销售，必须把该国家加入一个已启用的市场（即你销售的国家或地区的分组）
2. **设置配送区域和运费**：配送区域是指适用同一套运费的国家或地区分组，运费按区域分别设置
3. **填写商品重量**：使用按重量计费时，未填写重量的商品会被当作零重量处理，顾客支付的运费可能低于预期

### Shopify目前有两种配送设置方式（截至2026年11月）

Shopify正在将配送设置从"发货配置文件（Shipping profiles）"逐步迁移到"按市场设置的配送选项（Shipping options by market）"。根据帮助中心的说明，大多数店铺目前仍在使用发货配置文件，升级时现有运费会自动迁移。

要确认自己的店铺使用哪种方式，打开 **Settings > Shipping and delivery** 即可。如果看到发货配置文件，说明仍是原有方式；如果看到 **Shipping options** 栏目，说明店铺已经升级。本文的操作步骤以大多数店铺使用的发货配置文件为准。

## 如何在Shopify设置国际配送区域和运费

在Shopify创建国际配送区域，需要在发货配置文件中添加区域、选择国家，然后添加带运费的配送选项。如果所有商品都用同一套运费，直接使用系统默认的 **General profile（通用配置文件）** 就够了。

1. 在Shopify后台进入 **Settings > Shipping and delivery**
2. 在 **Shipping profiles** 栏目中点击 **General profile**
3. 在 **Shipping zones（配送区域）** 栏目中点击 **Add zone（添加区域）**，输入区域名称（例如：亚洲、北美）
4. 选择国家和地区，点击 **Done（完成）**
5. 点击 **Add shipping option（添加配送选项）**，填写名称、运费类型和价格，点击 **Done**
6. 最后点击 **Save（保存）**

原则上，把运费相同的国家归为一个区域。如果使用EMS，按照日本邮政的资费分区（第1至第5区）来划分配送区域，就能直接套用价目表。

### 部分商品运费不同时，使用自定义配置文件

如果易碎品、大件商品等部分商品需要单独的运费，可以为它们创建自定义发货配置文件。根据帮助中心的说明，自定义配置文件最多可创建99个，每个商品或款式（变体）只能属于一个配置文件。

需要注意的是，当同一订单中包含不同配置文件的商品时，各自的运费会合并为一笔运费。配置文件建得太多，顾客一次购买多件商品时运费就容易偏高。

## Shopify运费类型及适用场景

Shopify可以手动设置的运费类型有三种：固定运费、按订单金额、按重量。此外还有承运商计算运费，可以在结账时实时显示物流商的运费。

| 运费类型 | 计费方式 | 适用场景 |
|---|---|---|
| 固定运费（Flat） | 每笔订单收取固定运费 | 商品尺寸和重量差别不大 |
| 按订单金额（Order amount） | 按订单金额区间设置不同运费 | 想设置包邮门槛 |
| 按重量（Weight） | 按购物车商品总重量区间设置不同运费 | 使用运费随重量变化明显的国际邮件 |
| 承运商计算运费 | 结账时显示UPS、FedEx等物流商的运费 | 希望运费贴近物流商实际收费 |

根据帮助中心的说明，第三方承运商计算运费适用于Advanced和Plus套餐；Grow套餐的店铺可以通过支付额外月费或改为按年付费来使用（截至2026年11月）。

### 如何设置包邮

要让一定金额以上的订单包邮，可以编辑配送选项，勾选 **Offer free shipping（提供免费配送）**，并填写最低订单金额。国际运费远高于国内运费，如果直接沿用国内的包邮门槛，很容易出现亏损。

## 国际运费怎么定｜以EMS价目表搭建按重量计费的运费

基本做法是根据物流商的价目表倒推，为每个重量区间设置不低于实际成本的运费。下面以日本邮政EMS（国际特快专递）的价目表为例，演示如何搭建Shopify按重量计费的运费。

### EMS各分区资费（截至2026年11月）

EMS的资费由寄达分区和包裹重量决定。常见重量的资费如下（单位：日元）。

| 重量 | 第1区（中国、韩国、台湾地区） | 第2区（亚洲其他地区） | 第3区（大洋洲、加拿大、墨西哥、中东、欧洲） | 第4区（美国） |
|---|---|---|---|---|
| 500克以内 | 1,450 | 1,900 | 3,150 | 3,900 |
| 1公斤以内 | 2,200 | 3,150 | 4,400 | 5,300 |
| 2公斤以内 | 3,400 | 4,550 | 6,700 | 7,900 |
| 5公斤以内 | 6,400 | 8,150 | 13,000 | 15,100 |

日本邮政的价目表中，第3区和第4区的资费已包含特别附加费。同样是1公斤的包裹，寄往台湾地区为2,200日元，寄往美国则为5,300日元，相差两倍以上。

### 示例：为美国设置按重量计费的运费

把EMS资费直接套用到美国配送区域，结果如下。

| Shopify中的重量区间 | 运费 |
|---|---|
| 0–0.5公斤 | 3,900日元 |
| 0.5–1公斤 | 5,300日元 |
| 1–2公斤 | 7,900日元 |
| 2公斤以上（不设上限） | 15,100日元 |

设置时需要注意三点。

1. **把包装重量算进去**：根据帮助中心的说明，按重量计费时会加上店铺设置的默认包裹重量。把纸箱和缓冲材料的重量设为默认包裹重量，计算结果就更接近实际发货重量
2. **最高区间不要填写上限**：如果填写了上限，超过该重量的订单在结账时会报错。上例中2公斤以上统一按5公斤的资费收取，经常有超过5公斤订单的店铺需要继续增加区间（EMS最重可寄30公斤）
3. **区间之间不要留空档**：根据帮助中心的说明，如果购物车重量落在空档中，结账时会使用下一个更高区间的运费，可能显示出意料之外的高运费

### 运费由谁承担：三种定价思路

假设向美国寄送1件重1公斤、售价6,000日元的商品，EMS运费5,300日元约占商品价格的88%。常见的定价思路有以下三种。

| 定价思路 | 顾客支付的运费 | 店铺承担的部分 | 适合的店铺 |
|---|---|---|---|
| 按实际成本收取（按重量计费） | 5,300日元 | 几乎为零 | 商品重量差异大的店铺 |
| 部分计入商品价格（例：统一收取2,500日元） | 2,500日元 | 每件2,800日元 | 不想因为运费太高而流失订单的店铺 |
| 满额包邮（例：满30,000日元） | 满30,000日元时为0日元 | 2公斤的订单需承担7,900日元（约占订单金额的26%） | 多件购买多、毛利空间充足的店铺 |

如果把部分运费计入商品价格，需要结合毛利，决定是否把店铺承担的部分（上例中为2,800日元）加到面向海外的商品售价上。包邮门槛则应设在这样一个水平：即使订单金额刚好达到门槛，运费也不会超过毛利。

## Shopify国际配送的注意事项

除了运费，还需要提前确定关税由谁承担、哪些物品不能寄、如何制作运单，以及如何向顾客说明配送条件。

### 关税和进口税由谁承担（DDP与DAP）

进口费用的承担方式主要有两种：由卖家承担的DDP（完税后交货），以及由顾客在收货时支付的DAP（目的地交货）。根据Shopify帮助中心的说明，在DAP条件下，顾客需向物流商支付进口费用；如果事先没有支付，物流商可能会额外收取代收关税的手续费。

Shopify还可以在结账时预收关税和进口税的预估金额。帮助中心列出的使用条件包括：商品已设置HS编码（海关用于商品归类的国际编码），以及购买运单时须使用支持DDP运单的物流商等。条件和支持的国家可能会变化，启用前请先在帮助中心确认。

### 确认国际邮件不能寄送的物品

根据日本邮政的说明，喷雾罐、香水、指甲油、充电宝、电子烟等航空危险品不能通过国际邮件寄送，即使走海运也不予受理。此外，部分寄达国禁止进口特定物品，食品和酒类尤其需要注意。

### 使用日本邮政"国际邮件My Page服务"制作运单

日本邮政规定，国际邮件的运单须通过"国际邮件My Page服务"制作，不接受手写运单。寄往欧盟成员国等地区的邮件，建议填写内件的HS编码。

### 制作配送说明页面

把运费一览、预计送达时间以及关税由谁承担整理在一个页面上，海外顾客在下单前就能了解配送条件。Shopify官方博客也建议，支持海外发货的店铺应在运费说明页面中列出国际包裹的运费。

### 通过测试下单确认运费显示

设置完成后，用海外地址走一遍结账流程，确认运费显示正确。根据帮助中心的说明，中途放弃的结账会保留创建时的运费，因此测试时要使用新的结账。如果出现"Your order cannot be shipped to the selected address."之类的错误，请检查该国家是否已加入市场和配送区域，以及重量区间是否存在空档。

## Shopify与跨境电商工具对比｜海外销售功能与费用

Shopify的优势在于，可以在一个店铺里精细地设置配送、多语言、多币种和B2B功能。如果希望用更少的人力推进海外获客，也有其他选择。主要项目对比如下（截至2026年11月，依据各公司官网的标注）。

| 项目 | Shopify | Leap |
|---|---|---|
| 月费 | Basic套餐4,850日元起（按月付费），按年付费为3,650日元 | 免费版0日元，入门版9,800日元起（不含税） |
| 手续费 | Shopify Payments在线信用卡费率：Basic套餐3.55%（海外卡3.9%），套餐越高费率越低。使用第三方支付时，Basic套餐收取2%交易手续费 | 销售额的6%（含信用卡支付手续费） |
| 跨境支持（多语言、多币种、支付） | 所有套餐均可使用店面翻译、本地货币定价和Shopify Markets | 主要22个国家和地区；美元、欧元、日元。支付方式为Visa、Mastercard（B2B支持银行转账、账单支付） |
| 获客功能 | 邮件营销活动、客户细分、营销自动化 | 本地化建议、多语言博客自动生成（Leap基础版及以上）、CRM、多语言邮件营销 |
| B2B支持 | Shopify B2B（Basic至Advanced最多3个目录，Plus不限） | B2B专用购物车（按企业设置价格、询价、账单支付） |
| 定制性 | 可通过应用和主题大幅扩展 | 以模板和AI对话编辑为主，深度定制更适合Shopify |

如果想自己精细调整配送设置，或通过应用扩展店铺功能，Shopify更合适。如果希望把多语言建站到海外获客都交给AI，连获客都能交给AI的跨境电商工具Leap是一个值得考虑的选择。

## 常见问题（FAQ）

**Q. 在Shopify哪里设置国际运费？**

A. 在后台的 **Settings > Shipping and delivery** 中设置。在发货配置文件中添加包含海外国家的配送区域，再为该区域添加配送选项（运费）。同时，该国家需要已加入市场。

**Q. 如何在Shopify停止国际发货，只做国内销售？**

A. 删除面向海外的配送区域和运费即可。Shopify官方博客建议，不做海外发货的店铺应确认没有设置海外配送区域或运费，如有，可通过配送区域的"…"菜单删除。

**Q. 运费不同的商品放进同一个购物车，运费怎么算？**

A. 在发货配置文件方式下，各配置文件的运费会合并为一笔运费。在按市场设置的配送选项方式下，同一配送选项中只收取匹配运费里最高的一项。

**Q. Shopify能根据物流商的运费自动计算吗？**

A. 可以。使用承运商计算运费，就能在结账时显示UPS、FedEx等物流商的运费。根据帮助中心的说明，该功能适用于Advanced和Plus套餐，Grow套餐可通过支付额外月费或改为按年付费来使用（截至2026年11月）。

## 总结与思考

Shopify国际发货的关键在于三件事：市场、配送区域和运费。设置本身并不难，难的是运费定多少。按EMS资费来看，寄往美国的运费是寄往台湾地区的两倍以上，照搬国内的包邮门槛，海外订单很可能亏本。

从本文的试算可以看出，国际运费不只是"设置操作"，更是"价格设计"。先想清楚把哪些商品卖到哪些国家，配送区域和重量区间都会变得简单，也更容易避免因运费而亏损的订单。

Leap是一款连获客都能交给AI的跨境电商工具。只需通过对话，即可完成多语言、多币种跨境电商网站的搭建，以及SEO、邮件营销等海外获客工作。

## 参考资料

- [Shipping profiles - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-profiles)
- [Setting up and managing your shipping profiles - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-profiles/setting-up-shipping-profiles)
- [Shipping rates - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates)
- [Setting up shipping zones and rates - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates)
- [Third-party carrier-calculated shipping - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/third-party-carrier-calculated-shipping)
- [Troubleshooting and testing shipping rates - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/troubleshooting)
- [Upgrading to shipping options by market - Shopify Help Center](https://help.shopify.com/en/manual/fulfillment/setup/shipping-options/whats-changing-with-shipping)
- [Carriers and shipping terms for international orders - Shopify Help Center](https://help.shopify.com/en/manual/international/duties-and-import-taxes/carriers-and-shipping-terms)
- [Collecting international duties and import taxes at checkout - Shopify Help Center](https://help.shopify.com/en/manual/international/duties-and-import-taxes/charging-duties)
- [Shopify运费设置指南（日语） - Shopify Japan](https://www.shopify.com/jp/blog/setup-shipping-rates)
- [价格方案（日本） - Shopify](https://www.shopify.com/jp/pricing)
- [价格方案 - Leap](https://www.leap.site/zh-hans/pricing/)
- [EMS价目表（全部寄达国家和地区，日语） - 日本邮政](https://www.post.japanpost.jp/send/oversea/charge/list-ems/all.html)
- [国际邮件禁寄物品（日语） - 日本邮政](https://www.post.japanpost.jp/service/send/oversea/attention/restriction/)
