export interface ProductComment {
  id?: string;
  product: {
    categoryId: "";
    productId: "";
    productName: "";
    productImg: "";
    productPrice: "";
  };

  name: string;
  email: string;
  comment: string;
  createdAt: Date;
  activated: boolean;
}
