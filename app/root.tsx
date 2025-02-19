import React from "react";
import {
    Form,
    Link,
    Outlet,
    Scripts,
    ScrollRestoration,
    isRouteErrorResponse,
  } from "react-router";
  
  // existing imports & exports
  
  export default function App() {
    return (
      <>
        <div id="sidebar">
          {/* other elements */}
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* other elements */}
      </>
    );
  }
  
  