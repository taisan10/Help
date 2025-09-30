import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
   <div className="min-h-screen bg-neutral-950 text-white selection:bg-sky-400/30 ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}


