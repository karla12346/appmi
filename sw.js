const STATIC_CACHE = "static";

const APP_SHELL = [
    "/",
    "autores.html",
    "estilo.css",
    "estilos.css",
    "index.html",
    "main.js",
    "style.css",
    "sw.js",
    "1.jpg",
    "2.png",
    "tony.mp4",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.png",
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
    "img/img7.png",
    "img/img8.png",
    "img/img9.jpg",
    "img/img10.jpg"
];

self.addEventListener("install", (e) =>{
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fectch!", e.request);

    e.respondWith(
        caches
            .match(e.request)
            .then(resp => resp || fetch(e.request))
            .catch(console.log)
    );
});