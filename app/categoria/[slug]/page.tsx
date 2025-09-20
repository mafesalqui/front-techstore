"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProducts } from "@/services/services";
import { Product } from "@/lib/types";
import ProductCard from "@/components/product-card";

export default function ProductosPorCategoriaPage() {
    const { slug } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    const [categoryName, setCategoryName] = useState<string>("");

    useEffect(() => {
        getProducts().then((allProducts) => {
            const filtered = allProducts.filter(
                (p) => p.categorySlug.toLowerCase() === String(slug).toLowerCase()
            );
            setProducts(filtered);
            if (filtered.length > 0) {
                setCategoryName(filtered[0].categoryName);
            } else {
                setCategoryName("Categoría no encontrada");
            }
        });
    }, [slug]);

    return (
        <div className="px-4 py-6">
            <h3 className="text-3xl font-bold mb-6">
                {categoryName}
            </h3>

            {products.length === 0 ? (
                <p>No hay productos en esta categoría.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
