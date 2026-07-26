import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-CLB-s_EP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className, as: As = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					setShown(true);
					io.disconnect();
				}
			});
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
		ref,
		className: cn("transition-all duration-700 ease-out will-change-transform", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className),
		style: { transitionDelay: shown ? `${delay}ms` : "0ms" },
		children
	});
}
function Counter({ to, suffix = "", duration = 1400 }) {
	const ref = (0, import_react.useRef)(null);
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let started = false;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting && !started) {
					started = true;
					const start = performance.now();
					const tick = (t) => {
						const p = Math.min(1, (t - start) / duration);
						const eased = 1 - Math.pow(1 - p, 3);
						setVal(Math.round(to * eased));
						if (p < 1) requestAnimationFrame(tick);
					};
					requestAnimationFrame(tick);
					io.disconnect();
				}
			});
		}, { threshold: .4 });
		io.observe(el);
		return () => io.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [val.toLocaleString(), suffix]
	});
}
//#endregion
export { Reveal as n, Counter as t };
