'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LEGAL_CONFIG } from '@/config/legal';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    motivo: 'privacidad-arco',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setErrorMsg('Por favor completa todos los campos requeridos.');
      return;
    }

    // Direct mailto generation as reliable client-side action without unconfigured backend endpoints
    const subject = encodeURIComponent(`[Letras Bonitas] Solicitud: ${formData.motivo} - ${formData.nombre}`);
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMotivo: ${formData.motivo}\n\nMensaje:\n${formData.mensaje}`);
    
    // Open default email client
    window.location.href = `mailto:${LEGAL_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Migas de pan" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--accent-primary)] transition-colors">
                Inicio
              </Link>
            </li>
            <li><span className="text-[var(--text-muted)]">/</span></li>
            <li aria-current="page" className="text-[var(--accent-primary)] font-medium">
              Contacto y Solicitudes Legales
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-10 pb-8 border-b border-[var(--border-primary)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/25 mb-4">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Atención al Usuario & Transparencia
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4">
            Contacto, Privacidad y Solicitudes Legales
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] font-normal bg-[var(--bg-secondary)]/50 p-4 sm:p-5 rounded-xl border border-[var(--border-primary)]">
            ¿Tienes alguna consulta sobre la protección de tus datos personales en México, el ejercicio de derechos ARCO, dudas sobre derechos de autor o una sugerencia sobre nuestras herramientas? Ponemos a tu alcance este canal directo y transparente.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information & Channels Sidebar */}
          <aside className="lg:col-span-5 space-y-4">
            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-sm">
              <h2 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                </svg>
                Correo Electrónico Oficial
              </h2>
              <p className="text-xs text-[var(--text-muted)] mb-3 leading-relaxed">
                Canal centralizado para todo tipo de requerimiento, duda legal o reporte técnico:
              </p>
              <a
                href={`mailto:${LEGAL_CONFIG.contactEmail}`}
                className="block p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-xs sm:text-sm font-semibold text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all break-all"
              >
                {LEGAL_CONFIG.contactEmail}
              </a>
            </div>

            {/* Response Times Box */}
            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs text-[var(--text-muted)] space-y-3">
              <h3 className="font-bold text-[var(--text-primary)] text-xs flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tiempos de Respuesta Estimados
              </h3>
              <ul className="space-y-2 leading-relaxed">
                <li>
                  <strong className="text-[var(--text-secondary)]">Derechos ARCO (México):</strong> Plazo legal máximo de 20 días hábiles conforme a la LFPDPPP.
                </li>
                <li>
                  <strong className="text-[var(--text-secondary)]">Derechos de Autor (LFDA):</strong> Revisión prioritaria en 24 a 72 horas hábiles.
                </li>
                <li>
                  <strong className="text-[var(--text-secondary)]">Sugerencias y Correcciones:</strong> 3 a 5 días hábiles.
                </li>
              </ul>
            </div>

            {/* Quick Links Card */}
            <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-xs space-y-2">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Documentos Relacionados</h3>
              <ul className="space-y-1.5 text-[var(--text-secondary)]">
                <li>
                  <Link href="/politica-de-privacidad" className="hover:text-[var(--accent-primary)] transition-colors">
                    → Política de Privacidad y Derechos ARCO
                  </Link>
                </li>
                <li>
                  <Link href="/derechos-de-autor" className="hover:text-[var(--accent-primary)] transition-colors">
                    → Política de Derechos de Autor (INDAUTOR)
                  </Link>
                </li>
                <li>
                  <Link href="/terminos-y-condiciones" className="hover:text-[var(--accent-primary)] transition-colors">
                    → Términos y Condiciones de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/aviso-legal" className="hover:text-[var(--accent-primary)] transition-colors">
                    → Aviso Legal y Descargo de Responsabilidad
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Interactive Contact Form */}
          <main className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-lg">
              <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">
                Formulario de Contacto
              </h2>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Completa los datos para preparar tu mensaje directamente a nuestro equipo.
              </p>

              {submitted ? (
                <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm space-y-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mensaje preparado</span>
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-200">
                    Se ha abierto tu cliente de correo electrónico para enviar el mensaje a <strong>{LEGAL_CONFIG.contactEmail}</strong>. Si tu cliente de correo no se abrió automáticamente, puedes escribirnos directamente a dicha dirección.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold underline text-emerald-400 hover:text-emerald-300"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label htmlFor="nombre" className="block font-semibold text-[var(--text-primary)] mb-1.5">
                      Nombre completo o representante <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      placeholder="Ej. María Hernández"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-semibold text-[var(--text-primary)] mb-1.5">
                      Correo electrónico de contacto <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="tunombre@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="motivo" className="block font-semibold text-[var(--text-primary)] mb-1.5">
                      Motivo de la solicitud <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="motivo"
                      value={formData.motivo}
                      onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors cursor-pointer"
                    >
                      <option value="privacidad-arco">Ejercicio de Derechos ARCO / Privacidad</option>
                      <option value="derechos-autor">Notificación de Derechos de Autor (INDAUTOR)</option>
                      <option value="terminos-consulta">Consulta sobre Términos y Condiciones</option>
                      <option value="reporte-tecnico">Reporte de Error Técnico o Sugerencia</option>
                      <option value="contacto-general">Otra Consulta General</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block font-semibold text-[var(--text-primary)] mb-1.5">
                      Descripción detallada del mensaje <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={5}
                      placeholder="Escribe con claridad tu solicitud, incluyendo URLs o referencias si aplica..."
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:opacity-95 shadow-lg shadow-violet-600/25 transition-all text-sm"
                    >
                      Enviar Solicitud
                    </button>
                  </div>

                  <p className="text-[11px] text-[var(--text-muted)] text-center pt-2">
                    Al enviar este formulario aceptas el tratamiento de tus datos de contacto conforme a nuestra{' '}
                    <Link href="/politica-de-privacidad" className="text-[var(--accent-primary)] hover:underline">
                      Política de Privacidad
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
