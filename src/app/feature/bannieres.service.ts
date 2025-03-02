import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class BannieresService {
  //SERVICE DESTINE POUR GESTION IMAGE CARROUSEL ACCEUIL
  constructor(private firestore: Firestore) {}

  // Lire tous les Banniere
  read() {
    const collectionInstance = collection(this.firestore, "banner");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour un Category
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "banner", id);
    return updateDoc(docInstance, data);
  }
}
