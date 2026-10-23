# Zafar — vizitka sayt

## 1. Loyiha maqsadi
Zafarning biznes avtomatlashtirish xizmatlarini taqdim etuvchi bir sahifali shaxsiy sayt.

- **Kimlar uchun:** O'zbekistondagi kichik va o'rta biznes egalari va rahbarlari.
- **Asosiy vazifa:** tashrif buyuruvchini ishontirish va Telegram yoki telefon orqali bog'lanishga undash.
- **Asosiy xabar:** "Biznesingizni 0 dan avtomatlashtiramiz, real foyda keltiradigan dasturlar qilamiz."
- **Tajriba:** 2+ yil biznes avtomatlashtirish, oldin AppSheet orqali ishlangan.
- **Til:** o'zbek (lotin).

### Aloqa (o'zgarmas)
- Telefon: +998 93 998 40 55 (`tel:+998939984055`)
- Telegram: @zafar_xayrulla (`https://t.me/zafar_xayrulla`)

## 2. Texnologiyalar (stack)
Loyihada faqat uchta texnologiya ishlatiladi. Har biri alohida faylda turadi:

| Texnologiya | Fayl | Nima uchun |
|---|---|---|
| **HTML5** | `index.html` | Sahifa tuzilishi va kontent |
| **CSS3** | `css/style.css` | Dizayn, responsive, animatsiyalar, tungi rejim |
| **JavaScript** (sof, kutubxonasiz) | `js/theme.js`, `js/main.js` | Mavzuni tanlash, scroll animatsiyasi, 3D tilt |

Faqat brauzerning o'z imkoniyatlari ishlatiladi: `IntersectionObserver`, `matchMedia`, `localStorage`, CSS o'zgaruvchilari.

### Ishlatilmaydi
- **Frameworklar:** React, Vue, Angular, Svelte, Next.js va boshqalar.
- **CSS frameworklar va preprotsessorlar:** Tailwind, Bootstrap, Sass, Less.
- **TypeScript** va boshqa kompilyatsiya qilinadigan tillar.
- **JS kutubxonalar:** jQuery, GSAP, AOS, Swiper va boshqalar.
- **Build vositalari va paketlar:** npm, Vite, Webpack, `package.json`.
- **Backend:** server kodi, ma'lumotlar bazasi, CMS (WordPress va boshqalar).
- **Uchinchi tomon skriptlari** (analitika, chat vidjetlari) — faqat Zafarning ruxsati bilan.

### Istisnolar
- **Google Fonts** — yagona ruxsat etilgan tashqi resurs (Anton, Caveat, Inter).
- `python -m http.server` — faqat lokal ko'rish uchun, loyihaning bir qismi emas.

## 3. Fayllar
```
index.html          — faqat HTML tuzilmasi va kontent
css/style.css       — barcha stillar
js/theme.js         — saqlangan mavzuni sahifa chizilishidan oldin qo'yadi
js/main.js          — mavzu tugmasi, scroll animatsiyasi, 3D tilt
images/zafar.png    — portret, 640×640
```

- `index.html` ichida `<style>`, `<script>` bloklari va `style="..."` atributlari bo'lmaydi.
- `js/theme.js` `<head>` ichida `defer`siz ulanadi. Busiz tungi rejimda sahifa ochilayotganda oq "chaqnash" bo'ladi.
- `js/main.js` `defer` bilan ulanadi.
- Istisno: JS dinamik qiymatlarni (`transform`, `--d`) element `style`'iga yozishi mumkin. Qolgan barcha holat CSS class va `data-` atributlar orqali boshqariladi.
- Lokal ko'rish: `python -m http.server 5500`, keyin http://localhost:5500 manzilini ochish.

## 4. Sahifa tuzilishi
Bo'limlar shu tartibda bo'ladi:
1. **Header** — logotip, menyu (Men haqimda, Loyihalar, Xizmatlar), mavzu tugmasi, "Bog'lanish".
2. **Hero** — "Salom, men" / ZAFAR, tavsif, tugmalar va portret.
3. **Men haqimda** — katta bayonot matni va 4 ta raqam: 2+ yil, ~10 kun, 30%, x5.
4. **Loyihalar** — avval Applekor, keyin Osteopatiyauz. Bu tartib o'zgarmaydi.
5. **Xizmatlar** — 4 ta kartochka.
6. **CTA** — sariq blok, "Keling, BIRGA ISHLAYMIZ".
7. **Footer**.

## 5. Dizayn qoidalari

### Ranglar
| Token | Kunduzgi | Tungi | Vazifasi |
|---|---|---|---|
| `--dark` | #0f1a13 | #0f1a13 | Header, Loyihalar, footer, sariq ustidagi matn |
| `--dark-2` / `--dark-3` | #18271d / #233529 | o'zgarmaydi | To'q kartochkalar |
| `--accent` | #f6e530 | #f6e530 | Sariq aksent |
| `--bg` | #ffffff | #0a110c | Sahifa foni |
| `--soft` | #f3f5f1 | #16221a | Och kartochkalar |
| `--text` | #0f1a13 | #eef2ee | Asosiy matn |
| `--muted` | #66736a | #9aa69d | Ikkinchi darajali matn |

- Yangi rang faqat CSS o'zgaruvchisi orqali qo'shiladi, kodda to'g'ridan-to'g'ri rang yozilmaydi.
- Sariq fon ustidagi matn ikkala rejimda ham doim `--dark` bo'ladi.

### Shriftlar
- **Anton** — sarlavhalar va raqamlar, faqat bosh harflarda.
- **Caveat** — qo'lyozma aksentlar ("Salom, men", "Keling,", "Natijalar").
- **Inter** — oddiy matn.

### Komponentlar
- Tugmalarning burchaklari to'liq yumaloq.
- Kartochkalarning burchak radiusi 16–20px.
- Portret rangli, burchaklari yumaloq kvadrat.

### Kelishilgan detallar (o'zgartirmaslik kerak)
- Kompyuterda portret ustidagi panel chetlardan 10px ichkarida turadi, unda avatar yo'q.
- Telefonda (≤600px) panel yuzni yopmasligi uchun rasm ostiga tushadi.
- "Men haqimda" bo'limi `100vh` yoki `min-height` bilan cho'zilmaydi.
- Menyudan bo'limga o'tganda 72px yuqori masofa qoladi (`scroll-margin-top`).

## 6. Kontent qoidalari
- Faqat real ma'lumotlar ishlatiladi. Raqam, loyiha, mijoz yoki iqtibos o'ylab topilmaydi.
- Yangi matn, xizmat yoki tugma faqat Zafarning ruxsati bilan qo'shiladi.
- Real natijalar:
  - **Applekor:** rahbarning oyiga ~10 kun vaqti tejaldi; telefon kirimi x5 osonlashdi; xato xariddan cheklov; qarzdorlar nazorati; sotuv osonlashdi; rahbar iqtibosi.
  - **Osteopatiyauz:** ish samaradorligi 30% oshdi; xodimlar grafigi va mijozlarga eslatmalar; to'lov va qarzdorlik nazorati; qayta sotuv imkoniyati.

## 7. Texnik chegaralar
- Faqat HTML, CSS va sof JavaScript, alohida fayllarda (2- va 3-bo'limlarga qarang).
- Saytni boshidan qayta yozmaslik, faqat kerakli joyni o'zgartirish.
- Animatsiyalar faqat `opacity`, `translate`, `scale` va `transform` orqali qilinadi.
  - Scroll animatsiyasi `translate`/`scale` ni ishlatadi.
  - 3D tilt `transform` ni ishlatadi.
  - Bitta xususiyatni ikki joydan boshqarmaslik kerak.
- JavaScript ishlamasa ham butun kontent ko'rinib turishi shart.
- `prefers-reduced-motion` yoqilganda animatsiyalar va tilt o'chadi.
- Tilt faqat sichqoncha bor qurilmalarda ishlaydi (`hover: hover` va `pointer: fine`).
- Tungi rejim:
  - `data-theme` atributi orqali ishlaydi, tanlov `localStorage` ga saqlanadi;
  - tanlov bo'lmasa tizim mavzusiga ergashadi;
  - JS bo'lmasa `prefers-color-scheme` ga qarab ishlaydi.
- Responsive chegaralar: 960px (menyu yashiriladi, bitta ustun) va 600px (telefon).
- 375px kenglikda gorizontal siljish bo'lmasligi shart.

## 8. O'zgarishdan keyingi tekshiruv
1. Kompyuter (≥1440px) va telefon (375px) o'lchamida ko'rib chiqish.
2. Kunduzgi va tungi rejimni tekshirish.
3. Gorizontal siljish yo'qligini tekshirish.
4. JavaScript'siz va reduced-motion holatlarida kontent ko'rinishini tekshirish.
5. Konsolda xato yo'qligini tekshirish.
6. Haqiqatda tekshirilmagan narsani "tekshirildi" deb yozmaslik.
