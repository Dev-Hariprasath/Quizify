import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="bg-gray-50 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}
