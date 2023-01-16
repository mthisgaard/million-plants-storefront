import { Layout } from "../components/Layout.server";
import { Suspense } from "react";
import FeaturedCollections from "../components/FeaturedCollections.server";
import { Link } from "@shopify/hydrogen";
import logo from '../assets/logo.svg';

export default function Home() {
  return (
    <Layout>
      <header className="px-20 pt-20 w-full">
        <div>
          <h1 className="relative p-8 text-8xl z-20 font-bold">
            Million Plants
          </h1>
          <div className="relative z-20 px-8 sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h2 className="pb-4 font-bold text-xl">Plants for your home and garden</h2>
            <p>At Million Plants we have all types of plants to make your life more green. Fill your home and garden with a million good reasons to have a smile on your face.</p>
          </div>
        </div>
        <div className="px-8 pt-8 flex gap-4 z-20">
          <Link className="px-4 py-2 rounded-lg bg-emerald-300 bg-opacity-60 duration-500 transform hover:-translate-y-1 hover:bg-opacity-100" to="/collections">
            Plant Collections
          </Link>
          <Link className="px-4 py-2 rounded-lg bg-neutral-200 border bg-opacity-60 duration-500 transform hover:-translate-y-1 hover:bg-opacity-100" to="/all">
            All Plants
          </Link>
        </div>
        <div className="bg-neutral-100 pt-10 lg:fixed lg:pt-0 lg:h-screen w-screen lg:w-[55%] lg:top-0 lg:right-0">
        </div>
      </header>
      <div className="px-16">
        <Suspense>
          <FeaturedCollections />
        </Suspense>
      </div>
      <img className="absolute z-20 w-[50%] h-[50%] top-40 right-1" src={logo} alt="logo" />
    </Layout>
  );
}
