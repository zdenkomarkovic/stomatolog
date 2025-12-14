# Dr Violeta Vladimirov - Stomatološka ordinacija

Profesionalan, SEO optimizovan sajt za stomatološku ordinaciju Dr Violeta Vladimirov u Subotici.

## 🌟 Karakteristike

- ✅ **Dvojezična podrška** - Srpski i engleski jezik
- ✅ **SEO optimizovan** - Meta tagovi, strukturni podaci (Schema.org)
- ✅ **Moderni dizajn** - Profesionalan i prijatan izgled
- ✅ **Responzivan** - Prilagođen svim uređajima (mobilni, tablet, desktop)
- ✅ **Brze performanse** - Optimizovane slike i kod
- ✅ **Kontakt forma** - Funkcionalna kontakt forma sa emailom
- ✅ **Animacije** - Smooth animacije sa Framer Motion
- ✅ **Mapa lokacije** - Integrisana Google Maps mapa

## 📄 Stranice

1. **Početna** (`/`) - Hero sekcija, statistike, pregled usluga, poziv na akciju
2. **Usluge** (`/usluge`) - Kompletna lista stomatoloških usluga
3. **O nama** (`/o-nama`) - Informacije o Dr Violeta Vladimirov
4. **Kontakt** (`/kontakt`) - Kontakt forma, mapa, društvene mreže

## 🚀 Pokretanje projekta

### Instalacija

```bash
npm install
```

### Development server

```bash
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000) u browseru.

### Production build

```bash
npm run build
npm start
```

## 📧 Konfiguracija Email-a

Za funkcionalnu kontakt formu, potrebno je podesiti email konfiguraciju:

1. Otvorite `lib/send-mail.ts`
2. Konfigurišite Nodemailer sa vašim email podacima
3. Postavite environment varijable:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=dr.milan.vladimirov@gmail.com
```

## 🌐 Promena jezika

Jezik možete promeniti klikom na dugme **SR/EN** u header-u sajta. Jezik se čuva u `localStorage`.

## 🎨 Prilagođavanje

### Boje

Boje se mogu prilagoditi u `app/globals.css` fajlu:

```css
:root {
  --primary: 200 98% 39%; /* Plava */
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Slike

Sve slike se nalaze u `public/images/` folderu. Možete ih zameniti sa vašim slikama.

### Tekstualni sadržaj

Svi prevodi se nalaze u `i18n/translations.ts` fajlu. Tu možete menjati sve tekstove na srpskom i engleskom.

## 📱 Kontakt informacije

- **Telefon:** +381 62 856 1867
- **Email:** dr.milan.vladimirov@gmail.com
- **Lokacija:** Subotica, Srbija

## 🛠️ Tehnologije

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animacije
- **React Hook Form** - Forme
- **Zod** - Validacija
- **Lucide React** - Ikonice
- **Nodemailer** - Email slanje

## 📝 Napomene

- Sajt je potpuno SEO optimizovan sa strukturnim podacima
- Sve stranice su responsive i optimizovane za sve uređaje
- Kontakt forma je spremna za integraciju sa email serverom
- Google Maps je integrisan na kontakt strani
- Društvene mreže linkovi su spremni za vaše profile

## 🔒 Licenca

Sva prava zadržana © 2025 Dr Violeta Vladimirov

---

Razvio: **Manikam Web Solutions**
