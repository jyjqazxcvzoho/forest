import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// 作者名称（用于元数据、OG图片等）
	author: "Forest 李",

	// 网站标题（用于 <title> 和 manifest）
	title: "Forest 李主题",

	// 网站简短标语，用于 meta description 或首页展示
	tagline: "以科技之光，点亮分享与生活的灵感",

	// 网站描述（SEO / manifest）
	description:
		"Forest 李主题 —— 简洁优雅的博客主题，分享，交流与记录生活。",

	// 网站基础语言与区域设置
	lang: "zh-CN",
	ogLocale: "zh-CN",

	// 日期格式设置（在文章页或列表中统一调用）
	date: {
		locale: "zh-CN",
		options: {
			day: "numeric",
			month: "narrow",
			year: "numeric",
		},
	},

	// 网站主题色（浏览器地址栏/Manifest）
	themeColor: "#4da6ff",

	// 社交账号链接（用于页脚或作者信息）
	social: {
	   email: "lee@example.com", // 联系邮箱
	},

	// 网站 favicon 与分享用图片（相对路径）
	images: {
		favicon: "/favicon.svg",
		ogImage: "/images/og-default.png",
	},

	// 网站版权与备案信息
	footer: {
		copyright: "© 2025 Forest 李. 保留所有权利。",
	// RSS / Sitemap / SEO 配置
	seo: {
		keywords: ["Forest 李", "主题", "个人博客", "分享", "记录生活"],
		baseUrl: "https://blog.778112..com", // 你的网站域名
	},

	// 代码高亮主题配置（Astro Expressive Code）
	code: {
		theme: "github-dark",
		lineNumbers: true,
	} satisfies AstroExpressiveCodeOptions,
};
