import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  //   (message) => this.messagesSubject.next(message),
  //   (error) => console.error('WebSocket Error:', error),
  //   () => console.log('WebSocket closed')
  // );
  // sendMessage(message: string): void {
  //   this.socket$.next({ type: 'message', content: message });
  // }
  send //   (message) => this.messagesSubject.next(message),
    (arg0: string) {
      throw new Error('Method not implemented.');
  }

  private socket!: WebSocket;
  private readonly BASE_URL = 'ws://123.201.192.65:8282/ws/progress/';

  connect(): Observable<MessageEvent> {
    this.socket = new WebSocket(this.BASE_URL);

    return new Observable(observer => {
      this.socket.addEventListener('message', (event: MessageEvent) => {
        observer.next(event);
      });

      this.socket.addEventListener('close', () => {
        observer.complete();
      });
      this.socket.addEventListener('error', (event) => {
            console.error('WebSocket error:', event);
          });
      return () => {
        this.socket.close();
      };
    });

  }

  envUrl = environment.apiUrl;
  public socket$!: WebSocketSubject<any>;
  // private socket$: WebSocketSubject<any>;
  // private messagesSubject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  //   this.socket = new WebSocket('ws://123.201.192.65:8282/ws/progress/');

  //    // Add event listeners
  //    this.socket.addEventListener('open', (event) => {
  //     console.log('WebSocket connection opened:', event);
  //   });

  //   this.socket.addEventListener('message', (event) => {
  //     console.log('WebSocket message received:', event);
  //   });

  //   this.socket.addEventListener('error', (event) => {
  //     console.error('WebSocket error:', event);
  //   });

  //   this.socket.addEventListener('close', (event) => {
  //     console.log('WebSocket connection closed:', event);
  //   });
  // }

    // Replace 'ws://your-socket-server-url' with your actual WebSocket server URL
    // this.socket$ = webSocket(this.envUrl +'api/ws/progress/');
    // this.socket$ = webSocket('');

    // Subscribe to incoming messages
    // this.socket$.subscribe(
    //   (message) => this.messagesSubject.next(message),
    //   (error) => console.error('WebSocket Error:', error),
    //   () => console.log('WebSocket closed')
    // );

    // sendMessage(message: string): void {
    //   this.socket$.next({ type: 'message', content: message });
    // }


    
   

  }
  // getData(): Observable<any> {
  //   return this.http.get(this.envUrl + 'ws/progress/');
  // }

  // connect() {
  //   this.socket$ = webSocket('ws://http://123.201.192.65:8282/api/ws/progress/'); // Replace with your WebSocket server URL 
  // }

  // disconnect() {
  //   this.socket$.complete();
  // }

  // isConnected(): boolean {
  //   return (this.socket$ === null ? false : !this.socket$.closed);
  // }

  // onMessage(): Observable<any> {
  //   return this.socket$!.asObservable().pipe(
  //     map(message => message)
  //   );
  // }

  // send(message: any) {
  //   this.socket$.next(message);
  // }


  //  this.socket = webSocket('ws://http://123.201.192.65:8282/api/ws/progress/');

}
