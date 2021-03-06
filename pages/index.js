import Head from "next/head";
import { Upload } from "../components/Upload";

export default function Home() {
  return (
    <div className="bg-gray-700">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen justify-center items-center text-white ">
        <div className="text-center bg-blue-500 p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold">
            Next.js Video Upload to Cloudinary Demo
          </h1>
          <Upload />
         
        </div>
      </main>
    </div>
  );
}
