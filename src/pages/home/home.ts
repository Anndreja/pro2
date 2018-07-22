import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  view: any[] = [375,400];
  showLegend = true;
  
  colorScheme = {
    domain : ['#5AA454','#A1028', '#C7B42C', '#AAAAAA']
  };
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  showLabels = true;
  autoScale = true;
  results = [
    {
        "name": "Meritve slatkorja zadnjih 12 dni",
        "series": [
            {
                "name": "10/10/2017",
                "value": 66
            },
            {
                "name": "12/10/2017",
                "value": 78
            },
            {
                "name": "15/10/2017",
                "value": 61
            },
            {
                "name": "18/10/2017",
                "value": 79
            },
            {
                "name": "19/10/2017",
                "value": 74
            },
            {
                "name": "22/10/2017",
                "value": 68
            },
            {
                "name": "23/10/2017",
                "value": 75
            },
            {
                "name": "17/11/2017",
                "value": 76
            },
            {
                "name": "23/11/2017",
                "value": 62
            },
            {
                "name": "23/12/2017",
                "value": 71
            },
            {
                "name": "23/01/2018",
                "value": 68
            },
            {
                "name": "23/02/2018",
                "value": 70
            }
        ]
    }
];
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  ngOnInit(){
    this.presentToast();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Danes ni dodana vrednost krvnega slatkorja!',
      showCloseButton:true,
      position: "bottom",
      cssClass : "alert", 
      closeButtonText : "OK"
    })
    toast.present();
  }
}
