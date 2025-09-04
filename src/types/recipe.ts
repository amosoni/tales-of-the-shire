export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snack' | 'drink';
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  steps: string[];
  effects: string[];
  unlockCondition?: string;
  imageUrl?: string;
  cookingTime?: string;
  servings?: number;
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Ingredient {
  name: string;
  quantity: string;
  location?: string;
  rarity?: 'common' | 'uncommon' | 'rare' | 'seasonal' | 'special';
}

export interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
} 