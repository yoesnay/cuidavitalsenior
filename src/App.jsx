import { useState, useEffect } from 'react'

export default function App() {
  const [formSent, setFormSent] = useState(false)
  const [cookiesOk, setCookiesOk] = useState(false)

  // JSON-LD SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeCareService",
    name: "CuidadoVital Senior S.L.",
    url: "https://cuidavitalsenior.es/",
    telephone: "+39 324 607 5081",
    areaServed: "Comunidad de Madrid",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES"
    },
    sameAs: [
      "https://wa.me/393246075081"
    ]
  }

  // Cookies banner basic
  useEffect(() => {
    const v = localStorage.getItem('cv_cookies_ok')
    if (v === '1') setCookiesOk(true)
  }, [])

  const acceptCookies = () => { localStorage.setItem('cv_cookies_ok','1'); setCookiesOk(true) }

  // Estimator state
  const [hrs, setHrs] = useState(20)
  const [nivel, setNivel] = useState('basico')
  const [noches, setNoches] = useState(false)
  const [finde, setFinde] = useState(false)
  const [zona, setZona] = useState('capital')
  const precioHoraBase = nivel === 'basico' ? 14 : 17
  const suplementoZona = zona === 'periferia' ? 1 : 0
  const precioHora = precioHoraBase + suplementoZona
  const semanal = hrs * precioHora
  const multiplicador = (noches ? 1.2 : 1) * (finde ? 1.15 : 1)
  const semanalTotal = Math.round(semanal * multiplicador)
  const mensual = Math.round(semanalTotal * 4.3)

  const toContact = () => {
    const input = document.getElementById('estimacion')
    if (input) {
      input.value = `Horas/semana: ${hrs}; Nivel: ${nivel}; Noches: ${noches?'sí':'no'}; Fines de semana: ${finde?'sí':'no'}; Zona: ${zona}; Estimación semanal: ${semanalTotal}€; mensual: ${mensual}€`
    }
    const el = document.getElementById('contacto')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const paymentLink = import.meta.env.VITE_PAYMENT_LINK || "https://buy.stripe.com/test_payment_link"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-white font-semibold group-hover:rotate-6 transition">CV</span>
            <div>
              <p className="font-bold leading-tight">CuidadoVital Senior S.L.</p>
              <p className="text-xs text-slate-500 leading-tight">Madrid · 2025</p>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#servicios" className="hover:text-emerald-700">Servicios</a>
            <a href="#sobre" className="hover:text-emerald-700">Sobre nosotros</a>
            <a href="#testimonios" className="hover:text-emerald-700">Testimonios</a>
            <a href="#estimador" className="hover:text-emerald-700">Estimador</a>
            <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
          </nav>
          <a href="#contacto" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700 transition">
            Solicitar información
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            <path d="M0 300 Q200 200 400 300 T800 300 V400 H0 Z" fill="url(#g)" />
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Cuidamos de quienes más amas</h1>
            <p className="mt-4 text-lg text-slate-600">Acompañamiento y asistencia profesional para personas mayores en Madrid. Atendemos en domicilio, por horas o 24/7.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicios" className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-medium shadow hover:bg-emerald-700">Ver servicios</a>
              <a href="#contacto" className="rounded-xl bg-white text-emerald-700 ring-1 ring-emerald-200 px-5 py-3 font-medium hover:ring-emerald-300">Pedir presupuesto</a>
            </div>
            <ul className="mt-6 text-sm text-slate-600 grid sm:grid-cols-3 gap-2">
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />Cuidadores certificados</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />Cobertura en toda Madrid</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />Atención 365 días</li>
            </ul>
          </div>
          <div className="relative">
            <img alt="Cuidadora con persona mayor en casa" className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1580281657527-47d84efdc1bd?q=80&w=1200&auto=format&fit=crop" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-md">
              <p className="text-sm font-semibold">Tiempo de respuesta medio</p>
              <p className="text-2xl font-extrabold text-emerald-700">&lt; 30 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Servicios</h2>
            <p className="mt-3 text-slate-600">Planes flexibles por horas, noches y 24/7. Evaluación inicial gratuita.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Acompañamiento en domicilio", desc: "Compañía, conversación, estimulación cognitiva y gestión de rutinas diarias." },
              { title: "Ayuda personal y movilidad", desc: "Higiene, vestido, medicación, movilizaciones y prevención de caídas." },
              { title: "Cuidado hospitalario y nocturno", desc: "Acompañamiento en hospital, turnos de noche y respiro familiar." },
              { title: "Tareas del hogar esenciales", desc: "Cocina sencilla, limpieza ligera, compras y citas médicas." },
              { title: "Atención especializada", desc: "Alzheimer, demencias y convalecencias postoperatorias." },
              { title: "Selección y sustituciones rápidas", desc: "Cobertura ante incidencias, vacaciones o bajas." },
            ].map((s, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6 hover:shadow-md transition">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 mb-4">•</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Compromiso, cercanía y confianza</h2>
            <p className="mt-4 text-slate-600">Modelo centrado en la persona y la familia. Cuidadores verificados con formación continua. Plan personalizado y seguimiento periódico.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />Evaluación inicial gratuita</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />Seguro de RC</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />Coordinación con salud</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />Madrid y alrededores</li>
            </ul>
          </div>
          <div className="relative">
            <img alt="Cuidadores profesionales en Madrid" className="rounded-3xl shadow-lg w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* Estimador */}
      <section id="estimador" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Estimador de presupuesto</h2>
            <p className="mt-3 text-slate-600">Cálculo orientativo. Presupuesto cerrado tras evaluación gratuita.</p>
          </div>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl border border-slate-200 p-6 bg-slate-50">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium">Horas por semana: {hrs}</label>
                  <input type="range" min="5" max="60" step="1" value={hrs} onChange={(e)=>setHrs(parseInt(e.target.value))} className="w-full" />
                </div>
                <div>
                  <label className="text-sm font-medium">Nivel de servicio</label>
                  <select value={nivel} onChange={(e)=>setNivel(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="basico">Acompañamiento / Básico</option>
                    <option value="especializado">Especializado (demencias, posoperatorio)</option>
                  </select>
                </div>
                <div className="flex items-center gap-3">
                  <input id="noches" type="checkbox" checked={noches} onChange={(e)=>setNoches(e.target.checked)} />
                  <label htmlFor="noches" className="text-sm">Incluye noches</label>
                </div>
                <div className="flex items-center gap-3">
                  <input id="finde" type="checkbox" checked={finde} onChange={(e)=>setFinde(e.target.checked)} />
                  <label htmlFor="finde" className="text-sm">Incluye fines de semana</label>
                </div>
                <div>
                  <label className="text-sm font-medium">Zona</label>
                  <select value={zona} onChange={(e)=>setZona(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2">
                    <option value="capital">Madrid capital</option>
                    <option value="periferia">Periferia / radio &gt; 15 km</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-emerald-200 p-6 bg-white">
              <p className="text-sm text-slate-600">Precio/hora estimado</p>
              <p className="text-3xl font-extrabold text-emerald-700">{precioHora}€</p>
              <div className="mt-4 text-sm text-slate-700 space-y-1">
                <p>Semanal aprox.: <span className="font-semibold">{semanalTotal}€</span></p>
                <p>Mensual aprox.: <span className="font-semibold">{mensual}€</span></p>
              </div>
              <button onClick={toContact} className="mt-5 w-full rounded-xl bg-emerald-600 text-white px-4 py-3 font-medium hover:bg-emerald-700">Enviar esta estimación con mi consulta</button>
              <p className="mt-3 text-xs text-slate-500">* Cálculo orientativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Lo que dicen las familias</h2>
            <p className="mt-3 text-slate-600">Historias reales de buen trato.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { nombre: "María G.", texto: "Puntuales, amables y muy profesionales." },
              { nombre: "Luis R.", texto: "Se adaptaron a nuestros horarios sin problema." },
              { nombre: "Ana P.", texto: "Evaluación inicial muy completa y útil." },
            ].map((t, i) => (
              <figure key={i} className="rounded-3xl border border-slate-200 p-6 bg-white">
                <blockquote className="text-slate-700">“{t.texto}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-900">{t.nombre}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Solicita información</h2>
            <p className="mt-3 text-slate-600">Cuéntanos qué necesitas y te responderemos el mismo día. También atendemos por WhatsApp.</p>
            <div className="mt-6 rounded-3xl border border-slate-200 p-6 bg-white">
              <form action="https://formsubmit.co/yoequevedo2013@gmail.com" method="POST" className="grid gap-4" onSubmit={() => setFormSent(true)}>
                <input type="hidden" name="_subject" value="Nueva consulta desde CuidadoVital Senior" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://cuidavitalsenior.es/gracias" />
                <input type="hidden" name="Estimación" id="estimacion" value="" />

                <div>
                  <label className="text-sm font-medium">Nombre y apellidos</label>
                  <input name="Nombre" required placeholder="Ej. Laura Pérez" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" name="Email" required placeholder="tu@email.com" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Teléfono</label>
                    <input name="Teléfono" placeholder="Ej. 600 123 456" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea name="Mensaje" rows="5" placeholder="Cuéntanos horarios, tipo de ayuda, zona..." className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
                </div>
                <button type="submit" className="rounded-xl bg-emerald-600 text-white px-5 py-3 font-medium hover:bg-emerald-700">Enviar consulta</button>
                {formSent && (<p className="text-sm text-emerald-700">¡Gracias! Hemos recibido tu solicitud. Te contactaremos hoy mismo.</p>)}
              </form>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              <p><strong>Teléfono:</strong> +39 324 607 5081</p>
              <p><strong>Email:</strong> yoequevedo2013@gmail.com</p>
              <p><strong>Horario:</strong> L-V 9:00–20:00 · Sábados 10:00–14:00</p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 bg-white">
            <h3 className="text-xl font-semibold">Reserva una llamada</h3>
            <p className="mt-2 text-slate-600">Agenda una videollamada de 15 minutos para evaluar tu caso.</p>
            <div className="mt-4 aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <iframe title="Agenda" src="https://calendly.com/cuidavitalsenior/asesoria-15min?hide_gdpr_banner=1" className="w-full h-full"></iframe>
            </div>
            <div className="mt-6">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <iframe title="Ubicación Madrid" src="https://www.openstreetmap.org/export/embed.html?bbox=-3.819%2C40.312%2C-3.517%2C40.563&layer=mapnik" className="w-full h-full"></iframe>
              </div>
              <p className="mt-2 text-xs text-slate-500">Base en Madrid. Atendemos ciudad y alrededores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pagos */}
      <section id="pagos" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Reserva tu cuidador con una señal</h2>
            <p className="mt-3 text-slate-600">Opcional: asegura disponibilidad con una señal reembolsable. Pagos seguros con Stripe.</p>
          </div>
          <div className="md:text-right">
            <a href={paymentLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-5 py-3 font-medium shadow hover:bg-emerald-700">Pagar señal segura</a>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <a href="https://wa.me/393246075081" target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 text-white px-4 py-3 shadow-lg hover:bg-emerald-700">
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <p className="font-semibold">CuidadoVital Senior S.L.</p>
            <p className="text-slate-600 mt-2">CIF: B00000000 · Madrid (España)</p>
            <p className="text-slate-600">© 2025 Todos los derechos reservados.</p>
          </div>
          <div>
            <p className="font-semibold">Enlaces</p>
            <ul className="mt-2 space-y-2">
              <li><a href="#servicios" className="hover:text-emerald-700">Servicios</a></li>
              <li><a href="#sobre" className="hover:text-emerald-700">Sobre nosotros</a></li>
              <li><a href="#contacto" className="hover:text-emerald-700">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="#aviso-legal" className="hover:text-emerald-700">Aviso legal</a></li>
              <li><a href="#privacidad" className="hover:text-emerald-700">Privacidad</a></li>
              <li><a href="#cookies" className="hover:text-emerald-700">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Legales secciones */}
      <section id="aviso-legal" className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold">Aviso legal</h3>
          <p className="mt-3 text-sm text-slate-600">CuidadoVital Senior S.L., CIF B00000000, con domicilio en Madrid (España). Para consultas: <a className="text-emerald-700" href="mailto:yoequevedo2013@gmail.com">yoequevedo2013@gmail.com</a>.</p>
        </div>
      </section>
      <section id="privacidad" className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold">Política de privacidad</h3>
          <p className="mt-3 text-sm text-slate-600">Tratamos los datos para gestionar solicitudes de información y prestar servicios contratados. Derechos: acceso, rectificación, supresión, oposición y portabilidad.</p>
        </div>
      </section>
      <section id="cookies" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl font-bold">Política de cookies</h3>
          <p className="mt-3 text-sm text-slate-600">Usamos cookies técnicas necesarias. No utilizamos cookies de seguimiento sin tu consentimiento.</p>
        </div>
      </section>

      {/* Cookies Banner */}
      {!cookiesOk && (
        <div className="fixed bottom-0 inset-x-0 z-[60] bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm">
            <p className="text-slate-700">Usamos cookies técnicas para el correcto funcionamiento del sitio.</p>
            <div className="flex gap-2">
              <a href="#cookies" className="px-3 py-2 rounded-lg ring-1 ring-slate-300">Saber más</a>
              <button onClick={acceptCookies} className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Aceptar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
