// Novena tradicional organizada para el cuarto día. Las fuentes completas están enlazadas en el pie de página.
const commonPrayers = {
  'padre-nuestro': {
    title: 'Padrenuestro',
    paragraphs: ['Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.']
  },
  'ave-maria': {
    title: 'Avemaría',
    paragraphs: ['Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.']
  },
  gloria: {
    title: 'Gloria al Padre',
    paragraphs: ['Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.']
  }
};

const moments = [
  {
    title: 'Oración para todos los días',
    description: 'Comenzamos poniendo este encuentro en manos de Dios.',
    icon: '✧',
    items: [{
      title: 'Oración inicial', subtitle: 'Oración para todos los días',
      paragraphs: [
        'Benignísimo Dios de infinita caridad, que tanto amasteis a los hombres, que les disteis en vuestro Hijo la mejor prenda de vuestro amor, para que, hecho hombre en las entrañas de una Virgen, naciese en un pesebre para nuestra salud y remedio; yo, en nombre de todos los mortales, os doy infinitas gracias por tan soberano beneficio.',
        'En retorno de él os ofrezco la pobreza, humildad y demás virtudes de vuestro Hijo humanado; suplicándoos por sus divinos méritos, por las tiernas lágrimas que derramó en el pesebre, que dispongáis nuestros corazones con humildad profunda, con amor encendido, con total desprecio de todo lo terreno, para que Jesús recién nacido tenga en ellos su cuna y more eternamente. Amén.',
        'Al terminar, se reza tres veces el Gloria al Padre.'
      ],
      responsePrayers: ['gloria']
    }]
  },
  {
    title: 'Consideración del día 4',
    description: 'Escuchamos y reflexionamos sobre el camino hacia la Navidad.',
    icon: '✦',
    items: [{
      title: 'Lectura y reflexión', subtitle: 'Día 4 · humildad, oración y entrega',
      paragraphs: [
        'Desde el seno de su Madre comenzó el Niño Jesús a poner en práctica su entera sumisión a Dios, que continuó sin la menor interrupción durante toda su vida. Adoraba a su Eterno Padre, le amaba, se sometía a su voluntad; aceptaba con resignación el estado en que se hallaba, conociendo toda su debilidad, toda su humillación, todas sus incomodidades.',
        '¿Quién de nosotros quisiera retroceder a un estado semejante con el pleno goce de la razón y de la reflexión? ¿Quién pudiera sostener a sabiendas su martirio tan prolongado, tan penoso de todas maneras? Por ahí entró el Divino Niño en su dolorosa y humilde carrera; así empezó a anonadarse delante de su Padre, a enseñarnos lo que Dios merece por parte de su criatura: a expiar nuestro orgullo, origen de todos nuestros pecados, y a hacernos sentir toda la criminalidad y desorden de este orgullo.',
        '¿Deseamos hacer una verdadera oración? Empecemos por formarnos de ella una exacta idea, contemplando al Niño Jesús en el seno de su Madre. El Divino Niño ora, y ora del modo más excelente. No habla, no medita ni se deshace en tiernos afectos. Su mismo estado, aceptado con la intención de honrar a Dios, es su oración, y ese estado expresa altamente todo lo que Dios merece, y de qué modo quiere ser adorado por nosotros.',
        'Unámonos a las adoraciones del Niño Dios en el seno de María, unámonos a su profundo abatimiento, y sea este el primer efecto de nuestro sacrificio a Dios. Démonos a Dios, no para ser algo, como lo pretende continuamente nuestra vanidad, sino para no ser nada; para quedar enteramente consumidos y anonadados; para renunciar a la estimación de nosotros mismos, a todo cuidado de nuestra grandeza, aunque sea espiritual; a toda mira interesada, a todo movimiento de vanagloria. Desaparezcamos a nuestros propios ojos, y que Dios solo sea todo para nosotros.'
      ],
      continueTo: 2,
      continueLabel: 'Continuar con la oración a María'
    }]
  },
  {
    title: 'Oración a la Virgen María',
    description: 'Compartimos la oración dedicada a la Santísima Virgen.',
    icon: '✿',
    items: [{
      title: 'Oración a María', subtitle: 'Al finalizar se rezan tres Avemarías',
      paragraphs: [
        'Soberana María, que por vuestras grandes virtudes, y especialmente por vuestra humildad, merecisteis que todo un Dios os escogiese por Madre suya, os suplico que vos misma preparéis y dispongáis mi alma y la de todos los que en este tiempo hiciesen esta novena, para el nacimiento espiritual de vuestro adorado Hijo.',
        '¡Oh dulcísima Madre!, comunicadme algo del profundo recogimiento y divina ternura con que le aguardasteis vos, para que nos hagáis menos indignos de verle, amarle y adorarle por toda la eternidad. Amén.',
        'Al terminar, se rezan tres Avemarías. Abre el botón para ver el texto y repetirlo.'
      ],
      responsePrayers: ['ave-maria']
    }]
  },
  {
    title: 'Oración a San José',
    description: 'Hacemos una pausa de oración junto a San José.',
    icon: '✧',
    items: [{
      title: 'Oración a San José', subtitle: 'Después: Padrenuestro, Avemaría y Gloria',
      paragraphs: [
        '¡Oh santísimo José, esposo de María y padre putativo de Jesús! Infinitas gracias doy a Dios porque os escogió para tan altos ministerios y os adornó con todos los dones proporcionados a tan excelente grandeza. Os ruego, por el amor que tuvisteis al Divino Niño, me abracéis en fervorosos deseos de verle y recibirle sacramentalmente, mientras en su divina esencia le veo y le gozo en el cielo. Amén.',
        'Al terminar, se reza un Padrenuestro, un Avemaría y un Gloria al Padre.'
      ],
      responsePrayers: ['padre-nuestro', 'ave-maria', 'gloria']
    }]
  },
  {
    title: 'Gozos',
    description: 'Respondemos juntos con alegría y esperanza.',
    icon: '♪',
    items: [{
      title: 'Gozos de la Novena', subtitle: 'Una persona lee cada estrofa y todos responden',
      paragraphs: [
        'Dulce Jesús mío, mi Niño adorado.',
        'Quien dirige puede anunciar el número en voz alta. Abre cada número para leer la estrofa; al final de cada una, todos responden: «¡Ven a nuestras almas! ¡Ven, no tardes tanto!».',
        'Texto tradicional atribuido a la Madre María Ignacia; se presenta con ortografía actualizada a partir de la edición de 1956 catalogada como de dominio público.'
      ],
      gozos: [
        '¡Oh Sapiencia suma del Dios soberano, que a infantil alcance te rebajas sacro! ¡Oh Divino Niño, ven para enseñarnos la prudencia que hace verdaderos sabios!',
        '¡Oh Adonaí potente que a Moisés hablando, de Israel al pueblo disteis los mandatos! ¡Ah!, ¡ven prontamente para rescatarnos, y que un niño débil muestre fuerte brazo!',
        '¡Oh raíz sagrada de José, que en lo alto presentas al orbe tu fragante nardo! ¡Dulcísimo Niño que has sido llamado Lirio de los valles, Bella flor del campo!',
        '¡Llave de David que abre al desterrado las cerradas puertas de regio palacio! ¡Sácanos, oh Niño, con tu blanda mano, de la cárcel triste que labró el pecado!',
        '¡Oh lumbre de Oriente, sol de eternos rayos, que entre las tinieblas tu resplandor veamos! ¡Niño tan precioso, dicha del cristiano, luzca la sonrisa de tus dulces labios!',
        '¡Espejo sin mancha, Santo de los santos, sin igual imagen del Dios soberano! ¡Borra nuestras culpas, salva al desterrado, y en forma de Niño da al mísero amparo!',
        '¡Rey de las naciones, Emmanuel preclaro, de Israel anhelo, Pastor del rebaño! ¡Niño que apacientas con suave cayado, ya la oveja arisca, ya el cordero manso!',
        '¡Ábranse los cielos y llueva de lo alto bienhechor rocío, como riego santo! ¡Ven, hermoso Niño, ven, Dios humanado! ¡Luce, hermosa estrella, brota, flor del campo!',
        '¡Ven, que ya María previene sus brazos, do su Niño vean en tiempo cercano! ¡Ven, que ya José, con anhelo sacro, se dispone a hacerse de tu amor sagrario!',
        '¡Del débil, auxilio; del doliente, amparo; consuelo del triste, luz del desterrado! ¡Vida de mi vida, mi dueño adorado; mi constante amigo, mi divino hermano!',
        '¡Véante mis ojos de ti enamorados! ¡Bese ya tus plantas! ¡Bese ya tus manos! ¡Prosternado en tierra te tiendo los brazos, y aún más que mis frases te dice mi llanto!',
        '¡Ven, Salvador nuestro, por quien suspiramos!'
      ]
    }]
  },
  {
    title: 'Oración al Niño Jesús',
    description: 'Cerramos las oraciones con la petición al Niño Jesús.',
    icon: '☆',
    items: [{
      title: 'Oración al Niño Jesús', subtitle: 'Dejamos un momento para presentar nuestras peticiones',
      paragraphs: [
        'Acordaos, ¡oh dulcísimo Niño Jesús!, que dijisteis a la venerable Margarita del Santísimo Sacramento, y en persona suya a todos vuestros devotos, estas palabras tan consoladoras para nuestra pobre humanidad agobiada y doliente: «Todo lo que quieras pedir, pídelo por los méritos de mi infancia, y nada te será negado». Llenos de confianza en vos, ¡oh Jesús!, que sois la misma verdad, venimos a exponeros toda nuestra miseria. Ayudadnos a llevar una vida santa, para conseguir una eternidad bienaventurada.',
        'Concedednos, por los méritos infinitos de vuestra Encarnación y de vuestra infancia, la gracia de la cual necesitamos tanto. Nos entregamos a vos, ¡oh Niño omnipotente!, seguros de que no quedará frustrada nuestra esperanza y de que, en virtud de vuestra divina promesa, acogeréis y despacharéis favorablemente nuestra súplica. Amén.',
        'En silencio, presentamos nuestra petición personal.'
      ]
    }]
  },
  {
    title: 'Villancicos y compartir',
    description: 'Terminamos cantando y celebrando en comunidad.',
    icon: '♫',
    items: [
      { title: 'Villancicos', subtitle: 'Abre la página musical de la novena', paragraphs: ['Elige una canción, mira su portada y usa el reproductor en su propia página.'], href: 'villancicos.html' },
      { title: 'Compartir', subtitle: 'Un momento para estar en comunidad' }
    ]
  }
];

const stepList = document.querySelector('#stepList');
const cards = document.querySelector('#prayerCards');
const contentSection = document.querySelector('.content');
let currentMoment = 0;

function renderMoment(index) {
  contentSection.classList.remove('section-enter');
  void contentSection.offsetWidth;
  currentMoment = Math.max(0, Math.min(index, moments.length - 1));
  const moment = moments[currentMoment];
  document.querySelector('#sectionTitle').textContent = moment.title;
  document.querySelector('#sectionDescription').textContent = moment.description;

  stepList.replaceChildren(...moments.map((item, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'step';
    button.dataset.step = String(i);
    button.setAttribute('aria-label', `${i + 1}. ${item.title}`);
    if (i === currentMoment) button.setAttribute('aria-current', 'step');
    button.innerHTML = `<span class="step-num">${i + 1}</span><span class="step-label"></span>`;
    button.querySelector('.step-label').textContent = item.title;
    button.addEventListener('click', () => renderMoment(i));
    return button;
  }));

  cards.replaceChildren(...moment.items.map((item, i) => {
    const details = document.createElement('details');
    details.className = 'prayer-card';
    if (i === 0) details.open = true;
    const summary = document.createElement('summary');
    summary.innerHTML = `<span class="card-icon" aria-hidden="true">${moment.icon}</span><span><span class="card-title"></span><span class="card-subtitle"></span></span><span class="chevron" aria-hidden="true">⌄</span>`;
    summary.querySelector('.card-title').textContent = item.title;
    summary.querySelector('.card-subtitle').textContent = item.subtitle;
    const body = document.createElement('div');
    body.className = 'prayer-body';
    if (item.paragraphs?.length) {
      item.paragraphs.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        body.append(paragraph);
      });
    } else {
      body.innerHTML = '<div class="pending"><strong>Momento para compartir.</strong> Disfrutemos este espacio de encuentro en comunidad.</div>';
    }
    if (item.gozos?.length) {
      const gozoList = document.createElement('div');
      gozoList.className = 'gozo-list';
      item.gozos.forEach((text, gozoIndex) => {
        const gozo = document.createElement('details');
        gozo.className = 'gozo-item';
        const gozoSummary = document.createElement('summary');
        gozoSummary.innerHTML = `<span class="gozo-number">${gozoIndex + 1}</span><span>Gozo ${gozoIndex + 1}</span><span class="gozo-chevron" aria-hidden="true">⌄</span>`;
        const gozoBody = document.createElement('div');
        gozoBody.className = 'gozo-body';
        const verse = document.createElement('p');
        verse.textContent = text;
        const response = document.createElement('p');
        response.className = 'gozo-response';
        response.innerHTML = '<strong>Todos:</strong> ¡Ven a nuestras almas! ¡Ven, no tardes tanto!';
        gozoBody.append(verse, response);
        gozo.append(gozoSummary, gozoBody);
        gozoList.append(gozo);
      });
      body.append(gozoList);
    }
    if (item.responsePrayers?.length) {
      const prayerTools = document.createElement('div');
      prayerTools.className = 'response-prayers';
      const label = document.createElement('span');
      label.className = 'response-label';
      label.textContent = 'Ver oración';
      prayerTools.append(label);

      item.responsePrayers.forEach((prayerKey, prayerIndex) => {
        const prayer = commonPrayers[prayerKey];
        const button = document.createElement('button');
        const panel = document.createElement('div');
        const panelId = `response-${currentMoment}-${i}-${prayerIndex}`;
        button.type = 'button';
        button.className = 'response-button';
        button.textContent = prayer.title;
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', panelId);
        panel.className = 'response-text';
        panel.id = panelId;
        panel.hidden = true;

        const prayerTitle = document.createElement('strong');
        prayerTitle.textContent = prayer.title;
        panel.append(prayerTitle);
        prayer.paragraphs.forEach(text => {
          const paragraph = document.createElement('p');
          paragraph.textContent = text;
          panel.append(paragraph);
        });

        button.addEventListener('click', () => {
          const isExpanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', String(!isExpanded));
          button.textContent = isExpanded ? prayer.title : `Ocultar ${prayer.title}`;
          panel.hidden = isExpanded;
          if (!isExpanded) {
            panel.classList.remove('is-visible');
            void panel.offsetWidth;
            panel.classList.add('is-visible');
          }
        });

        prayerTools.append(button, panel);
      });
      body.append(prayerTools);
    }
    if (item.href) {
      const link = document.createElement('a');
      link.className = 'open-music-page';
      link.href = item.href;
      link.textContent = 'Abrir página de villancicos →';
      body.append(link);
    }
    if (Number.isInteger(item.continueTo)) {
      const continueButton = document.createElement('button');
      continueButton.type = 'button';
      continueButton.className = 'continue-button';
      continueButton.textContent = `${item.continueLabel} →`;
      continueButton.addEventListener('click', () => renderMoment(item.continueTo));
      body.append(continueButton);
    }
    details.append(summary, body);
    return details;
  }));

  document.querySelector('#previousStep').disabled = currentMoment === 0;
  document.querySelector('#nextStep').disabled = currentMoment === moments.length - 1;
  contentSection.classList.add('section-enter');
}

document.querySelector('#previousStep').addEventListener('click', () => renderMoment(currentMoment - 1));
document.querySelector('#nextStep').addEventListener('click', () => renderMoment(currentMoment + 1));

function appendPrintText(parent, tagName, text, className = '') {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function renderPrintProgram() {
  const printProgram = document.querySelector('#printProgram');
  const title = appendPrintText(printProgram, 'h1', 'Novena de Navidad · Día 4');
  title.className = 'print-title';
  appendPrintText(printProgram, 'p', 'Programa completo de oración y villancicos · Actividad formativa SENA · Ficha 3410082', 'print-subtitle');

  moments.forEach((moment, momentIndex) => {
    const section = document.createElement('section');
    section.className = 'print-moment';
    appendPrintText(section, 'h2', `${momentIndex + 1}. ${moment.title}`);

    moment.items.forEach(item => {
      const article = document.createElement('article');
      article.className = 'print-reading';
      appendPrintText(article, 'h3', item.title);
      (item.paragraphs || []).forEach(text => appendPrintText(article, 'p', text));

      (item.responsePrayers || []).forEach(prayerKey => {
        const prayer = commonPrayers[prayerKey];
        appendPrintText(article, 'h4', prayer.title);
        prayer.paragraphs.forEach(text => appendPrintText(article, 'p', text));
      });

      if (item.gozos?.length) {
        const list = document.createElement('ol');
        list.className = 'print-gozos';
        item.gozos.forEach(text => {
          const gozo = document.createElement('li');
          appendPrintText(gozo, 'p', text);
          appendPrintText(gozo, 'p', 'Todos: ¡Ven a nuestras almas! ¡Ven, no tardes tanto!', 'print-response');
          list.append(gozo);
        });
        article.append(list);
      }

      section.append(article);
    });

    printProgram.append(section);
  });

  const songsSection = document.createElement('section');
  songsSection.className = 'print-moment print-songs';
  appendPrintText(songsSection, 'h2', 'Villancicos para compartir');
  appendPrintText(songsSection, 'p', 'Los audios se reproducen desde la página digital de Villancicos.');
  const songs = [
    ['A Belén Pastores', 'a-belen-pastores.jpg'], ['A La Nanita Nana', 'a-la-nanita-nana.jpg'],
    ['Antón', 'anton.jpg'], ['Campana Sobre Campana', 'campana-sobre-campana.jpg'],
    ['El Tamborilero', 'el-tamborilero.jpg'], ['Los Peces En El Río', 'los-peces-en-el-rio.jpg'],
    ['Mi Burrito Sabanero', 'mi-burrito-sabanero.jpg'], ['Noche de Paz', 'noche-de-paz.jpg'],
    ['Pastores Venid', 'pastores-venid.jpg'], ['Salve Reina Y Madre', 'salve-reina-y-madre.jpg'],
    ['Tutaina', 'tutaina.jpg'], ['Vamos Pastores', 'vamos-pastores.jpg'],
    ['Vamos Vamos Pastorcitos', 'vamos-vamos-pastorcitos.jpg'], ['Zagalillo', 'zagalillo.jpg']
  ];
  const songGrid = document.createElement('div');
  songGrid.className = 'print-song-grid';
  songs.forEach(([songTitle, imageFile]) => {
    const song = document.createElement('figure');
    const cover = document.createElement('img');
    cover.src = `assets/covers/${imageFile}`;
    cover.alt = `Portada de ${songTitle}`;
    song.append(cover);
    appendPrintText(song, 'figcaption', songTitle);
    songGrid.append(song);
  });
  songsSection.append(songGrid);
  printProgram.append(songsSection);

  const sources = document.createElement('section');
  sources.className = 'print-sources';
  appendPrintText(sources, 'h2', 'Fuentes de consulta');
  [
    ['Amén Comunicaciones · Día 4', 'https://amencomunicaciones.com/crece-la-fe/novena-de-navidad-cuarto-dia/'],
    ['Colombia.com · Día 4', 'https://www.colombia.com/navidad/novena/d4.aspx'],
    ['Biblioteca Digital de Bogotá · Novena de 1956', 'https://www.bibliotecadigitaldebogota.gov.co/resources/2092684/']
  ].forEach(([label, href]) => {
    const source = document.createElement('p');
    source.textContent = `${label}: ${href}`;
    sources.append(source);
  });
  printProgram.append(sources);
}

document.querySelector('#celebrationToggle').addEventListener('click', event => {
  const isActive = document.body.classList.toggle('celebration-mode');
  event.currentTarget.setAttribute('aria-pressed', String(isActive));
  event.currentTarget.textContent = isActive ? 'Salir del modo celebración' : 'Modo celebración';
  if (isActive) document.querySelector('#recorrido').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.querySelector('#printProgramButton').addEventListener('click', () => window.print());

renderPrintProgram();
renderMoment(0);

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./service-worker.js').catch(error => {
    console.info('La versión sin conexión se activará al publicar el sitio en HTTPS.', error);
  });
}
