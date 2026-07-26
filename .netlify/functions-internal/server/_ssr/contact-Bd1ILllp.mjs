import { r as __toESM } from "../_runtime.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Reveal } from "./Reveal-CLB-s_EP.mjs";
import { _ as Phone, b as MapPin, m as Send, v as MessageCircle, x as Mail } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bd1ILllp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name").max(80),
	email: stringType().trim().email("Please enter a valid email").max(160),
	phone: stringType().trim().min(7, "Please enter a valid phone").max(20),
	message: stringType().trim().min(10, "Please write a bit more").max(1e3)
});
function ContactPage() {
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			phone: fd.get("phone"),
			message: fd.get("message")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
			return;
		}
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			toast.success("Thank you! I'll get back to you within 24 hours.");
			e.target.reset();
		}, 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-hero-gradient",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-primary",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl font-bold text-balance sm:text-5xl",
							children: "Let's talk about your goals"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground",
							children: "Have a question before booking? Message me directly — I read every note personally."
						})
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-2xl border border-border bg-white p-5 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: "Full name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "name",
										required: true,
										maxLength: 80,
										className: "mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
										placeholder: "Sara Ahmed"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: "Phone / WhatsApp"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										name: "phone",
										required: true,
										maxLength: 20,
										className: "mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
										placeholder: "+92 300 1234567"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-4 block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "email",
									type: "email",
									required: true,
									maxLength: 160,
									className: "mt-1.5 w-full rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
									placeholder: "you@email.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-4 block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: "Your message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									maxLength: 1e3,
									rows: 5,
									className: "mt-1.5 w-full resize-none rounded-xl border border-input bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20",
									placeholder: "Tell me a bit about what you're looking for…"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: submitting,
								className: "mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-leaf-gradient px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }),
									" ",
									submitting ? "Sending…" : "Send message"
								]
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-1",
							children: [
								{
									icon: MessageCircle,
									title: "WhatsApp",
									body: "+92 300 1234567",
									href: "https://wa.me/923001234567",
									cta: "Chat now"
								},
								{
									icon: Phone,
									title: "Phone",
									body: "+92 300 1234567",
									href: "tel:+923001234567",
									cta: "Call"
								},
								{
									icon: Mail,
									title: "Email",
									body: "info@nourishpakistan.com",
									href: "mailto:info@nourishpakistan.com",
									cta: "Email me"
								},
								{
									icon: MapPin,
									title: "Clinic",
									body: "Move Better Clinic, East Canal Road, Faisalabad",
									href: "#map",
									cta: "See map"
								}
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: c.href,
								target: c.href.startsWith("http") ? "_blank" : void 0,
								rel: "noreferrer",
								className: "flex items-start sm:items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
											children: c.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-sm sm:text-base break-words whitespace-pre-line mt-0.5 leading-snug",
											children: c.body
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "hidden text-sm font-semibold text-primary sm:inline shrink-0",
										children: [c.cta, " →"]
									})
								]
							}, c.title))
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "map",
				className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-[2rem] border border-border shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border bg-white p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-wider text-primary",
								children: "Find the clinic"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-2xl font-bold",
								children: "Move Better Clinic, Faisalabad"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "East Canal Road · Free parking · Ground floor · Wheelchair accessible"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-[320px] sm:h-[450px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Clinic location — Move Better Clinic, East Canal Road, Faisalabad",
							src: "https://www.google.com/maps?q=Move+Better+Clinic,+East+Canal+Road,+Faisalabad,+Pakistan&output=embed",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							className: "h-full w-full border-0",
							allowFullScreen: true
						})
					})]
				}) })
			})
		]
	});
}
//#endregion
export { ContactPage as component };
