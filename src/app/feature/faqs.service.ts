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
export class FaqsService {
  //SERVICE DESTINE POUR GESTION DES  FAQ BOUTIQUE OU ENTREPRISE
  constructor(private firestore: Firestore) {}
  // Lire tous les temoignage
  read() {
    const collectionInstance = collection(this.firestore, "faq");
    const queryInstance = query(
      collectionInstance,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  // Créer un FAQ
  create(data: any) {
    const collectionInstance = collection(this.firestore, "faq");
    return addDoc(collectionInstance, data);
  }

  // Lire un Category FAQ
  getTemoignageById(id: string) {
    const docInstance = doc(this.firestore, "faq", id);
    return getDoc(docInstance);
  }
  // Mettre à Jour un FAQ
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "faq", id);
    return updateDoc(docInstance, data);
  }

  // Supprimer un FAQ
  delete(id: string) {
    const docInstance = doc(this.firestore, "faq", id);
    return deleteDoc(docInstance);
  }
}
