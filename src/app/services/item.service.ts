import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemBaseUrl = "/"
  imgBasePath = '/uploads';
  constructor(private db: AngularFireDatabase) { }

  getAllItems(){
    const storageRef = firebase.storage().ref();
    // const imageUrl = storageRef.child(`${this.imgBasePath}/`)+ "/Untitled-5.jpg";
    return [
       {"title": 'Card 1',
        "cols": 1,
        "rows": 1,
        "available" : true,
        "category" : "cat01",
        "description" : "item1 description",
        "image" : "chicken_maharaja",
        "name" : "New Chicken Maharaja",
        "price" : 130,
        "stock" : 100,
        "imageUrl" : "https://firebasestorage.googleapis.com/v0/b/digikart-647cb.appspot.com/o/uploads%2FUntitled-5.jpg?alt=media&token=c4bf9686-6ac1-4914-94fb-d5f8e5df9f8d"
      }
    ];
  }

  addItem(item: Item){
    this.db.list('').push({});
  }
  

  getItem(itemId : number){
    
  }

  


}
