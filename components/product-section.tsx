"use client";

import Image from "next/image";
import { useCart } from "@/components/cart-context";
import type { Product } from "@/lib/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";
import { Button } from "@/components/ui/button";

export default function ProductClient({ product }: { product: Product }) {
    const { addToCart } = useCart();

    return (
        <div className="px-4 py-6 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="rounded-lg object-cover"
                    />
                    <div className="flex gap-2">
                        {product.images.map((img: string | StaticImport, i: Key | null | undefined) => (
                            <Image
                                key={i}
                                src={img}
                                alt={product.name}
                                width={80}
                                height={80}
                                className="rounded-md border object-cover cursor-pointer"
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>

                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold">
                            {product.price.toLocaleString("es-CO")}
                        </span>
                        {product.oldPrice && (
                            <span className="text-lg text-muted-foreground line-through">
                                {product.oldPrice.toLocaleString("es-CO")}
                            </span>
                        )}
                    </div>

                    <Button
                        onClick={() => addToCart(product)}
                        className="bg-primary text-white px-4 py-2 rounded-md"
                    >
                        Añadir al carrito 🛒
                    </Button>
                </div>
            </div>
        </div>
    );
}
