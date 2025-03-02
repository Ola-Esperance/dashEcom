export interface ShopComment {
  id?: string;
  name: string;
  email: string;
  profesion?: string;
  imgLink?: string;
  active: boolean;
  comment: string;
  createdAt: Date;
}
