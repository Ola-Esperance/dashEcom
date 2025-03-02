import { Injectable } from "@angular/core";
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthentificationService {
  constructor(private auth: Auth) {}

  isAuthentifated() {
    return !!this.auth.currentUser;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
