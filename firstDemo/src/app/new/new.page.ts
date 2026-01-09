import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton,IonIcon } from '@ionic/angular/standalone';
import { airplane, bicycle, bus, car, rocket, boat, walk, wifi } from 'ionicons/icons';

interface MockItem {
  id: number;
  nombre: string;
  icon: any; 
}
@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonButton,IonIcon]
})
export class NewPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

  
  private availableIcons = [airplane, bicycle, bus, car, rocket, boat, walk, wifi];

  
  public items: MockItem[] = Array(50).fill(0).map((_, i) => {
    
   
    const randomIcon = this.availableIcons[Math.floor(Math.random() * this.availableIcons.length)];

    return {
      id: i + 1,
      nombre: `Item ${i + 1}`,
      icon: randomIcon 
    };
  });
  constructor() { }

  ngOnInit() {
  }

  public scrollToBottom() {
    
    this.content.scrollToBottom(1000);
  }

  public scrollToTop() {
    this.content.scrollToTop(1000);
  }
}
