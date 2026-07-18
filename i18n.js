/**
 * SlotPilot i18n — English / Hindi
 * Usage: add data-i18n="key" to any element. The value is set via innerHTML,
 * so HTML tags in translation values are allowed.
 */
(function () {
  'use strict';

  const T = {
    en: {
      /* ── NAV / FOOTER ─────────────────────────────────────── */
      'nav.home':        'Home',
      'nav.how':         'How it works',
      'nav.docs':        'Docs',
      'nav.startFree':   'Start free &rarr;',
      'footer.tagline':  'Automated waitlist &amp; no-show recovery for small clinics',
      'footer.home':     'Home',
      'footer.how':      'How it works',
      'footer.docs':     'Docs',
      'footer.pricing':  'Pricing',
      'footer.github':   'GitHub',

      /* ── INDEX — HERO ──────────────────────────────────────── */
      'hero.eyebrow':    'Physiotherapy &middot; dental &middot; chiropractic',
      'hero.h1':         'Your 2pm just<br>cancelled.<br><em>It\'s already filled.</em>',
      'hero.sub':        'SlotPilot automatically texts the <strong>next patient on your waitlist</strong> the moment a slot opens. They confirm in 15 minutes. Your receptionist does nothing.',
      'hero.cta1':       'Start 30-day free trial',
      'hero.cta2':       'See how it works',
      'hero.proof':      'Built for clinics losing &#8377;50,000&ndash;&#8377;2L/month to empty slots',

      /* ── INDEX — STATS ─────────────────────────────────────── */
      'stat.1':  'avg monthly revenue lost to no-shows per clinic',
      'stat.2':  'reduction in no-shows with automated reminders',
      'stat.3':  'offer window before next patient is tried',
      'stat.4':  'small clinics in India with no waitlist solution',

      /* ── INDEX — PROBLEM ───────────────────────────────────── */
      'prob.eyebrow':  'The problem',
      'prob.h2':       'What happens when a patient cancels today',
      'prob.sub':      'Every clinic has a &ldquo;waitlist.&rdquo; It&rsquo;s a notebook, a WhatsApp group, or names in someone&rsquo;s head. None of it works when you need it most.',

      /* ── INDEX — BEFORE ────────────────────────────────────── */
      'before.header':  'Without SlotPilot',
      'before.s1':      'Patient cancels by WhatsApp or call',
      'before.s2':      'Receptionist opens notebook, starts calling',
      'before.s3':      'First 3 numbers don&rsquo;t pick up',
      'before.s4':      '4th person already booked elsewhere',
      'before.s5':      '20 minutes wasted. Slot still empty.',
      'before.result':  'Slot goes empty &rarr; &#8377;1,500&ndash;&#8377;5,000 lost',

      /* ── INDEX — AFTER ─────────────────────────────────────── */
      'after.header':  'With SlotPilot',
      'after.s1':      'Patient cancels',
      'after.s2':      'Receptionist clicks &ldquo;Cancel&rdquo; on the slot',
      'after.s3':      'System texts next matching waitlist patient instantly',
      'after.s4':      'Patient replies YES in 3 minutes',
      'after.s5':      'Slot booked. Confirmation sent. Done.',
      'after.result':  'Slot filled &rarr; revenue recovered in 15 minutes',

      /* ── INDEX — HOW IT WORKS ──────────────────────────────── */
      'how.eyebrow':       'How it works',
      'how.h2':            'Three steps. One click from your side.',
      'how.sub':           'Everything after step two is automatic. <a href="how-it-works.html" style="color:var(--teal)">See the full walkthrough &rarr;</a>',
      'how.step1.title':   'Patients join your waitlist',
      'how.step1.desc':    'Share your unique <em>/join/your-clinic</em> link. Patients fill in name, mobile, and appointment type. No app download required.',
      'how.step1.badge':   'One-time setup',
      'how.step2.title':   'A slot opens',
      'how.step2.desc':    'Mark a slot as cancelled or no-show in SlotPilot. That&rsquo;s the one action your staff ever takes.',
      'how.step2.badge':   '15 seconds of staff time',
      'how.step3.title':   'SlotPilot handles the rest',
      'how.step3.desc':    'System texts the next matching patient, waits for YES/NO, books the slot, confirms, and schedules reminders. All automatic.',
      'how.step3.badge':   'Zero staff involvement',

      /* ── INDEX — FEATURES ──────────────────────────────────── */
      'feat.eyebrow':  'Features',
      'feat.h2':       'Everything a small clinic actually needs',
      'feat.sub':      'No hospital software. No &#8377;50,000/year enterprise plan. Just the tools to fill empty slots and cut no-shows.',
      'feat.1.title':  'Automatic SMS cascade',
      'feat.1.desc':   'Slot opens &rarr; system finds next matching patient &rarr; texts them instantly. No human in the loop.',
      'feat.2.title':  '15-minute window',
      'feat.2.desc':   'Patient gets 15 minutes to reply YES. No response or NO? Next person is tried automatically.',
      'feat.3.title':  '24h + 2h reminders',
      'feat.3.desc':   'Every booked patient gets automatic reminders &mdash; reducing no-show rates by 30&ndash;40%.',
      'feat.4.title':  'Priority queue',
      'feat.4.desc':   'Mark urgent patients as high priority. They jump the queue when a slot opens.',
      'feat.5.title':  'Public join link',
      'feat.5.desc':   'Shareable link that works on any device. Patients join in 90 seconds, no account needed.',
      'feat.6.title':  'Multi-practitioner',
      'feat.6.desc':   'Manage slots for multiple doctors or physios. Each slot assigned to the right provider.',
      'feat.7.title':  'WhatsApp integration',
      'feat.7.desc':   'Full WhatsApp Business API via MSG91 or Gupshup. Because Indians answer WhatsApp.',
      'feat.7.soon':   'Coming soon',
      'feat.8.title':  'UPI deposit on confirm',
      'feat.8.desc':   'Charge &#8377;100&ndash;200 when a waitlist patient confirms. No-show loses the deposit.',
      'feat.8.soon':   'Coming soon',
      'feat.9.title':  'Recovery dashboard',
      'feat.9.desc':   'Track recovered slots, saved revenue, and no-show rate trends by month.',
      'feat.9.soon':   'Coming soon',

      /* ── INDEX — PRACTO ────────────────────────────────────── */
      'practo.label':  'Already on Practo?',
      'practo.h2':     'Keep Practo. Add SlotPilot.',
      'practo.p1':     'Practo brings <em>new patients</em> through discovery. SlotPilot fills gaps with patients <em>already waiting</em>. They complement each other &mdash; you change nothing about Practo.',
      'practo.p2':     'Clinics using both typically see 15&ndash;20% more utilisation within the first month.',

      /* ── INDEX — INDIA ─────────────────────────────────────── */
      'india.h3':  'Built for Indian clinics',
      'india.p':   'WhatsApp over SMS, UPI deposits, &#8377; pricing &mdash; not a US product retrofitted for India.',

      /* ── INDEX — PRICING ───────────────────────────────────── */
      'price.eyebrow':  'Pricing',
      'price.h2':       'Simple. One plan. No surprises.',
      'price.sub':      'One clinic, unlimited slots, unlimited waitlist entries.',
      'price.plan':     'Clinic plan',
      'price.usd':      '~$12 USD &middot; No credit card for trial',
      'price.f1':       'Unlimited appointment slots',
      'price.f2':       'Unlimited waitlist patients',
      'price.f3':       'Automatic SMS cascade on cancellation',
      'price.f4':       '24h + 2h appointment reminders',
      'price.f5':       'Priority queue management',
      'price.f6':       'Public patient join link',
      'price.f7':       'Multi-practitioner support',
      'price.f8':       'Full SMS inbox &amp; message log',
      'price.btn':      'Start free &mdash; no credit card needed',
      'price.note':     'Cancel anytime. Most clinics recover &#8377;999 in their very first recovered slot.',

      /* ── INDEX — CTA ───────────────────────────────────────── */
      'cta.h2':   'Stop losing &#8377;80,000 a month<br>to <em>empty slots</em>.',
      'cta.sub':  'Your patients are already waiting. You just need to connect them to the gap.',
      'cta.btn1': 'Start your free trial',
      'cta.btn2': 'See how it works',

      /* ── HOW-IT-WORKS ──────────────────────────────────────── */
      'hiw.hero.eyebrow': 'How it works',
      'hiw.hero.h1':      'From cancelled slot to filled appointment &mdash; in 15 minutes.',
      'hiw.hero.p':       'SlotPilot automates the entire process of recovering a lost clinic slot. Here&rsquo;s exactly what happens, step by step, from the clinic&rsquo;s perspective and the patient&rsquo;s.',

      'hiw.1.eyebrow':  'Setup &mdash; one time',
      'hiw.1.title':    'Register your clinic and share the join link',
      'hiw.1.desc':     'Takes 10 minutes. Create a free account, enter your clinic name, configure your appointment types, and you&rsquo;re given a public link your patients can use to join your waitlist.',
      'hiw.1.card1':    'What you set up once',
      'hiw.1.li1':      'Clinic name, address, practitioner names',
      'hiw.1.li2':      'Appointment types (each type has its own waitlist queue)',
      'hiw.1.li3':      'Slot duration (15, 30, 45, or 60 minutes)',
      'hiw.1.card2':    'How patients join your waitlist',
      'hiw.1.card2p':   'Share the link anywhere: WhatsApp, your email footer, a printed card at reception, your Practo profile bio. Patients open it on their phone, enter name + mobile + appointment type, and they&rsquo;re in. No app, no account, 90 seconds.',

      'hiw.2.eyebrow':  'Daily workflow',
      'hiw.2.title':    'A patient cancels (or doesn&rsquo;t show up)',
      'hiw.2.desc':     'When a booked patient cancels, your receptionist opens SlotPilot and clicks <strong>Cancel</strong> on that slot. If a patient simply didn&rsquo;t show up, they click <strong>No-show</strong>. That&rsquo;s the only action your staff takes.',

      'hiw.3.eyebrow':  'Automatic',
      'hiw.3.title':    'SlotPilot texts the next patient on the waitlist',
      'hiw.3.desc':     'The system scans the waitlist for the next patient who needs the same appointment type, ordered by priority then join date. It sends them an SMS instantly.',
      'hiw.3.sms.label':'The SMS patients receive',

      'hiw.4.eyebrow':  '15-minute window',
      'hiw.4.title':    'Patient replies YES &mdash; slot is booked instantly',
      'hiw.4.desc1':    'If the patient replies YES within 15 minutes, the slot is booked under their name, a confirmation SMS is sent, and the slot card updates immediately. Your receptionist does nothing.',
      'hiw.4.desc2':    'If the patient replies NO, or doesn&rsquo;t respond in 15 minutes, the cascade moves to the next person automatically.',
      'hiw.4.cascade':  'Example cascade &mdash; what happens when patient #1 says NO',

      'hiw.5.eyebrow':  'Automatic reminders',
      'hiw.5.title':    'Reminders go out automatically &mdash; no action needed',
      'hiw.5.desc':     'Every booked patient automatically receives reminder SMS messages. This reduces no-show rates by 30&ndash;40%.',
      'hiw.5.card':     'Reminder schedule for a 2:00 PM appointment',

      'hiw.tips.eyebrow': 'Clinic workflows',
      'hiw.tips.h2':      'Works the same whether you use Practo or not',
      'hiw.tips.sub':     'SlotPilot plugs into the gap: the slot that just opened that your booking system can&rsquo;t fill automatically.',
      'hiw.tip1.label':   '&#128203; Clinic using Practo',
      'hiw.tip1.text':    'New patients book via Practo as normal. Your existing patients who&rsquo;ve asked to be notified join your SlotPilot waitlist. When a Practo booking cancels, mark it in SlotPilot. It fills the gap from your local waitlist &mdash; Practo never knows.',
      'hiw.tip2.label':   '&#128203; Clinic without Practo',
      'hiw.tip2.text':    'Most of your patients come by word-of-mouth or walk-in. Add bookings to SlotPilot manually. Patients who call asking about openings are told to join via the link. When anything cancels, SlotPilot handles recovery.',
      'hiw.tip3.label':   '&#8679; Priority queue use case',
      'hiw.tip3.text':    'A post-surgery patient needs physiotherapy urgently but your calendar is full. Add them to the waitlist and mark them <strong>high priority</strong>. The next cancellation &mdash; they&rsquo;re the first person texted.',
      'hiw.tip4.label':   '&#128172; WhatsApp (coming soon)',
      'hiw.tip4.text':    'SMS delivery in India can be unreliable. The WhatsApp Business API integration will replace SMS entirely &mdash; same YES/NO reply flow, through WhatsApp where Indian patients actually respond.',

      'hiw.cta.h2':   'Ready to stop losing slots?',
      'hiw.cta.p':    '30-day free trial. No credit card. Setup in 10 minutes.',
      'hiw.cta.btn1': 'Start free trial',
      'hiw.cta.btn2': 'Read the docs',

      /* ── DOCS (nav/footer shared above) ────────────────────── */
      'docs.sidebar.overview':    'Overview',
      'docs.sidebar.start':       'Getting Started',
      'docs.sidebar.concepts':    'Core Concepts',
      'docs.sidebar.api':         'API Reference',
      'docs.sidebar.deploy':      'Deployment',
      'docs.sidebar.reference':   'Reference',
    },

    /* ══════════════════════════════════════════════════════════
       HINDI TRANSLATIONS
       Natural business Hindi — code-switches where Indian
       professionals naturally do (SMS, clinic, WhatsApp, slot)
    ══════════════════════════════════════════════════════════ */
    hi: {
      /* ── NAV / FOOTER ─────────────────────────────────────── */
      'nav.home':        'होम',
      'nav.how':         'कैसे काम करता है',
      'nav.docs':        'डॉक्यूमेंटेशन',
      'nav.startFree':   'मुफ़्त शुरू करें &rarr;',
      'footer.tagline':  'छोटे क्लिनिकों के लिए ऑटोमेटेड वेटलिस्ट और नो-शो रिकवरी',
      'footer.home':     'होम',
      'footer.how':      'कैसे काम करता है',
      'footer.docs':     'डॉक्स',
      'footer.pricing':  'कीमत',
      'footer.github':   'GitHub',

      /* ── INDEX — HERO ──────────────────────────────────────── */
      'hero.eyebrow':    'फिज़ियोथेरेपी &middot; डेंटल &middot; कायरोप्रैक्टिक',
      'hero.h1':         'आपका 2 बजे का स्लॉट<br>कैंसिल हुआ।<br><em>और अभी भर भी गया।</em>',
      'hero.sub':        'SlotPilot स्लॉट खुलते ही <strong>वेटिंग लिस्ट के अगले मरीज़</strong> को अपने आप SMS भेजता है। वे 15 मिनट में कन्फर्म करते हैं। रिसेप्शनिस्ट को कुछ नहीं करना।',
      'hero.cta1':       '30 दिन का मुफ़्त ट्रायल शुरू करें',
      'hero.cta2':       'देखें कैसे काम करता है',
      'hero.proof':      'उन क्लिनिकों के लिए जो खाली स्लॉट से &#8377;50,000&ndash;&#8377;2L/महीना गँवा रहे हैं',

      /* ── INDEX — STATS ─────────────────────────────────────── */
      'stat.1':  'प्रति क्लिनिक नो-शो से औसत मासिक नुकसान',
      'stat.2':  'ऑटोमेटेड रिमाइंडर से नो-शो में कमी',
      'stat.3':  'अगले मरीज़ को try करने की समयसीमा',
      'stat.4':  'भारत में बिना वेटलिस्ट सॉल्यूशन के छोटे क्लिनिक',

      /* ── INDEX — PROBLEM ───────────────────────────────────── */
      'prob.eyebrow':  'समस्या',
      'prob.h2':       'आज जब कोई मरीज़ कैंसिल करता है तो क्या होता है',
      'prob.sub':      'हर क्लिनिक की एक &ldquo;वेटिंग लिस्ट&rdquo; होती है &mdash; एक नोटबुक, एक WhatsApp ग्रुप, या किसी के दिमाग में नाम। पर जब ज़रूरत होती है, कोई भी काम नहीं आती।',

      /* ── INDEX — BEFORE ────────────────────────────────────── */
      'before.header':  'SlotPilot के बिना',
      'before.s1':      'मरीज़ WhatsApp या फोन से कैंसिल करता है',
      'before.s2':      'रिसेप्शनिस्ट नोटबुक खोलता है, कॉल करना शुरू करता है',
      'before.s3':      'पहले 3 नंबर नहीं उठाते',
      'before.s4':      'चौथे ने कहीं और appointment ले ली',
      'before.s5':      '20 मिनट बर्बाद। स्लॉट खाली।',
      'before.result':  'स्लॉट खाली &rarr; &#8377;1,500&ndash;&#8377;5,000 का नुकसान',

      /* ── INDEX — AFTER ─────────────────────────────────────── */
      'after.header':  'SlotPilot के साथ',
      'after.s1':      'मरीज़ कैंसिल करता है',
      'after.s2':      'रिसेप्शनिस्ट स्लॉट पर &ldquo;Cancel&rdquo; क्लिक करता है',
      'after.s3':      'सिस्टम तुरंत वेटिंग लिस्ट के अगले मरीज़ को SMS करता है',
      'after.s4':      'मरीज़ 3 मिनट में YES जवाब देता है',
      'after.s5':      'स्लॉट बुक। कन्फर्मेशन भेजा। खत्म।',
      'after.result':  'स्लॉट भरा &rarr; 15 मिनट में रेवेन्यू वापस',

      /* ── INDEX — HOW IT WORKS ──────────────────────────────── */
      'how.eyebrow':       'कैसे काम करता है',
      'how.h2':            'तीन कदम। आपकी तरफ से एक क्लिक।',
      'how.sub':           'दूसरे कदम के बाद सब कुछ अपने आप होता है। <a href="how-it-works.html" style="color:var(--teal)">पूरा walkthrough देखें &rarr;</a>',
      'how.step1.title':   'मरीज़ वेटिंग लिस्ट में जुड़ते हैं',
      'how.step1.desc':    'अपना यूनिक <em>/join/your-clinic</em> लिंक शेयर करें। मरीज़ नाम, मोबाइल और appointment type भरते हैं। कोई app download नहीं।',
      'how.step1.badge':   'एक बार का सेटअप',
      'how.step2.title':   'एक स्लॉट खुलता है',
      'how.step2.desc':    'जब कोई मरीज़ कैंसिल करे या नहीं आए, SlotPilot में उस स्लॉट पर Cancel या No-show क्लिक करें। बस यही करना है।',
      'how.step2.badge':   '15 सेकंड का काम',
      'how.step3.title':   'SlotPilot बाकी संभाल लेता है',
      'how.step3.desc':    'सिस्टम सही मरीज़ ढूंढता है, तुरंत SMS करता है, YES/NO का इंतज़ार करता है, स्लॉट बुक करता है, कन्फर्मेशन भेजता है और रिमाइंडर शेड्यूल करता है।',
      'how.step3.badge':   'स्टाफ की कोई ज़रूरत नहीं',

      /* ── INDEX — FEATURES ──────────────────────────────────── */
      'feat.eyebrow':  'फीचर्स',
      'feat.h2':       'एक छोटे क्लिनिक को जो चाहिए, बस वही',
      'feat.sub':      'हॉस्पिटल सॉफ्टवेयर नहीं। &#8377;50,000/साल का enterprise plan नहीं। बस खाली स्लॉट भरने और नो-शो घटाने के tools।',
      'feat.1.title':  'ऑटोमेटिक SMS कास्केड',
      'feat.1.desc':   'स्लॉट खुला &rarr; सिस्टम अगले सही मरीज़ को ढूंढा &rarr; तुरंत SMS किया। बीच में कोई इंसान नहीं।',
      'feat.2.title':  '15 मिनट का विंडो',
      'feat.2.desc':   'मरीज़ को YES कहने के लिए 15 मिनट मिलते हैं। NO या कोई जवाब नहीं? अगले को try होता है।',
      'feat.3.title':  '24 घंटे + 2 घंटे के रिमाइंडर',
      'feat.3.desc':   'हर बुक्ड मरीज़ को ऑटोमेटिक रिमाइंडर &mdash; नो-शो में 30&ndash;40% की कमी।',
      'feat.4.title':  'प्रायोरिटी क्यू',
      'feat.4.desc':   'जरूरी मरीज़ों को high priority मार्क करें। स्लॉट खुलते ही उन्हें पहले offer होता है।',
      'feat.5.title':  'पब्लिक जॉइन लिंक',
      'feat.5.desc':   'कोई भी device पर काम करने वाला shareable लिंक। मरीज़ को account नहीं बनाना।',
      'feat.6.title':  'मल्टी-प्रैक्टिशनर',
      'feat.6.desc':   'एक clinic में कई डॉक्टर या physio के slots manage करें।',
      'feat.7.title':  'WhatsApp इंटीग्रेशन',
      'feat.7.desc':   'भारतीय WhatsApp पर जवाब देते हैं, SMS पर नहीं। MSG91 या Gupshup के ज़रिए WhatsApp Business API।',
      'feat.7.soon':   'जल्द आ रहा है',
      'feat.8.title':  'कन्फर्म पर UPI डिपॉज़िट',
      'feat.8.desc':   'वेटिंग लिस्ट के मरीज़ से &#8377;100&ndash;200 डिपॉज़िट लें। नो-शो हुए तो डिपॉज़िट जाता है।',
      'feat.8.soon':   'जल्द आ रहा है',
      'feat.9.title':  'रिकवरी डैशबोर्ड',
      'feat.9.desc':   'देखें कितने स्लॉट भरे, कितना revenue बचा, और महीने दर महीने नो-शो रेट।',
      'feat.9.soon':   'जल्द आ रहा है',

      /* ── INDEX — PRACTO ────────────────────────────────────── */
      'practo.label':  'पहले से Practo पर हैं?',
      'practo.h2':     'Practo रखें। SlotPilot जोड़ें।',
      'practo.p1':     'Practo discovery से <em>नए मरीज़</em> लाता है। SlotPilot उन मरीज़ों से gap भरता है जो <em>पहले से इंतज़ार</em> कर रहे हैं। दोनों एक-दूसरे के पूरक हैं &mdash; Practo में कुछ नहीं बदलना।',
      'practo.p2':     'दोनों साथ use करने वाले clinics पहले महीने में 15&ndash;20% ज़्यादा utilisation देखते हैं।',

      /* ── INDEX — INDIA ─────────────────────────────────────── */
      'india.h3':  'भारतीय क्लिनिकों के लिए बना है',
      'india.p':   'WhatsApp पहले, UPI डिपॉज़िट, &#8377; में कीमत &mdash; कोई US product नहीं जो भारत के लिए जोड़-तोड़ किया गया हो।',

      /* ── INDEX — PRICING ───────────────────────────────────── */
      'price.eyebrow':  'कीमत',
      'price.h2':       'सरल। एक प्लान। कोई छुपी कीमत नहीं।',
      'price.sub':      'एक clinic, असीमित slots, असीमित वेटिंग लिस्ट entries।',
      'price.plan':     'क्लिनिक प्लान',
      'price.usd':      '~$12 USD &middot; trial के लिए credit card नहीं',
      'price.f1':       'असीमित appointment slots',
      'price.f2':       'असीमित वेटिंग लिस्ट मरीज़',
      'price.f3':       'cancellation पर automatic SMS cascade',
      'price.f4':       '24 घंटे + 2 घंटे के appointment reminders',
      'price.f5':       'priority queue management',
      'price.f6':       'public patient join link',
      'price.f7':       'multi-practitioner support',
      'price.f8':       'SMS inbox + पूरा message log',
      'price.btn':      'मुफ़्त शुरू करें &mdash; credit card नहीं',
      'price.note':     'कभी भी cancel करें। ज़्यादातर clinics पहले भरे स्लॉट में ही &#8377;999 वापस पा लेते हैं।',

      /* ── INDEX — CTA ───────────────────────────────────────── */
      'cta.h2':   'हर महीने &#8377;80,000<br><em>खाली स्लॉट में मत गँवाइए।</em>',
      'cta.sub':  'आपके मरीज़ पहले से इंतज़ार कर रहे हैं। बस उन्हें खाली स्लॉट से जोड़ना है।',
      'cta.btn1': 'मुफ़्त ट्रायल शुरू करें',
      'cta.btn2': 'देखें कैसे काम करता है',

      /* ── HOW-IT-WORKS ──────────────────────────────────────── */
      'hiw.hero.eyebrow': 'कैसे काम करता है',
      'hiw.hero.h1':      'कैंसिल स्लॉट से भरी appointment &mdash; 15 मिनट में।',
      'hiw.hero.p':       'SlotPilot एक खोए हुए clinic slot को recover करने की पूरी process को automate करता है। यहाँ step by step बताया है &mdash; clinic और मरीज़ दोनों के नज़रिए से।',

      'hiw.1.eyebrow':  'सेटअप &mdash; एक बार',
      'hiw.1.title':    'Clinic register करें और join link शेयर करें',
      'hiw.1.desc':     '10 मिनट लगते हैं। Free account बनाएं, clinic का नाम डालें, appointment types configure करें, और आपको एक public link मिलता है जिसे मरीज़ waitlist join करने के लिए use कर सकते हैं।',
      'hiw.1.card1':    'एक बार सेट करने वाली चीज़ें',
      'hiw.1.li1':      'Clinic का नाम, पता, practitioner के नाम',
      'hiw.1.li2':      'Appointment types (हर type की अपनी waitlist queue होती है)',
      'hiw.1.li3':      'Slot duration (15, 30, 45, या 60 मिनट)',
      'hiw.1.card2':    'मरीज़ waitlist में कैसे जुड़ते हैं',
      'hiw.1.card2p':   'Link कहीं भी share करें: WhatsApp, email footer, reception पर printed card, Practo profile bio। मरीज़ फोन पर खोलते हैं, नाम + mobile + appointment type डालते हैं, और वे लिस्ट में हैं। कोई app नहीं, कोई account नहीं, 90 सेकंड।',

      'hiw.2.eyebrow':  'रोज़ का काम',
      'hiw.2.title':    'एक मरीज़ कैंसिल करता है (या नहीं आता)',
      'hiw.2.desc':     'जब कोई booked मरीज़ cancel करे, रिसेप्शनिस्ट SlotPilot खोलता है और उस slot पर <strong>Cancel</strong> क्लिक करता है। अगर मरीज़ बस नहीं आया, तो <strong>No-show</strong> क्लिक करता है। Staff का बस यही काम है।',

      'hiw.3.eyebrow':  'ऑटोमेटिक',
      'hiw.3.title':    'SlotPilot waitlist के अगले मरीज़ को SMS करता है',
      'hiw.3.desc':     'System उसी appointment type की waitlist में अगला मरीज़ ढूंढता है, priority फिर join date के order में। और तुरंत SMS भेजता है।',
      'hiw.3.sms.label':'मरीज़ को जो SMS मिलता है',

      'hiw.4.eyebrow':  '15 मिनट का विंडो',
      'hiw.4.title':    'मरीज़ YES बोलता है &mdash; slot तुरंत book होता है',
      'hiw.4.desc1':    'अगर मरीज़ 15 मिनट में YES reply करता है, slot उनके नाम book हो जाता है, confirmation SMS जाता है, और dashboard का slot card तुरंत update होता है। रिसेप्शनिस्ट कुछ नहीं करता।',
      'hiw.4.desc2':    'अगर मरीज़ NO बोले या 15 मिनट में कोई reply नहीं &mdash; cascade अपने आप अगले व्यक्ति पर चला जाता है।',
      'hiw.4.cascade':  'उदाहरण: जब पहला मरीज़ NO बोले तो क्या होता है',

      'hiw.5.eyebrow':  'ऑटोमेटिक रिमाइंडर',
      'hiw.5.title':    'Reminders अपने आप जाते हैं &mdash; कोई action नहीं',
      'hiw.5.desc':     'हर booked मरीज़ को automatically reminder SMS मिलते हैं। इससे नो-शो रेट 30&ndash;40% घटता है।',
      'hiw.5.card':     '2:00 PM की appointment के लिए reminder schedule',

      'hiw.tips.eyebrow': 'Clinic workflows',
      'hiw.tips.h2':      'Practo use करें या नहीं &mdash; दोनों में same तरह काम करता है',
      'hiw.tips.sub':     'SlotPilot उस gap में काम करता है जो अभी खुला है और आपका booking system अपने आप नहीं भर सकता।',
      'hiw.tip1.label':   '&#128203; Practo use करने वाला Clinic',
      'hiw.tip1.text':    'नए मरीज़ Practo से normally book करते हैं। पुराने मरीज़ जिन्होंने opening के लिए कहा है, वे SlotPilot waitlist में जुड़ते हैं। Practo booking cancel हो तो SlotPilot में mark करें। वहाँ से local waitlist भरती है &mdash; Practo को पता भी नहीं चलता।',
      'hiw.tip2.label':   '&#128203; Practo के बिना Clinic',
      'hiw.tip2.text':    'ज़्यादातर मरीज़ word-of-mouth या walk-in से आते हैं। Bookings SlotPilot में manually add करें। जो मरीज़ opening के लिए call करें, उन्हें link से waitlist join कराएं। जब भी कुछ cancel हो, SlotPilot recovery करता है।',
      'hiw.tip3.label':   '&#8679; Priority queue का use case',
      'hiw.tip3.text':    'एक post-surgery मरीज़ को urgently physiotherapy चाहिए पर calendar भरा है। Waitlist में add करें और <strong>high priority</strong> mark करें। अगला cancellation &mdash; उन्हें सबसे पहले SMS जाएगा।',
      'hiw.tip4.label':   '&#128172; WhatsApp (जल्द आ रहा है)',
      'hiw.tip4.text':    'भारत में SMS delivery unreliable हो सकती है। WhatsApp Business API integration SMS को पूरी तरह replace करेगी &mdash; same YES/NO reply flow, पर WhatsApp पर जहाँ भारतीय मरीज़ actually respond करते हैं।',

      'hiw.cta.h2':   'Slots गँवाना बंद करने के लिए तैयार हैं?',
      'hiw.cta.p':    '30 दिन का मुफ़्त trial। Credit card नहीं। 10 मिनट में setup।',
      'hiw.cta.btn1': 'मुफ़्त trial शुरू करें',
      'hiw.cta.btn2': 'Documentation पढ़ें',

      /* ── DOCS SIDEBAR ──────────────────────────────────────── */
      'docs.sidebar.overview':    'ओवरव्यू',
      'docs.sidebar.start':       'शुरुआत करें',
      'docs.sidebar.concepts':    'मुख्य अवधारणाएं',
      'docs.sidebar.api':         'API रेफरेंस',
      'docs.sidebar.deploy':      'डिप्लॉयमेंट',
      'docs.sidebar.reference':   'संदर्भ',
    }
  };

  /* ── Engine ──────────────────────────────────────────────── */

  const STORAGE_KEY = 'sp-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function applyLang(lang) {
    const dict = T[lang] || T.en;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Update language toggle button label
    const btn = document.getElementById('langBtn');
    if (btn) {
      btn.textContent = lang === 'hi' ? 'EN' : 'हि';
      btn.setAttribute('aria-label', lang === 'hi' ? 'Switch to English' : 'हिंदी में बदलें');
    }

    // Stamp lang on root so CSS can hook in if needed
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    const lang = getLang();
    applyLang(lang);

    document.getElementById('langBtn')?.addEventListener('click', () => {
      applyLang(getLang() === 'en' ? 'hi' : 'en');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = { applyLang, getLang };
})();
