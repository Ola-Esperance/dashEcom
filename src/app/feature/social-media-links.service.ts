import { Injectable } from "@angular/core";
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  limit,
  query,
  updateDoc,
  deleteDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class SocialMediaLinksService {
  //GESTION OF SOCIAL MEDIA
  constructor(private firestore: Firestore) {}

  // Créer SOCIAL MEDIA
  create(data: any) {
    const collectionInstance = collection(this.firestore, "social_media_link");
    return addDoc(collectionInstance, data);
  }

  // Lire tous les SOCIAL MEDIA
  read() {
    const collectionInstance = collection(this.firestore, "social_media_link");
    const queryInstance = query(collectionInstance, limit(4));
    return collectionData(queryInstance, { idField: "id" });
  }

  // Mettre à Jour un SOCIAL MEDIA
  update(id: string, data: any) {
    const docInstance = doc(this.firestore, "social_media_link", id);
    return updateDoc(docInstance, data);
  }

  // Supprimer un SOCIAL MEDIA
  delete(id: string) {
    const docInstance = doc(this.firestore, "social_media_link", id);
    return deleteDoc(docInstance);
  }
}
