import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export function Layout({ children, title = "HP by Nextjs" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
