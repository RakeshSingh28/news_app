import React, { Component } from "react";
import Newsitem from "./Newsitem";

let article = [
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Aashna Gheewalla",
    title:
      "Don't Wait for Prime Day. 42 Amazon July 4th Deals Worth Buying Right Now",
    description:
      "Make the most of these July 4th deals and snag the best prices on Apple products, smart home gear, TVs, appliances and more.",
    url: "https://www.cnet.com/deals/amazon-july-4th-sale-2024-07-04/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/598684421bea2d892cdfae8b5207c797cc751952/hub/2024/06/27/b7a14e3e-d556-48b2-bedb-95f0e521ed97/amaozn-july-4-sale.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-04T09:34:46Z",
    content:
      "Ring/Apple/Samsung/CNET\r\nDon't skip the Fourth of July deals happening at Amazon right now. The retailer has hundreds of special deals and early Prime Day discounts that are live already, making it a… [+1295 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Aashna Gheewalla",
    title:
      "57 Sizzling Hot July 4th Deals Under $25: Bargain Prices on Tech, Toys, Outdoor and Home Essentials",
    description:
      "The July 4th discounts abound, but don't wait because these offers may end with the fireworks display.",
    url: "https://www.cnet.com/deals/july-4th-deals-under-25-2024-07-04/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/abb1bfcae0aa26c9890f2439dc597cd888a2e652/hub/2024/06/28/d009d152-a215-49c3-b692-85a0e76649c3/july4-under-25.png?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-04T09:22:00Z",
    content:
      "If you can smell fireworks and barbecue, it must be Independence Day. That means Fourth of July sales are reaching their peak. While it can be tempting to spend lots of cash during these shopping eve… [+4332 chars]",
  },
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Jaures Yip",
    title:
      "The man who designed Apple's most iconic devices reveals which one just might be his favorite",
    description:
      "\"I'm proud of what we did with the watch because that's something that I started after Steve had passed,\" said former Apple designer Jony Ive.",
    url: "https://www.businessinsider.com/jony-ive-apple-watch-design-left-deep-impression-2024-7",
    urlToImage:
      "https://i.insider.com/66840f701f0c1cd6d730a24a?width=1200&format=jpeg",
    publishedAt: "2024-07-04T08:02:02Z",
    content:
      "Apple's former design chief, Jony Ive ,talked about the device that left a deep impression on him.Getty Images/Michael Kovac\r\n<ul><li>Apple's former design chief, Jony Ive, revealed the creation that… [+2212 chars]",
  },
  {
    source: {
      id: null,
      name: "heise online",
    },
    author: "Ben Schwan",
    title: "macOS 15: Erstmals Dolby-Atmos-Passthrough möglich",
    description:
      "Kleines Feature, großer Klang: In Sequoia erlaubt es Apple, Audio via HDMI nahtlos an Surround-Systeme durchzureichen. Unterstützt werden diverse Apps.",
    url: "https://www.heise.de/news/macOS-15-Erstmals-Dolby-Atmos-Passthrough-moeglich-9788199.html",
    urlToImage:
      "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/2/6/9/9/6/shutterstock_158204900-80e09480f8da7cbf.jpg",
    publishedAt: "2024-07-04T08:47:00Z",
    content:
      "Freunde des Heimkinos dürften sich für eine neue Funktion interessieren, die Betatester in macOS 15 alias Sequoia entdeckt haben: Künftig wird es möglich sein, Dolby-Atmos-Klänge unbearbeitet via HDM… [+1862 chars]",
  },
  {
    source: {
      id: null,
      name: "heise online",
    },
    author: "Holger Zelder",
    title:
      "heise+ | Geteilter Zugang: So gibt man Passwörter und Passkeys auf Apple-Geräten weiter",
    description:
      "Passwörter und Passkeys lassen sich unter macOS und iOS mit Kollegen, Freunden oder Familienmitgliedern teilen. Wir zeigen, wie.",
    url: "https://www.heise.de/ratgeber/Geteilter-Zugang-So-gibt-man-Passwoerter-und-Passkeys-auf-Apple-Geraeten-weiter-9785754.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    urlToImage:
      "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/2/5/6/8/7/passkey-c7d5a09ab4dd9f09.png",
    publishedAt: "2024-07-04T07:00:00Z",
    content:
      "Inhaltsverzeichnis\r\nWer Nutzerkonten mit Freunden oder Familienmitgliedern teilen möchte, will nicht immer umständlich die Zugänge hin und her schicken. Apple hat mit dem iCloud-Schlüsselbund komfort… [+956 chars]",
  },
  {
    source: {
      id: null,
      name: "heise online",
    },
    author: "Alexander Spier",
    title: "heise+ | So läuft Windows 11 auf dem MacBook",
    description:
      "Um Windows 11 auf einem Laptop mit ARM-Prozessor auszuprobieren, braucht es kein neues Gerät. Windows on ARM läuft auch auf dem MacBook, wir testen wie gut.​",
    url: "https://www.heise.de/ratgeber/So-laeuft-Windows-11-auf-dem-MacBook-9786703.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
    urlToImage:
      "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/2/6/1/9/2/PXL_20240702_111106737-b9e21566a315dd13.jpg",
    publishedAt: "2024-07-04T05:30:00Z",
    content:
      "Inhaltsverzeichnis\r\nMicrosoft startet bei Windows für ARM-Prozessoren gerade die nächste Offensive, verspricht eine deutliche Leistungssteigerung und endlich ein funktionierendes Ökosystem. Mac-Nutze… [+1784 chars]",
  },
  {
    source: {
      id: null,
      name: "AppleInsider",
    },
    author: "news@appleinsider.com (Amber Neely)",
    title: "Boox Go Color 7 review: a simulacra of the paperback experience",
    description:
      "Boox has a new e-ink reader, combining all our favorite features into a paperback-sized portable at a new, lower price point.Boox Go Color 7 reviewBoox makes some fantastic e-readers, and at this point, AppleInsider has checked out quite a few of them. So whe…",
    url: "https://appleinsider.com/articles/24/07/04/boox-go-color-7-review-a-simulacra-of-the-paperback-experience",
    urlToImage:
      "https://photos5.appleinsider.com/gallery/60224-123706-IMG_1940-xl.jpg",
    publishedAt: "2024-07-04T03:06:57Z",
    content:
      "Boox Go Color 7 review\r\nBoox has a new e-ink reader, combining all our favorite features into a paperback-sized portable at a new, lower price point. \r\nBoox makes some fantastic e-readers, and at thi… [+7944 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Oliver Haslam",
    title:
      "Best Apple July 4th Deals: Save Big on AirPods, Apple Watch, MacBooks and More",
    description:
      "From Apple Watches to MacBooks, iPads and accessories, these July 4th deals across Amazon, Best Buy and more make Apple's products more affordable than ever.",
    url: "https://www.cnet.com/deals/apple-july-4th-deals-2024-07-04/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/adc47a1f7daf76132323ac1e6ce799af1b5c1eaa/hub/2024/05/23/5b0b434c-60c6-4176-a8aa-82e12fe7bf4c/apple-memorial-day-deals.jpg?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-04T08:28:16Z",
    content:
      "With the big day upon us, Fourth of July sales are at their peak. Thankfully, there are plenty of deals that will take the pinch out of buying a shiny new Apple product. There are significant savings… [+2177 chars]",
  },
  {
    source: {
      id: null,
      name: "CNET",
    },
    author: "Aashna Gheewalla",
    title:
      "Turn Up the Sound on July 4th With Over $150 Off the Sonos Arc Soundbar",
    description:
      "The Sonos Arc soundbar is down to just $700 for July 4th, so grab yours now.",
    url: "https://www.cnet.com/deals/turn-up-the-sound-on-july-4th-with-over-150-off-the-sonos-arc-soundbar/",
    urlToImage:
      "https://www.cnet.com/a/img/resize/215f6704f8e67ec5f29f28c3b3aadc9607b42578/hub/2024/07/03/67b06320-0143-499f-93fe-a234b5270f64/sonos-arc-soundbar-jul4.png?auto=webp&fit=crop&height=675&width=1200",
    publishedAt: "2024-07-04T00:25:00Z",
    content:
      "Whether you're looking for a way to amp up the sound on your TV or blast some rocking tunes through a multiroom sound system, a new soundbar can help take your audio experience to a new level. The So… [+969 chars]",
  },
  {
    source: {
      id: null,
      name: "Journal du geek",
    },
    author: "Thomas Estimbre",
    title:
      "Les prix des iPhone grimpent discrètement en France : voici pourquoi",
    description:
      "Apple augmente discrètement le prix de ses iPhone en France et il y a une raison à cela. La hausse, très légère, intervient à quelques semaines de l'annonce des iPhone 16.",
    url: "https://www.journaldugeek.com/2024/07/04/pourquoi-apple-augmente-discretement-le-prix-de-ses-iphone-en-france/",
    urlToImage:
      "https://www.journaldugeek.com/app/uploads/2024/07/iphone-15-pro-smartphone.jpg",
    publishedAt: "2024-07-04T06:03:37Z",
    content:
      "Vous ne l’avez sans doute pas remarqué, mais les iPhone coûtent un peu plus cher qu’hier en France. Apple a discrètement mis à jour l’ensemble de sa gamme, comme on peut le voir en observant l’Apple … [+2984 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Guille Lomener",
    title:
      "Apple Intelligence ya bate récords y eso que ni siquiera ha sido lanzada. Aunque a la OCU no le convenza, está haciendo a los inversores más ricos que nunca",
    description:
      'A punto de cumplirse un mes de la WWDC y la presentación de Apple Intelligence, las acciones de Apple resisten el tradicional "subidón post keynote" y continúan al alza. Tanto es así que se mantiene como la segunda empresa más valiosa del mundo, superando a N…',
    url: "https://www.applesfera.com/apple-1/apple-intelligence-gusta-que-acciones-apple-estan-maximos-historicos",
    urlToImage: "https://i.blogs.es/dab3b1/apple-intelligence/840_560.jpeg",
    publishedAt: "2024-07-04T10:01:03Z",
    content:
      'A punto de cumplirse un mes de la WWDC y la presentación de Apple Intelligence, las acciones de Apple resisten el tradicional "subidón post keynote" y continúan al alza. Tanto es así que se mantiene … [+4039 chars]',
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Roberto Méndez",
    title:
      "No es un error: este altavoz Bluetooth Marshall ofrece un sonido de gran calidad, resistencia al agua y ahora sale más barato",
    description:
      "Si este verano quieres sacarle más partido a tu suscripción de Apple Music y estás pensando en adquirir un altavoz Bluetooth para escuchar tus canciones favoritas allá donde vayas, ahora puedes aprovechar para hacerte con este Marshall Emberton II por unos aj…",
    url: "https://www.applesfera.com/seleccion/no-error-este-altavoz-bluetooth-marshall-ofrece-sonido-gran-calidad-resistencia-al-agua-ahora-sale-barato",
    urlToImage:
      "https://i.blogs.es/55b40e/altavoz-inalambrico-retro-marshall-ideal-para-playa-piscina-montana-con-descuento/840_560.jpeg",
    publishedAt: "2024-07-04T09:41:00Z",
    content:
      "Si este verano quieres sacarle más partido a tu suscripción de Apple Music y estás pensando en adquirir un altavoz Bluetooth para escuchar tus canciones favoritas allá donde vayas, ahora puedes aprov… [+1914 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Álvaro García M.",
    title:
      "Mientras en occidente regulamos la adicción al iPhone y a apps chinas como TikTok, en su país natal las fomentan",
    description:
      "Que los niños accedan desde temprana edad a un móvil y a aplicaciones como TikTok es algo que preocupa y mucho en España. Los expertos son duros en sus recomendaciones y en cada vez más colegios e institutos se regula. A nivel nacional se espera una gran ley …",
    url: "https://www.applesfera.com/general/occidente-regulamos-adiccion-al-iphone-a-apps-chinas-como-tiktok-su-pais-natal-fomentan",
    urlToImage: "https://i.blogs.es/8307d0/china-tik-tok/840_560.jpeg",
    publishedAt: "2024-07-04T07:09:01Z",
    content:
      "Que los niños accedan desde temprana edad a un móvil y a aplicaciones como TikTok es algo que preocupa y mucho en España. Los expertos son duros en sus recomendaciones y en cada vez más colegios e in… [+4279 chars]",
  },
  {
    source: {
      id: null,
      name: "Applesfera.com",
    },
    author: "Álvaro García M.",
    title:
      "Transporte gratis hasta 2025 para la Comunidad Valenciana: requisitos y cómo solicitarlo desde el iPhone",
    description:
      "Aunque hubo dudas sobre ello, finalmente la Generalitat Valenciana ha anunciado la prorroga de rebajas en el transporte público para la toda la comunidad. Estaba previsto que finalizasen en el mes de junio, pero finalmente se ha visto ampliado el plazo hasta …",
    url: "https://www.applesfera.com/tutoriales/transporte-gratis-2025-para-comunidad-valenciana-requisitos-como-solicitarlo-iphone",
    urlToImage: "https://i.blogs.es/942c92/valencia/840_560.jpeg",
    publishedAt: "2024-07-04T09:04:26Z",
    content:
      "Aunque hubo dudas sobre ello, finalmente la Generalitat Valenciana ha anunciado la prorroga de rebajas en el transporte público para la toda la comunidad. Estaba previsto que finalizasen en el mes de… [+3128 chars]",
  },
  {
    source: {
      id: null,
      name: "DIYphotography",
    },
    author: "John Aldred",
    title: "Can this $30 Minolta camera rival an iPhone 15 Pro Max?",
    description:
      "How could such a sweet, svelte shooter be at the center of a firestorm of hate? So goes the story with the Minolta MND20 camera...\nThe post Can this $30 Minolta camera rival an iPhone 15 Pro Max? appeared first on DIY Photography.",
    url: "https://www.diyphotography.net/can-this-30-minolta-camera-rival-an-iphone-15-pro-max/",
    urlToImage:
      "https://www.diyphotography.net/wp-content/uploads/2024/07/opener_cropped.jpeg",
    publishedAt: "2024-07-04T07:26:21Z",
    content:
      "How could such a sweet, svelte shooter be at the center of a firestorm of hate? So goes the story with the Minolta MND20 camera ($99).\r\nIf you believe the bulk of the user comments (rating 3.4 out of… [+5768 chars]",
  },
];
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: article,
      loading: false,
    };
  }
  render() {
    let { title } = this.props;
    return (
      <div>
        <h1 className="d-flex justify-content-center">{title}</h1>
        <div className="container text-center">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col d-flex justify-content-center" key={element.url}>
                  <Newsitem
                    title={element.title.slice(0,45)+'...'}
                    description={element.description.slice(0,88)+'...'}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
