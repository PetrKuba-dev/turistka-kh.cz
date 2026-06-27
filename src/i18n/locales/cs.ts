const cs = {
  nav: {
    home: 'Domů',
    menu: 'Menu',
    about: 'O nás',
    contact: 'Kontakt',
  },
  common: {
    currency: 'Kč',
    viewMenu: 'Prohlédnout menu',
    contactUs: 'Kontakt',
    learnMore: 'Více o nás',
    seeAll: 'Celé menu',
  },
  footer: {
    tagline: 'Rodinná kavárna v srdci Kutné Hory',
    rights: 'Všechna práva vyhrazena.',
  },
  home: {
    hero: {
      headline: 'Kavárna Turistka',
      subheadline:
        'Teplé místo uprostřed Kutné Hory. Dobrá káva, domácí dezerty a klid na chvíli v klidu.',
      ctaMenu: 'Naše menu',
      ctaContact: 'Kde nás najdete',
    },
    news: {
      title: 'Co je u nás nového',
      subtitle: 'Akce, novinky a provozní informace z Turistky',
      navLabel: 'Navigace novinek',
      tabsLabel: 'Vyberte novinku',
      prev: 'Předchozí novinka',
      next: 'Další novinka',
      slideOf: '{{current}} / {{total}}',
      slideLabel: '{{title}}, novinka {{current}} z {{total}}',
      slideAnnouncement: '{{title}}, novinka {{current}} z {{total}}',
      swipeHint: 'Potáhněte',
      categories: {
        event: 'Akce',
        news: 'Novinka',
        operations: 'Provoz',
      },
      items: {
        fermentationWorkshop: {
          validFrom: '12. dubna 2026',
          title: 'Workshop o fermentaci',
          titleShort: 'Workshop',
          excerpt:
            'Přijďte si vyzkoušet přípravu domácího kimchi a nakládané zeleniny. Workshop vede místní nadšenec do fermentace, kapacita je omezená.',
          cta: 'Registrovat se',
        },
        brunchMenu: {
          validFrom: 'od 1. března 2026',
          title: 'Nové brunch menu',
          titleShort: 'Brunch menu',
          excerpt:
            'Každou sobotu a neděli od 9 do 12 servírujeme nové brunch talíře s domácím pečivem, vajíčky a filtrovanou kávou.',
          cta: 'Brunch menu',
        },
        summerClosure: {
          validFrom: '14. července – 4. srpna 2026',
          title: 'Zavřeno kvůli dovolené',
          titleShort: 'Dovolená',
          excerpt:
            'Od poloviny července do začátku srpna si dáváme zaslouženou pauzu. Těšíme se na vás zase od 5. srpna.',
        },
      },
    },
    intro: {
      title: 'Místo, kam se rádi vracíte',
      p1: 'Turistka je rodinná kavárna v centru Kutné Hory. Otevřeli jsme ji s jednoduchou myšlenkou — nabídnout místo, kde se člověk cítí jako doma.',
      p2: 'Pečeme vlastní dezerty, vaříme kávu z kvalitních zrn a rádi si s vámi popovídáme. Ať přijdete na rychlou kávu nebo na delší posezení, jste vítáni.',
    },
    highlights: {
      title: 'Co u nás najdete',
      subtitle: 'Pár věcí, na které jsme pyšní',
      coffee: {
        title: 'Výběrová káva',
        description: 'Espresso, cappuccino i filtrovaná káva z pečlivě vybraných zrn.',
      },
      desserts: {
        title: 'Domácí dezerty',
        description: 'Každý den čerstvé dorty, koláče a sladké pečivo z naší kuchyně.',
      },
      atmosphere: {
        title: 'Klidné místo',
        description: 'Příjemné posezení v centru města, ideální na odpočinek po procházce.',
      },
      family: {
        title: 'Rodinný přístup',
        description: 'Provozujeme kavárnu společně a na každého hosta se těšíme osobně.',
      },
    },
    menuPreview: {
      title: 'Ochutnejte něco z našeho menu',
      subtitle: 'Čerstvé snídaně, káva a sladké dobroty',
    },
    gallery: {
      title: 'Atmosféra Turistky',
      subtitle: 'Klid, světlo a vůně čerstvé kávy',
      open: 'Otevřít fotku: {{alt}}',
      close: 'Zavřít galerii',
      prev: 'Předchozí fotka',
      next: 'Další fotka',
      slideOf: '{{current}} / {{total}}',
      slideAnnouncement: 'Fotka {{current}} z {{total}}',
      thumbLabel: 'Fotka {{current}} z {{total}}',
      dialogLabel: 'Galerie fotek',
      alt1: 'Interiér kavárny s přirozeným světlem',
      alt2: 'Šálek cappuccina na dřevěném stole',
      alt3: 'Vitrína s domácími dezerty',
      alt4: 'Pohled na kavárnu z ulice',
      alt5: 'Detail latte art',
      alt6: 'Posezení u okna',
    },
    family: {
      quote:
        'Kavárnu jsme otevřeli pro lidi, ne pro trendy. Chceme, aby se u nás každý cítil vítán — ať jste místní, nebo turista, který právě objevuje Kutnou Horu.',
      author: 'Rodina Turistka',
    },
    contactPreview: {
      title: 'Zastavte se na kávu',
      subtitle: 'Najdete nás v centru Kutné Hory',
      hoursTitle: 'Otevírací doba',
      addressTitle: 'Adresa',
      hoursSummary: {
        monday: 'Po zavřeno',
        weekdays: 'Út–Pá 8:00–18:00',
        weekend: 'So–Ne 9:00–17:00',
      },
      moreLink: 'Více informací',
    },
  },
  menu: {
    pageTitle: 'Naše menu',
    pageSubtitle: 'Čerstvé suroviny, domácí příprava a poctivé porce',
    nav: {
      label: 'Navigace menu',
    },
    badges: {
      weekend: 'Víkendová specialita',
      seasonal: 'Sezónní',
    },
    altMilk: {
      coffee: 'Ovesné nebo mandlové mléko na přání +15 Kč',
    },
    allergens: {
      label: 'Alergeny',
      disclaimer:
        'Údaje o alergenech jsou orientační. U položek denní nabídky a aktuální informace vám sdělíme na místě.',
      gluten: 'Lepek',
      crustaceans: 'Korýši',
      eggs: 'Vejce',
      fish: 'Ryby',
      peanuts: 'Arašídy',
      soy: 'Sója',
      milk: 'Mléko',
      nuts: 'Skořápkové plody',
      celery: 'Celer',
      mustard: 'Hořčice',
      sesame: 'Sezam',
      sulphites: 'Oxid siřičitý a siřičitany',
      lupin: 'Vlčí bob',
      molluscs: 'Měkkýši',
    },
    categories: {
      coffee: 'Káva',
      coffeeIntro:
        'Espresso, filtrovaná i mléčné nápoje z výběrových zrn.',
      breakfast: 'Snídaně',
      breakfastIntro:
        'Slané snídaně podáváme každý den do 14:00. Všechno připravujeme z čerstvých surovin od místních dodavatelů.',
      brunch: 'Odpolední menu',
      brunchIntro:
        'Odpolední menu od 14:00. Polévka a pomazánka se mění dle denní nabídky — zeptejte se u pultu.',
      desserts: 'Dezerty',
      dessertsIntro:
        'Pečeme sami. Dort dne najdete ve vitríně u pultu.',
      drinks: 'Nápoje',
      drinksIntro: 'Domácí limonády, čerstvé džusy a sypané čaje.',
    },
    photos: {
      coffee: 'Cappuccino na dřevěném stole',
      breakfast: 'Snídaně v kavárně Turistka',
      brunch: 'Odpolední menu v Turistce',
      desserts: 'Vitrína s domácími dezerty',
    },
    items: {
      espresso: {
        name: 'Espresso',
        description: 'Klasické espresso z výběrových zrn',
      },
      cappuccino: {
        name: 'Cappuccino',
        description: 'Espresso s našlehaným mlékem a jemnou pěnou',
      },
      flatWhite: {
        name: 'Flat white',
        description: 'Dvojité espresso s krémovým mlékem',
      },
      filterCoffee: {
        name: 'Filtrovaná káva',
        description: 'Pomalá příprava, čistá chuť',
      },
      hotChocolate: {
        name: 'Horká čokoláda',
        description: 'Bohatá belgická čokoláda s šlehačkou',
      },
      scrambledEggs: {
        name: 'Míchaná vajíčka',
        description:
          'Vejce z louky, balkán, slanina od řezníka Nesládka a náš chléb',
        extras: {
          halloumi: '2 ks halloumi z farmy Bláto navíc',
          sausages: '2 bavorské klobásky navíc',
          egg: 'Vejce z louky Horní Kruty navíc',
          bread: 'Krajíc našeho chleba navíc',
        },
      },
      pancakesWithFruit: {
        name: 'Lívance s ovocným rozvarem a slaninou',
        description:
          'Nadýchané lívance s rozvarem z lesního ovoce, zakysanou smetanou a slaninou od našeho řezníka',
      },
      autumnSandwich: {
        name: 'Podzimní sendvič',
        description:
          'Toust z naší pece, dýňový hummus, balsamikovová cibulka, pršut ze šunkárny Bohdaneč, cream cheese, rukola',
      },
      turkishEggs: {
        name: 'Turecká vejce',
        description:
          '2 vejce 63° v koprovém jogurtu z farmy Bláto, romesco omáčka, chilli máslo, naše slaná granola a pita chléb',
      },
      lentilBowlWithFalafel: {
        name: 'Čočkomíška s falafelem',
        description:
          'Hummus z dýně, beluga salátek, falafel, naše fermentovaná zelenina, tahini zálivka',
        extras: {
          kimchi: 'Kimchi navíc',
        },
      },
      weekendEggsInGlass: {
        name: 'Víkendová specialita – vejce do skla',
        description:
          '3 vejce 63° z louky s klobáskou od řezníka Nesládka, sušenými rajčaty, holandskou omáčkou a topinkou z našeho chleba',
      },
      soup: {
        name: 'Polévka',
        description: 'Bohatá hřejivá polévka dle denní nabídky',
      },
      baconJamSandwich: {
        name: 'Sendvič s naší slaninádou a raclette',
        description:
          'Kváskový chléb z naší pece, domácí slanináda, raclette sýr z farmy Bláto, fermentovaná zelenina',
      },
      breadWithSpread: {
        name: 'Krajíc chleba s domácí pomazánkou',
        description:
          'Krajíc našeho chleba s pomazánkou dle denní nabídky a mikrobylinkami',
      },
      cheesecake: {
        name: 'Cheesecake',
        description: 'Krémový cheesecake s ovocným coulis',
      },
      appleStrudel: {
        name: 'Jablečný štrúdl',
        description: 'Tradiční štrúdl s vanilkovou zmrzlinou',
      },
      chocolateCake: {
        name: 'Čokoládový dort',
        description: 'Hutný čokoládový dort s polevou',
      },
      dailyCake: {
        name: 'Dort dne',
        description: 'Zeptejte se na dnešní nabídku u pultu',
      },
      freshJuice: {
        name: 'Čerstvý džus',
        description: 'Pomerančový nebo jablečný',
      },
      lemonade: {
        name: 'Domácí limonáda',
        description: 'Citrónová nebo bylinková',
      },
      tea: {
        name: 'Čaj',
        description: 'Výběr sypaných čajů',
      },
      sparklingWater: {
        name: 'Perlivá voda',
        description: 'Mattoni 0,33 l',
      },
    },
  },
  about: {
    pageTitle: 'O nás',
    pageSubtitle: 'Rodinná kavárna na Barborské v Kutné Hoře',
    story: {
      title: 'Jak to začalo',
      p1: 'Turistku provozujeme jako rodina na Barborské 29/22. Chtěli jsme místo, kde se dá po procházce městem opravdu sednout — ne jen vyzvednout kávu u okénka.',
      p2: 'Název není náhoda. Kutná Hora žije turisty i místními a my jsme zastávka pro obojí — jednorázová návštěva i pravidelná káva ve stejný den v týdnu.',
      p3: 'Dorty a slané pečivo děláme sami. Menu se mění podle sezóny a toho, co zrovna stihneme — v vitríně ale vždycky najdete něco sladkého a poctivou kávu.',
    },
    atmosphere: {
      title: 'Jak to u nás vypadá',
      p1: 'Světlý prostor, dřevo, přírodní barvy. Ráno je klid, odpoledne přicházejí hosté z prohlídky a večer tu zůstává pár stolů na pomalé posezení.',
      p2: 'Jsme pár kroků od hlavních památek — snadná zastávka mezi katedrálou a zbytkem centra, i když město neznáte.',
    },
    quote: {
      heading: 'Co nás vede',
      text: 'Kavárnu jsme otevřeli pro lidi, ne pro trendy. Ať jste místní nebo turista na první návštěvě — u nás byste se měli cítit vítáni.',
      author: 'Rodina Turistka',
    },
    images: {
      alt1: 'Rodina za pultem kavárny',
      alt2: 'Příjemné posezení v interiéru',
    },
  },
  contact: {
    pageTitle: 'Kontakt',
    pageSubtitle: 'Těšíme se na vaši návštěvu',
    addressTitle: 'Adresa',
    phoneTitle: 'Telefon',
    emailTitle: 'E-mail',
    hoursTitle: 'Otevírací doba',
    mapTitle: 'Kde nás najdete',
    socialTitle: 'Sledujte nás',
    cta: {
      title: 'Rezervace',
      subtitle:
        'Skupiny a větší stoly rezervujeme výhradně přes Instagram. Na běžnou návštěvu rezervaci nepotřebujete.',
      instagramButton: 'Napsat na Instagram',
    },
    days: {
      monday: 'Pondělí',
      tuesday: 'Úterý',
      wednesday: 'Středa',
      thursday: 'Čtvrtek',
      friday: 'Pátek',
      saturday: 'Sobota',
      sunday: 'Neděle',
    },
    hours: {
      closed: 'Zavřeno',
      weekdays: '8:00 – 18:00',
      weekend: '9:00 – 17:00',
    },
    social: {
      instagram: 'Instagram',
      facebook: 'Facebook',
    },
  },
} as const;

export default cs;
