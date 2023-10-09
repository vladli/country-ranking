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
      <main className="bg-slate-100">
        <Header />
        <section className="flex grow">{children}</section>
        <Footer />
      </main>
      <Toaster />
    </>
  );
}

export default Layout;
