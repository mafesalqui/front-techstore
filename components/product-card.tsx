import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { formatNumber } from "@/lib/utils";
import { useCart } from "@/components/cart-context";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border">
            <Link
                href={`/producto/${product.documentId}`}
                className="flex flex-col flex-1"
            >
                <div className="aspect-square overflow-hidden bg-muted">
                    <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105 h-full w-full"
                    />
                    {product.isNew && (
                        <Badge className="absolute top-2 right-2">Nuevo</Badge>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 mt-1">
                        {product.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">
                                ${formatNumber(product.price)}
                            </span>
                            {product.oldPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                    ${formatNumber(product.oldPrice)}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>

            <Button variant="ghost" size="icon" className="absolute bottom-4 right-4 p-2"
                onClick={() => addToCart(product)}
            >
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Añadir al carrito</span>
            </Button>
        </div>
    );
}
