import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as useThree, b as Vector2, c as PMREMGenerator, f as LatheGeometry, u as ExtrudeGeometry, y as Shape } from "../_libs/@react-three/drei+[...].mjs";
import { t as RoomEnvironment } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/StudioEnv-RzgZvNAI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function createVeneerGeometry() {
	const s = new Shape();
	s.moveTo(0, .68);
	s.bezierCurveTo(.1, .68, .26, .64, .33, .5);
	s.bezierCurveTo(.41, .26, .4, -.02, .36, -.34);
	s.bezierCurveTo(.33, -.54, .18, -.66, 0, -.68);
	s.bezierCurveTo(-.18, -.66, -.33, -.54, -.36, -.34);
	s.bezierCurveTo(-.4, -.02, -.41, .26, -.33, .5);
	s.bezierCurveTo(-.26, .64, -.1, .68, 0, .68);
	const geo = new ExtrudeGeometry(s, {
		depth: .1,
		bevelEnabled: true,
		bevelThickness: .038,
		bevelSize: .028,
		bevelOffset: 0,
		bevelSegments: 8,
		curveSegments: 32
	});
	geo.center();
	const pos = geo.attributes.position;
	for (let i = 0; i < pos.count; i++) {
		const x = pos.getX(i);
		const y = pos.getY(i);
		const z = pos.getZ(i);
		const bend = x * x * .42 + y * y * .06;
		pos.setZ(i, z - bend);
	}
	geo.computeVertexNormals();
	return geo;
}
function createAnatomicToothGeometry() {
	const pts = [
		new Vector2(.02, 1.02),
		new Vector2(.16, .96),
		new Vector2(.3, .78),
		new Vector2(.34, .52),
		new Vector2(.3, .28),
		new Vector2(.22, .08),
		new Vector2(.16, -.12),
		new Vector2(.13, -.42),
		new Vector2(.09, -.78),
		new Vector2(.04, -1.08),
		new Vector2(0, -1.2)
	];
	const geo = new LatheGeometry(pts, 72);
	geo.scale(1, 1, .68);
	geo.computeVertexNormals();
	return geo;
}
function StudioEnv({ intensity = .9 }) {
	const { gl, scene } = useThree();
	(0, import_react.useLayoutEffect)(() => {
		const pmrem = new PMREMGenerator(gl);
		const envScene = new RoomEnvironment();
		const rt = pmrem.fromScene(envScene, .04);
		scene.environment = rt.texture;
		scene.environmentIntensity = intensity;
		gl.toneMapping = 4;
		gl.toneMappingExposure = 1.08;
		return () => {
			scene.environment = null;
			rt.dispose();
			pmrem.dispose();
			envScene.dispose();
		};
	}, [
		gl,
		scene,
		intensity
	]);
	return null;
}
//#endregion
export { createAnatomicToothGeometry as n, createVeneerGeometry as r, StudioEnv as t };
