// Service worker do painel de Recuperação — existe só pra permitir
// instalar a página como aplicativo (Mac, Windows, Android, iPhone).
// NÃO guarda nada em cache de propósito: o painel precisa sempre mostrar
// dado ao vivo, nunca uma versão antiga salva no aparelho.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
// Sem listener de 'fetch' — toda requisição vai direto pra rede, como se
// este arquivo nem existisse.
