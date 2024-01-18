import { Component, Input, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { WebSocketService } from 'src/app/Platform-Page/services/web-socket.service';



@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  data: any;
  loading = true;
  error = false;

  @Input() isLoading: boolean = false;
  @Input() loadingText: string = 'Loading...';


  // constructor(private websocketService: WebSocketService) { }
  constructor() { }
  ngOnInit() {
    //   this.dataService.getData().subscribe(
    //     (result) => {
    //       this.data = result;
    //       this.loading = false;
    //     },
    //     (err) => {
    //       console.error('Error fetching data:', err);
    //       this.loading = false;
    //       this.error = true;
    //     }
    //   );

    // this.dataService.connect();
    // this.dataService.socket$.subscribe(res => {
    //   console.log('msg', res);
    // });

    // this.dataService.socket$ = webSocket('ws://123.201.192.65:8282/ws/progress/');
    // this.dataService.socket$.subscribe({
    //   next: (res) => {
    //     console.log('ws res', res);
    //   },
    //   error: (err) => {
    //     console.log('ws err', err);
    //   }
    // })
    // const webSocket = new WebSocket('ws://123.201.192.65:8282');

    // webSocket.addEventListener('error', (event) => {
    //   console.error('WebSocket Error:', event);
    //   // Handle the error here, you can log it or take necessary actions.
    // }
    // this.websocketService.connect().subscribe(
    //   (message: MessageEvent) => {
    //     console.log('Received message:', message.data);
    //     // Handle the received message as needed
    //   },
    //   err => console.error('Error occurred:', err),
    //   () => console.log('Connection closed')
    // );
    // }
    // sendMessage(): void {
    //   this.websocketService.send('Hello, WebSocket!');
    // }
  }
}