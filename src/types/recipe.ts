export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'dessert';
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  steps: string[];
  effects: string[];
  unlockCondition?: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Ingredient {
  name: string;
  amount: string;
  location?: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
} 