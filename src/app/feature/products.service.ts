import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  collectionGroup,
  doc,
  query,
  orderBy,
  getDoc,
  updateDoc,
  deleteDoc,
  increment
} from "@angular/fire/firestore";

import { Product } from "./shape/product.js";
import { Observable, forkJoin } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private firestore: Firestore) {}

  // Créer un Produit dans une catégorie spécifique
  createProduct(data: any, categoryId: string) {
    const collectionInstance = collection(
      this.firestore,
      `category/${categoryId}/product`
    );
    return addDoc(collectionInstance, data);
  }

  // Lire tous les Produits d'une catégorie spécifique
  readProducts(categoryId: string) {
    const collectionInstance = collection(
      this.firestore,
      `category/${categoryId}/product`
    );
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Lire tous les produits de toutes les catégories

  /* readAllProducts() {
    const productsCollection = collectionGroup(this.firestore, "product");
    return collectionData(productsCollection, { idField: "id" });
  } */

  // Lire tous les produits de toutes les catégories par ordre de creation FILTRAGE
  readAllProducts() {
    const productsCollection = collectionGroup(this.firestore, "product");
    const queryInstance = query(
      productsCollection,
      orderBy("createdAt", "desc")
    ); // Tri par date de création
    return collectionData(queryInstance, { idField: "id" }); // Retourne un Observable
  }
  // Lire un Produit Spécifique
  getProductById(categoryId: string, productId: string) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product`,
      productId
    );
    return getDoc(docInstance);
  }

  // Mettre à Jour un Produit
  updateProduct(categoryId: string, productId: string, data: any) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product`,
      productId
    );
    return updateDoc(docInstance, data);
  }

  // Supprimer un Produit
  deleteProduct(categoryId: string, productId: string) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product`,
      productId
    );
    return deleteDoc(docInstance);
  }

  // Incrémenter le compteur de vues d'un Profil Spécifique
  incrementProfileView(categoryId: string, id: string) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product`,
      id
    );
    return updateDoc(docInstance, { view: increment(1) });
  }
}
