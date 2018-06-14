var text = ["Pierwsza rozmowa służy rozpoznaniu Twoich potrzeb i pomaga asystentowi zorientować się, na ile nasz projekt jest dla Ciebie.Asystent opowiada, jak praca w projekcie mogłaby wyglądać w Twoim przypadku.Jeśli odpowiada Ci taka forma współpracy– możesz zapisać się do projektu.Podpisujesz wtedy formularz zgłoszeniowy ze swoimi danymi kontaktowymi, adresem zamieszkania itp.",
            "Uczestnictwo w projekcie dla każdej osoby określane jest nieco inaczej. Podczas rozmowy z asystentem wspólnie ustalacie plan działania (Indywidualny Plan Rozwoju) i zobowiązujesz się tylko do tego, co zdecydujcie się wpisać do tego planu.",

                "Nasz projekt kończy się w grudniu 2018 r. Jeśli potrzebujesz, możesz być z nami do końca, możesz też skończyć wcześniej, jeśli osiągniesz swoje cele.",
                    "Jeśli nie wnioskowałaś/wnioskowałeś o dofinansowanie kursu podnoszącego kwalifikacje zawodowe w każdej chwili możesz zrezygnować bez konsekwencji. W przypadku rezygnacji ważne jest, żebyś zgłosił(a) ją swojemu asystentowi.  Jeśli wnioskowałeś o wsparcie szkoleniowe, asystent ustali z Tobą, jakie zasady Twojego udziału i rezygnacji z projektu.",
                        "Nie. Kryterium udziału w projekcie jest wiek i miejsce zamieszkania.",
                            "Większość pomocy w projekcie jest bezpłatna. Podczas ustalania Indywidualnego Planu Rozwoju może się pojawić możliwość częściowej odpłatności za szkolenia (tylko i wyłącznie za nie), ale tylko gdy pozwala na to Twoja sytuacja materialna. Brak środków nie jest w żadnym stopniu przeszkodą w uczestnictwie w projekcie. Oferta Centrum Młodych oraz wsparcie asystencie jest bezpłatne.",
                                "Asystencie to pracownicy projektu, którzy odbywają spotkania indywidualne z uczestnikami i wspierają ich w realizacji umówionego wcześniej Indywidualnego Planu Pracy. Mają różne wykształcenie i zawód (psycholog, pedagog, doradca zawodowy, pracownik socjalny, itd.) oraz różne doświadczenia życiowe. Dzięki temu są w stanie pomóc różnych osobom i w różnych kwestiach.",
                                    "Punktem wyjścia są zawsze potrzeby, cele i pomysły osoby, która się do nas zgłasza. A pomysły bywają różne. Jeden z uczestników zgłosił się do nas z prośbą, żeby przeprowadzić z nim próbną rozmowę kwalifikacyjną. Dowiedzieliśmy się, jakie są teraz pytania i wymagania rekruterów, i zrobiliśmy to wspólnie. Z inną osobą przećwiczyliśmy, jak ma się zachowywać podczas rozprawy sądowej o zadłużenie mieszkania. Na spotkaniach rozmawiamy na tematy dotyczące nie tylko kursów i szkoleń, ale też na tematy „życiowe”, dotyczące codziennych radości i trosk uczestników, zahaczające o ich pasje, zainteresowania, o ich dylematy i rozterki. Staramy się wspierać i inspirować.",
                                        "Pomagamy naszym uczestnikom zrobić pierwszy lub kolejny krok w kierunku życiowego usamodzielnienia się. Dotychczas pracowaliśmy m.in. nad:<li>	znalezieniem pracy (CV, list motywacyjny),</li><li>zmianą pracy na taką, która jest lepiej dopasowana do potrzeb danej osoby,</li><li>uregulowaniem sytuacji prawnej (np. znalezienie bezpłatnych porad prawnych),</li><li>wychodzeniem z zadłużenia (np. opracowanie strategii ‘krok po kroku’, organizacja warsztatów z edukacji finansowej),</li><li>wnioskowaniem o rozkwaterowanie lub mieszkanie z zasobów miejskich,</li><li>znalezieniem bezpłatnej pomocy psychoterapeutycznej,</li><li>pomoc obcokrajowcom spoza Unii Europejskiej,</li><li>asystowaniem w załatwieniu spraw urzędowych, </li><li>ułożeniem planu działania, żeby „pójść do przodu”,</li><li>wybraniem odpowiedniej drogi dalszego kształcenia/kursu zawodowego Można pytać również o inne kwestie. Jeśli będziemy w stanie pomóc, pomożemy, jeśli nie – postaramy się znaleźć inne miejsce, gdzie taką pomoc możesz otrzymać. Czasami zdarza się tak, że nie jesteśmy w stanie pomóc w żaden sposób. Wtedy uczciwie o tym mówimy.",
                                            "Nie udzielamy pożyczek finansowych osobom prywatnym ani dotacji na założenie działalności gospodarczej. ",
                                                "Odpowiednim połączeniem uczestników i uczestniczek projektu z asystentami zajmuje się koordynator Zespołu Asystentów Usamodzielniania."
 ]





document.getElementById("answer0").addEventListener('click', klik(this))
document.getElementById("answer1").addEventListener('click', klik(this))
document.getElementById("answer2").addEventListener('click', klik(this))
document.getElementById("answer3").addEventListener('click', klik(this))
document.getElementById("answer4").addEventListener('click', klik(this))
document.getElementById("answer5").addEventListener('click', klik(this))
document.getElementById("answer6").addEventListener('click', klik(this))
document.getElementById("answer7").addEventListener('click', klik(this))
document.getElementById("answer8").addEventListener('click', klik(this))
document.getElementById("answer9").addEventListener('click', klik(this))
document.getElementById("answer10").addEventListener('click', klik(this))



function klik(a) {
    var InnerHTML = a.innerHTML;
    if (InnerHTML == "<b>Na czym polega rozmowa wstępna?</b>") {

        a.innerHTML += "<p>" + text[0] + "</p>"
        return;
    } else {
        a.innerHTML = "<b>Na czym polega rozmowa wstępna?</b>"
        return;
    }



    if (InnerHTML == "<b>Do czego zobowiązuje bycie w projekcie?</b>") {
        a.innerHTML += "<p>" + text[1] + "</p>"
        return;
    } else {
        a.innerHTML = "<b>Do czego zobowiązuje bycie w projekcie?</b>"
        return;
    }
    //    }
    //    
    //        if (InnerText == "Jak długo trzeba być w projekcie?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[2]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[2]++
    //        }
    //     else {
    //        a.innerHTML = "<b>Jak długo trzeba być w projekcie?</b>"
    //        licznik[2] = 0
    //    }
    //   
    //        if (InnerText == "Kiedy można zrezygnować z uczestnictwa w projekcie?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[3]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[3]++
    //        }
    //     else {
    //        a.innerHTML = "<b>Kiedy można zrezygnować z uczestnictwa w projekcie?</b>"
    //        licznik[3] = 0
    //    }
    //    
    //        if (InnerText == "Czy mój udział w projekcie zależy od zarobków?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[4]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[4]++
    //        }
    //     else {
    //        a.innerHTML = "<b>Czy mój udział w projekcie zależy od zarobków?</b>"
    //        licznik[4] = 0
    //    }
    //    
    //        if (InnerText == "Czy muszę coś płacić biorąc udział w projekcie?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[5]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[5]++
    //        }
    //     else {
    //        a.innerHTML = "<b>Czy muszę coś płacić biorąc udział w projekcie?</b>"
    //        licznik[5] = 0
    //    }
    //    
    //        if (InnerText == "Kim są asystenci?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[6]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[6]++
    //        }
    //    else{
    //         a.innerHTML="<b>Kim są asystenci?</b>"
    //         licznik[6]=0
    //    }
    //    
    //        if (InnerText == "Na czym polegają spotkania z asystentem usamodzielniania?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[7]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[7]++
    //        }
    //     else {
    //        a.innerHTML = "<b>Na czym polegają spotkania z asystentem usamodzielniania?</b>"
    //        licznik[7] = 0
    //    }
    //    
    //        if (InnerText == "W jakich kwestia życiowych można otrzymać pomoc?") {
    //            var para = document.createElement("P");
    //            para.innerHTML = text[8]
    //            a.appendChild(para)
    //            licznik[8]++
    //        }
    //     else {
    //        a.innerHTML = "<b>W jakich kwestia życiowych można otrzymać pomoc?</b>"
    //        licznik[8] = 0
    //    }
    //    
    //        if (InnerText == "W czym nie możemy pomóc?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[9]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            licznik[9]++
    //        }
    //     else {
    //        a.innerHTML = "<b>W czym nie możemy pomóc?</b>"
    //        licznik[9] = 0
    //    }
    //    
    //        if (InnerText == "Kto decyduje o tym, z kim będę pracować w projekcie?") {
    //            var para = document.createElement("P");
    //            var t = document.createTextNode(text[10]);
    //            para.appendChild(t)
    //            a.appendChild(para)
    //            console.log("koniec")
    //            licznik[10]++
    //        }
    //     else {
    //        a.innerHTML = "<b>Kto decyduje o tym, z kim będę pracować w projekcie?</b>"
    //        licznik[10] = 0
    //    }
    //
    //
    //function klik2(a){
    //     var InnerText = a.innerText;
    //    if (InnerText == "Na czym polega rozmowa wstępna?") {
    //        
    //    }
    //    
}
