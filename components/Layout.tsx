import { ReactNode } from "react";
import { Sora } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`page relative bg-site bg-cover bg-no-repeat text-white ${sora.variable} font-sora`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
