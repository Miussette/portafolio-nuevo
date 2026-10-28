# Miu Works — Next.js + TypeScript + Tailwind CSS

Conversión fiel del HTML original, con App Router, componentes, filtros, modal de contacto, tema persistente y cuadrícula GitHub estática.

## Iniciar

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Personalización
- Correo, enlaces y foto: `src/lib/constants.ts` (el correo actual es un marcador).
- Proyectos: `src/data/projects.ts`.
- Estilos: `src/app/globals.css` (Tailwind v4 + CSS original para fidelidad visual).
- Gráfico de GitHub: es estático, igual que el archivo original; no se conecta a la API de GitHub.
- El formulario utiliza `mailto:` y requiere un cliente de correo configurado; no envía mensajes desde un servidor.
- La foto se carga desde la URL del HTML original. Si deja de funcionar, guarda una copia en `public/images` y cambia `PHOTO_URL`.

## Verificar

```bash
npm run lint
npm run build
```
