import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {ClientVO} from "../appVO/ClienVO";
@Injectable()
export class Service {
  clientsCollection: AngularFirestoreCollection<ClientVO>;
  clientDoc: AngularFirestoreDocument<ClientVO>;
  clients: Observable<ClientVO[]>;
  client: Observable<ClientVO>;

  constructor(private afs: AngularFirestore) { 
    this.clientsCollection = this.afs.collection('TBL_USERS');
  }

  getClients(): Observable<ClientVO[]> {
    this.clients = this.clientsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ClientVO;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.clients;
  }

  saveClient(client: ClientVO) {
    this.clientsCollection.add(client);
    // this._flashMessagesService.show('Client Saved Successfully', { cssClass: 'alert-success', timeout: 1000 });

  }

  getClient(id: string): Observable<ClientVO> {
    this.clientDoc = this.afs.doc<ClientVO>(`TBL_USERS/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(map(action => {
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as ClientVO;
        data.id = action.payload.id;
        return data;
      }
    }));

    return this.client;
  }

  updateClient(client: ClientVO) {
    this.clientDoc = this.afs.doc(`TBL_USERS/${client.id}`);
    this.clientDoc.update(client);
    // this._flashMessagesService.show('Client Updated Successfully', { cssClass: 'alert-success', timeout: 10000 });
  }

  deleteClient(client: ClientVO) {
    this.clientDoc = this.afs.doc(`TBL_USERS/${client.id}`);
    this.clientDoc.delete();
    // this._flashMessagesService.show('Client Deleted Successfully', { cssClass: 'alert-danger', timeout: 10000 });

  }
}