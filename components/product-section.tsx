"use client";

import Image, { StaticImageData } from "next/image";
import { useCart } from "@/components/cart-context";
import type { Product } from "@/lib/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductSection({ product }: { product: Product }) {
    const { addToCart } = useCart();

    const [mainImage, setMainImage] = useState<string | StaticImageData>(
        product.images[0] || "/placeholder.svg"
    );

    return (
        <div className="px-4 py-6 md:py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex flex-col gap-4">
                    <div className="relative w-full h-[400px] md:h-[500px] border rounded-lg overflow-hidden">
                        <Image
                            src={mainImage}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex gap-2">
                        {product.images.map((img, index) => (
                            <Button
                                key={index}
                                onClick={() => setMainImage(img)}
                                className={`relative w-20 h-20 rounded-md overflow-hidden border ${mainImage === img
                                    ? "ring-2 ring-primary"
                                    : "opacity-70 hover:opacity-100"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name}`}
                                    fill
                                    className="object-cover"
                                ></Image>

                            </Button>
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
                        Añadir al carrito
                    </Button>
                </div>
            </div>
        </div>
    );
}
