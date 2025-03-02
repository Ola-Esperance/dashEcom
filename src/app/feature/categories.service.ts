import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  getDoc,
  updateDoc,
  deleteDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class CategoriesService {
  constructor(private firestore: Firestore) {}

  // Créer un Category
  createCategory(data: any) {
    const collectionInstance = collection(this.firestore, "category");
    return addDoc(collectionInstance, data);
  }

  // Lire tous les Category
  readCategory() {
    const collectionInstance = collection(this.firestore, "category");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Lire un Category Spécifique
  getCategoryById(id: string) {
    const docInstance = doc(this.firestore, "category", id);
    return getDoc(docInstance);
  }

  // Mettre à Jour un Category
  updateCategory(id: string, data: any) {
    const docInstance = doc(this.firestore, "category", id);
    return updateDoc(docInstance, data);
  }

  // Supprimer un Category
  deleteCategory(id: string) {
    const docInstance = doc(this.firestore, "category", id);
    return deleteDoc(docInstance);
  }
}
