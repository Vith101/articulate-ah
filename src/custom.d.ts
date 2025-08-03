// src/custom.d.ts
declare module '*.png' {
  const content: string;
  export default content;
}
// ... add other image types if you import them