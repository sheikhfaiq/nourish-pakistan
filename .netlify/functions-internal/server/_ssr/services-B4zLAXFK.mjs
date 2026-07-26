import { g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal } from "./Reveal-CLB-s_EP.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { N as Clock, P as CircleCheck, U as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as SERVICES, i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-bGyU_r4k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B4zLAXFK.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-hero-gradient",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-wider text-primary",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl font-bold text-balance sm:text-5xl",
						children: "Care built for you & your goals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
						children: "Every consultation is personalised. Tap any service to see benefits, expected outcomes and duration."
					})
				] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 6 * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
							type: "single",
							collapsible: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
								value: s.slug,
								className: "border-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 sm:p-6 flex flex-col items-center text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-12 w-12 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft transition group-hover:scale-110",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-3 inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-primary",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
													" ",
													s.duration
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 sm:mt-5 font-display text-sm sm:text-lg font-semibold",
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-normal",
												children: s.short
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
										className: "border-t border-border bg-muted/40 px-4 py-3 text-xs sm:text-sm font-medium text-primary hover:no-underline justify-center gap-1",
										children: "See details"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
										className: "px-4 pb-6 pt-4 text-left border-t border-border/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
												children: "What's included"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1.5 text-xs",
												children: s.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }),
														" ",
														b
													]
												}, b))
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
												children: "Expected outcomes"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-2 space-y-1.5 text-xs",
												children: s.outcomes.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-start gap-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" }),
														" ",
														b
													]
												}, b))
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 flex justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/book",
												className: "inline-flex items-center gap-1.5 rounded-full bg-leaf-gradient px-4 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5",
												children: ["Book Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
											})
										})]
									})
								]
							})
						})
					})
				}, s.slug))
			})
		})]
	});
}
//#endregion
export { ServicesPage as component };
