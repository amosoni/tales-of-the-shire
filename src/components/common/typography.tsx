import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'default' | 'large' | 'small' | 'compact';
  className?: string;
}

export function Typography({ children, variant = 'default', className }: TypographyProps) {
  const baseClasses = "prose max-w-none";
  
  const variantClasses = {
    default: "prose-lg",
    large: "prose-xl",
    small: "prose-sm",
    compact: "prose-sm prose-p:my-2"
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </div>
  );
}

export function ArticleContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Typography variant="large" className={className}>
      {children}
    </Typography>
  );
}

export function ArticlePreview({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Typography variant="small" className={cn("line-clamp-3", className)}>
      {children}
    </Typography>
  );
}

export function RecipeDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Typography variant="small" className={cn("text-gray-600 leading-relaxed", className)}>
      {children}
    </Typography>
  );
}

interface IngredientListProps {
  ingredients: Array<{ name: string; amount?: string }> | string[];
  maxItems?: number;
  className?: string;
}

export function IngredientList({ ingredients, maxItems = 3, className }: IngredientListProps) {
  const displayItems = ingredients.slice(0, maxItems);
  const remainingCount = ingredients.length - maxItems;

  return (
    <div className={cn("space-y-2", className)}>
      {displayItems.map((ingredient, index) => (
        <div key={index} className="ingredient-item">
          <span className="text-sm font-medium text-gray-700">
            {typeof ingredient === 'string' ? ingredient : ingredient.name}
          </span>
          {typeof ingredient === 'object' && ingredient.amount && (
            <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">
              {ingredient.amount}
            </span>
          )}
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="text-center py-2">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full border">
            +{remainingCount} more ingredients
          </span>
        </div>
      )}
    </div>
  );
}

interface EffectListProps {
  effects: string[];
  maxItems?: number;
  className?: string;
}

export function EffectList({ effects, maxItems = 2, className }: EffectListProps) {
  const displayItems = effects.slice(0, maxItems);
  const remainingCount = effects.length - maxItems;

  return (
    <div className={cn("space-y-2", className)}>
      {displayItems.map((effect, index) => (
        <div key={index} className="effect-item">
          <span className="text-xs text-green-600 font-medium">+</span>
          <span className="text-sm font-medium text-green-800">
            {effect}
          </span>
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="text-center py-2">
          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full border">
            +{remainingCount} more effects
          </span>
        </div>
      )}
    </div>
  );
}
