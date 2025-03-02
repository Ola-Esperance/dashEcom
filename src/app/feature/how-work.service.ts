import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  collectionData,
  updateDoc,
  doc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class HowWorkService {
  constructor(private firestore: Firestore) {}

  // Lire
  read() {
    const collectionInstance = collection(this.firestore, "how_work");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour le  CHAT BOT
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "how_work", id);
    return updateDoc(docInstance, data);
  }
}
