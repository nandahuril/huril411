import { Component, OnInit } from '@angular/core';
import { Data } from'../shared/data';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  daftarMahasiswa:Data[] = [];
  nim = '';
  nama = '';
  kelas = '';
  data;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.data = new Data(this.nim, this.nama, this.kelas);
    this.daftarMahasiswa.push(this.data);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}
