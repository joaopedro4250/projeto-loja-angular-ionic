import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  standalone:false,
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss']
})
export class SobrePage {
  produto: any;

  constructor(private route: ActivatedRoute) {
    const nav = history.state;
    this.produto = nav?.produto;
  }
}

