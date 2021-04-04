import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
        <p className="text-4xl">Welcome to Nextjs</p>
      </div>
    </Layout>
  );
}
