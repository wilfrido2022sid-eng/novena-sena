const AUDIO_CACHE = 'novena-audio-cache-v1';
// Portadas ilustradas de forma local. Para usar una foto propia, añade cover: 'assets/covers/archivo.jpg'.
const tracks = [
  { title: 'A Belén Pastores', src: 'assets/audio/A Belén Pastores.mp3', cover: 'assets/covers/a-belen-pastores.jpg', symbol: '🐑', colors: ['#174634', '#b34135'] },
  { title: 'A La Nanita Nana', src: 'assets/audio/A La Nanita Nana.mp3', cover: 'assets/covers/a-la-nanita-nana.jpg', symbol: '🌙', colors: ['#173a5b', '#805a8e'] },
  { title: 'Antón', src: 'assets/audio/Antón.mp3', cover: 'assets/covers/anton.jpg', symbol: '✨', colors: ['#3b4c77', '#bd783c'] },
  { title: 'Campana Sobre Campana', src: 'assets/audio/Campana Sobre Campana.mp3', cover: 'assets/covers/campana-sobre-campana.jpg', symbol: '🔔', colors: ['#1f5b40', '#b78c36'] },
  { title: 'El Tamborilero', src: 'assets/audio/El Tamborilero.mp3', cover: 'assets/covers/el-tamborilero.jpg', symbol: '🥁', colors: ['#783c36', '#c78a3f'] },
  { title: 'Los Peces En El Río', src: 'assets/audio/Los Peces En El Río.mp3', cover: 'assets/covers/los-peces-en-el-rio.jpg', symbol: '🐟', colors: ['#155b70', '#50a6a1'] },
  { title: 'Mi Burrito Sabanero', src: 'assets/audio/Mi Burrito Sabanero.mp3', cover: 'assets/covers/mi-burrito-sabanero.jpg', symbol: '🫏', colors: ['#7a482e', '#d49a45'] },
  { title: 'Noche de Paz', src: 'assets/audio/Noche de Paz.mp3', cover: 'assets/covers/noche-de-paz.jpg', symbol: '🌟', colors: ['#172c55', '#61598e'] },
  { title: 'Pastores Venid', src: 'assets/audio/Pastores Venid.mp3', cover: 'assets/covers/pastores-venid.jpg', symbol: '🧑‍🌾', colors: ['#265a3d', '#9b8238'] },
  { title: 'Salve Reina Y Madre', src: 'assets/audio/Salve Reina Y Madre.mp3', cover: 'assets/covers/salve-reina-y-madre.jpg', symbol: '👑', colors: ['#6e3742', '#c8994d'] },
  { title: 'Tutaina', src: 'assets/audio/Tutaina.mp3', cover: 'assets/covers/tutaina.jpg', symbol: '🎄', colors: ['#174b36', '#a84037'] },
  { title: 'Vamos Pastores', src: 'assets/audio/Vamos Pastores.mp3', cover: 'assets/covers/vamos-pastores.jpg', symbol: '🐑', colors: ['#3b6240', '#ba7740'] },
  { title: 'Vamos Vamos Pastorcitos', src: 'assets/audio/Vamos Vamos Pastorcitos.mp3', cover: 'assets/covers/vamos-vamos-pastorcitos.jpg', symbol: '⭐', colors: ['#253f58', '#bb653d'] },
  { title: 'Zagalillo', src: 'assets/audio/Zagalillo.mp3', cover: 'assets/covers/zagalillo.jpg', symbol: '🧒', colors: ['#375a48', '#b97b3c'] }
];

const songGrid = document.querySelector('#songGrid');
const audioPlayer = document.querySelector('#audioPlayer');
const status = document.querySelector('#playerStatus');
const offlineStatus = document.querySelector('#offlineStatus');
const downloadAllButton = document.querySelector('#downloadAll');
let currentIndex = -1;
let currentObjectUrl = null;
let isPreparingTracks = false;

function trackUrl(track) {
  return new URL(track.src, document.baseURI).href;
}

function createCover(track, className = 'cover-art') {
  const cover = document.createElement('div');
  cover.className = className;
  cover.style.setProperty('--cover-background', `radial-gradient(circle at 70% 22%, #f8e5a9 0 2%, transparent 3%), radial-gradient(circle at 26% 78%, #ffffff20 0 1.5%, transparent 2%), linear-gradient(145deg, ${track.colors[0]}, ${track.colors[1]})`);

  if (track.cover) {
    cover.classList.add('has-photo');
    cover.style.backgroundImage = `linear-gradient(#102d2030,#102d2030), url("${track.cover}")`;
    cover.setAttribute('role', 'img');
    cover.setAttribute('aria-label', `Portada de ${track.title}`);
  } else {
    const symbol = document.createElement('span');
    symbol.className = 'cover-symbol';
    symbol.setAttribute('aria-hidden', 'true');
    symbol.textContent = track.symbol;
    cover.append(symbol);
  }

  const wordmark = document.createElement('span');
  wordmark.className = 'cover-wordmark';
  wordmark.textContent = 'NAVIDAD · DÍA 4';
  wordmark.setAttribute('aria-hidden', 'true');
  cover.append(wordmark);
  return cover;
}

async function getAudioCache() {
  if (!('caches' in window)) throw new Error('Este navegador no permite guardar audios sin conexión.');
  return caches.open(AUDIO_CACHE);
}

async function getTrackResponse(track, cache) {
  if (!cache) cache = await getAudioCache();
  const url = trackUrl(track);
  const savedResponse = await cache.match(url);
  if (savedResponse) {
    track.isCached = true;
    return savedResponse;
  }

  const response = await fetch(url);
  if (!response.ok || response.status !== 200) {
    throw new Error(`No se pudo cargar “${track.title}”. Comprueba que el MP3 esté en assets/audio.`);
  }
  await cache.put(url, response.clone());
  track.isCached = true;
  return response;
}

function renderTrackList() {
  songGrid.replaceChildren();
  document.querySelector('#songCount').textContent = `${tracks.length} canciones`;

  tracks.forEach((track, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'song-card';
    button.setAttribute('aria-current', String(index === currentIndex));
    button.setAttribute('aria-label', `Reproducir ${track.title}`);
    button.append(createCover(track));

    const footer = document.createElement('span');
    footer.className = 'song-card-footer';
    const title = document.createElement('span');
    title.className = 'song-card-title';
    title.textContent = track.title;
    const play = document.createElement('span');
    play.className = 'song-card-play';
    play.setAttribute('aria-hidden', 'true');
    play.textContent = index === currentIndex && !audioPlayer.paused ? 'Ⅱ' : '▶';
    footer.append(title, play);
    button.append(footer);

    if (track.isCached) {
      const cached = document.createElement('span');
      cached.className = 'offline-tag';
      cached.textContent = '✓ Disponible sin conexión';
      button.append(cached);
    }

    button.addEventListener('click', () => playTrack(index));
    songGrid.append(button);
  });
}

async function playTrack(index) {
  if (index < 0 || index >= tracks.length) return;
  currentIndex = index;
  const track = tracks[currentIndex];
  const name = document.querySelector('#currentTrackName');
  name.textContent = track.title;
  document.querySelector('#currentCategory').textContent = 'VILLANCICO NAVIDEÑO';
  document.querySelector('#currentTrackArtist').textContent = 'Novena de Navidad · Día 4';
  const updatedCover = createCover(track, 'current-cover cover-art');
  updatedCover.id = 'currentCover';
  document.querySelector('#currentCover').replaceWith(updatedCover);
  if (window.matchMedia('(max-width: 760px)').matches) {
    document.querySelector('.now-playing-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  status.textContent = 'Cargando villancico…';
  renderTrackList();

  try {
    audioPlayer.pause();
    audioPlayer.removeAttribute('src');
    audioPlayer.load();
    if (currentObjectUrl) URL.revokeObjectURL(currentObjectUrl);
    const response = await getTrackResponse(track);
    currentObjectUrl = URL.createObjectURL(await response.blob());
    audioPlayer.src = currentObjectUrl;
    status.textContent = track.isCached ? 'Guardado en este dispositivo; estará disponible sin conexión.' : 'Usa la barra para pausar, ajustar el volumen o cambiar de momento.';
    try {
      await audioPlayer.play();
    } catch {
      status.textContent = 'El audio está listo. Pulsa reproducir en el control para comenzar.';
    }
  } catch (error) {
    status.textContent = error.message || 'No se pudo reproducir este audio.';
  }
  renderTrackList();
}

async function prepareAllTracks() {
  if (isPreparingTracks) return;
  isPreparingTracks = true;
  downloadAllButton.disabled = true;
  downloadAllButton.textContent = 'Preparando…';
  try {
    const cache = await getAudioCache();
    let ready = 0;
    for (const track of tracks) {
      const response = await getTrackResponse(track, cache);
      if (response.ok) ready += 1;
      offlineStatus.textContent = `Preparando canciones: ${ready} de ${tracks.length}…`;
    }
    offlineStatus.textContent = `Listo: las ${tracks.length} canciones están guardadas para escuchar sin conexión.`;
    renderTrackList();
  } catch (error) {
    offlineStatus.textContent = error.message || 'No se pudieron preparar las canciones. Conéctate a internet e inténtalo de nuevo.';
  } finally {
    downloadAllButton.disabled = false;
    downloadAllButton.innerHTML = '<span aria-hidden="true">↓</span> Preparar canciones sin conexión';
    isPreparingTracks = false;
  }
}

document.querySelector('#previousTrack').addEventListener('click', () => {
  playTrack(currentIndex <= 0 ? 0 : currentIndex - 1);
});
document.querySelector('#nextTrack').addEventListener('click', () => {
  playTrack(currentIndex < 0 ? 0 : (currentIndex + 1) % tracks.length);
});
document.querySelector('#downloadAll').addEventListener('click', prepareAllTracks);
audioPlayer.addEventListener('play', renderTrackList);
audioPlayer.addEventListener('pause', renderTrackList);
audioPlayer.addEventListener('ended', () => {
  if (currentIndex + 1 < tracks.length) playTrack(currentIndex + 1);
});

async function refreshCachedBadges() {
  try {
    const cache = await getAudioCache();
    await Promise.all(tracks.map(async track => { track.isCached = Boolean(await cache.match(trackUrl(track))); }));
    if (tracks.every(track => track.isCached)) {
      offlineStatus.textContent = `Listo: las ${tracks.length} canciones están guardadas para escuchar sin conexión.`;
    }
    renderTrackList();
  } catch {
    // La página y los controles siguen funcionando aunque el navegador no ofrezca Cache Storage.
  }
}

renderTrackList();
refreshCachedBadges();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./service-worker.js').catch(error => {
    console.info('La versión sin conexión se activará al publicar el sitio en HTTPS.', error);
  });
}
