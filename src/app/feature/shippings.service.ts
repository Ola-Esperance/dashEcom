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
export class ShippingsService {
  constructor(private firestore: Firestore) {}

  // Lire tous les Shipping
  read() {
    const collectionInstance = collection(this.firestore, "shipping");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour un Shipping
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "shipping", id);
    return updateDoc(docInstance, data);
  }
}
