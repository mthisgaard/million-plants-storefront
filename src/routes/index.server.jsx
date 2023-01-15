import { Layout } from "../components/Layout.server";
import { Link } from "@shopify/hydrogen";
import plant from '../../public/plant.jpg';

export default function Home() {
  return (
    <Layout>
      <header className="absolute top-0 w-full h-screen ">
        <div className="p-20">
          <h1 className="p-10 text-8xl z-20 font-bold">
            Million <br />Plants
          </h1>
          <div className="px-10 pt-2 sm:w-[70%] md:w-[60%] lg:w-[40%]">
            <h2 className="pb-4 font-bold text-xl">Plants for your home and garden</h2>
            <p>At Million Plants we have all types of plants to make your life more green. Fill your home and garden with a million good reasons to have a smile on your face.</p>
          </div>
        </div>
        <img className="object-cover object-left-top lg:fixed lg:h-screen lg:w-[40%] lg:top-0 lg:right-0" src={plant} alt="plant" />
      </header>
    </Layout>
  );
}
