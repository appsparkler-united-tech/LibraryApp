import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/HomePage/HomePage.tsx"),
  route("offer", "pages/OfferPage/OfferPage.tsx"), // Add Offer Page
  route("book", "pages/BookPage/BookPage.tsx"), // Add Offer Page
  route("login", "pages/LoginPage/LoginPage.tsx"), // Add Offer Page
  route("advanced_search", "pages/SearchPage/SearchPage.tsx"), // Add Offer Page
  route("message_librarian", "pages/MessagePage/MessagePage.tsx"), // Add Offer Page
  route("sign_up", "pages/RegistrationPage/RegistrationPage.tsx"),
  route("me", "pages/ProfilePage/MePage.tsx")
] satisfies RouteConfig;
