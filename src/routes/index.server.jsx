import { Layout } from "../components/Layout.server";
import { Link } from "@shopify/hydrogen";
import plant from '../../public/plant.jpg';

export default function Home() {
  return (
    <Layout>
      <header className="p-20 absolute top-0 w-full h-screen ">
        <div>
          <h1 className="p-10 text-8xl z-20 font-bold">
            Million <br />Plants
          </h1>
          <div className="px-10 sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h2 className="pb-4 font-bold text-xl">Plants for your home and garden</h2>
            <p>At Million Plants we have all types of plants to make your life more green. Fill your home and garden with a million good reasons to have a smile on your face.</p>
          </div>
        </div>
        <div className="px-10 pt-8 flex gap-4">
          <Link className="px-4 py-2 rounded-lg bg-emerald-300 bg-opacity-60 duration-500 transform hover:-translate-y-1 hover:bg-opacity-100" to="/collections">
            Plant Collections
          </Link>
          <Link className="px-4 py-2 rounded-lg bg-neutral-200 border bg-opacity-60 duration-500 transform hover:-translate-y-1 hover:bg-opacity-100" to="/all">
            All Plants
          </Link>
        </div>
        <img className="object-cover object-left-top pt-10 lg:pt-0 lg:fixed lg:h-screen w-screen lg:w-[40%] lg:top-0 lg:right-0" src={plant} alt="plant" />
      </header>
    </Layout>
  );
}
