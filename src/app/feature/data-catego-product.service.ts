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
  where,
  updateDoc,
  deleteDoc,
  increment
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class DataCategoProductService {
  constructor(private firestore: Firestore) {}

  // Lire tous les Category
  readCategory() {
    const collectionInstance = collection(this.firestore, "category");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Lire tous les produits de toutes les catégories par ordre de creation FILTRAGE
  readAllProducts() {
    const productsCollection = collectionGroup(this.firestore, "product");
    const queryInstance = query(
      productsCollection,
      orderBy("createdAt", "desc")
    ); // Tri par date de création
    return collectionData(queryInstance, { idField: "id" }); // Retourne un Observable
  }

  // Lire tous les commentaires de produit de tous les produits dans toutes les catégories, triés par date de création
  readAllComment() {
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

  // Lire tous les ABONNES PAR ORDRE D'ENVOIE
  readSubscriber() {
    const collectionInstance = collection(this.firestore, "subscriber");
    const queryInstance = query(
      collectionInstance,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  // Lire tous les temoignage
  readShopComment() {
    const collectionInstance = collection(this.firestore, "shop_comment");
    const queryInstance = query(
      collectionInstance,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  getTotalAvisToday() {
    // Obtenir la date d'aujourd'hui (début de la journée)
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0)); // Début de la journée
    const endOfDay = new Date(today.setHours(23, 59, 59, 999)); // Fin de la journée

    // Accéder à la collection "avis" dans Firestore
    const avisCollection = collectionGroup(this.firestore, "product_comment");

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
