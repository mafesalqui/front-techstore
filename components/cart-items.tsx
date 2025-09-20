import Image from "next/image";
import { Trash2, Minus, Plus } from "lucide-react";
import type { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/components/cart-context";
import { formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CartItemProps {
    product: CartItemType;
}

export default function CartItem({ product }: CartItemProps) {
    const { removeFromCart, increaseQty, decreaseQty } = useCart();

    return (
        <div className="flex gap-4 items-center rounded-md p-2 border">
            <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
                <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col flex-1">
                <h3 className="text-sm font-medium truncate">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                    ${formatNumber(product.price)}
                </p>

                <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline"
                        onClick={() => decreaseQty(product.id)}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-2">{product.qty}</span>
                    <Button variant="outline"
                        onClick={() => increaseQty(product.id)}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                <Button variant="ghost" size="icon"
                    onClick={() => removeFromCart(product.id)}
                    className="mt-3 flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
                >
                    <Trash2 className="h-4 w-4" />
                    <span>Eliminar</span>
                </Button>
            </div>
        </div>
    );

}
