import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [servicio, setServicio] = useState("horas");
  const [dias, setDias] = useState(1);
  const [presupuesto, setPresupuesto] = useState(null);

  const tarifas = { horas: 14, "24h": 52, acompanamiento: 66 };

  const calcular = () => setPresupuesto(tarifas[servicio] * dias);

  const enviar = (e) => {
    e.preventDefault();
    calcular();
    emailjs.send(
      "service_e2m0wqi",
      "template_cll37wg",
      {
        from_name: nombre,
        reply_to: email,
        servicio,
        dias,
        total: tarifas[servicio] * dias,
      },
      "BpWdgATMlIJYbQ4Ba"
    );
    alert("✅ Presupuesto enviado correctamente.");
  };

  return (
    <section className="contact">
      <h2>Solicitar Presupuesto</h2>
      <form onSubmit={enviar}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
        >
          <option value="horas">Asistencia por horas</option>
          <option value="24h">Cuidado 24 horas</option>
          <option value="acompanamiento">Acompañamiento personal</option>
        </select>
        <input
          type="number"
          min="1"
          value={dias}
          onChange={(e) => setDias(parseInt(e.target.value))}
        />
        <button type="submit">Calcular y Enviar</button>
      </form>

      {presupuesto && (
        <p className="budget">
          Presupuesto estimado: <strong>€{presupuesto}</strong>
        </p>
      )}
    </section>
  );
}
