import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/HomePage/HomePage.tsx"),
  route("offer", "pages/OfferPage/OfferPage.tsx"), // Add Offer Page
  route("book", "pages/BookPage/BookPage.tsx"), // Add Offer Page
] satisfies RouteConfig;
