export interface Product {
  id?: string;
  title: string;
  permaLink?: string;
  category: {
    categoryId: "";
    categoryName: "";
  };
  imgLink: string;
  videoLink: string;

  price: number;
  buyLink: string;

  view: number;
  bestSell: boolean;
  shortDescription: string;
  description: string;

  createdAt: Date;
}
