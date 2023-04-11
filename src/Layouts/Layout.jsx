import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <main className="container px-4 pt-8 pb-20">
      <nav className="mb-8">
        <Link to="/" className="text-2xl font-bold text-slate-800">
          Github <span className="font-normal">Jobs</span>
        </Link>
      </nav>
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
