
# 🩺 CuidadoVital Senior S.L. – Guía técnica (README)

## 🇪🇸 Versión en Español

### 1. Resumen del proyecto
Sitio web para **CuidadoVital Senior S.L. (Madrid, 2025)** — servicios de cuidado del adulto mayor.
Desarrollado en **React + TailwindCSS** con despliegue optimizado en **Vercel**.

Incluye:
- Formulario funcional (FormSubmit → yoequevedo2013@gmail.com)
- Estimador de presupuesto interactivo
- Agenda embebida (Calendly)
- Pagos opcionales con Stripe Payment Link
- SEO local (JSON-LD Schema)
- Páginas legales y banner de cookies

---

### 2. Despliegue en Vercel

#### Paso 1: Crear cuenta
- Ve a [https://vercel.com](https://vercel.com) y regístrate con tu cuenta de GitHub o Google.
- Crea un **nuevo proyecto** e importa el repositorio con este código.

#### Paso 2: Configurar variables (opcional)
En Vercel → Project Settings → Environment Variables:
```
NEXT_PUBLIC_PAYMENT_LINK = https://buy.stripe.com/test_payment_link
```

#### Paso 3: Publicar
Haz clic en **Deploy**.  
Vercel generará tu URL pública (por ejemplo: https://cuidavitalsenior.vercel.app).

---

### 3. Conectar dominio .es

1. Compra `cuidavitalsenior.es` en tu registrador preferido (ej. DonDominio, Namecheap, Google Domains).
2. En el panel del dominio → “DNS” → añade:
   ```
   CNAME  www  cname.vercel-dns.com
   A      @    76.76.21.21
   ```
3. En Vercel → Project Settings → Domains → añade `cuidavitalsenior.es`.
4. Espera unos minutos para la propagación (SSL automático).

---

### 4. Calendly y Stripe

#### Calendly
- Entra en [https://calendly.com](https://calendly.com) → crea tu evento:  
  `https://calendly.com/cuidavitalsenior/asesoria-15min`
- El enlace ya está integrado en el iframe de la web.

#### Stripe
- Crea cuenta en [https://stripe.com](https://stripe.com)
- En tu panel → “Payment Links” → “Crear enlace de pago”.
- Copia la URL y reemplázala en la variable:
  ```
  NEXT_PUBLIC_PAYMENT_LINK = https://buy.stripe.com/tu_link_real
  ```

---

### 5. Formulario

El formulario ya envía las solicitudes directamente a:
`yoequevedo2013@gmail.com` mediante [FormSubmit](https://formsubmit.co).

Si deseas más control o analíticas:
- Cambia el `action` por tu URL de **Formspree** o **EmailJS**.

---

### 6. SEO y legales

- **SEO local:** JSON-LD con tipo `HomeCareService`.
- **Metadatos:** título, descripción, OpenGraph listos para añadir en `index.html`.
- **Legal:** Aviso legal, Privacidad y Cookies según LOPD-GDD y RGPD.
- **Cookies:** banner simple con consentimiento almacenado en `localStorage`.

---

### 7. Mantenimiento y próximos pasos
- Publica artículos en el futuro (Blog → consejos de salud, envejecimiento activo).
- Optimiza imágenes (usar compresor tipo TinyPNG).
- Añade Google Business Profile y Analytics.
- Activa Stripe real para cobros y estadísticas.

---

## 🇬🇧 English Version

### 1. Project Overview
Website for **CuidadoVital Senior S.L. (Madrid, 2025)** — elder care and home assistance services.
Built with **React + TailwindCSS**, optimized for **Vercel deployment**.

Features:
- Functional contact form (FormSubmit → yoequevedo2013@gmail.com)
- Interactive cost estimator
- Embedded appointment scheduling (Calendly)
- Optional payments via Stripe Payment Link
- Local SEO (JSON-LD Schema)
- Legal pages and cookie consent banner

---

### 2. Deploy to Vercel
1. Sign up at [https://vercel.com](https://vercel.com) using GitHub or Google.
2. Import the repository and click **Deploy**.
3. Optionally set an environment variable:
   ```
   NEXT_PUBLIC_PAYMENT_LINK = https://buy.stripe.com/test_payment_link
   ```

---

### 3. Connect .es Domain
1. Purchase `cuidavitalsenior.es`.
2. Configure DNS:
   ```
   CNAME  www  cname.vercel-dns.com
   A      @    76.76.21.21
   ```
3. Add the domain in your Vercel project settings → “Domains”.
4. SSL certificate is issued automatically.

---

### 4. Calendly & Stripe Integration
**Calendly:**  
Create your scheduling link at  
`https://calendly.com/cuidavitalsenior/asesoria-15min`  
and it’s already embedded.

**Stripe:**  
Generate a Payment Link and replace it in your environment variable:
```
NEXT_PUBLIC_PAYMENT_LINK = https://buy.stripe.com/your_real_link
```

---

### 5. Contact Form
Currently connected to `yoequevedo2013@gmail.com` via FormSubmit.
Replace the action URL if you prefer Formspree or EmailJS for analytics.

---

### 6. SEO & Legal
- Local SEO using structured data (HomeCareService).
- Legal pages comply with EU GDPR and Spanish LOPD-GDD.
- Cookie banner stores user consent in `localStorage`.

---

### 7. Maintenance & Next Steps
- Add blog articles (wellness, family care, prevention tips).
- Compress all images for faster loading.
- Register on Google Business Profile for visibility.
- Enable real Stripe payments when ready.

---

**Author:** GPT-5 (OpenAI) for José Quevedo – 2025  
**Business:** CuidadoVital Senior S.L. (Madrid, España)
