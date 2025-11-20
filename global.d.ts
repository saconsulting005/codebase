// Allow importing CSS files for side-effects (global CSS imports)
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";
declare module "*.pcss";

// Optionally declare common static asset types used in Next projects
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
