const CACHE_NAME = 'version-1'
const urlsToCache = ['index.html']

const self=this
// install SW
self.addEventListener('install', (e)=>{
  e.waitUntil(
    
  (async() => {
    try {
      const cache_obj = await caches.open(CACHE_NAME)
      cache_obj.addAll(urlsToCache)
      console.log("cached urls")
    }
    catch{
      console.log("error occured while caching...")
    }
  })()

  )
})

// listen to requests
self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request)
    .then(()=>{
      return fetch(e.request)
      .catch(()=>caches.match(urlsToCache[0]))
    })
  )
})

// Activate SW
self.addEventListener('activate', (e)=>{
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  e.waitUntil(
    caches.keys().then((cacheNames)=>Promise.all(
      cacheNames.map((cacheName)=>{
        if(!cacheWhiteList.includes(cacheName)){
          return caches.delete(cacheName)
        }
      })
    ))
  )
})