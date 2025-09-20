"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/services";
import { Product } from "@/lib/types";
import ProductCard from "@/components/product-card";

export default function ProductosPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div className="px-4 py-6">
            <h3 className="text-3xl font-bold mb-6">Todos las categorias</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
