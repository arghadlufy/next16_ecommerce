import { getProductBySlug } from "@/lib/actions";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-2xl font-bold text-green-500">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}
