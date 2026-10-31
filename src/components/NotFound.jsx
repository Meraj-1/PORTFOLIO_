import React from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => (
  <main className="project-not-found">
    <div className="site-container">
      <span className="section-index">404 — Page not found</span>
      <h1>This page isn’t part of the portfolio.</h1>
      <a className="button-primary" href="/">
        Back to home <ArrowLeft size={16} aria-hidden="true" />
      </a>
    </div>
  </main>
);

export default NotFound;
