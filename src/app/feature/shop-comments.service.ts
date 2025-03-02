import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  query,
  orderBy,
  doc,
  updateDoc,
  getDoc,
  deleteDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ShopCommentsService {
  //SERVICE DESTINE POUR GESTION DES  AVIS BOUTIQUE OU ENTREPRISE
  constructor(private firestore: Firestore) {}

  // Lire tous les temoignage
  read() {
    const collectionInstance = collection(this.firestore, "shop_comment");
    const queryInstance = query(
      collectionInstance,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  // Créer un Category
  create(data: any) {
    const collectionInstance = collection(this.firestore, "shop_comment");
    return addDoc(collectionInstance, data);
  }

  // Lire un Category Spécifique
  getTemoignageById(id: string) {
    const docInstance = doc(this.firestore, "shop_comment", id);
    return getDoc(docInstance);
  }
  // Mettre à Jour un temoignage
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "shop_comment", id);
    return updateDoc(docInstance, data);
  }

  // Supprimer un temoignage
  delete(id: string) {
    const docInstance = doc(this.firestore, "shop_comment", id);
    return deleteDoc(docInstance);
  }

  // Méthode pour générer l'URL mailto avec uniquement l'email
  generateMailTo(email: string): string {
    return `mailto:${email}`;
  }
}
