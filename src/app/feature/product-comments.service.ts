import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  collectionGroup,
  doc,
  where,
  query,
  orderBy,
  getDoc,
  updateDoc,
  deleteDoc,
  increment
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ProductCommentsService {
  constructor(private firestore: Firestore) {}

  // Créer un commentaire de produit pour un produit spécifique dans une catégorie spécifique
  create(data: any, categoryId: string, productId: string) {
    const collectionInstance = collection(
      this.firestore,
      `category/${categoryId}/product/${productId}/product_comment`
    );
    return addDoc(collectionInstance, data);
  }

  // Lire tous les commentaires de produit pour un produit spécifique dans une catégorie spécifique
  read(categoryId: string, productId: string) {
    const collectionInstance = collection(
      this.firestore,
      `category/${categoryId}/product/${productId}/product_comment`
    );
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Lire tous les commentaires de produit de tous les produits dans toutes les catégories, triés par date de création
  readAll() {
    const productCommentsCollection = collectionGroup(
      this.firestore,
      "product_comment"
    );
    const queryInstance = query(
      productCommentsCollection,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  // Lire un commentaire de produit spécifique par son ID
  getCommentById(
    categoryId: string,
    productId: string,
    productCommentId: string
  ) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product/${productId}/product_comment`,
      productCommentId
    );
    return getDoc(docInstance);
  }

  // Mettre à jour un commentaire de produit
  update(
    categoryId: string,
    productId: string,
    productCommentId: string,
    data: any
  ) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product/${productId}/product_comment`,
      productCommentId
    );
    return updateDoc(docInstance, data);
  }

  // Supprimer un commentaire de produit
  delete(categoryId: string, productId: string, productCommentId: string) {
    const docInstance = doc(
      this.firestore,
      `category/${categoryId}/product/${productId}/product_comment`,
      productCommentId
    );
    return deleteDoc(docInstance);
  }

  // Méthode pour récupérer les avis d'aujourd'hui
  getTotalAvisToday() {
    // Obtenir la date d'aujourd'hui (début de la journée)
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // Début de la journée
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // Fin de la journée

    // Accéder à la collection "avis" dans Firestore
    const avisCollection = collectionGroup(this.firestore, `product_comment`);

    // Créer une requête pour récupérer les avis entre début et fin de journée
    const avisQuery = query(
      avisCollection,
      where("createdAt", ">=", startOfDay), // Avis après le début de la journée
      where("createdAt", "<=", endOfDay) // Avis avant la fin de la journée
    );

    // Retourner les données
    return collectionData(avisQuery, { idField: "id" });
  }
}
