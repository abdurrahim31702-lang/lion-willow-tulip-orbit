import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as useFrame, r as Canvas, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as createVeneerGeometry, t as StudioEnv } from "./StudioEnv-RzgZvNAI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VeneerCanvas-DkE-LHTg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Veneer({ mouse }) {
	const group = (0, import_react.useRef)(null);
	const geo = (0, import_react.useMemo)(() => createVeneerGeometry(), []);
	useFrame((state, delta) => {
		const d = Math.min(delta, .1);
		const g = group.current;
		if (!g) return;
		const t = state.clock.elapsedTime;
		const ty = .18 + mouse.current.x * .45 + Math.sin(t * .22) * .08;
		const tx = .12 + mouse.current.y * .22 + Math.sin(t * .18) * .04;
		g.rotation.y += (ty - g.rotation.y) * (1 - Math.exp(-d * 3.2));
		g.rotation.x += (tx - g.rotation.x) * (1 - Math.exp(-d * 3.2));
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: group,
		position: [
			0,
			.05,
			0
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: geo,
			castShadow: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f3ece0",
				roughness: .16,
				metalness: 0,
				clearcoat: 1,
				clearcoatRoughness: .1,
				sheen: .4,
				sheenColor: "#fff1dc",
				sheenRoughness: .35,
				ior: 1.54,
				thickness: .55,
				transmission: .07,
				attenuationColor: "#e6d2b6",
				attenuationDistance: .7
			})
		})
	});
}
function VeneerCanvas({ mouse }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				0,
				.05,
				2.55
			],
			fov: 28
		},
		dpr: [1, 1.6],
		gl: {
			antialias: true,
			alpha: true,
			powerPreference: "high-performance"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#0c0b09"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioEnv, { intensity: .82 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
				intensity: .22,
				color: "#c4b08a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				position: [
					2.6,
					3.2,
					2.4
				],
				intensity: 18,
				color: "#fff6e8",
				angle: .38,
				penumbra: 1,
				distance: 12,
				castShadow: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				position: [
					-2.8,
					1.4,
					2.2
				],
				intensity: 6,
				color: "#9aa7b5",
				angle: .5,
				penumbra: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
				position: [
					.2,
					.4,
					-3
				],
				intensity: 1.4,
				color: "#ffffff"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Veneer, { mouse }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
				position: [
					0,
					-.72,
					0
				],
				opacity: .42,
				scale: 6,
				blur: 2.6,
				far: 3.2,
				color: "#0c0b09"
			})
		]
	});
}
//#endregion
export { VeneerCanvas as default };
