import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { i as useFrame, n as OrbitControls, r as Canvas, t as ContactShadows } from "../_libs/@react-three/drei+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as createAnatomicToothGeometry, r as createVeneerGeometry, t as StudioEnv } from "./StudioEnv-RzgZvNAI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnatomyCanvas-fUcyRhyw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ScanPlane() {
	const ref = (0, import_react.useRef)(null);
	useFrame((state) => {
		if (!ref.current) return;
		ref.current.position.y = Math.sin(state.clock.elapsedTime * .55) * .72;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref,
		rotation: [
			Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.4, 2.4] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: "#c4b08a",
			transparent: true,
			opacity: .1,
			depthWrite: false
		})]
	});
}
function Tooth({ formStudy }) {
	const tooth = (0, import_react.useMemo)(() => createAnatomicToothGeometry(), []);
	const veneer = (0, import_react.useMemo)(() => createVeneerGeometry(), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			0,
			.08,
			0
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: tooth,
			castShadow: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: formStudy ? "#d9d2c6" : "#f4eee4",
				roughness: formStudy ? .55 : .14,
				metalness: 0,
				wireframe: formStudy,
				clearcoat: formStudy ? 0 : 1,
				clearcoatRoughness: .1,
				sheen: formStudy ? 0 : .35,
				sheenColor: "#fff1dc",
				ior: 1.54,
				thickness: .7,
				transmission: formStudy ? 0 : .06
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
			geometry: veneer,
			position: [
				0,
				.42,
				.16
			],
			scale: .62,
			rotation: [
				.08,
				0,
				0
			],
			children: formStudy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#c4b08a",
				wireframe: true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f7f2ea",
				roughness: .1,
				clearcoat: 1,
				clearcoatRoughness: .08,
				transmission: .12,
				thickness: .4,
				ior: 1.58
			})
		})]
	});
}
function AnatomyCanvas({ formStudy }) {
	const [dragging, setDragging] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		camera: {
			position: [
				1.35,
				.35,
				2.6
			],
			fov: 32
		},
		dpr: [1, 1.6],
		shadows: true,
		gl: {
			antialias: true,
			alpha: true,
			powerPreference: "high-performance"
		},
		onPointerDown: () => setDragging(true),
		onPointerUp: () => setDragging(false),
		onPointerLeave: () => setDragging(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
				attach: "background",
				args: ["#0c0b09"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudioEnv, { intensity: .9 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
				intensity: .18,
				color: "#c4b08a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				position: [
					3,
					4,
					2.4
				],
				intensity: 20,
				color: "#fff6e8",
				angle: .35,
				penumbra: 1,
				castShadow: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("spotLight", {
				position: [
					-3.2,
					1.6,
					1.6
				],
				intensity: 7,
				color: "#8ea0b3",
				angle: .5,
				penumbra: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooth, { formStudy }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanPlane, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactShadows, {
				position: [
					0,
					-1.22,
					0
				],
				opacity: .45,
				scale: 7,
				blur: 2.8,
				far: 3.4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
				enablePan: false,
				enableZoom: false,
				enableDamping: true,
				dampingFactor: .08,
				autoRotate: !dragging,
				autoRotateSpeed: .35,
				minPolarAngle: Math.PI * .32,
				maxPolarAngle: Math.PI * .68
			})
		]
	});
}
//#endregion
export { AnatomyCanvas as default };
