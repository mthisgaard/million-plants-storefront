import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

export default function CollectionCard({ collection }) {

  return (
    <Link key={collection.id} to={`/collections/${collection.handle}`}>
      <div className="grid gap-4 duration-500 transform hover:-translate-y-1">
        {collection?.image && (
          <Image
            className="object-bottom rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
            width={"100%"}
            height={336}
            alt={`Image of ${collection.title}`}
            data={collection.image}
          />
        )}
        <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
          {collection.title}
        </h2>
      </div>
    </Link>
  );
}
