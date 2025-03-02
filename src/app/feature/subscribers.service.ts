import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  doc,
  orderBy,
  query,
  deleteDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class SubscribersService {
  //SERVICE DESTINE POUR GESTION DES  ABONNES
  constructor(private firestore: Firestore) {}

  /* // Lire tous les ABONNES
  read() {
    const collectionInstance = collection(this.firestore, "subscriber");
    return collectionData(collectionInstance, { idField: "id" });
  } */
  // Lire tous les ABONNES PAR ORDRE D'ENVOIE
  read() {
    const collectionInstance = collection(this.firestore, "subscriber");
    const queryInstance = query(
      collectionInstance,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  // Supprimer un Category
  delete(id: string) {
    const docInstance = doc(this.firestore, "subscriber", id);
    return deleteDoc(docInstance);
  }

  // Méthode pour générer l'URL mailto avec uniquement l'email
  generateMailTo(email: string): string {
    return `mailto:${email}`;
  }
}
