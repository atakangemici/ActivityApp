import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit {
  activities : any = [];
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tema', "Güzel bir gün batımı etkinliği");
    localStorage.setItem('kategori', "Buluşma");
    localStorage.setItem('il-ice', "İstanbul,Kadıköy");
    localStorage.setItem('konum-yer', "Modal 2 , Sahil");
    localStorage.setItem('tarih-saat', "09.02.2022,22.00");
    localStorage.setItem('kisi-sayisi', "5");

    let tema = localStorage.getItem('tema');
    let kategori = localStorage.getItem('kategori');
    let ilIlce = localStorage.getItem('il-ice');
    let konumYer = localStorage.getItem('konum-yer');
    let tarihSaat = localStorage.getItem('tarih-saat');
    let kisiSayisi = localStorage.getItem('kisi-sayisi');

    let activityObj1 = {
      tema,
      kategori,
      ilIlce,
      konumYer,
      tarihSaat,
      kisiSayisi
    };
    let activityObj2 = {
      tema,
      kategori,
      ilIlce,
      konumYer,
      tarihSaat,
      kisiSayisi
    };

    this.activities.push(activityObj1);
    this.activities.push(activityObj2);

  }

}
