import { Injectable } from "@angular/core";
import { Cloudinary } from '@cloudinary/url-gen';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "@angular/fire/storage";

@Injectable({
  providedIn: "root"
})
export class ImagesService {
 

 
  /*  // SERVICE DESTINÉ POUR GESTION DES IMAGES DANS FIREBASE STORAGE
  constructor(private storage: Storage) {}

  // Télécharger une image
  uploadImage(file: File, path: string) {
    const storageRef = ref(this.storage, path);
    return uploadBytes(storageRef, file).then(() => {
      return getDownloadURL(storageRef); // Retourne l'URL publique de l'image
    });
  }

  // Lire l'URL d'une image
  getImageUrl(path: string) {
    const storageRef = ref(this.storage, path);
    return getDownloadURL(storageRef); // Récupère l'URL de téléchargement
  }

  // Mettre à jour une image (remplacer par une nouvelle)
  updateImage(file: File, path: string) {
    return this.deleteImage(path) // Supprime l'ancienne image
      .then(() => this.uploadImage(file, path)); // Télécharge la nouvelle image
  }

  // Supprimer une image
  deleteImage(path: string) {
    const storageRef = ref(this.storage, path);
    return deleteObject(storageRef); // Supprime l'image du stockage
  } */
}
