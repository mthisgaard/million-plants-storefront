import { useUrl, Link } from "@shopify/hydrogen";
import github from '../assets/github.svg';

export default function Footer() {
  const { pathname } = useUrl();
  const isHome = pathname === "/";

  return (
    <footer className={`relative z-20 flex justify-between gap-6 items-center pt-8 pb-12 mt-12 bg-neutral-100 px-6 sm:px-12`}>
      <div className={`${ isHome ? "sm:pl-10 md:pl-16" : "" }`}>
        © 2023 / Hydrogen Shopify Storefront by Malene Thisgaard 
      </div>
      <Link className="opacity-75 hover:opacity-100 duration-500 transform hover:-translate-y-1" to="https://github.com/mthisgaard/million-plants-storefront">
        <img className="w-[20px] h-[20px]" src={github} alt="logo" />
      </Link>
    </footer>
  );
}
