import { useCart } from "@/components/cart-context";
import CartItem from "@/components/cart-items";
import { Button } from "@/components/ui/button";
import type { CartItem as CartItemType } from "@/lib/types";
import { formatNumber } from "@/lib/utils";

export default function CartSheetContent() {
    const { items } = useCart();

    const total = items.reduce(
        (acc: number, item: { price: number; qty: number; }) => acc + item.price * item.qty,
        0
    );

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {items.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        Aún no tienes productos en tu carrito 🛒
                    </p>
                ) : (
                    items.map((product: CartItemType) => (
                        <CartItem key={product.id} product={product} />
                    ))
                )}
            </div>

            {items.length > 0 && (
                <div className="border-t p-4 space-y-4">
                    <div className="flex justify-between text-lg font-medium">
                        <span>Total:</span>
                        <span>${formatNumber(total)}</span>
                    </div>
                    <Button className="w-full">Finalizar pedido</Button>
                </div>
            )}
        </div>
    );
}
