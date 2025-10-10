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


// Used to generate links in both the Header & Footer.
export const menuLinks: { path: string; title: string }[] = [
  // 修改：改为中文
	{
		path: "/",
		title: "主页",
	},
	{
		path: "/about/",
		title: "关于",
	},
	{
		path: "/posts/",
		title: "博客",
	},
	{
		path: "/notes/",
		title: "笔记",
	},
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	useThemedScrollbars: false,
};
