import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../hooks/useFormSchema'

// ============================================================
//  CONFIGURAÇÃO DO GOOGLE FORMS
//
//  PASSO 1 — Crie o formulário em https://forms.google.com
//  PASSO 2 — Pré-visualize e inspecione o HTML (F12)
//  PASSO 3 — Copie a URL do atributo action da tag <form>
//  PASSO 4 — Copie o atributo name de cada <input> (entry.XXXX)
//  PASSO 5 — Cole abaixo substituindo os placeholders
// ============================================================
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/SEU_FORM_ID_AQUI/formResponse'

const FIELD_IDS = {
  nome:     'entry.000000001',   // ← colar o entry ID real do campo Nome
  email:    'entry.000000002',   // ← colar o entry ID real do campo E-mail
  telefone: 'entry.000000003',   // ← colar o entry ID real do campo Telefone
}
// ============================================================

function Field({ label, name, type = 'text', placeholder, register, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-white/60 font-body text-xs tracking-[0.18em] uppercase font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          {...register(name)}
          className={`
            w-full input-red px-4 py-3.5 font-body text-sm rounded-none
            ${error ? 'border-red-500/70 focus:border-red-500 focus:shadow-none' : ''}
          `}
          style={error ? { borderColor: 'rgba(239,68,68,0.7)' } : {}}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 5v3M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-400/90 text-xs font-body">{error.message}</p>
      )}
    </div>
  )
}

export default function FormSection() {
  const sectionRef = useRef(null)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const els = entry.target.querySelectorAll('[data-fade]')
          els.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, i * 100)
          })
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const fadeStyle = () => ({
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.65s ease, transform 0.65s ease',
  })

  const onSubmit = async (data) => {
    setLoading(true)

    const body = new FormData()
    body.append(FIELD_IDS.nome, data.nome)
    body.append(FIELD_IDS.email, data.email)
    body.append(FIELD_IDS.telefone, data.telefone)

    try {
      // Google Forms não suporta CORS — usamos no-cors
      // Os dados chegam normalmente na planilha mesmo sem resposta 200
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body,
        mode: 'no-cors',
      })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 7000)
    }
  }

  return (
    <section id="formulario" ref={sectionRef} className="relative py-28 bg-d-black overflow-hidden">
      <div className="divider-red absolute top-0 left-0 right-0" />

      {/* bg accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(198,29,34,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect x="5" y="5" width="90" height="90" fill="none" stroke="#C61D22" strokeWidth="0.8" transform="rotate(15 50 50)" />
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="#C61D22" strokeWidth="0.5" transform="rotate(30 50 50)" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#C61D22" strokeWidth="0.8" />
          <circle cx="40" cy="40" r="20" fill="none" stroke="#C61D22" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-lg mx-auto px-6 relative z-10">

        {/* Heading */}
        <div data-fade style={fadeStyle()} className="text-center mb-12">
          <p className="text-d-red text-xs tracking-[0.4em] uppercase font-body font-semibold mb-4">
            Fique por dentro
          </p>
          <h2 className="font-body text-4xl md:text-5xl text-white font-bold mb-3">
            Cadastre-se{' '}
            <span className="text-gradient-red">agora</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5 mb-5">
            <span className="h-px w-14 bg-d-red opacity-40" />
            <div className="w-1.5 h-1.5 bg-d-red rotate-45" />
            <span className="h-px w-14 bg-d-red opacity-40" />
          </div>
          <p className="text-white/40 font-body text-sm leading-relaxed max-w-xs mx-auto">
            Receba em primeira mão novidades, promoções exclusivas e eventos do Shopping D.
          </p>
        </div>

        {/* Card */}
        <div data-fade style={fadeStyle()} className="glass-card p-8">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">

            <Field
              label="Nome completo *"
              name="nome"
              placeholder="Seu nome"
              register={register}
              error={errors.nome}
            />

            <Field
              label="E-mail *"
              name="email"
              type="email"
              placeholder="seu@email.com"
              register={register}
              error={errors.email}
            />

            <Field
              label="Telefone / WhatsApp *"
              name="telefone"
              type="tel"
              placeholder="(51) 9 0000-0000"
              register={register}
              error={errors.telefone}
            />

            <p className="text-white/20 font-body text-xs leading-relaxed mt-1">
              Seus dados estão protegidos conforme a LGPD. Não compartilhamos suas informações.
            </p>

            <button
              type="submit"
              disabled={loading}
              className={`btn-red w-full py-4 text-sm mt-1 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Quero me cadastrar'
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-start gap-3 p-4 rounded-sm"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}>
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.5" />
                  <path d="M5 8l2.5 2.5L11 6" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-green-400 text-sm font-body">
                  Cadastro realizado com sucesso! Em breve você receberá nossas novidades.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 rounded-sm"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}>
                <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5" />
                  <path d="M8 5v3M8 11v.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <p className="text-red-400 text-sm font-body">
                  Erro ao enviar. Verifique sua conexão e tente novamente.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
