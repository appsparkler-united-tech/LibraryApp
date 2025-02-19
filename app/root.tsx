// src/root.tsx
import React from "react";
import { Link, Outlet, Scripts, ScrollRestoration } from "react-router";

export default function App() {
  return (
    <div>
      <div id="sidebar">
        {/* Sidebar or Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/contacts/1">Your Name</Link>
            </li>
            <li>
              <Link to="/contacts/2">Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* This will render the HomePage (or other components depending on the route) */}
      <Outlet /> {/* Render the component for the current route */}

      {/* Scripts and scroll restoration */}
      <Scripts />
      <ScrollRestoration />
    </div>
  );
}
