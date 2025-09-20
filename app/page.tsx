"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/hero-section";
import { getCategories, getProducts } from "@/services/services";
import Link from "next/link";
import CategoryCard from "@/components/category-card";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import { Category, Product } from "@/lib/types";


export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredProducts, setProducts] = useState<Product[]>([])

  useEffect(() => {
    let mounted = true;

    Promise.all([getCategories(), getProducts()]).then(([cats, prods]) => {
      if (!mounted) return;
      setCategories(cats);
      setProducts(prods);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="px-4 py-6 md:py-10">
      <HeroSection />
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Categorías</h2>
          <Button variant="link" className="text-primary" asChild>
            <Link href="/categoria">Ver todas</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* map de categorias */}
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight"> Productos destacados </h2>
        </div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="laptops">Laptops</TabsTrigger>
            <TabsTrigger value="smartphones">Smartphones y Tablets</TabsTrigger>
            <TabsTrigger value="accesorios">Accesorios y Gatgets</TabsTrigger>
            <TabsTrigger value="almacenamiento">Almacenamiento</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.sort(() => Math.random() - 0.5).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </TabsContent>
          <TabsContent value="laptops" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts
              .filter((product) => product.categorySlug == 'laptops-y-computadores')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </TabsContent>
          <TabsContent value="smartphones" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts
              .filter((product) => product.categorySlug == 'smartphones-y-tablets')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </TabsContent>
          <TabsContent value="accesorios" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts
              .filter((product) => product.categorySlug == 'accesorios-y-gadgets')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </TabsContent>
          <TabsContent value="almacenamiento" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts
              .filter((product) => product.categorySlug == 'componentes-y-almacenamiento')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
