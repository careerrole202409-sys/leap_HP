---
layout: ec-guide-post.njk
title: ChatGPT Business Hub是什么？海外跨境电商卖家能入驻吗？商品Feed与注意事项（2026年11月）
description: OpenAI于2026年11月10日推出“Businesses in ChatGPT”。本文根据OpenAI官方公告、帮助中心和Feed规范，梳理Business Hub能做什么、不能做什么，美国以外商家的适用范围、注册步骤、商品Feed必填字段以及同周发布的ChatGPT Wallet。
thumbnail: https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80
date: 2026-11-27
topic: ec-marketing
locale: zh-hans
tags:
  - ec-guide
  - ChatGPT
  - Business Hub
  - AI搜索
  - AI智能体
  - 跨境电商
author: Leap编辑部
author_image: https://placehold.co/100x100/e2e8f0/94a3b8?text=Leap
author_bio: 电商业务专家团队
---

## 【一分钟速览】ChatGPT Business Hub是什么

ChatGPT Business Hub是商家在ChatGPT上认领、管理自家商家资料，并查看ChatGPT回答中提及自己频率的管理后台。OpenAI于2026年11月10日以测试版形式发布“Businesses in ChatGPT”，并在11月19日的更新中说明：总部位于美国以外的电商和在线服务商家，现在也可以认领商家资料并发布“Business Agent（商家专属AI智能体）”。

对跨境电商卖家来说，重点有三条：

1. **能做什么**：认领并认证商家资料，更新配送政策、退货政策等信息，添加包含价格和库存的商品Feed，查看最近28天的提及次数和网站点击次数
2. **不能做什么**：认领资料并不保证在ChatGPT的推荐中排名更靠前。Business Agent无法完成购买、预约或查询订单，只负责介绍商品和政策，并引导顾客前往商家网站
3. **注意事项**：根据2026年11月时的商品Feed规范，目标国家的通用格式目前代表美国、加拿大和墨西哥，标准上传一律按“US”处理

本文依据OpenAI官方公告、帮助中心和技术规范，梳理面向海外销售的卖家现在可以做的准备。

## ChatGPT Business Hub是什么

Business Hub是OpenAI“Businesses in ChatGPT”的核心，是面向商家的管理后台。当ChatGPT在回答中提到某个商家时会显示其资料页，商家可以通过Business Hub认领、认证这份资料并保持信息准确。

借助Business Hub，商家可以通过OpenAI统计的数据，了解自己在AI搜索（被AI回答引用，也称AIO）中被ChatGPT引用的情况。

### 发布时间与内容

OpenAI公告及相关页面的时间线如下（截至2026年11月）。

| 日期 | 内容 |
|---|---|
| 2026年11月10日 | 发布“Introducing Businesses in ChatGPT”，以测试版推出Business Hub和Business Agent |
| 2026年11月13日 | 发布可让智能体代替用户付款的“ChatGPT Wallet” |
| 2026年11月18日 | 更新“Businesses in ChatGPT Terms（使用条款）” |
| 2026年11月19日 | 更新公告页面，补充说明总部位于美国以外的电商和在线服务商家也可以认领商家资料并发布智能体 |

### Business Hub的主要功能

官方公告和帮助中心介绍的主要功能有以下四项。

| 功能 | 内容 |
|---|---|
| 认领与认证 | 认领ChatGPT上的商家条目，并通过商家电话、商家邮箱、网站域名或Shopify店铺中的任一方式完成认证。认证后资料页会显示蓝色认证标记 |
| 更新信息 | 更新网站、简介、商品或服务类别、Logo、配送政策、退货政策等 |
| 商品Feed | 通过上传CSV或填写Feed文件URL，添加包含价格和库存的商品数据 |
| 洞察数据 | 查看最近28天的“提及次数”“网站点击次数”“发现主题（提及该商家的回答中的共同主题）” |

对于线上商家，只有当ChatGPT引用了商家的网站时才计为一次“提及”，仅出现品牌名称不计入。用户的具体提问和对话内容不会提供给商家。数据只有在达到一定门槛时才会显示，因此帮助中心说明，数值为空并不一定代表没有任何互动。

## 美国以外的商家能使用ChatGPT Business Hub吗

可以，包括日本在内的美国以外的跨境电商卖家都在可认领的范围内。OpenAI表示，位于ChatGPT可用地区的合格商家都可以通过Business Hub进行认领。不过，是否符合条件取决于行业、所在地和认证结果，并非所有商家都能使用。

### 美国以外商家与Business Agent的适用情况

Business Agent最初只面向美国的合格电商和在线服务商家。2026年11月19日公告页面的更新中补充说明，总部位于美国以外的此类商家现在也可以认领资料并发布智能体。

但截至2026年11月，“Businesses in ChatGPT”介绍页面的FAQ中，仍保留着Business Agent“在美国提供，并将逐步扩大适用范围”的表述。要确认能否使用，最可靠的方法是在Business Hub中实际发起认领，查看系统显示的结果。另外，帮助中心指出，实体店和餐厅目前只能认领美国现有的商家条目。

### 跨境电商需要注意的三项限制

1. **商品Feed的目标国家有限**：根据商品Feed规范（截至2026年11月），`target_countries`（目标国家）的通用格式目前代表美国、加拿大和墨西哥，标准上传时无论该列填写什么，`target_countries`和`store_country`（店铺所在国家）都按“US”处理。因此应当默认，目前还无法用它面向其他市场的消费者展示商品
2. **Business Agent不能直接销售**：帮助中心明确说明，智能体无法完成购买、预约或查询订单，只负责介绍商品和政策并链接到商家网站，购买在商家自己的网站上完成
3. **认领不保证曝光**：官方FAQ表示，认领资料不保证更高的排名或销量，ChatGPT会继续独立进行推荐和比较。使用条款还规定，即使商家不认领，相关条目也可能被展示，OpenAI也可以依据其他信息来源补充或修改信息

## ChatGPT Business Hub的注册步骤

帮助中心将注册流程分为以下五步（截至2026年11月），其中第4步和第5步为可选项。

1. **认领商家**：登录ChatGPT，从侧边栏打开“Business Hub”并搜索自己的商家。选择对应条目后，选择认证方式（商家电话、商家邮箱、在网站域名中添加TXT记录，或连接Shopify店铺）。审核结果会通过邮件通知
2. **完成Persona身份验证**：仅认领获批还不能发布信息变更、查看洞察数据、连接商品Feed或创建智能体。身份验证服务Persona可能会要求提供政府签发的身份证件、商业登记信息以及有权代表该商家的证明。“Legal business name（法定商家名称）”一栏请填写登记文件上的名称，商号另行填写
3. **更新商家信息**：填写网站、简介、类别、Logo、配送政策、退货政策等。变更需经OpenAI审核后才会生效
4. **连接商品Feed（可选）**：上传符合规范的CSV，或填写指向Feed文件的URL。通过Business Hub连接的Shopify店铺无需另行准备Feed
5. **设置并发布Business Agent（可选）**：检查智能体使用的商品信息和退货政策，编写指令，用常见的顾客问题进行测试后再发布

帮助中心还说明，上传成功只代表文件已被接收，并不代表商品已上线；连接Feed也不会自动发布智能体，更不保证获得推荐。

## 商品Feed的必填字段与卖家需要准备的内容

商品Feed规范（文件上传版）规定了9个基础必填字段和2个目标国家相关的必填字段。下表由本文整理，对应说明从海外向美国销售的卖家需要为每个字段准备什么。

| 必填字段 | 含义 | 需要准备的内容 |
|---|---|---|
| `item_id` | 每个商品或变体的ID | 自家网店的商品ID（不同颜色、尺码各占一行） |
| `title` | 商品名称 | 英文商品名称 |
| `description` | 商品描述 | 英文商品描述 |
| `url` | 商品页面URL | 英文商品页面的URL |
| `brand` | 品牌名称 | 品牌名称 |
| `seller_name` | 卖家名称 | 店铺名称或公司名称 |
| `image_url` | 商品图片URL | 商品图片URL |
| `availability` | 库存状态 | `in_stock`、`out_of_stock`、`pre_order`、`backorder`、`unknown` 之一 |
| `price` | 价格 | 以“金额＋半角空格＋货币代码”书写的美元价格，例如 `79.99 USD` |
| `target_countries` | 目标国家 | ISO国家代码（截至2026年11月，标准上传为“US”） |
| `store_country` | 店铺所在国家 | ISO国家代码（同上） |

规范要求价格使用小数点、不加千位分隔符；库存状态为空或无法识别的行会被拒绝。也就是说，前提是要有英文商品页面、美元价格和最新的库存信息。

## 同周发布的“ChatGPT Wallet”是什么

ChatGPT Wallet是一项让ChatGPT智能体代替用户在网站上付款的支付功能。OpenAI于2026年11月13日发布。

| 项目 | 内容（截至2026年11月） |
|---|---|
| 适用对象 | 居住在美国、年满18岁的ChatGPT Pro用户（使用符合条件的美国发行银行卡），首先通过智能体功能“dots”提供 |
| 机制 | 用户只需绑定一次银行卡，每次购买时通过面容识别或指纹等生物识别确认。商家和智能体收到的是卡组织签发的令牌，而非真实卡号 |
| 合作方 | American Express、Chase、Mastercard、Visa |
| 商家需做的准备 | 无需新的支付对接，令牌可用于现有结账流程。为避免购买被拦截，OpenAI建议认领商家并上传商品Feed，以及配置CDN或防火墙以识别签名请求（Web Bot Auth）等 |

公告表示，商家仍然自己掌握客户关系、定价、履约、退货和客户服务。虽然目前仅限美国用户使用，但已经面向美国销售的卖家，值得与Business Hub认领一并做好准备。

## 跨境电商卖家现在应该做什么

跨境电商卖家现在最该做的，是让ChatGPT能够准确引用自己的网站。Business Hub只在商家网站被引用时才计为提及，因此在自家网站上准备好AI能读懂的英文信息是起点。

1. **在Business Hub中认领商家并完成Persona身份验证**：这也能确认从自己所在的国家发起认领是否可行
2. **用英文完善配送政策和退货政策**：这些既是Business Hub资料页的项目，也是智能体参考的信息
3. **从面向美国的商品开始，准备英文商品页面和美元价格**：可直接满足商品Feed的必填字段
4. **每月查看一次洞察数据**：通过提及次数、点击次数和发现主题，了解自己在哪些话题中被引用

搭建自有网店时，也可以使用连获客都能交给AI的跨境电商工具Leap。在Leap中，为每个商品选择一种基准货币后，系统会按前一天的汇率每天自动以美元、欧元、日元显示价格；还可以为每个商品设置销售国家，基础版（Basic）及以上套餐可由AI撰写多语言博客，推进SEO和AIO（截至2026年11月）。

关于通过Shopify的AI渠道销售，请参阅“[Shopify Editions 2026秋季版新功能解读](/zh-hans/ec-guide/ec-marketing/shopify-editions-fall-2026-ai-agent/)”；关于Google的动向，请参阅“[Google Universal Cart与UCP最新进展](/zh-hans/ec-guide/cross-border/google-universal-cart-ucp-cross-border-status/)”。

## 常见问题（FAQ）

**Q. 美国以外的公司能入驻ChatGPT Business Hub吗？**

A. 可以，属于可认领的范围。OpenAI表示，位于ChatGPT可用地区的合格商家都可以认领，并在2026年11月19日的更新中补充说明，总部位于美国以外的电商和在线服务商家也可以认领资料并发布智能体。不过，根据行业、所在地和认证结果，部分商家可能无法使用。

**Q. 认领Business Hub后，ChatGPT会更多地推荐我的店铺吗？**

A. 没有这样的保证。官方FAQ表示，认领资料不保证更高的排名或销量，ChatGPT会继续独立进行推荐和比较。广告也不会影响ChatGPT的独立回答。

**Q. 使用ChatGPT Business Hub需要付费吗？**

A. 截至2026年11月，OpenAI的公告、帮助中心和使用条款中都没有提到认领或管理商家资料的费用。另外，将Business Agent设为广告落地页的“赞助”功能属于ChatGPT Ads（广告）体系。

**Q. Business Agent可以接单吗？**

A. 不可以。帮助中心说明，Business Agent无法完成购买、预约或查询订单，只负责介绍商品和政策，并链接到商家网站。

**Q. 洞察数据中的网站点击次数等于网站访问量吗？**

A. 不一定。“网站点击次数”是用户在ChatGPT中点击商家网站链接的次数，实际访问和购买情况需要通过自家的访问分析另行确认。

## 总结与思考

ChatGPT Business Hub让商家能够正式管理和查看自己在AI回答中的呈现方式。2026年11月19日的更新向美国以外的商家开放，但商品Feed的标准目标国家仍是美国，Business Agent也不直接销售。

由此可以看出，即便进入AI搜索时代，“最终成交的地方仍是自家网店”。提及只有在自家网站被引用时才会计数，Business Agent和ChatGPT Wallet也都是为了把顾客送到商家自己的结账页面而设计的。在自家网站上准备好AI能读懂的英文商品页面、准确的价格与库存，以及清晰的配送和退货政策，是用好ChatGPT这一新入口的最快途径。

Leap是一款连获客都能交给AI的跨境电商工具。只需通过对话，即可完成多语言、多币种跨境电商网站的搭建，以及SEO、邮件营销等海外获客工作。

## 参考资料

- [Introducing Businesses in ChatGPT - OpenAI](https://openai.com/index/introducing-businesses-chatgpt/)
- [Businesses in ChatGPT: Claim Your Business - OpenAI](https://openai.com/business/businesses-in-chatgpt/)
- [Setting up your business on ChatGPT - OpenAI Help Center](https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt)
- [Businesses in ChatGPT Terms - OpenAI](https://openai.com/policies/businesses-in-chatgpt-terms/)
- [Business Agents Policy - OpenAI](https://openai.com/policies/business-agents-policy/)
- [Product feed schema - OpenAI Developers](https://developers.openai.com/commerce/specs/file-upload/products)
- [Introducing ChatGPT Wallet - OpenAI](https://openai.com/index/introducing-chatgpt-wallet/)
- [价格方案 - Leap](https://www.leap.site/zh-hans/pricing/)
