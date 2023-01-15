import { Layout } from "../components/Layout.server";
import plant from '../assets/plant.jpg';

export default function Home() {
  return (
    <Layout>
      <header className="bg-homeblue absolute top-0 flex w-full h-screen justify-center items-center">
        <h1 className="text-9xl z-20 whitespace-pre-wrap font-bold inline-block">
          Million Plants
        </h1>
        <div className="bg-homegray absolute h-screen w-[40%] top-0 right-0">
        </div>
      </header>
    </Layout>
  );
}
