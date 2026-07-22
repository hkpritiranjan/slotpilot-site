(function () {
  window.SP_LOCALES = window.SP_LOCALES || {};
  window.SP_LOCALES.ro = {
    /* NAV / FOOTER */
    'nav.home':        'Acasă',
    'nav.how':         'Cum funcționează',
    'nav.docs':        'Documentație', 'nav.progress': 'Progres',
    'nav.startFree':   'Începe gratuit &rarr;',
    'footer.tagline':  'Listă de așteptare automată &amp; recuperarea neprezentărilor pentru clinici mici',
    'footer.home':     'Acasă',
    'footer.how':      'Cum funcționează',
    'footer.docs':     'Documentație', 'footer.progress': 'Progres',
    'footer.pricing':  'Prețuri',
    'footer.github':   'GitHub',

    /* HERO */
    'hero.eyebrow':  'Pentru clinicile care nu î&#537;i permit programări neocupate',
    'hero.h1':       'Programarea de la 14:00 tocmai<br>a fost anulată.<br><em>A fost deja înlocuită.</em>',
    'hero.sub':      'SlotPilot trimite automat un SMS <strong>următorului pacient de pe lista de așteptare</strong> în momentul în care un loc se eliberează. Confirmă în 15 minute. Recepționera nu face nimic.',
    'hero.cta1':     'Probă gratuită de 30 de zile',
    'hero.cta2':     'Vezi cum funcționează',
    'hero.proof':    'Pentru clinici care pierd 2.500&ndash;10.000&nbsp;RON/lună din cauza programărilor neocupate',

    /* STATS */
    'stat.1': 'pierdere medie lunară per clinică din cauza neprezentărilor',
    'stat.2': 'reducerea neprezentărilor cu mementouri automate',
    'stat.3': 'fereastră de ofertă înainte de a trece la următorul pacient',
    'stat.4': 'clinici mici fără soluție de listă de așteptare',

    /* PROBLEM */
    'prob.eyebrow': 'Problema',
    'prob.h2':      'Ce se întâmplă când un pacient anulează azi',
    'prob.sub':     'Fiecare clinică are o &ldquo;listă de așteptare&rdquo;. Un caiet, un grup WhatsApp sau niște nume în mintea cuiva. Niciuna nu funcționează când ai nevoie de ea.',

    /* BEFORE */
    'before.header': 'Fără SlotPilot',
    'before.s1':     'Pacientul anulează prin WhatsApp sau telefon',
    'before.s2':     'Recepționera deschide caietul și începe să sune',
    'before.s3':     'Primele 3 numere nu răspund',
    'before.s4':     'Al 4-lea și-a luat programare în altă parte',
    'before.s5':     '20 de minute pierdute. Locul rămâne liber.',
    'before.result': 'Loc neocupat &rarr; 150&ndash;500&nbsp;RON pierduți',

    /* AFTER */
    'after.header': 'Cu SlotPilot',
    'after.s1':     'Pacientul anulează',
    'after.s2':     'Recepționera apasă &ldquo;Anulare&rdquo; pe programare',
    'after.s3':     'Sistemul trimite instant un SMS următorului pacient din listă',
    'after.s4':     'Pacientul răspunde DA în 3 minute',
    'after.s5':     'Loc rezervat. Confirmare trimisă. Gata.',
    'after.result': 'Loc ocupat &rarr; venituri recuperate în 15 minute',

    /* HOW IT WORKS */
    'how.eyebrow':       'Cum funcționează',
    'how.h2':            'Trei pași. Un clic din partea ta.',
    'how.sub':           'Tot ce urmează după al doilea pas este automat. <a href="how-it-works.html" style="color:var(--teal)">Vezi ghidul complet &rarr;</a>',
    'how.step1.title':   'Pacienții se înscriu pe lista ta',
    'how.step1.desc':    'Distribuie linkul unic <em>/alatura-te/clinica-ta</em>. Pacienții completează numele, mobilul și tipul de consultație. Nu e nevoie de aplicație.',
    'how.step1.badge':   'Configurare o singură dată',
    'how.step2.title':   'Un loc se eliberează',
    'how.step2.desc':    'Marchează o programare ca anulată sau neprezentare în SlotPilot. Aceasta este singura acțiune pe care o ia personalul.',
    'how.step2.badge':   '15 secunde de muncă',
    'how.step3.title':   'SlotPilot se ocupă de rest',
    'how.step3.desc':    'Sistemul contactează următorul pacient potrivit, așteaptă DA/NU, rezervă locul, confirmă și programează mementourile. Totul automat.',
    'how.step3.badge':   'Zero implicare a personalului',

    /* FEATURES */
    'feat.eyebrow':  'Funcționalități',
    'feat.h2':       'Tot ce are nevoie o clinică mică',
    'feat.sub':      'Fără software de spital. Fără abonament enterprise scump. Doar instrumentele pentru a ocupa locurile libere și a reduce neprezentările.',
    'feat.1.title':  'Cascadă SMS automată',
    'feat.1.desc':   'Loc liber &rarr; sistemul găsește următorul pacient &rarr; îi trimite SMS instant. Fără intervenție umană.',
    'feat.2.title':  'Fereastră de 15 minute',
    'feat.2.desc':   'Pacientul are 15 minute să răspundă DA. Niciun răspuns sau NU? Următorul este contactat automat.',
    'feat.3.title':  'Mementouri la 24h + 2h',
    'feat.3.desc':   'Fiecare pacient rezervat primește mementouri automate &mdash; reducând rata neprezentărilor cu 30&ndash;40%.',
    'feat.4.title':  'Coadă cu prioritate',
    'feat.4.desc':   'Marchează pacienții urgenti ca prioritate înaltă. Trec în față când se eliberează un loc.',
    'feat.5.title':  'Link public de înscriere',
    'feat.5.desc':   'Link partajabil care funcționează pe orice dispozitiv. Pacienții se înscriu în 90 de secunde, fără cont.',
    'feat.6.title':  'Multi-practician',
    'feat.6.desc':   'Gestionează programările pentru mai mulți medici sau kinetoterapeuți. Fiecare loc alocat furnizorului corect.',
    'feat.7.title':  'Integrare WhatsApp',
    'feat.7.desc': 'Live prin Twilio WhatsApp. Pacien&Tcedil;ii r&abreve;spund DA &mdash; slotul se rezerv&abreve; automat.', 'feat.7.live': '&#10003;&nbsp;Live', 'feat.10.title': 'Calendar vizual', 'feat.10.desc': 'Vizualizare s&abreve;pt&abreve;m&acirc;nal&abreve; &scedil;i lunar&abreve; a sloturilor. Trageți pe grilă pentru a crea un slot.', 'feat.10.live': '&#10003;&nbsp;Live',
    'feat.11.live':  '&#10003;&nbsp;Live',
    'feat.11.desc':  'Un link partajabil <em>/book/clinica-ta</em> pe care pacienții îl deschid pentru a rezerva direct locuri disponibile. File cu date, rezervare cu un clic, confirmare WhatsApp. Fără cont necesar.',
    'feat.11.title':  'Pagina de rezervare pentru pacienți',
    'feat.8.title':  'Depozit la confirmare',
    'feat.8.desc':   'Cere 50&ndash;100&nbsp;RON depozit când un pacient din listă confirmă. Neprezentarea înseamnă pierderea depozitului.',
    'feat.8.soon':   'În curând',
    'feat.9.title':  'Tablou de bord recuperare',
    'feat.9.desc':   'Urmărește locurile recuperate, veniturile salvate și tendințele de neprezentare lunar.',
    'feat.9.live':   '&#10003;&nbsp;Live',

    /* BOOKING PLATFORM SECTION */
    'practo.label': 'Folosești deja o platformă de rezervări?',
    'practo.h2':    'Păstreaz-o. Adaugă SlotPilot.',
    'practo.p1':    'Platforma ta aduce <em>pacienți noi</em> prin descoperire. SlotPilot ocupă locurile cu pacienți <em>deja în așteptare</em>. Se completează reciproc &mdash; nu schimbi nimic la platforma existentă.',
    'practo.p2':    'Clinicile care le folosesc pe amândouă văd în mod obișnuit cu 15&ndash;20% mai multă utilizare în prima lună.',

    /* BUILT FOR */
    'india.h3': 'Construit pentru clinici locale',
    'india.p':  'Notificări SMS, integrare calendar, prețuri în RON &mdash; nu un produs adaptat în grabă din altă piață.',

    /* PRICING */
    'price.eyebrow': 'Prețuri',
    'price.h2':      'Simplu. Un plan. Fără surprize.',
    'price.sub':     'O clinică, programări nelimitate, intrări nelimitate în lista de așteptare.',
    'price.plan':    'Plan clinică',
    'price.usd':     '~12&nbsp;USD &middot; Fără card bancar pentru probă',
    'price.f1':      'Programări nelimitate',
    'price.f2':      'Pacienți nelimitați în lista de așteptare',
    'price.f3':      'Cascadă SMS automată la anulare',
    'price.f4':      'Mementouri programări 24h + 2h',
    'price.f5':      'Gestionarea cozii cu prioritate',
    'price.f6':      'Link public de înscriere pentru pacienți',
    'price.f7':      'Suport multi-practician',
    'price.f8':      'Inbox SMS &amp; jurnal complet de mesaje',
    'price.f10':  'Pagina de rezervare pentru pacienți (/book/slug)',
    'price.f9':  'Tablou de bord statistici recuperare',
    'price.btn':     'Începe gratuit &mdash; fără card bancar',
    'price.note':    'Anulează oricând. Cele mai multe clinici recuperează costul lunar din primul loc ocupat.',

    /* CTA */
    'cta.h2':   'Oprește pierderile lunare<br>din <em>locuri neocupate</em>.',
    'cta.sub':  'Pacienții tăi așteaptă deja. Trebuie doar să îi conectezi la locul disponibil.',
    'cta.btn1': 'Începe proba gratuită',
    'cta.btn2': 'Vezi cum funcționează',

    /* HOW-IT-WORKS PAGE */
    'hiw.hero.eyebrow': 'Cum funcționează',
    'hiw.hero.h1':      'De la programare anulată la loc ocupat &mdash; în 15 minute.',
    'hiw.hero.p':       'SlotPilot automatizează întregul proces de recuperare a unui loc de clinică pierdut. Iată exact ce se întâmplă, pas cu pas, din perspectiva clinicii și a pacientului.',

    'hiw.1.eyebrow':  'Configurare &mdash; o singură dată',
    'hiw.1.title':    'Înregistrează-ți clinica și distribuie linkul de înscriere',
    'hiw.1.desc':     'Durează 10 minute. Creează un cont gratuit, introdu numele clinicii, configurează tipurile de consultație și primești un link public pe care pacienții îl pot folosi pentru a se înscrie pe lista de așteptare.',
    'hiw.1.card1':    'Ce configurezi o singură dată',
    'hiw.1.li1':      'Numele clinicii, adresa, numele practicienilor',
    'hiw.1.li2':      'Tipuri de consultație (fiecare tip are propria coadă de așteptare)',
    'hiw.1.li3':      'Durata programărilor (15, 30, 45 sau 60 de minute)',
    'hiw.1.card2':    'Cum se înscriu pacienții pe lista ta',
    'hiw.1.card2p':   'Distribuie linkul oriunde: WhatsApp, semnătură email, card tipărit la recepție, profilul pe platforma de rezervări. Pacienții îl deschid pe telefon, completează nume + mobil + tipul consultației, și sunt înscriși. Fără aplicație, fără cont, 90 de secunde.',

    'hiw.2.eyebrow':  'Rutina zilnică',
    'hiw.2.title':    'Un pacient anulează (sau nu se prezintă)',
    'hiw.2.desc':     'Când un pacient rezervat anulează prin telefon sau WhatsApp, recepționera deschide SlotPilot și apasă <strong>Anulare</strong> pe acea programare. Dacă un pacient pur și simplu nu s-a prezentat, apasă <strong>Neprezentare</strong>. Aceasta este singura acțiune a personalului.',

    'hiw.3.eyebrow':   'Automat',
    'hiw.3.title':     'SlotPilot trimite SMS următorului pacient de pe listă',
    'hiw.3.desc':      'Sistemul scanează lista de așteptare pentru următorul pacient care are nevoie de o <em>Consultație inițială</em> (corespunzând tipului anulat), ordonat după prioritate apoi data înscrierii. Îi trimite un SMS instant.',
    'hiw.3.sms.label': 'SMS-ul primit de pacienți',

    'hiw.4.eyebrow':  'Fereastră de 15 minute',
    'hiw.4.title':    'Pacientul răspunde DA &mdash; locul este rezervat instant',
    'hiw.4.desc1':    'Dacă pacientul răspunde DA în 15 minute, locul este rezervat pe numele lui, se trimite un SMS de confirmare, iar cardul din tabloul de bord se actualizează imediat. Recepționera vede asta întâmplându-se &mdash; nu face nimic.',
    'hiw.4.desc2':    'Dacă pacientul răspunde NU, sau nu răspunde în 15 minute, cascada trece automat la următoarea persoană de pe listă.',
    'hiw.4.cascade':  'Exemplu de cascadă &mdash; ce se întâmplă când pacientul #1 spune NU',

    'hiw.5.eyebrow': 'Mementouri automate',
    'hiw.5.title':   'Mementourile se trimit automat &mdash; nicio acțiune necesară',
    'hiw.5.desc':    'Fiecare pacient rezervat primește automat SMS-uri de memento. Aceasta reduce rata neprezentărilor cu 30&ndash;40%.',
    'hiw.5.card':    'Program de mementouri pentru o programare la 14:00',

    'hiw.tips.eyebrow': 'Fluxuri de lucru',
    'hiw.tips.h2':      'Funcționează la fel indiferent dacă folosești o platformă de rezervări sau nu',
    'hiw.tips.sub':     'SlotPilot nu înlocuiește sistemul de rezervări. Se conectează la spațiul liber: programarea care tocmai s-a eliberat și pe care sistemul nu o poate completa automat.',
    'hiw.tip1.label':   '&#128203; Clinică cu platformă de rezervări',
    'hiw.tip1.text':    'Pacienții noi rezervă normal prin platforma ta. Pacienții existenți care au cerut să fie notificați se înscriu pe lista SlotPilot. Când o rezervare este anulată, o marchezi în SlotPilot. Acesta completează locul din lista locală &mdash; platforma nu știe nimic.',
    'hiw.tip2.label':   '&#128203; Clinică fără platformă de rezervări',
    'hiw.tip2.text':    'Cei mai mulți pacienți vin din recomandări sau direct. Adaugi rezervările în SlotPilot manual. Pacienților care sună pentru disponibilități li se spune să se înscrie pe listă prin link. Când ceva este anulat, SlotPilot gestionează recuperarea.',
    'hiw.tip3.label':   '&#8679; Caz de utilizare a cozii cu prioritate',
    'hiw.tip3.text':    'Un pacient post-operatoriu are nevoie de fizioterapie urgent, dar calendarul este plin. Adaugă-l pe lista de așteptare și marchează-l ca <strong>prioritate înaltă</strong>. La următoarea anulare &mdash; el va fi primul contactat.',
    'hiw.tip4.label': '&#128172; WhatsApp (activ)',
    'hiw.tip4.text': 'Livrarea SMS poate fi nesigură uneori. SlotPilot folosește Twilio WhatsApp Business API &mdash; același flux DA/NU, dar prin WhatsApp unde pacienții chiar răspund. Alegeți WhatsApp sau SMS per pacient.',

    'hiw.cta.h2':   'Ești gata să oprești pierderea programărilor?',
    'hiw.cta.p':    'Probă gratuită de 30 de zile. Fără card bancar. Configurare în 10 minute.',
    'hiw.cta.btn1': 'Începe proba gratuită',
    'hiw.cta.btn2': 'Citește documentația',

    /* DOCS SIDEBAR */
    'docs.sidebar.overview':  'Prezentare generală',
    'docs.sidebar.start':     'Primii pași',
    'docs.sidebar.concepts':  'Concepte de bază',
    'docs.sidebar.api':       'Referință API',
    'docs.sidebar.deploy':    'Implementare',
    'docs.sidebar.reference': 'Referință',
  };
})();
