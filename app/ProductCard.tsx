import { Product } from "@/lib/mocks";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <div className="relative aspect-video">
        {/* Automatically lazy load */}
        <Image
          src={product.image}
          alt={product.name}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* for lg screen, as multi column so images can be lower in quality as user cannot notice that, so 33vw quality, for mobile screen its 1 column layout so 100vw quality as Images will be more visible and should not look bad */}
      </div>
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-xl font-bold">{formatPrice(product.price)}</p>
    </div>
  );
}
