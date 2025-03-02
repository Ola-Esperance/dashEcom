import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class BannieresTexteService {
  //SERVICE DESTINE POUR GESTION TEXTE  ACCEUIL
  constructor(private firestore: Firestore) {}

  // Lire tous les Banniere
  read() {
    const collectionInstance = collection(this.firestore, "bannerText");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour un Category
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "bannerText", id);
    return updateDoc(docInstance, data);
  }
}
