import React from "react";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800">
        <div>
          <Toaster />
        </div>
        <Header />
        <section className="flex grow text-white">{children}</section>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
