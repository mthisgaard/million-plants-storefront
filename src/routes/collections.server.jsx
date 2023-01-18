import { Suspense } from "react";
import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import { Layout } from "../components/Layout.server";
import CollectionCard from "../components/CollectionCard.server";

export default function Collections() {

  const {
    data: { collections },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <Layout>
      <header className="grid w-full gap-8 p-6 md:p-8 lg:p-12 justify-items-start">
        <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block">
          Collections
        </h1>
      </header>
      <section className="w-full gap-4 md:gap-10 grid px-6 md:px-8 lg:px-12">
        <Suspense>
          <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
            {collections.nodes.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </Suspense>
      </section>
    </Layout>
  );
}

const QUERY = gql`
  query Collections {
    collections(first: 10, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
