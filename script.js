// Textos y lecturas: los completaremos cuando tengamos las fuentes del grupo.
const moments = [
  {
    title: 'Oración para todos los días',
    description: 'Comenzamos poniendo este encuentro en manos de Dios.',
    icon: '✧',
    items: [{ title: 'Oración inicial', subtitle: 'Para rezar en comunidad' }]
  },
  {
    title: 'Consideración del día 4',
    description: 'Escuchamos y reflexionamos sobre el camino hacia la Navidad.',
    icon: '✦',
    items: [{ title: 'Lectura y reflexión', subtitle: 'Texto correspondiente al cuarto día' }]
  },
  {
    title: 'Gozos',
    description: 'Respondemos juntos con alegría y esperanza.',
    icon: '♪',
    items: [{ title: 'Gozos de la Novena', subtitle: 'Respuesta para toda la comunidad' }]
  },
  {
    title: 'Oración a la Virgen María',
    description: 'Compartimos la oración dedicada a la Santísima Virgen.',
    icon: '✿',
    items: [{ title: 'Oración a María', subtitle: 'Para rezar juntos' }]
  },
  {
    title: 'Oración a San José',
    description: 'Hacemos una pausa de oración junto a San José.',
    icon: '✧',
    items: [{ title: 'Oración a San José', subtitle: 'Para rezar juntos' }]
  },
  {
    title: 'Oración al Niño Jesús',
    description: 'Cerramos las oraciones con la petición al Niño Jesús.',
    icon: '☆',
    items: [{ title: 'Oración al Niño Jesús', subtitle: 'Para rezar juntos' }]
  },
  {
    title: 'Villancicos y compartir',
    description: 'Terminamos cantando y celebrando en comunidad.',
    icon: '♫',
    items: [
      { title: 'Villancicos', subtitle: 'Canciones para cantar juntos' },
      { title: 'Compartir', subtitle: 'Un momento para estar en comunidad' }
    ]
  }
];

// Cuando se agreguen los archivos, incluir una entrada por cada villancico:
// { title: 'Tutaina', artist: 'Villancico navideño', src: 'assets/audio/tutaina.mp3' }
const projectTracks = [];

const stepList = document.querySelector('#stepList');
const cards = document.querySelector('#prayerCards');
const audioPlayer = document.querySelector('#audioPlayer');
const trackList = document.querySelector('#trackList');
const audioHint = document.querySelector('#audioHint');
let currentMoment = 0;
let currentTrack = -1;
let textSize = 16;
let tracks = [...projectTracks];
let localObjectUrls = [];

function renderMoment(index) {
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
    body.innerHTML = '<div class="pending"><strong>Contenido por completar.</strong> Agregaremos aquí el texto de la oración o lectura cuando confirmemos las fuentes de la novena.</div>';
    details.append(summary, body);
    return details;
  }));

  document.querySelector('#previousStep').disabled = currentMoment === 0;
  document.querySelector('#nextStep').disabled = currentMoment === moments.length - 1;
}

function renderTracks() {
  trackList.replaceChildren();
  if (tracks.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'track-empty';
    empty.textContent = 'Tus villancicos aparecerán aquí cuando agreguemos los audios.';
    trackList.append(empty);
    return;
  }

  tracks.forEach((track, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'track-item';
    button.setAttribute('aria-current', String(index === currentTrack));
    const playMark = document.createElement('span');
    playMark.className = 'track-play';
    playMark.textContent = index === currentTrack && !audioPlayer.paused ? 'Ⅱ' : '▶';
    const name = document.createElement('span');
    name.className = 'track-name';
    name.textContent = track.title;
    button.append(playMark, name);
    button.addEventListener('click', () => playTrack(index));
    trackList.append(button);
  });
}

function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  const track = tracks[index];
  currentTrack = index;
  audioPlayer.src = track.src;
  document.querySelector('#currentTrackName').textContent = track.title;
  document.querySelector('#currentTrackArtist').textContent = track.artist || 'Villancico de Navidad';
  audioHint.textContent = 'Usa los controles del reproductor para pausar, ajustar el volumen o buscar un momento de la canción.';
  renderTracks();
  audioPlayer.play().catch(() => {
    audioHint.textContent = 'Pulsa reproducir en el control de audio para escuchar este villancico.';
  });
}

document.querySelector('#previousStep').addEventListener('click', () => renderMoment(currentMoment - 1));
document.querySelector('#nextStep').addEventListener('click', () => renderMoment(currentMoment + 1));
document.querySelector('#smallerText').addEventListener('click', () => {
  textSize = Math.max(14, textSize - 1);
  document.documentElement.style.setProperty('--reading-size', `${textSize}px`);
});
document.querySelector('#largerText').addEventListener('click', () => {
  textSize = Math.min(23, textSize + 1);
  document.documentElement.style.setProperty('--reading-size', `${textSize}px`);
});
document.querySelector('#previousTrack').addEventListener('click', () => {
  if (tracks.length) playTrack((currentTrack - 1 + tracks.length) % tracks.length);
});
document.querySelector('#nextTrack').addEventListener('click', () => {
  if (tracks.length) playTrack((currentTrack + 1) % tracks.length);
});
audioPlayer.addEventListener('play', renderTracks);
audioPlayer.addEventListener('pause', renderTracks);
audioPlayer.addEventListener('ended', () => {
  if (currentTrack + 1 < tracks.length) playTrack(currentTrack + 1);
});
document.querySelector('#audioFiles').addEventListener('change', event => {
  localObjectUrls.forEach(URL.revokeObjectURL);
  localObjectUrls = [];
  tracks = Array.from(event.target.files)
    .filter(file => file.type.startsWith('audio/'))
    .map(file => {
      const src = URL.createObjectURL(file);
      localObjectUrls.push(src);
      return { title: file.name.replace(/\.[^.]+$/, ''), artist: 'Desde este dispositivo', src };
    });
  currentTrack = -1;
  audioPlayer.removeAttribute('src');
  audioPlayer.load();
  document.querySelector('#currentTrackName').textContent = 'Selecciona un villancico';
  document.querySelector('#currentTrackArtist').textContent = 'Música de Navidad';
  audioHint.textContent = tracks.length ? 'Audios cargados localmente. Selecciona uno en la lista para reproducirlo.' : 'Cuando agreguemos los archivos de audio, podrás reproducirlos aquí.';
  renderTracks();
});

renderMoment(0);
renderTracks();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./service-worker.js').catch(error => {
    console.info('La versión sin conexión se activará al publicar el sitio en HTTPS.', error);
  });
}
