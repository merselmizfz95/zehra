"use client";

import { useState } from "react";
import { ShoppingBag, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import type { Product } from "@/types/database";

interface ProductsGridProps {
  products: Product[];
  categories: string[];
}

export function ProductsGrid({ products, categories }: ProductsGridProps) {
  const { t, locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
          {t.products.eyebrow}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {t.products.title}
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory("All")}
          className="font-[family-name:var(--font-inter)]"
        >
          {t.products.allCategories}
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className="font-[family-name:var(--font-inter)]"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => {
          const name = locale === "en" ? product.name_en : product.name_fr;
          const desc =
            locale === "en"
              ? product.description_en
              : product.description_fr;

          return (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-muted flex items-center justify-center">
                <ShoppingBag className="h-16 w-16 text-primary/20" />
                {product.featured && (
                  <Badge className="absolute top-3 right-3 font-[family-name:var(--font-inter)]">
                    <Star className="h-3 w-3 mr-1" />
                    {t.products.featured}
                  </Badge>
                )}
                {!product.in_stock && (
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 font-[family-name:var(--font-inter)]"
                  >
                    {t.products.outOfStock}
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-primary font-medium uppercase tracking-wider font-[family-name:var(--font-inter)]">
                      {product.category}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{name}</h3>
                  </div>
                  <p className="text-lg font-bold text-primary whitespace-nowrap font-[family-name:var(--font-inter)]">
                    &euro;{product.price.toFixed(2)}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2 font-[family-name:var(--font-inter)]">
                  {desc}
                </p>
                <Button
                  className="w-full mt-4 font-[family-name:var(--font-inter)]"
                  variant="outline"
                  disabled={!product.in_stock}
                >
                  {product.in_stock
                    ? t.products.addToCart
                    : t.products.outOfStock}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <ShoppingBag className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground font-[family-name:var(--font-inter)]">
            {locale === "en"
              ? "No products found in this category."
              : "Aucun produit trouve dans cette categorie."}
          </p>
        </div>
      )}
    </div>
  );
}
