import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

/**
 * 🌵 站点基础配置
 */
export const siteConfig: SiteConfig = {
	// 作者信息，用于 meta 和 OG 图片生成
	author: "Forest 李",
	// 日期格式（用于文章发布日期）
	date: {
		locale: "zh-CN",
		options: {
			year: "numeric",
			month: "long",
			day: "numeric",
			weekday: "short", // 增加星期显示
		},
	},
	// 网站描述（SEO + Manifest）
	description: "一个专注于分享与记录生活的 Forest 李 主题 —— 分享，记录。",
	// HTML 语言属性
	lang: "zh-CN",
	// Open Graph 语言标识
	ogLocale: "zh_CN",
	// 网站标题（meta + manifest）
	title: "仙人掌主题 | Cactus Theme",
	// 网站关键词（用于 SEO）
	keywords: ["Astro 博客", "Forest 李主题", "技术分享", "美图秀秀", "记录生活"],
	// 网站基础 URL（用于生成绝对路径）
	siteUrl: "https://cactus-theme.example.com",
	// 网站 favicon / 图标路径（用于 BaseHead）
	favicon: "/favicon.svg",
	// 页脚版权信息
	footer: {
		since: 2024,
		copyright: "Forest李主题 · 版权所有",
		poweredBy: "Astro + Expressive Code",
	},
};

/**
 * 🧭 导航菜单
 */
export const menuLinks: { path: string; title: string }[] = [
	{ path: "/", title: "主页" },
	{ path: "/about/", title: "关于我" },
	{ path: "/posts/", title: "博客文章" },
	{ path: "/notes/", title: "学习笔记" },
	{ path: "/projects/", title: "项目集" },
	{ path: "/contact/", title: "联系" },
];

/**
 * 💻 Expressive Code 代码高亮配置
 * https://expressive-code.com/reference/configuration/
 */
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "8px",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.9rem",
		codeLineHeight: "1.8rem",
		codePaddingInline: "1.25rem",
		frames: {
			frameBoxShadowCssValue: "0 2px 8px rgba(0,0,0,0.1)",
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme)
				return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["dracula", "github-light"], // 暗色 + 亮色
	useThemedScrollbars: true, // 个性化滚动条
	showCopyButton: true, // 在代码块右上角显示复制按钮
	rendering: {
		lineNumbers: true, // 显示行号
		highlightedLineBackground: "rgba(56, 189, 248, 0.15)", // 高亮行背景色（浅蓝）
	},
};
