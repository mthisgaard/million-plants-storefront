import { Suspense } from "react";
import { useShopQuery, CacheLong, gql, Seo } from "@shopify/hydrogen";

import Header from "./Header.client";
import Footer from "./Footer.client";

export function Layout({ children }) {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: shop.name,
            description: shop.description,
          }}
        />
      </Suspense>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header shop={shop} />

        <main role="main" id="mainContent" className="flex-grow">
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

const SHOP_QUERY = gql`
  query layout {
    shop {
      name
      description
    }
  }
`;
