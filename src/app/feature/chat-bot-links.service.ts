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
export class ChatBotLinksService {
  constructor(private firestore: Firestore) {}

  // GESTION DE CHAT BOT

  // Lire
  read() {
    const collectionInstance = collection(this.firestore, "chat_bot_link");
    return collectionData(collectionInstance, { idField: "id" });
  }

  // Mettre à Jour le  CHAT BOT
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "chat_bot_link", id);
    return updateDoc(docInstance, data);
  }
}
