import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalerChatService {

  private _hubconnection: HubConnection;

  constructor() { }
  public async init(): Promise<void> {

    var builder = new HubConnectionBuilder();
    this._hubconnection = builder.withUrl("/chatHub").build();



    this._hubconnection.start();

  }
}
