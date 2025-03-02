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
export class TeamsService {
  //SERVICE DESTINE POUR GESTION DES  TEAM
  constructor(private firestore: Firestore) {}
  // Lire tous les TEAM
  // Créer un TEAM
  create(data: any) {
    const collectionInstance = collection(this.firestore, "team");
    return addDoc(collectionInstance, data);
  }
  read() {
    const collectionInstance = collection(this.firestore, "team");
    const queryInstance = query(
      collectionInstance,
      orderBy("createdAt", "desc")
    );
    return collectionData(queryInstance, { idField: "id" });
  }

  // Lire un Category TEAM
  getTemoignageById(id: string) {
    const docInstance = doc(this.firestore, "team", id);
    return getDoc(docInstance);
  }
  // Mettre à Jour un TEAM
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "team", id);
    return updateDoc(docInstance, data);
  }

  // Supprimer un TEAM
  delete(id: string) {
    const docInstance = doc(this.firestore, "team", id);
    return deleteDoc(docInstance);
  }
}
