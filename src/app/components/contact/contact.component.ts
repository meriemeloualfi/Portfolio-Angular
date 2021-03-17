import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit(): void {

      let script = this._renderer2.createElement('script');
      script.type = `text/javascript`;
      script.text = `
                 function initMap() {
        var uluru = { lat: 33.596895, lng: -7.611948 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          mapTypeControl: false,
          zoomControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP,

          streetViewControl: false,
          center: uluru
        });

        mapStyles = [{ featureType: "administrative.country", stylers: [{ visibility: "off" }] }],
          mapType = new google.maps.StyledMapType(mapStyles, { name: "Maroc" });
        map.mapTypes.set('maroc', mapType);
        map.setMapTypeId('maroc');
        layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'geometry',
            from: '1S4aLkBE5u_WS0WMVSchhBgMLdAARuPEjyW4rs20',
            where: "col1 contains 'MAR'"
          },
          styles: [{
            polylineOptions: {
              strokeColor: "#333333",
              strokeWeight: 2
            },
          }],
          suppressInfoWindows: true,
        });
        layer.setMap(map);


        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
              `;

      this._renderer2.appendChild(this._document.body, script);

  }
}
