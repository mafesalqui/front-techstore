import { Category, Product } from "@/lib/types";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(`${API_URL}/categories?populate=*`);
    if (!res.ok) {
        console.error("Error fetching categories:", res.status);
        return [];
    }
    const json = await res.json();

    return json.data.map((item: any) => {
        return {
            id: String(item.id),
            name: item.name,
            slug: item.slug,
            description: item.description,
            featured: item.featured,
            image: item.image?.url,
            bannerImage: item.bannerImage?.url,
        } as Category;
    });
}

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(`${API_URL}/products?populate=*`);
    if (!res.ok) {
        console.error("Error fetching products:", res.status);
        return [];
    }
    const json = await res.json();

    return json.data.map((item: any) => {
        return {
            id: String(item.id),
            documentId: item.documentId,
            name: item.name,
            slug: item.slug,
            description: item.description,
            price: item.price,
            oldPrice: item.oldPrice,
            images:
                item.images?.map((img: any) => img.url) ?? [],
            categoryName: item.category.name,
            categorySlug: item.category.slug,
            stock: item.stock,
            features: item.features ?? [],
            isNew: item.isNew,
        } as Product;
    });

}

export const getProductById = async (productId: string): Promise<Product | null> => {
    const res = await fetch(`${API_URL}/products?filters[documentId][$eq]=${productId}&populate=*`);
    if (!res.ok) {
        console.error("Error fetching products:", res.status);
        return null;
    }
    const json = await res.json();
    if (!json.data || json.data.length === 0) return null;

    const item = json.data[0];
    console.log(item)

    return {
        id: String(item.id),
        documentId: item.documentId,
        name: item.name,
        slug: item.slug,
        description: item.description,
        price: item.price,
        oldPrice: item.oldPrice,
        images:
            item.images?.map((img: any) => img.url) ?? [],
        categoryName: item.category.name,
        categorySlug: item.category.slug,
        stock: item.stock,
        features: item.features ?? [],
        isNew: item.isNew,
    } as Product;
}