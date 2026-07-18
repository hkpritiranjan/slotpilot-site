(function () {
  window.SP_LOCALES = window.SP_LOCALES || {};
  window.SP_LOCALES.fr = {
    /* NAV / FOOTER */
    'nav.home':        'Accueil',
    'nav.how':         'Comment ça marche',
    'nav.docs':        'Documentation',
    'nav.startFree':   'Essai gratuit &rarr;',
    'footer.tagline':  'Liste d\'attente automatisée &amp; récupération des absences pour les petits cabinets',
    'footer.home':     'Accueil',
    'footer.how':      'Comment ça marche',
    'footer.docs':     'Documentation',
    'footer.pricing':  'Tarifs',
    'footer.github':   'GitHub',

    /* HERO */
    'hero.eyebrow':  'Kinésithérapie &middot; dentaire &middot; chiropraxie',
    'hero.h1':       'Votre créneau de 14h vient<br>d\'être annulé.<br><em>Il est déjà pris.</em>',
    'hero.sub':      'SlotPilot envoie automatiquement un SMS au <strong>prochain patient de votre liste d\'attente</strong> dès qu\'un créneau se libère. Il confirme en 15 minutes. Votre secrétaire ne fait rien.',
    'hero.cta1':     'Essai gratuit de 30 jours',
    'hero.cta2':     'Voir comment ça marche',
    'hero.proof':    'Pour les cabinets perdant 500&ndash;2&nbsp;000&nbsp;€/mois à cause des créneaux vides',

    /* STATS */
    'stat.1': 'perte mensuelle moyenne par cabinet due aux absences',
    'stat.2': 'réduction des absences grâce aux rappels automatiques',
    'stat.3': 'fenêtre d\'offre avant de passer au patient suivant',
    'stat.4': 'petits cabinets sans solution de liste d\'attente',

    /* PROBLEM */
    'prob.eyebrow': 'Le problème',
    'prob.h2':      'Que se passe-t-il quand un patient annule aujourd\'hui',
    'prob.sub':     'Chaque cabinet a une &ldquo;liste d\'attente&rdquo;. Un cahier, un groupe WhatsApp, ou des noms dans la tête de quelqu\'un. Aucun ne fonctionne au moment où vous en avez besoin.',

    /* BEFORE */
    'before.header': 'Sans SlotPilot',
    'before.s1':     'Le patient annule par SMS ou téléphone',
    'before.s2':     'La secrétaire ouvre le cahier et commence à appeler',
    'before.s3':     'Les 3 premiers numéros ne répondent pas',
    'before.s4':     'Le 4e a déjà pris rendez-vous ailleurs',
    'before.s5':     '20 minutes perdues. Le créneau reste vide.',
    'before.result': 'Créneau vide &rarr; 80&ndash;300&nbsp;€ perdus',

    /* AFTER */
    'after.header': 'Avec SlotPilot',
    'after.s1':     'Le patient annule',
    'after.s2':     'La secrétaire clique sur &ldquo;Annuler&rdquo; le créneau',
    'after.s3':     'Le système envoie instantanément un SMS au prochain patient de la liste',
    'after.s4':     'Le patient répond OUI en 3 minutes',
    'after.s5':     'Créneau réservé. Confirmation envoyée. Terminé.',
    'after.result': 'Créneau rempli &rarr; revenus récupérés en 15 minutes',

    /* HOW IT WORKS */
    'how.eyebrow':       'Comment ça marche',
    'how.h2':            'Trois étapes. Un clic de votre côté.',
    'how.sub':           'Tout après la deuxième étape est automatique. <a href="how-it-works.html" style="color:var(--teal)">Voir le guide complet &rarr;</a>',
    'how.step1.title':   'Les patients rejoignent votre liste',
    'how.step1.desc':    'Partagez votre lien unique <em>/rejoindre/votre-cabinet</em>. Les patients saisissent nom, mobile et type de consultation. Aucune application requise.',
    'how.step1.badge':   'Configuration unique',
    'how.step2.title':   'Un créneau se libère',
    'how.step2.desc':    'Marquez un créneau comme annulé ou absent dans SlotPilot. C\'est la seule action que prend votre personnel.',
    'how.step2.badge':   '15 secondes de travail',
    'how.step3.title':   'SlotPilot gère le reste',
    'how.step3.desc':    'Le système contacte le prochain patient, attend OUI/NON, réserve le créneau, confirme et programme les rappels. Entièrement automatique.',
    'how.step3.badge':   'Zéro intervention du personnel',

    /* FEATURES */
    'feat.eyebrow':  'Fonctionnalités',
    'feat.h2':       'Tout ce dont un petit cabinet a vraiment besoin',
    'feat.sub':      'Pas de logiciel hospitalier. Pas de forfait entreprise à 5&nbsp;000&nbsp;€/an. Juste les outils pour remplir les créneaux vides et réduire les absences.',
    'feat.1.title':  'Cascade SMS automatique',
    'feat.1.desc':   'Créneau libre &rarr; le système trouve le prochain patient &rarr; lui envoie un SMS. Sans intervention humaine.',
    'feat.2.title':  'Fenêtre de 15 minutes',
    'feat.2.desc':   'Le patient a 15 minutes pour répondre OUI. Pas de réponse ou NON ? Le suivant est contacté automatiquement.',
    'feat.3.title':  'Rappels 24h + 2h',
    'feat.3.desc':   'Chaque patient réservé reçoit des rappels automatiques &mdash; réduisant les absences de 30&ndash;40%.',
    'feat.4.title':  'File de priorité',
    'feat.4.desc':   'Marquez les patients urgents en haute priorité. Ils passent devant quand un créneau se libère.',
    'feat.5.title':  'Lien d\'inscription public',
    'feat.5.desc':   'Lien partageable fonctionnant sur tout appareil. Les patients s\'inscrivent en 90 secondes, sans compte.',
    'feat.6.title':  'Multi-praticien',
    'feat.6.desc':   'Gérez les créneaux de plusieurs médecins ou kinés. Chaque créneau attribué au bon praticien.',
    'feat.7.title':  'Intégration WhatsApp',
    'feat.7.desc':   'API WhatsApp Business complète. Parce que les patients répondent sur WhatsApp.',
    'feat.7.soon':   'Prochainement',
    'feat.8.title':  'Acompte à la confirmation',
    'feat.8.desc':   'Demandez un acompte de 10&ndash;20&nbsp;€ à la confirmation. L\'absent perd l\'acompte.',
    'feat.8.soon':   'Prochainement',
    'feat.9.title':  'Tableau de récupération',
    'feat.9.desc':   'Suivez les créneaux récupérés, les revenus sauvés et les tendances d\'absence mois par mois.',
    'feat.9.soon':   'Prochainement',

    /* BOOKING PLATFORM SECTION */
    'practo.label': 'Vous utilisez déjà une plateforme de réservation ?',
    'practo.h2':    'Gardez-la. Ajoutez SlotPilot.',
    'practo.p1':    'Votre plateforme amène de <em>nouveaux patients</em> via la recherche. SlotPilot remplit les créneaux avec des patients <em>déjà en attente</em>. Ils se complètent &mdash; vous ne changez rien à votre plateforme existante.',
    'practo.p2':    'Les cabinets qui utilisent les deux observent généralement 15&ndash;20% d\'utilisation en plus dès le premier mois.',

    /* BUILT FOR */
    'india.h3': 'Conçu pour les petits cabinets',
    'india.p':  'Rappels SMS, intégration agenda, prise en charge locale &mdash; pas un produit étranger mal adapté à votre marché.',

    /* PRICING */
    'price.eyebrow': 'Tarifs',
    'price.h2':      'Simple. Un forfait. Sans surprise.',
    'price.sub':     'Un cabinet, des créneaux illimités, des inscriptions en liste illimitées.',
    'price.plan':    'Forfait cabinet',
    'price.usd':     '~12&nbsp;USD &middot; Pas de carte bancaire pour l\'essai',
    'price.f1':      'Créneaux de rendez-vous illimités',
    'price.f2':      'Patients en liste d\'attente illimités',
    'price.f3':      'Cascade SMS automatique à l\'annulation',
    'price.f4':      'Rappels de rendez-vous 24h + 2h',
    'price.f5':      'Gestion de la file de priorité',
    'price.f6':      'Lien d\'inscription patient public',
    'price.f7':      'Support multi-praticien',
    'price.f8':      'Boîte de réception SMS &amp; journal de messages complet',
    'price.btn':     'Commencer gratuitement &mdash; sans carte bancaire',
    'price.note':    'Annulez à tout moment. La plupart des cabinets récupèrent le coût mensuel dès le premier créneau rempli.',

    /* CTA */
    'cta.h2':   'Arrêtez de perdre 500&nbsp;€ par mois<br>à cause de <em>créneaux vides</em>.',
    'cta.sub':  'Vos patients attendent déjà. Il suffit de les connecter au créneau disponible.',
    'cta.btn1': 'Commencer votre essai gratuit',
    'cta.btn2': 'Voir comment ça marche',

    /* HOW-IT-WORKS PAGE */
    'hiw.hero.eyebrow': 'Comment ça marche',
    'hiw.hero.h1':      'Du créneau annulé au rendez-vous pris &mdash; en 15 minutes.',
    'hiw.hero.p':       'SlotPilot automatise l\'intégralité du processus de récupération d\'un créneau perdu. Voici exactement ce qui se passe, étape par étape, du point de vue du cabinet et du patient.',

    'hiw.1.eyebrow':  'Configuration &mdash; une seule fois',
    'hiw.1.title':    'Inscrivez votre cabinet et partagez le lien d\'inscription',
    'hiw.1.desc':     '10 minutes suffisent. Créez un compte gratuit, saisissez le nom de votre cabinet, configurez vos types de consultation et obtenez un lien public que vos patients peuvent utiliser pour rejoindre votre liste d\'attente.',
    'hiw.1.card1':    'Ce que vous configurez une seule fois',
    'hiw.1.li1':      'Nom du cabinet, adresse, noms des praticiens',
    'hiw.1.li2':      'Types de consultation (chaque type a sa propre file d\'attente)',
    'hiw.1.li3':      'Durée des créneaux (15, 30, 45 ou 60 minutes)',
    'hiw.1.card2':    'Comment les patients rejoignent votre liste',
    'hiw.1.card2p':   'Partagez le lien partout : WhatsApp, pied de signature email, carte imprimée à l\'accueil, bio sur votre plateforme de réservation. Les patients l\'ouvrent sur leur téléphone, saisissent nom + mobile + type de consultation, et c\'est tout. Pas d\'application, pas de compte, 90 secondes.',

    'hiw.2.eyebrow':  'Routine quotidienne',
    'hiw.2.title':    'Un patient annule (ou ne se présente pas)',
    'hiw.2.desc':     'Quand un patient annule par appel ou SMS, votre secrétaire ouvre SlotPilot et clique sur <strong>Annuler</strong> ce créneau. Si un patient ne s\'est simplement pas présenté, elle clique sur <strong>Absent</strong>. C\'est la seule action du personnel.',

    'hiw.3.eyebrow':   'Automatique',
    'hiw.3.title':     'SlotPilot envoie un SMS au prochain patient de la liste',
    'hiw.3.desc':      'Le système parcourt la liste pour trouver le prochain patient ayant besoin d\'une <em>Consultation initiale</em> (correspondant au type annulé), classé par priorité puis date d\'inscription. Il lui envoie un SMS instantanément.',
    'hiw.3.sms.label': 'Le SMS reçu par les patients',

    'hiw.4.eyebrow':  'Fenêtre de 15 minutes',
    'hiw.4.title':    'Le patient répond OUI &mdash; le créneau est réservé instantanément',
    'hiw.4.desc1':    'Si le patient répond OUI dans les 15 minutes, le créneau est réservé à son nom, un SMS de confirmation est envoyé, et la carte de créneau dans votre tableau de bord est mise à jour immédiatement. Votre secrétaire voit cela se produire &mdash; elle ne fait rien.',
    'hiw.4.desc2':    'Si le patient répond NON, ou ne répond pas dans les 15 minutes, la cascade passe automatiquement à la personne suivante sur la liste.',
    'hiw.4.cascade':  'Exemple de cascade &mdash; que se passe-t-il quand le patient n°1 dit NON',

    'hiw.5.eyebrow': 'Rappels automatiques',
    'hiw.5.title':   'Les rappels partent automatiquement &mdash; aucune action requise',
    'hiw.5.desc':    'Chaque patient réservé (y compris les remplissages de liste et les réservations originales) reçoit automatiquement des SMS de rappel. Cela réduit les taux d\'absence de 30&ndash;40%.',
    'hiw.5.card':    'Programme de rappels pour un rendez-vous à 14h00',

    'hiw.tips.eyebrow': 'Modes de fonctionnement',
    'hiw.tips.h2':      'Fonctionne de la même façon, avec ou sans plateforme de réservation',
    'hiw.tips.sub':     'SlotPilot ne remplace pas votre système de réservation. Il comble le vide : le créneau qui vient de se libérer et que votre système ne peut pas remplir automatiquement.',
    'hiw.tip1.label':   '&#128203; Cabinet avec plateforme de réservation',
    'hiw.tip1.text':    'Les nouveaux patients réservent normalement via la plateforme. Vos patients existants souhaitant être notifiés des disponibilités rejoignent votre liste SlotPilot. Quand une réservation est annulée, vous la marquez dans SlotPilot. Il remplit le créneau depuis votre liste locale &mdash; la plateforme n\'en sait rien.',
    'hiw.tip2.label':   '&#128203; Cabinet sans plateforme de réservation',
    'hiw.tip2.text':    'La plupart de vos patients viennent par bouche-à-oreille ou en direct. Vous ajoutez leurs prochaines réservations dans SlotPilot manuellement. Les patients qui appellent pour des disponibilités sont orientés vers le lien de liste. Quand quelque chose est annulé, SlotPilot gère la récupération.',
    'hiw.tip3.label':   '&#8679; Cas d\'usage de la file prioritaire',
    'hiw.tip3.text':    'Un patient post-opératoire a besoin de kinésithérapie dans la semaine mais votre agenda est plein. Ajoutez-le à la liste et marquez-le <strong>haute priorité</strong>. La prochaine annulation &mdash; il sera le premier contacté.',
    'hiw.tip4.label':   '&#128172; WhatsApp (prochainement)',
    'hiw.tip4.text':    'La livraison SMS peut parfois être peu fiable. L\'intégration WhatsApp Business API remplacera entièrement les SMS &mdash; même flux OUI/NON, mais via WhatsApp où les patients répondent réellement.',

    'hiw.cta.h2':   'Prêt à arrêter de perdre des créneaux ?',
    'hiw.cta.p':    'Essai gratuit de 30 jours. Pas de carte bancaire. Configuration en 10 minutes.',
    'hiw.cta.btn1': 'Commencer l\'essai gratuit',
    'hiw.cta.btn2': 'Lire la documentation',

    /* DOCS SIDEBAR */
    'docs.sidebar.overview':  'Vue d\'ensemble',
    'docs.sidebar.start':     'Démarrage',
    'docs.sidebar.concepts':  'Concepts clés',
    'docs.sidebar.api':       'Référence API',
    'docs.sidebar.deploy':    'Déploiement',
    'docs.sidebar.reference': 'Référence',
  };
})();
