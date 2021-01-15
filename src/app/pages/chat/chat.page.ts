import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ChatService, Message } from 'src/app/services/chat.service';
import {Observable} from 'rxjs'
import {Camera} from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  newMsg = '';

  imgURL;

  constructor(private chatService: ChatService, private router: Router, private camera: Camera) { }

  ngOnInit() {
    this.messages =  this.chatService.getChatMessages();
  }

  sendMessage(){
    this.chatService.addChatMessage(this.newMsg).then(()=>{
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  signOut(){
    this.chatService.signOut().then(()=>{
      this.router.navigateByUrl('/', {replaceUrl: true});
    })
  }

  // chooseFile(event){
  //   this.selectedFile = event.target.file
  // }

}
