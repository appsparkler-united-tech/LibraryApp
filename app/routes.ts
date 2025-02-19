// src/routes.ts
import { route } from "@react-router/dev/routes";
import type { RouteConfig } from "@react-router/dev/routes";

// Define routes, including the home page as the root
export default [
  route("/", "src/homepage.tsx"),  // Home page route

] satisfies RouteConfig;
