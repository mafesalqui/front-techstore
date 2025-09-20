import { notFound } from "next/navigation";
import { getProductById } from "@/services/services";
import ProductSection from "@/components/product-section";

interface ProductPageProps {
    params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProductById(params.slug);

    if (!product) return notFound();

    return <ProductSection product={product} />;
}
