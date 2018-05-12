var mapa;

function markerAdd(lat, lon, opcjeMarkera,txt) {
    // tworzymy marker z współrzędnymi i opcjami z argumentów funkcji dodajMarker
    opcjeMarkera.position = new google.maps.LatLng(lat, lon);

    opcjeMarkera.map = mapa; // obiekt mapa jest obiektem globalnym!
    var marker = new google.maps.Marker(opcjeMarkera);
    //dodanie opisów
    var infowindow = new google.maps.InfoWindow({
          content: txt
        });
    // aktywacja opisów
      
     marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}




function mapaStart() {
    var wspolrzedne = new google.maps.LatLng(52.249370, 21.022904);
    var opcjeMapy = {
        zoom: 13,
        center: wspolrzedne,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    mapa = new google.maps.Map(document.getElementById("map"), opcjeMapy);
    //stworzenie mapy
    //ikonki// wspólne cechy ikon
    var rozmiar = new google.maps.Size(32, 32);
    var rozmiar_cien = new google.maps.Size(59, 32);
    var punkt_startowy = new google.maps.Point(0, 0);
    var punkt_zaczepienia = new google.maps.Point(16, 16);
    var ikona = new google.maps.MarkerImage("https://zapodaj.net/a2fd6affc2ea4.png.html", rozmiar, punkt_startowy, punkt_zaczepienia);

    // stworzenie markera
     markerAdd(52.255027, 21.047759, {
        title: 'Ząbkowska 39',
        clickable: true,
        icon: ikona
    },'<strong>Stowarzyszenie Dla Rodzin Zespół Ząbkowska Stowarzyszenia dla Rodzin</strong><br/> 03-736 Warszawa ul. Ząbkowska 39 m 1 (22) 619-42-67'
);
    
    markerAdd(52.287400, 21.077598, {
        title: 'Pszczyńska 26',
        clickable: true,
        icon: ikona
    },'<strong>Stowarzyszenie Dla Rodzin Zespół Zacisze Stowarzyszenia dla Rodzin</strong><br/> 03-690 Warszawa ul. Pszczyńska 26 m 57  03-680 (22) 253-49-47'
);
    markerAdd(52.279735, 21.078847, {
        title: 'Nefrytowa 12',
        clickable: true,
        icon: ikona
    },'<strong>Stowarzyszenie Dla Rodzin Zespół Zacisze Stowarzyszenia dla Rodzin</strong><br/> 03-690 Warszawa ul. Nefrytowa 12  03-680 (22) 253-49-47'
);
    
    markerAdd(52.245475, 21.073309, {
        title: 'Grochowska 259A',
        clickable: true,
        icon: ikona
    },'<strong>Towarzystwo Przyjaciół Dzieci Ognisko Wychowawcze Praga-Południe</strong><br/> ul. Grochowska 259A ');
    
    markerAdd(52.261242, 21.029095, {
        title: 'Plac Hallera 5',
        clickable: true,
        icon: ikona
    },'<strong>Towarzystwo Przyjaciół Dzieci Ognisko Wychowawcze Praga-Północ</strong><br/>Plac Hallera 5');
    
    markerAdd(52.254430, 21.042768, {
        title: 'Ząbkowska 23/25',
        clickable: true,
        icon: ikona
    },'<strong>Kościół Armia Zbawienia w Rzeczypospolitej Polskiej Specjalistyczna Placówka Wsparcia Dziennego Armia Zbawienia</strong><br/> ul. Ząbkowska 23/25 lok 9, 03-736 Warszawa');
    
    markerAdd(52.260904, 21.052948, {
        title: 'Grodzieńska 65',
        clickable: true,
        icon: ikona
    },'<strong>Stowarzyszenie Katolicki Ruch Antynarkotyczny KARAN Centrum Interwencji Kryzysowej, PWD </strong><br/>Warszawa ul. Grodzieńska 65');
    
    markerAdd(52.253109, 21.036019, {
        title: 'Targowa 63',
        clickable: true,
        icon: ikona
    },'<strong>Stowarzyszenie Katolicki Ruch Antynarkotyczny KARAN Punkt KonsultacyjnyPWD</strong><br/>  Warszawa ul. Targowa 63 ');
    
    markerAdd(52.248883, 21.043299, {
        title: 'Targowa 15',
        clickable: true,
        icon: ikona
    },'<strong>Stowarzyszenie Katolicki Ruch Antynarkotyczny KARAN Punkt Konsultacyjny</strong><br/> PWD Warszawa ul. Targowa 63 ');
    
    markerAdd(52.268502, 21.059624, {
        title: 'Radzymińska 111A',
        clickable: true,
        icon: ikona
    },'<strong>Oddział Terenowy Towarzystwa Rozwijania Aktywności Dzieci Szansa Warszawa Targówek</strong><br/>03-549 Warszawa, ul. Radzymińska 111a/113');
    
    markerAdd(52.256948, 21.036562, {
        title: 'ul. Inżynierska 1/79',
        clickable: true,
        icon: ikona
    },'<strong>Centrum Młodych</strong><br/>ul. Inżynierska 1/79, Praga-Północ, Warszawa');

}




mapaStart()
