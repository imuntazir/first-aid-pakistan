/* First Aid Pakistan — offline first-aid guide (English / Urdu / Roman Urdu)
   Content basis: British Red Cross, St John Ambulance, Resuscitation Council UK
   and WHO first-aid guidance, adapted for Pakistan. Reviewed November 2026.
   This is a quick reference only — not a substitute for training or medical care. */
"use strict";

/* ---------- UI strings ---------- */
var I18N = {
  en: {
    title: "First Aid Pakistan",
    tagline: "Quick first-aid help in an emergency — before Rescue 1122 arrives.",
    em_rescue: "Rescue 1122", em_edhi: "Edhi Ambulance", em_police: "Police", em_fire: "Fire Brigade",
    offline_msg: "You are offline — this saved guide still works.",
    disclaimer_title: "Important — read first",
    disclaimer_body: "This guide is a quick reference only. It is not a substitute for professional first-aid training or medical care. In any emergency, call 1122 first.",
    scene_title: "Before you start — stay safe",
    search_label: "Search first-aid topics",
    search_placeholder: "Search — e.g. CPR, burns, snake bite…",
    topics_title: "First-aid topics",
    no_results: "No topic matches your search. Try another word, or call 1122 for help.",
    back: "Back to topics",
    call_1122: "Call 1122 now",
    footer_disclaimer: "First Aid Pakistan is a free quick-reference guide. It does not replace professional first-aid training or medical care. In any emergency, call Rescue 1122 first.",
    footer_sources: "Guidance based on British Red Cross, St John Ambulance, Resuscitation Council UK and WHO advice, adapted for Pakistan. Content reviewed November 2026.",
    footer_offline: "Works offline once opened — install it from your browser menu to keep it on your phone."
  },
  ur: {
    title: "فرسٹ ایڈ پاکستان",
    tagline: "ایمرجنسی میں فوری مدد — ریسکیو 1122 کے پہنچنے سے پہلے۔",
    em_rescue: "ریسکیو 1122", em_edhi: "ایدھی ایمبولینس", em_police: "پولیس", em_fire: "فائر بریگیڈ",
    offline_msg: "آپ آف لائن ہیں — یہ محفوظ شدہ گائیڈ اب بھی کام کرے گی۔",
    disclaimer_title: "اہم — پہلے پڑھیں",
    disclaimer_body: "یہ گائیڈ صرف فوری رہنمائی کے لیے ہے۔ یہ پیشہ ورانہ فرسٹ ایڈ ٹریننگ یا طبی دیکھ بھال کا متبادل نہیں ہے۔ کسی بھی ایمرجنسی میں پہلے 1122 پر کال کریں۔",
    scene_title: "شروع کرنے سے پہلے — محفوظ رہیں",
    search_label: "فرسٹ ایڈ کے موضوعات تلاش کریں",
    search_placeholder: "تلاش کریں — مثلاً سی پی آر، جلنا، سانپ کا کاٹنا…",
    topics_title: "فرسٹ ایڈ کے موضوعات",
    no_results: "آپ کی تلاش سے کوئی موضوع نہیں ملا۔ کوئی اور لفظ آزمائیں، یا مدد کے لیے 1122 پر کال کریں۔",
    back: "موضوعات پر واپس جائیں",
    call_1122: "ابھی 1122 پر کال کریں",
    footer_disclaimer: "فرسٹ ایڈ پاکستان ایک مفت فوری رہنمائی گائیڈ ہے۔ یہ پیشہ ورانہ فرسٹ ایڈ ٹریننگ یا طبی دیکھ بھال کا متبادل نہیں ہے۔ کسی بھی ایمرجنسی میں پہلے ریسکیو 1122 پر کال کریں۔",
    footer_sources: "رہنمائی برٹش ریڈ کراس، سینٹ جان ایمبولینس، ریسیسیٹیشن کونسل یوکے اور عالمی ادارہ صحت (WHO) کی ہدایات پر مبنی ہے، پاکستان کے مطابق ڈھالی گئی۔ مواد کا جائزہ نومبر 2026 میں لیا گیا۔",
    footer_offline: "ایک بار کھلنے کے بعد آف لائن بھی کام کرتی ہے — اپنے فون پر رکھنے کے لیے براؤزر مینیو سے انسٹال کریں۔"
  },
  ro: {
    title: "First Aid Pakistan",
    tagline: "Emergency mein fori madad — Rescue 1122 ke pohanchne se pehle.",
    em_rescue: "Rescue 1122", em_edhi: "Edhi Ambulance", em_police: "Police", em_fire: "Fire Brigade",
    offline_msg: "Aap offline hain — yeh save shuda guide ab bhi kaam kare gi.",
    disclaimer_title: "Ahem — pehle parhein",
    disclaimer_body: "Yeh guide sirf fori rehnumai ke liye hai. Yeh professional first-aid training ya tibbi dekh-bhaal ka mutabadil nahi hai. Kisi bhi emergency mein pehle 1122 par call karein.",
    scene_title: "Shuru karne se pehle — mehfooz rahein",
    search_label: "First-aid ke mauzu talaash karein",
    search_placeholder: "Talaash karein — masalan CPR, jalna, saanp ka kaatna…",
    topics_title: "First-aid ke mauzu",
    no_results: "Aap ki talaash se koi mauzu nahi mila. Koi aur lafz azmayein, ya madad ke liye 1122 par call karein.",
    back: "Mauzu par wapas jayein",
    call_1122: "Abhi 1122 par call karein",
    footer_disclaimer: "First Aid Pakistan aik muft fori rehnumai guide hai. Yeh professional first-aid training ya tibbi dekh-bhaal ka mutabadil nahi hai. Kisi bhi emergency mein pehle Rescue 1122 par call karein.",
    footer_sources: "Rehnumai British Red Cross, St John Ambulance, Resuscitation Council UK aur WHO ki hidayaat par mabni hai, Pakistan ke mutabiq dhaali gayi. Mawaad ka jaiza November 2026 mein liya gaya.",
    footer_offline: "Aik baar khulne ke baad offline bhi kaam karti hai — apne phone par rakhnay ke liye browser menu se install karein."
  }
};

/* ---------- Scene safety ("before you start") ---------- */
var SCENE = {
  en: [
    "Make sure the scene is safe for you — do not become a second casualty.",
    "If there is traffic, fire, electricity or violence, move to safety first or wait for help.",
    "Call 1122 (or ask someone nearby to call) as early as possible — put the phone on speaker.",
    "Check the person: are they responsive? Are they breathing normally?",
    "If they are not breathing normally, start CPR. If they are breathing but unresponsive, put them in the recovery position.",
    "Do not move someone with a suspected spine injury unless they are in danger."
  ],
  ur: [
    "یقینی بنائیں کہ جگہ آپ کے لیے محفوظ ہے — خود دوسرا مریض نہ بنیں۔",
    "اگر ٹریفک، آگ، بجلی یا تشدد کا خطرہ ہو تو پہلے محفوظ جگہ پر جائیں یا مدد کا انتظار کریں۔",
    "جلد از جلد 1122 پر کال کریں (یا کسی سے کہیں کہ کال کرے) — فون اسپیکر پر رکھیں۔",
    "مریض کو چیک کریں: کیا وہ جواب دے رہا ہے؟ کیا وہ عام طور پر سانس لے رہا ہے؟",
    "اگر وہ عام طور پر سانس نہیں لے رہا تو سی پی آر شروع کریں۔ اگر سانس لے رہا ہے مگر بے ہوش ہے تو اسے ریکوری پوزیشن میں لٹائیں۔",
    "ریڑھ کی ہڈی کی چوٹ کا شبہ ہو تو مریض کو نہ ہلائیں، جب تک وہ خطرے میں نہ ہو۔"
  ],
  ro: [
    "Yaqeeni banayein ke jagah aap ke liye mehfooz hai — khud doosra mareez na banein.",
    "Agar traffic, aag, bijli ya tashaddud ka khatra ho to pehle mehfooz jagah par jayein ya madad ka intezar karein.",
    "Jald az jald 1122 par call karein (ya kisi se kahein ke call kare) — phone speaker par rakhein.",
    "Mareez ko check karein: kya woh jawab de raha hai? Kya woh aam tor par saans le raha hai?",
    "Agar woh aam tor par saans nahi le raha to CPR shuru karein. Agar saans le raha hai magar behosh hai to use recovery position mein litayein.",
    "Reedh ki haddi ki chot ka shak ho to mareez ko na hilayein, jab tak woh khatre mein na ho."
  ]
};

/* ---------- Topics: each has icon, and en / ur / ro title, desc, steps, note ---------- */
var TOPICS = [
  {
    id: "cpr-adult", icon: "❤️",
    en: {
      title: "CPR — Adult",
      desc: "Someone is unresponsive and not breathing normally.",
      steps: [
        "Call 1122 now, or ask someone to call. Put the phone on speaker.",
        "Lay the person flat on their back on a firm surface.",
        "Place the heel of one hand in the centre of the chest, the other hand on top, fingers interlocked.",
        "Press down hard and fast: 5–6 cm deep, 100–120 times a minute. Let the chest rise fully between pushes.",
        "If you are trained, give 2 rescue breaths after every 30 compressions. If not, keep giving compressions without stopping.",
        "Keep going until help arrives or the person starts breathing normally. Call 1122."
      ],
      note: "Compressions 5–6 cm deep at 100–120 per minute — Resuscitation Council UK guidance."
    },
    ur: {
      title: "سی پی آر — بالغ",
      desc: "کوئی شخص بے ہوش ہے اور عام طور پر سانس نہیں لے رہا۔",
      steps: [
        "ابھی 1122 پر کال کریں یا کسی سے کہیں کہ کال کرے۔ فون اسپیکر پر رکھیں۔",
        "مریض کو سخت سطح پر پیٹھ کے بل سیدھا لٹائیں۔",
        "ایک ہاتھ کی ہتھیلی سینے کے درمیان رکھیں، دوسرا ہاتھ اس کے اوپر رکھ کر انگلیاں آپس میں پھنسا لیں۔",
        "زور سے اور تیزی سے دبائیں: 5 سے 6 سینٹی میٹر گہرائی تک، ایک منٹ میں 100 سے 120 بار۔ ہر دباؤ کے بعد سینے کو پوری طرح اوپر آنے دیں۔",
        "اگر آپ کو تربیت حاصل ہے تو ہر 30 دباؤ کے بعد 2 بار سانس دیں۔ اگر نہیں تو بغیر رکے دباؤ جاری رکھیں۔",
        "مدد آنے تک یا مریض کے عام سانس لینے تک جاری رکھیں۔ 1122 پر کال کریں۔"
      ],
      note: "دباؤ 5 سے 6 سینٹی میٹر گہرا، ایک منٹ میں 100 سے 120 بار — ریسیسیٹیشن کونسل یوکے کی ہدایت۔"
    },
    ro: {
      title: "CPR — Baray (Adult)",
      desc: "Koi shakhs behosh hai aur aam tor par saans nahi le raha.",
      steps: [
        "Abhi 1122 par call karein ya kisi se kahein ke call kare. Phone speaker par rakhein.",
        "Mareez ko sakht satah par peeth ke bal seedha litayein.",
        "Aik haath ki hatheli seenay ke darmiyan rakhein, doosra haath us ke oopar rakh kar ungliyan aapas mein phansa lein.",
        "Zor se aur tezi se dabayein: 5 se 6 cm gehrai tak, aik minute mein 100 se 120 baar. Har dabao ke baad seenay ko poori tarah oopar aane dein.",
        "Agar aap ko training haasil hai to har 30 dabao ke baad 2 baar saans dein. Agar nahi to baghair ruke dabao jaari rakhein.",
        "Madad aane tak ya mareez ke aam saans lene tak jaari rakhein. 1122 par call karein."
      ],
      note: "Dabao 5 se 6 cm gehra, aik minute mein 100 se 120 baar — Resuscitation Council UK ki hidayat."
    }
  },
  {
    id: "cpr-child", icon: "👶",
    en: {
      title: "CPR — Child & Infant",
      desc: "A baby or child is unresponsive and not breathing normally.",
      steps: [
        "Call 1122 now, or ask someone to call. If you are alone with a child, give 1 minute of CPR first, then call.",
        "Lay the child flat on a firm surface. Tilt the head back gently and lift the chin.",
        "For a child (1 year to puberty): use one hand in the centre of the chest. Press about 5 cm deep.",
        "For a baby (under 1 year): use two fingers in the centre of the chest. Press about 4 cm deep.",
        "Give 30 compressions at 100–120 a minute, then 2 gentle rescue breaths. Repeat.",
        "Keep going until help arrives or the child starts breathing normally. Call 1122."
      ],
      note: "Child: one hand, about 5 cm deep. Baby: two fingers, about 4 cm deep — 30 compressions to 2 breaths."
    },
    ur: {
      title: "سی پی آر — بچہ اور شیر خوار",
      desc: "بچہ یا شیر خوار بے ہوش ہے اور عام طور پر سانس نہیں لے رہا۔",
      steps: [
        "ابھی 1122 پر کال کریں یا کسی سے کہیں کہ کال کرے۔ اگر آپ بچے کے ساتھ اکیلے ہیں تو پہلے 1 منٹ سی پی آر دیں، پھر کال کریں۔",
        "بچے کو سخت سطح پر سیدھا لٹائیں۔ سر کو ہلکے سے پیچھے کی طرف جھکائیں اور ٹھوڑی اوپر اٹھائیں۔",
        "بچے (1 سال سے بلوغت تک) کے لیے: سینے کے درمیان ایک ہاتھ استعمال کریں۔ تقریباً 5 سینٹی میٹر گہرائی تک دبائیں۔",
        "شیر خوار (1 سال سے کم) کے لیے: سینے کے درمیان دو انگلیاں استعمال کریں۔ تقریباً 4 سینٹی میٹر گہرائی تک دبائیں۔",
        "ایک منٹ میں 100 سے 120 کی رفتار سے 30 دباؤ دیں، پھر 2 ہلکی سانسیں دیں۔ دہرائیں۔",
        "مدد آنے تک یا بچے کے عام سانس لینے تک جاری رکھیں۔ 1122 پر کال کریں۔"
      ],
      note: "بچہ: ایک ہاتھ، تقریباً 5 سینٹی میٹر گہرا۔ شیر خوار: دو انگلیاں، تقریباً 4 سینٹی میٹر گہرا — 30 دباؤ اور 2 سانسیں۔"
    },
    ro: {
      title: "CPR — Bacha aur Infant",
      desc: "Bacha ya sheer khwar behosh hai aur aam tor par saans nahi le raha.",
      steps: [
        "Abhi 1122 par call karein ya kisi se kahein ke call kare. Agar aap bachay ke saath akelay hain to pehle 1 minute CPR dein, phir call karein.",
        "Bachay ko sakht satah par seedha litayein. Sar ko halke se peechay ki taraf jhukayein aur thuddi oopar uthayein.",
        "Bachay (1 saal se baloghat tak) ke liye: seenay ke darmiyan aik haath istemal karein. Taqreeban 5 cm gehrai tak dabayein.",
        "Sheer khwar (1 saal se kam) ke liye: seenay ke darmiyan do ungliyan istemal karein. Taqreeban 4 cm gehrai tak dabayein.",
        "Aik minute mein 100 se 120 ki raftar se 30 dabao dein, phir 2 halki saansein dein. Dohrayein.",
        "Madad aane tak ya bachay ke aam saans lene tak jaari rakhein. 1122 par call karein."
      ],
      note: "Bacha: aik haath, taqreeban 5 cm gehra. Sheer khwar: do ungliyan, taqreeban 4 cm gehra — 30 dabao aur 2 saansein."
    }
  },
  {
    id: "choking-adult", icon: "😮‍💨",
    en: {
      title: "Choking — Adult",
      desc: "Someone cannot breathe, speak or cough properly.",
      steps: [
        "Ask: “Are you choking?” If they can cough, speak or breathe, encourage them to keep coughing.",
        "If they cannot cough or breathe, lean them forward and support their upper body.",
        "Give 5 sharp back blows between the shoulder blades with the heel of your hand. Check the mouth after each blow.",
        "If that fails, stand behind them. Make a fist between the belly button and the bottom of the chest, grasp it with your other hand, and pull sharply inwards and upwards — up to 5 times.",
        "If it still has not cleared, call 1122 at once and keep alternating 5 back blows and 5 abdominal thrusts until help arrives.",
        "If they become unresponsive, lay them down and start CPR. Call 1122."
      ],
      note: "5 back blows, then 5 abdominal thrusts, repeated — St John Ambulance guidance."
    },
    ur: {
      title: "گلا گھٹنا — بالغ",
      desc: "کوئی شخص سانس نہیں لے سکتا، بول نہیں سکتا یا ٹھیک سے کھانس نہیں سکتا۔",
      steps: [
        "پوچھیں: 'کیا آپ کا گلا گھٹ رہا ہے؟' اگر وہ کھانس، بول یا سانس لے سکتے ہیں تو انہیں کھانستے رہنے کی ترغیب دیں۔",
        "اگر وہ کھانس یا سانس نہیں لے سکتے تو انہیں آگے کی طرف جھکائیں اور اوپری جسم کو سہارا دیں۔",
        "ہتھیلی کی ایڑی سے کندھوں کے درمیان پیٹھ پر 5 زور دار ضربیں لگائیں۔ ہر ضرب کے بعد منہ چیک کریں۔",
        "اگر یہ کام نہ کرے تو ان کے پیچھے کھڑے ہوں۔ ناف اور سینے کے نچلے حصے کے درمیان مٹھی بنائیں، دوسرے ہاتھ سے پکڑیں اور اندر اور اوپر کی طرف زور سے کھینچیں — 5 بار تک۔",
        "اگر رکاوٹ ابھی تک نہ نکلی ہو تو فوراً 1122 پر کال کریں اور مدد آنے تک 5 پیٹھ کی ضربیں اور 5 پیٹ کے دباؤ باری باری جاری رکھیں۔",
        "اگر وہ بے ہوش ہو جائیں تو انہیں لٹا کر سی پی آر شروع کریں۔ 1122 پر کال کریں۔"
      ],
      note: "5 پیٹھ کی ضربیں، پھر 5 پیٹ کے دباؤ، دہراتے رہیں — سینٹ جان ایمبولینس کی ہدایت۔"
    },
    ro: {
      title: "Gala Ghutna — Baray (Adult)",
      desc: "Koi shakhs saans nahi le sakta, bol nahi sakta ya theek se khaans nahi sakta.",
      steps: [
        "Poochein: 'Kya aap ka gala ghut raha hai?' Agar woh khaans, bol ya saans le sakte hain to unhein khaanste rehne ki targheeb dein.",
        "Agar woh khaans ya saans nahi le sakte to unhein aagay ki taraf jhukayein aur oopri jism ko sahara dein.",
        "Hatheli ki airri se kandhon ke darmiyan peeth par 5 zor daar zarbain lagayein. Har zarb ke baad munh check karein.",
        "Agar yeh kaam na kare to un ke peechay kharay hon. Naaf aur seenay ke nichlay hissay ke darmiyan mutthi banayein, doosray haath se pakrein aur andar aur oopar ki taraf zor se kheenchein — 5 baar tak.",
        "Agar rukawat abhi tak na nikli ho to foran 1122 par call karein aur madad aane tak 5 peeth ki zarbain aur 5 pait ke dabao baari baari jaari rakhein.",
        "Agar woh behosh ho jayein to unhein lita kar CPR shuru karein. 1122 par call karein."
      ],
      note: "5 peeth ki zarbain, phir 5 pait ke dabao, dohratay rahein — St John Ambulance ki hidayat."
    }
  },
  {
    id: "choking-child", icon: "🧒",
    en: {
      title: "Choking — Baby & Child",
      desc: "A baby or child cannot breathe, cry or cough properly.",
      steps: [
        "If the baby or child can cough or cry, encourage them to keep coughing. Do not put your fingers in their mouth unless you can see the object.",
        "For a baby (under 1 year): lay them face down along your forearm, head lower than the chest. Give 5 back blows between the shoulder blades.",
        "If that fails, turn the baby face up and give 5 chest thrusts with two fingers in the centre of the chest.",
        "For a child over 1 year: give 5 back blows, then 5 abdominal thrusts (or chest thrusts if the child is small).",
        "Repeat 5 back blows and 5 thrusts until the object comes out or help arrives.",
        "If the baby or child becomes unresponsive, start CPR and call 1122 at once."
      ],
      note: "Never use abdominal thrusts on a baby under 1 year — use back blows and chest thrusts."
    },
    ur: {
      title: "گلا گھٹنا — بچہ اور شیر خوار",
      desc: "بچہ یا شیر خوار سانس نہیں لے سکتا، رو نہیں سکتا یا ٹھیک سے کھانس نہیں سکتا۔",
      steps: [
        "اگر بچہ کھانس یا رو سکتا ہے تو اسے کھانستے رہنے کی ترغیب دیں۔ انگلیاں منہ میں نہ ڈالیں جب تک چیز نظر نہ آئے۔",
        "شیر خوار (1 سال سے کم) کے لیے: اسے چہرہ نیچے کی طرف اپنی بانہہ پر لٹائیں، سر سینے سے نیچے ہو۔ کندھوں کے درمیان پیٹھ پر 5 ضربیں لگائیں۔",
        "اگر یہ کام نہ کرے تو بچے کو چہرہ اوپر کر کے سینے کے درمیان دو انگلیوں سے 5 سینے کے دباؤ دیں۔",
        "1 سال سے بڑے بچے کے لیے: 5 پیٹھ کی ضربیں دیں، پھر 5 پیٹ کے دباؤ (یا چھوٹے بچے کے لیے سینے کے دباؤ) دیں۔",
        "چیز نکلنے یا مدد آنے تک 5 ضربیں اور 5 دباؤ دہراتے رہیں۔",
        "اگر بچہ بے ہوش ہو جائے تو سی پی آر شروع کریں اور فوراً 1122 پر کال کریں۔"
      ],
      note: "1 سال سے کم عمر بچے پر پیٹ کے دباؤ کبھی استعمال نہ کریں — پیٹھ کی ضربیں اور سینے کے دباؤ استعمال کریں۔"
    },
    ro: {
      title: "Gala Ghutna — Bacha aur Infant",
      desc: "Bacha ya sheer khwar saans nahi le sakta, ro nahi sakta ya theek se khaans nahi sakta.",
      steps: [
        "Agar bacha khaans ya ro sakta hai to use khaanste rehne ki targheeb dein. Ungliyan munh mein na dalein jab tak cheez nazar na aaye.",
        "Sheer khwar (1 saal se kam) ke liye: use chehra neechay ki taraf apni baanh par litayein, sar seenay se neechay ho. Kandhon ke darmiyan peeth par 5 zarbain lagayein.",
        "Agar yeh kaam na kare to bachay ko chehra oopar kar ke seenay ke darmiyan do ungliyon se 5 seenay ke dabao dein.",
        "1 saal se baray bachay ke liye: 5 peeth ki zarbain dein, phir 5 pait ke dabao (ya chhotay bachay ke liye seenay ke dabao) dein.",
        "Cheez nikalne ya madad aane tak 5 zarbain aur 5 dabao dohratay rahein.",
        "Agar bacha behosh ho jaye to CPR shuru karein aur foran 1122 par call karein."
      ],
      note: "1 saal se kam umar bachay par pait ke dabao kabhi istemal na karein — peeth ki zarbain aur seenay ke dabao istemal karein."
    }
  },
  {
    id: "bleeding", icon: "🩸",
    en: {
      title: "Severe Bleeding",
      desc: "Blood is pouring or spurting from a wound.",
      steps: [
        "Call 1122 now, or ask someone to call. Put the phone on speaker so you can keep pressing.",
        "Press firmly on the wound with a clean cloth, bandage or your hand. Keep pressing — do not keep lifting it to look.",
        "If blood soaks through, add another cloth on top. Do not remove the first one.",
        "If the bleeding is from an arm or leg, raise it above the level of the heart if you can do so without causing more pain.",
        "Do not remove an object stuck in the wound. Press around it and get help.",
        "Keep the person warm and still. Stay with them and keep pressing until help arrives. Call 1122."
      ],
      note: "Direct pressure is the first step for severe bleeding — British Red Cross guidance."
    },
    ur: {
      title: "شدید خون بہنا",
      desc: "زخم سے خون تیزی سے بہہ رہا ہے یا پھوٹ رہا ہے۔",
      steps: [
        "ابھی 1122 پر کال کریں یا کسی سے کہیں کہ کال کرے۔ فون اسپیکر پر رکھیں تاکہ آپ دباؤ جاری رکھ سکیں۔",
        "صاف کپڑے، پٹی یا ہاتھ سے زخم پر مضبوطی سے دباؤ ڈالیں۔ دباؤ جاری رکھیں — بار بار اٹھا کر نہ دیکھیں۔",
        "اگر خون کپڑے سے گزر جائے تو اوپر ایک اور کپڑا رکھ دیں۔ پہلا کپڑا نہ ہٹائیں۔",
        "اگر بازو یا ٹانگ سے خون بہہ رہا ہو تو اسے دل کی سطح سے اوپر اٹھائیں، اگر ایسا کرنے سے درد نہ بڑھے۔",
        "زخم میں پھنسی ہوئی چیز نہ نکالیں۔ اس کے ارد گرد دباؤ ڈالیں اور مدد بلائیں۔",
        "مریض کو گرم اور ساکن رکھیں۔ ان کے ساتھ رہیں اور مدد آنے تک دباؤ جاری رکھیں۔ 1122 پر کال کریں۔"
      ],
      note: "شدید خون بہنے پر پہلا قدم براہ راست دباؤ ہے — برٹش ریڈ کراس کی ہدایت۔"
    },
    ro: {
      title: "Shadeed Khoon Behna",
      desc: "Zakhm se khoon tezi se beh raha hai ya phoot raha hai.",
      steps: [
        "Abhi 1122 par call karein ya kisi se kahein ke call kare. Phone speaker par rakhein taake aap dabao jaari rakh sakein.",
        "Saaf kapray, patti ya haath se zakhm par mazbooti se dabao dalein. Dabao jaari rakhein — baar baar utha kar na dekhein.",
        "Agar khoon kapray se guzar jaye to oopar aik aur kapra rakh dein. Pehla kapra na hatayein.",
        "Agar baazu ya taang se khoon beh raha ho to use dil ki satah se oopar uthayein, agar aisa karne se dard na barhe.",
        "Zakhm mein phansi hui cheez na nikalain. Us ke ird gird dabao dalein aur madad bulayein.",
        "Mareez ko garam aur sakin rakhein. Un ke saath rahein aur madad aane tak dabao jaari rakhein. 1122 par call karein."
      ],
      note: "Shadeed khoon behne par pehla qadam barah-e-raast dabao hai — British Red Cross ki hidayat."
    }
  },
  {
    id: "burns", icon: "🔥",
    en: {
      title: "Burns & Scalds",
      desc: "Skin burned by fire, hot water, oil or steam.",
      steps: [
        "Move the person away from the heat. If clothes are on fire: stop, drop and roll.",
        "Cool the burn under cool running water for at least 20 minutes. Do this as soon as possible.",
        "Do NOT use ice, butter, toothpaste, oil or home pastes — they make it worse.",
        "Remove rings, watches and loose clothing near the burn before it swells — but do not peel off anything stuck to the burn.",
        "After cooling, loosely cover the burn with cling film or a clean plastic bag or clean cloth.",
        "Call 1122 or go to hospital at once if the burn is large, deep, on the face, hands or genitals, or if a baby or child is burned."
      ],
      note: "Cool running water for at least 20 minutes, never ice — British Red Cross and NHS guidance."
    },
    ur: {
      title: "جلنا اور جھلسنا",
      desc: "آگ، گرم پانی، تیل یا بھاپ سے جلد جل گئی ہے۔",
      steps: [
        "مریض کو گرمی سے دور لے جائیں۔ اگر کپڑوں کو آگ لگی ہو تو: رکیں، زمین پر لیٹیں اور لوٹیں۔",
        "جلنے والی جگہ کو ٹھنڈے بہتے پانی کے نیچے کم از کم 20 منٹ تک ٹھنڈا کریں۔ یہ جلد از جلد کریں۔",
        "برف، مکھن، ٹوتھ پیسٹ، تیل یا گھریلو لیپ ہرگز استعمال نہ کریں — یہ نقصان بڑھاتے ہیں۔",
        "سوجن سے پہلے جلنے والی جگہ کے قریب انگوٹھی، گھڑی اور ڈھیلے کپڑے اتار دیں — مگر جو چیز جلنے والی جگہ سے چپکی ہو اسے نہ کھینچیں۔",
        "ٹھنڈا کرنے کے بعد جلنے والی جگہ کو کلنگ فلم، صاف پلاسٹک کی تھیلی یا صاف کپڑے سے ڈھیلا ڈھانپ دیں۔",
        "اگر جلنا بڑا یا گہرا ہو، چہرے، ہاتھوں یا شرمگاہ پر ہو، یا بچہ جلا ہو تو فوراً 1122 پر کال کریں یا اسپتال جائیں۔"
      ],
      note: "ٹھنڈا بہتا پانی کم از کم 20 منٹ تک، کبھی برف نہیں — برٹش ریڈ کراس اور NHS کی ہدایت۔"
    },
    ro: {
      title: "Jalna aur Jhalasna",
      desc: "Aag, garam paani, tail ya bhaap se jild jal gayi hai.",
      steps: [
        "Mareez ko garmi se door le jayein. Agar kapron ko aag lagi ho to: rukein, zameen par letein aur lotein.",
        "Jalne wali jagah ko thanday behtay paani ke neechay kam az kam 20 minute tak thanda karein. Yeh jald az jald karein.",
        "Baraf, makkhan, toothpaste, tail ya gharelu laip hargiz istemal na karein — yeh nuqsan barhatay hain.",
        "Soojan se pehle jalne wali jagah ke qareeb angoothi, ghari aur dheelay kapray utaar dein — magar jo cheez jalne wali jagah se chipki ho use na kheenchein.",
        "Thanda karne ke baad jalne wali jagah ko cling film, saaf plastic ki thaili ya saaf kapray se dheela dhaanp dein.",
        "Agar jalna bara ya gehra ho, chehray, haathon ya sharamgah par ho, ya bacha jala ho to foran 1122 par call karein ya hospital jayein."
      ],
      note: "Thanda behta paani kam az kam 20 minute tak, kabhi baraf nahi — British Red Cross aur NHS ki hidayat."
    }
  },
  {
    id: "heatstroke", icon: "☀️",
    en: {
      title: "Heatstroke",
      desc: "Hot, confused or collapsed after time in the heat.",
      steps: [
        "Heatstroke is an emergency: hot, dry skin or confusion after heat exposure. Call 1122 at once.",
        "Move them to a cool, shaded place. Remove outer clothing.",
        "Cool them fast: wrap them in a cold wet sheet and keep pouring cold water over it, or sponge them with cool water and fan them.",
        "Put cold packs or cold wet cloths on the neck, armpits and groin.",
        "If they are awake and can swallow, give small sips of cool water. Do not give anything to drink if they are confused or unconscious.",
        "Keep cooling until help arrives. If they stop breathing normally, start CPR. Call 1122."
      ],
      note: "Cool fast and call for help — heatstroke can kill. British Red Cross guidance."
    },
    ur: {
      title: "لو لگنا (ہیٹ اسٹروک)",
      desc: "گرمی میں رہنے کے بعد جسم گرم، الجھن یا بے ہوشی۔",
      steps: [
        "ہیٹ اسٹروک ایمرجنسی ہے: گرمی میں رہنے کے بعد جسم گرم، خشک یا ذہنی الجھن ہو۔ فوراً 1122 پر کال کریں۔",
        "انہیں ٹھنڈی، سایہ دار جگہ پر لے جائیں۔ اوپری کپڑے اتار دیں۔",
        "انہیں تیزی سے ٹھنڈا کریں: ٹھنڈی گیلی چادر میں لپیٹیں اور اس پر ٹھنڈا پانی ڈالتے رہیں، یا ٹھنڈے پانی سے پونچھیں اور پنکھا جھلیں۔",
        "گردن، بغلوں اور رانوں کے جوڑ پر ٹھنڈے پیک یا ٹھنڈے گیلے کپڑے رکھیں۔",
        "اگر وہ ہوش میں ہوں اور نگل سکتے ہوں تو ٹھنڈے پانی کے چھوٹے گھونٹ دیں۔ اگر وہ الجھن میں ہوں یا بے ہوش ہوں تو کچھ نہ پلائیں۔",
        "مدد آنے تک ٹھنڈا کرتے رہیں۔ اگر وہ عام سانس لینا بند کر دیں تو سی پی آر شروع کریں۔ 1122 پر کال کریں۔"
      ],
      note: "تیزی سے ٹھنڈا کریں اور مدد بلائیں — ہیٹ اسٹروک جان لیوا ہو سکتا ہے۔ برٹش ریڈ کراس کی ہدایت۔"
    },
    ro: {
      title: "Loo Lagna (Heatstroke)",
      desc: "Garmi mein rehne ke baad jism garam, uljhan ya behoshi.",
      steps: [
        "Heatstroke emergency hai: garmi mein rehne ke baad jism garam, khushk ya zehni uljhan ho. Foran 1122 par call karein.",
        "Unhein thandi, saya daar jagah par le jayein. Oopri kapray utaar dein.",
        "Unhein tezi se thanda karein: thandi geeli chadar mein lapetein aur us par thanda paani daaltay rahein, ya thanday paani se ponchhein aur pankha jhalein.",
        "Gardan, baghlon aur raanon ke jor par thanday pack ya thanday geelay kapray rakhein.",
        "Agar woh hosh mein hon aur nigal sakte hon to thanday paani ke chhotay ghoont dein. Agar woh uljhan mein hon ya behosh hon to kuch na pilayein.",
        "Madad aane tak thanda kartay rahein. Agar woh aam saans lena band kar dein to CPR shuru karein. 1122 par call karein."
      ],
      note: "Tezi se thanda karein aur madad bulayein — heatstroke jaan lewa ho sakta hai. British Red Cross ki hidayat."
    }
  },
  {
    id: "fracture", icon: "🦴",
    en: {
      title: "Fracture (Broken Bone)",
      desc: "A limb looks bent, swollen or cannot be moved.",
      steps: [
        "Call 1122, especially if the bone is sticking out, the limb looks deformed, or the person cannot move it.",
        "Keep the injured part still. Do not try to push a bone back into place.",
        "Support the limb with a rolled blanket, pillow or sling. Do not move the person more than you must.",
        "If there is bleeding, press gently around the wound — never press directly on a bone sticking out.",
        "Apply a cold cloth or ice pack wrapped in cloth to reduce swelling, for up to 20 minutes at a time.",
        "If the person feels faint or the injury is to the head, neck or back, keep them still and wait for help. Call 1122."
      ],
      note: "Never try to straighten a broken bone — support it still and get help."
    },
    ur: {
      title: "ہڈی ٹوٹنا",
      desc: "عضو ٹیڑھا، سوجا ہوا لگتا ہے یا ہلایا نہیں جا سکتا۔",
      steps: [
        "1122 پر کال کریں، خاص طور پر اگر ہڈی باہر نکلی ہو، عضو ٹیڑھا نظر آئے یا مریض اسے ہلا نہ سکے۔",
        "زخمی حصے کو ساکن رکھیں۔ ہڈی کو واپس اپنی جگہ دھکیلنے کی کوشش نہ کریں۔",
        "عضو کو لپٹے ہوئے کمبل، تکیے یا پٹی سے سہارا دیں۔ مریض کو ضرورت سے زیادہ نہ ہلائیں۔",
        "اگر خون بہہ رہا ہو تو زخم کے ارد گرد ہلکے سے دباؤ ڈالیں — باہر نکلی ہوئی ہڈی پر براہ راست دباؤ نہ ڈالیں۔",
        "سوجن کم کرنے کے لیے کپڑے میں لپٹی برف یا ٹھنڈا کپڑا لگائیں، ایک بار میں 20 منٹ تک۔",
        "اگر مریض کو چکر آ رہے ہوں یا چوٹ سر، گردن یا کمر پر ہو تو انہیں ساکن رکھیں اور مدد کا انتظار کریں۔ 1122 پر کال کریں۔"
      ],
      note: "ٹوٹی ہوئی ہڈی کو سیدھا کرنے کی کوشش کبھی نہ کریں — اسے ساکن سہارا دیں اور مدد بلائیں۔"
    },
    ro: {
      title: "Haddi Tootna",
      desc: "Azu tedha, sooja hua lagta hai ya hilaya nahi ja sakta.",
      steps: [
        "1122 par call karein, khaas tor par agar haddi bahar nikli ho, azu tedha nazar aaye ya mareez use hila na sakay.",
        "Zakhmi hissay ko sakin rakhein. Haddi ko wapas apni jagah dhakelnay ki koshish na karein.",
        "Azu ko liptay hue kambal, takiye ya patti se sahara dein. Mareez ko zaroorat se zyada na hilayein.",
        "Agar khoon beh raha ho to zakhm ke ird gird halke se dabao dalein — bahar nikli hui haddi par barah-e-raast dabao na dalein.",
        "Soojan kam karne ke liye kapray mein lipti baraf ya thanda kapra lagayein, aik baar mein 20 minute tak.",
        "Agar mareez ko chakkar aa rahay hon ya chot sar, gardan ya kamar par ho to unhein sakin rakhein aur madad ka intezar karein. 1122 par call karein."
      ],
      note: "Tooti hui haddi ko seedha karne ki koshish kabhi na karein — use sakin sahara dein aur madad bulayein."
    }
  },
  {
    id: "fainting", icon: "😵",
    en: {
      title: "Fainting",
      desc: "Someone has collapsed briefly and is waking up.",
      steps: [
        "Lay the person flat on their back and raise their legs about 30 cm, unless they have a leg injury.",
        "Loosen tight clothing around the neck and waist. Make sure they can breathe freely.",
        "Do not put anything in their mouth and do not give food or drink until they are fully awake.",
        "They should usually recover within a minute or two. Talk to them calmly as they wake up.",
        "If they do not wake up quickly, or they fell and hit their head, put them in the recovery position and call 1122.",
        "If they are not breathing normally, start CPR and call 1122 at once."
      ],
      note: "Raising the legs helps blood flow back to the brain. Never put anything in a fainted person's mouth."
    },
    ur: {
      title: "بے ہوشی",
      desc: "کوئی شخص تھوڑی دیر کے لیے گر گیا ہے اور ہوش میں آ رہا ہے۔",
      steps: [
        "مریض کو پیٹھ کے بل سیدھا لٹائیں اور ٹانگیں تقریباً 30 سینٹی میٹر اوپر اٹھائیں، جب تک ٹانگ میں چوٹ نہ ہو۔",
        "گردن اور کمر کے ارد گرد تنگ کپڑے ڈھیلے کر دیں۔ یقینی بنائیں کہ وہ آزادانہ سانس لے سکیں۔",
        "ان کے منہ میں کچھ نہ ڈالیں اور مکمل ہوش میں آنے تک کچھ کھانے پینے کو نہ دیں۔",
        "وہ عام طور پر ایک یا دو منٹ میں ٹھیک ہو جائیں گے۔ جاگتے وقت ان سے پرسکون انداز میں بات کریں۔",
        "اگر وہ جلدی نہ جاگیں یا گر کر سر پر چوٹ لگی ہو تو انہیں ریکوری پوزیشن میں لٹائیں اور 1122 پر کال کریں۔",
        "اگر وہ عام سانس نہ لے رہے ہوں تو سی پی آر شروع کریں اور فوراً 1122 پر کال کریں۔"
      ],
      note: "ٹانگیں اوپر اٹھانے سے دماغ کی طرف خون کا بہاؤ بہتر ہوتا ہے۔ بے ہوش شخص کے منہ میں کچھ نہ ڈالیں۔"
    },
    ro: {
      title: "Behoshi",
      desc: "Koi shakhs thori dair ke liye gir gaya hai aur hosh mein aa raha hai.",
      steps: [
        "Mareez ko peeth ke bal seedha litayein aur taangein taqreeban 30 cm oopar uthayein, jab tak taang mein chot na ho.",
        "Gardan aur kamar ke ird gird tang kapray dheelay kar dein. Yaqeeni banayein ke woh azadana saans le sakein.",
        "Un ke munh mein kuch na dalein aur mukammal hosh mein aane tak kuch khanay peenay ko na dein.",
        "Woh aam tor par aik ya do minute mein theek ho jayein ge. Jaagtay waqt un se pursukoon andaaz mein baat karein.",
        "Agar woh jaldi na jagein ya gir kar sar par chot lagi ho to unhein recovery position mein litayein aur 1122 par call karein.",
        "Agar woh aam saans na le rahay hon to CPR shuru karein aur foran 1122 par call karein."
      ],
      note: "Taangein oopar uthanay se dimagh ki taraf khoon ka bahao behtar hota hai. Behosh shakhs ke munh mein kuch na dalein."
    }
  },
  {
    id: "seizure", icon: "⚡",
    en: {
      title: "Seizure (Fit)",
      desc: "Someone is jerking uncontrollably and may be unconscious.",
      steps: [
        "Stay calm. Clear the space around them and protect their head with something soft.",
        "Do NOT hold them down and do NOT put anything in their mouth.",
        "Time the seizure. Loosen tight clothing around the neck.",
        "When the jerking stops, put them in the recovery position and check their breathing.",
        "Stay with them while they recover. They may be confused — talk to them calmly.",
        "Call 1122 if the seizure lasts more than 5 minutes, it is their first seizure, they are injured, or they have another seizure soon after."
      ],
      note: "Never restrain a person having a seizure and never put anything in their mouth — British Red Cross guidance."
    },
    ur: {
      title: "دورہ (مرگی)",
      desc: "کوئی شخص بے قابو جھٹکے کھا رہا ہے اور بے ہوش ہو سکتا ہے۔",
      steps: [
        "پرسکون رہیں۔ ان کے ارد گرد جگہ خالی کریں اور سر کے نیچے کوئی نرم چیز رکھیں۔",
        "انہیں زبردستی نہ پکڑیں اور منہ میں کچھ نہ ڈالیں۔",
        "دورے کا وقت نوٹ کریں۔ گردن کے ارد گرد تنگ کپڑے ڈھیلے کر دیں۔",
        "جب جھٹکے رک جائیں تو انہیں ریکوری پوزیشن میں لٹائیں اور سانس چیک کریں۔",
        "صحت یاب ہونے تک ان کے ساتھ رہیں۔ وہ الجھن میں ہو سکتے ہیں — ان سے پرسکون انداز میں بات کریں۔",
        "1122 پر کال کریں اگر دورہ 5 منٹ سے زیادہ رہے، یہ پہلا دورہ ہو، انہیں چوٹ لگی ہو، یا جلد ہی دوسرا دورہ پڑ جائے۔"
      ],
      note: "دورہ پڑنے والے شخص کو کبھی زبردستی نہ پکڑیں اور منہ میں کچھ نہ ڈالیں — برٹش ریڈ کراس کی ہدایت۔"
    },
    ro: {
      title: "Dora (Mirgi)",
      desc: "Koi shakhs be qaabu jhatkay kha raha hai aur behosh ho sakta hai.",
      steps: [
        "Pursukoon rahein. Un ke ird gird jagah khaali karein aur sar ke neechay koi naram cheez rakhein.",
        "Unhein zabardasti na pakrein aur munh mein kuch na dalein.",
        "Doray ka waqt note karein. Gardan ke ird gird tang kapray dheelay kar dein.",
        "Jab jhatkay ruk jayein to unhein recovery position mein litayein aur saans check karein.",
        "Sehat yaab honay tak un ke saath rahein. Woh uljhan mein ho sakte hain — un se pursukoon andaaz mein baat karein.",
        "1122 par call karein agar dora 5 minute se zyada rahay, yeh pehla dora ho, unhein chot lagi ho, ya jald hi doosra dora par jaye."
      ],
      note: "Dora parne walay shakhs ko kabhi zabardasti na pakrein aur munh mein kuch na dalein — British Red Cross ki hidayat."
    }
  },
  {
    id: "nosebleed", icon: "👃",
    en: {
      title: "Nosebleed",
      desc: "Blood is coming from the nose.",
      steps: [
        "Sit the person down and lean their head slightly forward. Do not tilt the head back.",
        "Pinch the soft lower part of the nose firmly. Breathe through the mouth.",
        "Keep pinching for at least 10–15 minutes without checking. Spit out any blood in the mouth — do not swallow it.",
        "After it stops, avoid blowing the nose, hot drinks and picking for a few hours.",
        "Call 1122 or go to hospital if bleeding continues for more than 30 minutes, it follows a head injury, or the person feels faint or is on blood-thinning medicine."
      ],
      note: "Lean forward and pinch the soft part of the nose for 10–15 minutes — tilting back makes blood run down the throat."
    },
    ur: {
      title: "ناک سے خون بہنا",
      desc: "ناک سے خون آ رہا ہے۔",
      steps: [
        "مریض کو بٹھا کر سر کو ہلکا سا آگے کی طرف جھکائیں۔ سر کو پیچھے کی طرف نہ جھکائیں۔",
        "ناک کے نرم نچلے حصے کو مضبوطی سے دبائیں۔ منہ سے سانس لیں۔",
        "کم از کم 10 سے 15 منٹ تک بغیر چیک کیے دبائے رکھیں۔ منہ میں آیا ہوا خون تھوک دیں — نگلیں نہیں۔",
        "رکنے کے بعد کچھ گھنٹوں تک ناک صاف کرنے، گرم مشروبات اور ناک میں انگلی ڈالنے سے پرہیز کریں۔",
        "1122 پر کال کریں یا اسپتال جائیں اگر خون 30 منٹ سے زیادہ بہتا رہے، سر کی چوٹ کے بعد ہو، یا مریض کو چکر آئیں یا وہ خون پتلا کرنے والی دوا لے رہا ہو۔"
      ],
      note: "آگے کی طرف جھکیں اور ناک کے نرم حصے کو 10 سے 15 منٹ تک دبائیں — سر پیچھے جھکانے سے خون گلے میں جاتا ہے۔"
    },
    ro: {
      title: "Naak se Khoon Behna",
      desc: "Naak se khoon aa raha hai.",
      steps: [
        "Mareez ko bitha kar sar ko halka sa aagay ki taraf jhukayein. Sar ko peechay ki taraf na jhukayein.",
        "Naak ke naram nichlay hissay ko mazbooti se dabayein. Munh se saans lein.",
        "Kam az kam 10 se 15 minute tak baghair check kiye dabaye rakhein. Munh mein aaya hua khoon thook dein — niglein nahi.",
        "Ruknay ke baad kuch ghanton tak naak saaf karne, garam mashroobaat aur naak mein ungli daalnay se parhez karein.",
        "1122 par call karein ya hospital jayein agar khoon 30 minute se zyada behta rahay, sar ki chot ke baad ho, ya mareez ko chakkar aayein ya woh khoon patla karne wali dawa le raha ho."
      ],
      note: "Aagay ki taraf jhukein aur naak ke naram hissay ko 10 se 15 minute tak dabayein — sar peechay jhukanay se khoon galay mein jata hai."
    }
  },
  {
    id: "poisoning", icon: "☠️",
    en: {
      title: "Poisoning",
      desc: "Someone has swallowed, breathed in or touched poison.",
      steps: [
        "Call 1122 at once. If you know what was swallowed, keep the container or packet to show the doctors.",
        "Do NOT make the person vomit, and do NOT give milk, food or home remedies unless a doctor tells you to.",
        "If the person is unconscious but breathing, put them in the recovery position.",
        "If they are not breathing normally, start CPR.",
        "If poison touched the skin, remove contaminated clothing and wash the skin with plenty of running water.",
        "If poison got in the eyes, rinse the eyes gently with clean water for at least 15–20 minutes. Call 1122."
      ],
      note: "Never make someone vomit after poisoning — it can do more harm. Get professional help fast."
    },
    ur: {
      title: "زہر کھانا",
      desc: "کسی نے زہر نگل لیا ہے، سانس میں لیا ہے یا چھو لیا ہے۔",
      steps: [
        "فوراً 1122 پر کال کریں۔ اگر معلوم ہو کہ کیا نگلا گیا ہے تو ڈبہ یا پیکٹ سنبھال کر رکھیں تاکہ ڈاکٹروں کو دکھا سکیں۔",
        "مریض کو قے نہ کرائیں، اور دودھ، کھانا یا گھریلو علاج نہ دیں جب تک ڈاکٹر نہ کہے۔",
        "اگر مریض بے ہوش ہے مگر سانس لے رہا ہے تو اسے ریکوری پوزیشن میں لٹائیں۔",
        "اگر وہ عام سانس نہیں لے رہا تو سی پی آر شروع کریں۔",
        "اگر زہر جلد کو لگا ہو تو آلودہ کپڑے اتار کر جلد کو بہتے پانی سے خوب دھوئیں۔",
        "اگر زہر آنکھوں میں گیا ہو تو آنکھوں کو صاف پانی سے ہلکے سے کم از کم 15 سے 20 منٹ تک دھوئیں۔ 1122 پر کال کریں۔"
      ],
      note: "زہر کے بعد مریض کو قے کبھی نہ کرائیں — اس سے نقصان بڑھ سکتا ہے۔ جلدی پیشہ ورانہ مدد حاصل کریں۔"
    },
    ro: {
      title: "Zeher Khana",
      desc: "Kisi ne zeher nigal liya hai, saans mein liya hai ya chhu liya hai.",
      steps: [
        "Foran 1122 par call karein. Agar maloom ho ke kya nigla gaya hai to dabba ya packet sambhaal kar rakhein taake doctoron ko dikha sakein.",
        "Mareez ko ulti na karayein, aur doodh, khana ya gharelu ilaaj na dein jab tak doctor na kahay.",
        "Agar mareez behosh hai magar saans le raha hai to use recovery position mein litayein.",
        "Agar woh aam saans nahi le raha to CPR shuru karein.",
        "Agar zeher jild ko laga ho to aalooda kapray utaar kar jild ko behtay paani se khoob dhoyein.",
        "Agar zeher aankhon mein gaya ho to aankhon ko saaf paani se halkay se kam az kam 15 se 20 minute tak dhoyein. 1122 par call karein."
      ],
      note: "Zeher ke baad mareez ko ulti kabhi na karayein — is se nuqsan barh sakta hai. Jaldi professional madad haasil karein."
    }
  },
  {
    id: "snake-bite", icon: "🐍",
    en: {
      title: "Snake Bite",
      desc: "Someone has been bitten by a snake.",
      steps: [
        "Move away from the snake. Do not try to catch or kill it — take a photo from a safe distance if you can.",
        "Call 1122 at once. The only treatment for venom is antivenom, given in a hospital.",
        "Keep the person calm and completely still. Movement spreads the venom faster.",
        "Remove rings, watches and tight clothing near the bite before swelling starts.",
        "Keep the bitten limb still and at or below heart level. A light splint can help keep it still.",
        "Do NOT tie a tight tourniquet, cut the wound, suck out venom, or apply ice or herbal pastes. Go to hospital fast. Call 1122."
      ],
      note: "WHO guidance: keep still, no tourniquet, no cutting, no sucking — antivenom in hospital is the only treatment."
    },
    ur: {
      title: "سانپ کا کاٹنا",
      desc: "کسی کو سانپ نے کاٹ لیا ہے۔",
      steps: [
        "سانپ سے دور ہٹ جائیں۔ اسے پکڑنے یا مارنے کی کوشش نہ کریں — اگر ممکن ہو تو محفوظ فاصلے سے تصویر لے لیں۔",
        "فوراً 1122 پر کال کریں۔ زہر کا واحد علاج اینٹی وینم ہے جو اسپتال میں دیا جاتا ہے۔",
        "مریض کو پرسکون اور مکمل ساکن رکھیں۔ حرکت سے زہر تیزی سے پھیلتا ہے۔",
        "سوجن شروع ہونے سے پہلے کاٹنے والی جگہ کے قریب انگوٹھی، گھڑی اور تنگ کپڑے اتار دیں۔",
        "کاٹی ہوئی عضو کو ساکن اور دل کی سطح پر یا اس سے نیچے رکھیں۔ ہلکی پٹی اسے ساکن رکھنے میں مدد دے سکتی ہے۔",
        "سخت پٹی (ٹورنیکے) نہ باندھیں، زخم نہ کاٹیں، زہر نہ چوسیں، اور برف یا جڑی بوٹیوں کا لیپ نہ لگائیں۔ جلدی اسپتال جائیں۔ 1122 پر کال کریں۔"
      ],
      note: "WHO کی ہدایت: ساکن رکھیں، کوئی سخت پٹی نہیں، کوئی کاٹ نہیں، کوئی چوسنا نہیں — اسپتال میں اینٹی وینم ہی واحد علاج ہے۔"
    },
    ro: {
      title: "Saanp ka Kaatna",
      desc: "Kisi ko saanp ne kaat liya hai.",
      steps: [
        "Saanp se door hatt jayein. Use pakarnay ya maarnay ki koshish na karein — agar mumkin ho to mehfooz faaslay se tasveer le lein.",
        "Foran 1122 par call karein. Zeher ka wahid ilaaj anti-venom hai jo hospital mein diya jata hai.",
        "Mareez ko pursukoon aur mukammal sakin rakhein. Harkat se zeher tezi se phailta hai.",
        "Soojan shuru honay se pehle kaatnay wali jagah ke qareeb angoothi, ghari aur tang kapray utaar dein.",
        "Kaati hui azu ko sakin aur dil ki satah par ya us se neechay rakhein. Halki patti use sakin rakhnay mein madad de sakti hai.",
        "Sakht patti (tourniquet) na baandhein, zakhm na kaatein, zeher na choosein, aur baraf ya jarri bootiyon ka laip na lagayein. Jaldi hospital jayein. 1122 par call karein."
      ],
      note: "WHO ki hidayat: sakin rakhein, koi sakht patti nahi, koi kaat nahi, koi choosna nahi — hospital mein anti-venom hi wahid ilaaj hai."
    }
  },
  {
    id: "dog-bite", icon: "🐕",
    en: {
      title: "Dog Bite",
      desc: "Someone has been bitten or scratched by a dog.",
      steps: [
        "Move away from the dog safely. Do not run or shout at it.",
        "Wash the wound at once with plenty of clean running water and soap for at least 15 minutes.",
        "Do not close the wound tightly. Cover it loosely with a clean cloth.",
        "Press gently if it is bleeding, and raise the limb if you can.",
        "Go to a hospital the same day for a rabies vaccine and tetanus check — even a small bite or scratch needs this in Pakistan.",
        "If the bite is deep, on the face, or bleeding heavily, call 1122 at once."
      ],
      note: "Rabies is fatal once symptoms appear, but preventable with prompt washing and vaccination — go to hospital the same day."
    },
    ur: {
      title: "کتے کا کاٹنا",
      desc: "کسی کو کتے نے کاٹ لیا ہے یا خراش آئی ہے۔",
      steps: [
        "محفوظ طریقے سے کتے سے دور ہٹ جائیں۔ بھاگیں یا اس پر چلائیں نہیں۔",
        "زخم کو فوراً صاف بہتے پانی اور صابن سے کم از کم 15 منٹ تک دھوئیں۔",
        "زخم کو کس کر بند نہ کریں۔ اسے صاف کپڑے سے ڈھیلا ڈھانپ دیں۔",
        "اگر خون بہہ رہا ہو تو ہلکے سے دباؤ ڈالیں، اور عضو کو اوپر اٹھائیں اگر ممکن ہو۔",
        "اسی دن اسپتال جائیں تاکہ ریبیز (کتے کے کاٹنے کی) ویکسین اور ٹیٹنس کا معائنہ ہو — پاکستان میں چھوٹا کاٹا یا خراش بھی اس کی متقاضی ہے۔",
        "اگر کاٹا گہرا ہو، چہرے پر ہو یا خون تیزی سے بہہ رہا ہو تو فوراً 1122 پر کال کریں۔"
      ],
      note: "ریبیز علامات ظاہر ہونے کے بعد جان لیوا ہے، لیکن فوری دھونے اور ویکسین سے اس سے بچا جا سکتا ہے — اسی دن اسپتال جائیں۔"
    },
    ro: {
      title: "Kuttay ka Kaatna",
      desc: "Kisi ko kuttay ne kaat liya hai ya kharash aayi hai.",
      steps: [
        "Mehfooz tareeqay se kuttay se door hatt jayein. Bhaagein ya us par chillayein nahi.",
        "Zakhm ko foran saaf behtay paani aur sabun se kam az kam 15 minute tak dhoyein.",
        "Zakhm ko kas kar band na karein. Use saaf kapray se dheela dhaanp dein.",
        "Agar khoon beh raha ho to halkay se dabao dalein, aur azu ko oopar uthayein agar mumkin ho.",
        "Usi din hospital jayein taake rabies (kuttay ke kaatnay ki) vaccine aur tetanus ka muaina ho — Pakistan mein chhota kaata ya kharash bhi is ki mutaqazi hai.",
        "Agar kaata gehra ho, chehray par ho ya khoon tezi se beh raha ho to foran 1122 par call karein."
      ],
      note: "Rabies alamat zahir honay ke baad jaan lewa hai, lekin fori dhonay aur vaccine se is se bacha ja sakta hai — usi din hospital jayein."
    }
  },
  {
    id: "electric-shock", icon: "⚡",
    en: {
      title: "Electric Shock",
      desc: "Someone has touched a live wire or appliance.",
      steps: [
        "Do NOT touch the person while they are still in contact with electricity — you will be shocked too.",
        "Switch off the power at the mains or meter if you can do so safely. If not, push the person away from the source with a dry wooden stick or plastic object — never metal or wet.",
        "Once they are clear, call 1122 at once.",
        "Check breathing. If they are not breathing normally, start CPR.",
        "If they are breathing, put them in the recovery position and cover any burns with a clean cloth.",
        "Even if they seem fine, they must be checked in hospital — electric shocks can damage the heart. Call 1122."
      ],
      note: "Always switch the power off first, or use a dry non-metal object. Never touch the person or use water while they are in contact with electricity."
    },
    ur: {
      title: "بجلی کا جھٹکا",
      desc: "کسی نے بجلی کی تار یا آلہ چھو لیا ہے۔",
      steps: [
        "جب تک مریض بجلی سے جڑا ہو اسے ہاتھ نہ لگائیں — آپ کو بھی جھٹکا لگے گا۔",
        "اگر محفوظ طریقے سے ممکن ہو تو مین سوئچ یا میٹر سے بجلی بند کر دیں۔ اگر نہ ہو سکے تو خشک لکڑی کی چھڑی یا پلاسٹک کی چیز سے مریض کو بجلی کے ذریعے سے دور دھکیلیں — کبھی دھات یا گیلی چیز استعمال نہ کریں۔",
        "جب وہ بجلی سے الگ ہو جائے تو فوراً 1122 پر کال کریں۔",
        "سانس چیک کریں۔ اگر وہ عام سانس نہیں لے رہا تو سی پی آر شروع کریں۔",
        "اگر وہ سانس لے رہا ہے تو اسے ریکوری پوزیشن میں لٹائیں اور جلنے والی جگہ کو صاف کپڑے سے ڈھانپ دیں۔",
        "چاہے وہ ٹھیک لگے، اسپتال میں معائنہ ضروری ہے — بجلی کا جھٹکا دل کو نقصان پہنچا سکتا ہے۔ 1122 پر کال کریں۔"
      ],
      note: "پہلے ہمیشہ بجلی بند کریں، یا خشک غیر دھاتی چیز استعمال کریں۔ جب تک مریض بجلی سے جڑا ہو اسے ہاتھ نہ لگائیں اور پانی استعمال نہ کریں۔"
    },
    ro: {
      title: "Bijli ka Jhatka",
      desc: "Kisi ne bijli ki taar ya aala chhu liya hai.",
      steps: [
        "Jab tak mareez bijli se jura ho use haath na lagayein — aap ko bhi jhatka lagay ga.",
        "Agar mehfooz tareeqay se mumkin ho to main switch ya meter se bijli band kar dein. Agar na ho sakay to khushk lakri ki chhari ya plastic ki cheez se mareez ko bijli ke zariye se door dhakelein — kabhi dhaat ya geeli cheez istemal na karein.",
        "Jab woh bijli se alag ho jaye to foran 1122 par call karein.",
        "Saans check karein. Agar woh aam saans nahi le raha to CPR shuru karein.",
        "Agar woh saans le raha hai to use recovery position mein litayein aur jalne wali jagah ko saaf kapray se dhaanp dein.",
        "Chahe woh theek lagay, hospital mein muaina zaroori hai — bijli ka jhatka dil ko nuqsan pahuncha sakta hai. 1122 par call karein."
      ],
      note: "Pehle hamesha bijli band karein, ya khushk ghair dhaati cheez istemal karein. Jab tak mareez bijli se jura ho use haath na lagayein aur paani istemal na karein."
    }
  },
  {
    id: "drowning", icon: "🌊",
    en: {
      title: "Drowning",
      desc: "Someone has been pulled from water and is not breathing well.",
      steps: [
        "Call 1122 at once, or shout for help. Do not enter the water if you cannot swim or the water is dangerous.",
        "Reach the person with a stick, rope or cloth, or throw something that floats. Only enter the water if you are trained and it is safe.",
        "Once out of the water, lay them flat. Check if they are breathing.",
        "If they are not breathing normally, give 5 rescue breaths first, then start CPR (30 compressions, 2 breaths).",
        "If they are breathing, put them in the recovery position and keep them warm with dry clothes or a blanket.",
        "Do NOT try to drain water from the lungs. Even if they seem fine, they must go to hospital — water in the lungs can cause problems hours later. Call 1122."
      ],
      note: "For drowning, give 5 rescue breaths before starting compressions. Always get hospital care, even if the person seems fine."
    },
    ur: {
      title: "ڈوبنا",
      desc: "کسی کو پانی سے نکالا گیا ہے اور وہ ٹھیک سے سانس نہیں لے رہا۔",
      steps: [
        "فوراً 1122 پر کال کریں یا مدد کے لیے پکاریں۔ اگر آپ کو تیرنا نہیں آتا یا پانی خطرناک ہے تو پانی میں نہ جائیں۔",
        "چھڑی، رسی یا کپڑے سے مریض تک پہنچیں، یا تیرنے والی چیز پھینکیں۔ صرف اس صورت میں پانی میں جائیں اگر آپ کو تربیت حاصل ہو اور یہ محفوظ ہو۔",
        "پانی سے باہر آنے پر انہیں سیدھا لٹائیں۔ چیک کریں کہ کیا وہ سانس لے رہے ہیں۔",
        "اگر وہ عام سانس نہیں لے رہے تو پہلے 5 سانسیں دیں، پھر سی پی آر شروع کریں (30 دباؤ، 2 سانسیں)۔",
        "اگر وہ سانس لے رہے ہیں تو انہیں ریکوری پوزیشن میں لٹائیں اور خشک کپڑوں یا کمبل سے گرم رکھیں۔",
        "پھیپھڑوں سے پانی نکالنے کی کوشش نہ کریں۔ چاہے وہ ٹھیک لگیں، اسپتال جانا ضروری ہے — پھیپھڑوں میں پانی گھنٹوں بعد مسائل پیدا کر سکتا ہے۔ 1122 پر کال کریں۔"
      ],
      note: "ڈوبنے کی صورت میں دباؤ سے پہلے 5 سانسیں دیں۔ چاہے مریض ٹھیک لگے، اسپتال میں معائنہ ضرور کرائیں۔"
    },
    ro: {
      title: "Doobna",
      desc: "Kisi ko paani se nikala gaya hai aur woh theek se saans nahi le raha.",
      steps: [
        "Foran 1122 par call karein ya madad ke liye pukarein. Agar aap ko tairna nahi aata ya paani khatarnak hai to paani mein na jayein.",
        "Chhari, rassi ya kapray se mareez tak pohanchayein, ya tairnay wali cheez phainkein. Sirf us soorat mein paani mein jayein agar aap ko tarbiyat haasil ho aur yeh mehfooz ho.",
        "Paani se bahar aane par unhein seedha litayein. Check karein ke kya woh saans le rahay hain.",
        "Agar woh aam saans nahi le rahay to pehle 5 saansein dein, phir CPR shuru karein (30 dabao, 2 saansein).",
        "Agar woh saans le rahay hain to unhein recovery position mein litayein aur khushk kapron ya kambal se garam rakhein.",
        "Phephron se paani nikaalnay ki koshish na karein. Chahe woh theek lagein, hospital jana zaroori hai — phephron mein paani ghanton baad masail paida kar sakta hai. 1122 par call karein."
      ],
      note: "Doobnay ki soorat mein dabao se pehle 5 saansein dein. Chahe mareez theek lagay, hospital mein muaina zaroor karayein."
    }
  },
  {
    id: "recovery-position", icon: "🛏️",
    en: {
      title: "Recovery Position",
      desc: "For someone unconscious but breathing normally.",
      steps: [
        "Use this for someone who is unconscious but breathing normally.",
        "Kneel beside them. Straighten their legs and remove glasses or bulky items from pockets.",
        "Place the arm nearest you at a right angle to the body, elbow bent, palm up.",
        "Bring their other arm across the chest and hold the back of that hand against the cheek nearest you.",
        "With your other hand, pull the far knee up so the foot is flat on the floor. Pull on the far leg to roll them towards you onto their side.",
        "Tilt the head back and lift the chin to keep the airway open. Stay with them and keep checking their breathing. Call 1122."
      ],
      note: "The recovery position keeps the airway open so the tongue does not block breathing and vomit can drain out."
    },
    ur: {
      title: "ریکوری پوزیشن",
      desc: "اس شخص کے لیے جو بے ہوش ہو مگر عام طور پر سانس لے رہا ہو۔",
      steps: [
        "یہ اس شخص کے لیے استعمال کریں جو بے ہوش ہو مگر عام طور پر سانس لے رہا ہو۔",
        "ان کے پاس گھٹنوں کے بل بیٹھیں۔ ان کی ٹانگیں سیدھی کریں اور عینک یا جیبوں سے بھاری چیزیں نکال دیں۔",
        "قریب والا بازو جسم سے دائیں زاویے پر رکھیں، کہنی مڑی ہوئی، ہتھیلی اوپر کی طرف۔",
        "دوسرا بازو سینے کے پار لائیں اور اس ہاتھ کی پشت کو قریب والے گال سے لگا کر پکڑیں۔",
        "دوسرے ہاتھ سے دور والا گھٹنا اوپر کھینچیں تاکہ پاؤں فرش پر سیدھا ہو۔ دور والی ٹانگ کو کھینچ کر انہیں اپنی طرف کروٹ کے بل لٹائیں۔",
        "سر کو پیچھے کی طرف جھکائیں اور ٹھوڑی اوپر اٹھائیں تاکہ سانس کی نالی کھلی رہے۔ ان کے ساتھ رہیں اور سانس چیک کرتے رہیں۔ 1122 پر کال کریں۔"
      ],
      note: "ریکوری پوزیشن سے سانس کی نالی کھلی رہتی ہے تاکہ زبان سانس نہ روکے اور قے باہر نکل سکے۔"
    },
    ro: {
      title: "Recovery Position",
      desc: "Us shakhs ke liye jo behosh ho magar aam tor par saans le raha ho.",
      steps: [
        "Yeh us shakhs ke liye istemal karein jo behosh ho magar aam tor par saans le raha ho.",
        "Un ke paas ghutnon ke bal bethein. Un ki taangein seedhi karein aur ainak ya jebon se bhaari cheezein nikaal dein.",
        "Qareeb wala baazu jism se daayein zawiye par rakhein, kohni muri hui, hatheli oopar ki taraf.",
        "Doosra baazu seenay ke paar layein aur us haath ki pusht ko qareeb walay gaal se laga kar pakrein.",
        "Doosray haath se door wala ghutna oopar kheenchein taake paon farsh par seedha ho. Door wali taang ko kheench kar unhein apni taraf karwat ke bal litayein.",
        "Sar ko peechay ki taraf jhukayein aur thuddi oopar uthayein taake saans ki naali khuli rahay. Un ke saath rahein aur saans check kartay rahein. 1122 par call karein."
      ],
      note: "Recovery position se saans ki naali khuli rehti hai taake zabaan saans na rokay aur ulti bahar nikal sakay."
    }
  }
];

/* ---------- App logic ---------- */
var LANGS = ["en", "ur", "ro"];
var lang = "en";
try {
  var saved = window.localStorage.getItem("fap-lang");
  if (LANGS.indexOf(saved) !== -1) lang = saved;
} catch (e) { /* storage unavailable — default to English */ }

var $ = function (id) { return document.getElementById(id); };

function t(key) { return I18N[lang][key] || I18N.en[key] || key; }

function applyLang() {
  var html = document.documentElement;
  if (lang === "ur") { html.lang = "ur"; html.dir = "rtl"; }
  else if (lang === "ro") { html.lang = "ur-Latn"; html.dir = "ltr"; }
  else { html.lang = "en"; html.dir = "ltr"; }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  $("app-title").textContent = t("title");
  $("app-tagline").textContent = t("tagline");
  $("search").setAttribute("placeholder", t("search_placeholder"));
  $("search").setAttribute("aria-label", t("search_label"));

  var scene = $("scene-steps");
  scene.innerHTML = "";
  SCENE[lang].forEach(function (step) {
    var li = document.createElement("li");
    li.textContent = step;
    scene.appendChild(li);
  });

  renderGrid($("search").value || "");
  if (!$("detail-view").hidden) { renderDetail(currentTopic); }
  document.title = t("title") + " — " + (lang === "ur" ? "فرسٹ ایڈ پاکستان" : "First Aid Pakistan");
}

function topicMatches(topic, q) {
  if (!q) return true;
  q = q.toLowerCase();
  var fields = [topic.en.title, topic.en.desc, topic.ur.title, topic.ur.desc, topic.ro.title, topic.ro.desc];
  return fields.some(function (f) { return f.toLowerCase().indexOf(q) !== -1; });
}

function renderGrid(query) {
  var grid = $("topic-grid");
  grid.innerHTML = "";
  var shown = 0;
  TOPICS.forEach(function (topic) {
    if (!topicMatches(topic, query)) return;
    shown++;
    var data = topic[lang];
    var card = document.createElement("button");
    card.type = "button";
    card.className = "topic-card";
    card.setAttribute("data-topic", topic.id);
    var icon = document.createElement("span");
    icon.className = "topic-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = topic.icon;
    var text = document.createElement("span");
    var h = document.createElement("h3");
    h.textContent = data.title;
    var p = document.createElement("p");
    p.textContent = data.desc;
    text.appendChild(h);
    text.appendChild(p);
    card.appendChild(icon);
    card.appendChild(text);
    card.addEventListener("click", function () { openTopic(topic.id); });
    grid.appendChild(card);
  });
  $("no-results").hidden = shown !== 0;
}

var currentTopic = null;

function openTopic(id) {
  currentTopic = id;
  renderDetail(id);
  $("home-view").hidden = true;
  $("detail-view").hidden = false;
  window.scrollTo(0, 0);
  try { window.location.hash = "#/topic/" + id; } catch (e) { /* ignore */ }
}

function renderDetail(id) {
  var topic = null;
  TOPICS.forEach(function (tp) { if (tp.id === id) topic = tp; });
  if (!topic) return;
  var data = topic[lang];
  $("detail-icon").textContent = topic.icon;
  $("detail-title").textContent = data.title;
  $("detail-desc").textContent = data.desc;
  var ol = $("detail-steps");
  ol.innerHTML = "";
  data.steps.forEach(function (step) {
    var li = document.createElement("li");
    li.textContent = step;
    ol.appendChild(li);
  });
  $("detail-note").textContent = data.note;
}

function closeTopic() {
  currentTopic = null;
  $("detail-view").hidden = true;
  $("home-view").hidden = false;
  try { window.location.hash = ""; } catch (e) { /* ignore */ }
  window.scrollTo(0, 0);
}

function updateOffline() {
  $("offline-banner").hidden = navigator.onLine;
}

/* ---------- Wire up ---------- */
document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    lang = btn.getAttribute("data-lang");
    try { window.localStorage.setItem("fap-lang", lang); } catch (e) { /* ignore */ }
    applyLang();
  });
});
$("search").addEventListener("input", function () { renderGrid($("search").value); });
$("back-btn").addEventListener("click", closeTopic);
window.addEventListener("online", updateOffline);
window.addEventListener("offline", updateOffline);
window.addEventListener("hashchange", function () {
  var m = window.location.hash.match(/^#\/topic\/([\w-]+)$/);
  if (m) openTopic(m[1]);
  else if (currentTopic) closeTopic();
});

updateOffline();
applyLang();

/* Deep link: open a topic if the URL carries one */
(function () {
  var m = window.location.hash.match(/^#\/topic\/([\w-]+)$/);
  if (m) openTopic(m[1]);
})();
