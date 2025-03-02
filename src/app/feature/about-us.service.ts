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
export class AboutUsService {
  constructor(private firestore: Firestore) {}

  // GESTION DE CHAT BOT

  // Lire
  read() {
    const collectionInstance = collection(this.firestore, "about_us");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour le  CHAT BOT
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "about_us", id);
    return updateDoc(docInstance, data);
  }
}
