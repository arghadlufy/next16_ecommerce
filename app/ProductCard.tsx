import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { Product } from "./generated/prisma/client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="pt-0 overflow-hidden">
      <div className="relative aspect-video">
        {/* Automatically lazy load */}
        {product.image && (
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {/* for lg screen, as multi column so images can be lower in quality as user cannot notice that, so 33vw quality, for mobile screen its 1 column layout so 100vw quality as Images will be more visible and should not look bad */}
      </div>

      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <p>{formatPrice(product.price)}</p>
      </CardFooter>
    </Card>
  );
}
