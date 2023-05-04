export interface Category {
  id: number;
  category: string;
  subcategory: string;
}
export interface SuggestedProduct {
  bannerimage: string;
  category: Category;
}

export interface navigationItem {
  category: string;
  subcategories: string[];
}
