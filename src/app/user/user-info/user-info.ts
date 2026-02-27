import { Component, inject } from '@angular/core';
import { collection, Firestore, onSnapshot, query } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  firestore: Firestore = inject(Firestore);
  userId: any;
  userInfo: any;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']; // Access the 'id' parameter from the URL
    });
  }

  q = query(collection(this.firestore, "user"));
  unsubscribe = onSnapshot(this.q, (querySnapshot) => {
    this.userInfo = [];
    querySnapshot.forEach((doc) => {
      this.userInfo.push(
        doc.data());
        console.log(doc.data());
        
    });
  });
}
