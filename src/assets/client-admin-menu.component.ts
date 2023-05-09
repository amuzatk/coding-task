import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-admin-menu',
  templateUrl: './client-admin-menu.component.html',
  styleUrls: ['./client-admin-menu.component.scss']
})
export class ClientAdminMenuComponent implements OnInit {
  info: any[];

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.info = [
      {
          name: "Client",
          image: 'user.png',
          show: false,
          infomation: [
         
              {
                id: 1,
                name: "Add/Manage Client",
                routeLink: "/admin/arc"
              }
          ],
      },
      {
          name: "Payment Management",
          image: 'payment.png',
          show: false,
          infomation: [
              {
                  id: 1,
                  name: "Payment Transaction",
                  routeLink: "/admin/payment/:id",
              },
            //   {
            //     id: 2,
            //     name: "Remitta Processing",
            // },
          ],
      },
  ];
  }

  toggleMenu(data: { infomation: any; show: boolean; }) {
    console.log(data.infomation)
    data.show = !data.show;
}

}
