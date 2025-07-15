// src/global.d.ts
import { JSX } from "react/jsx-runtime";

declare namespace JSX {
  interface IntrinsicElements {
    ambientLight: any;
    pointLight: any;
    mesh: any;
    torusKnotGeometry: any;
    meshStandardMaterial: any;
    orbitControls: any;
  }
}
declare module "*.svg" {
  const content: string;
  export default content;
}