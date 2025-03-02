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
export class LogoService {
  constructor(private firestore: Firestore) {}

  // GESTION DE lOGO

  // Lire LE lOGO
  read() {
    const collectionInstance = collection(this.firestore, "logo");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour le  lOGO
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "logo", id);
    return updateDoc(docInstance, data);
  }
}
