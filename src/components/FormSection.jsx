import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../hooks/useFormSchema";
import { success } from "zod/v4";

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
  "https://docs.google.com/forms/d/e/1FAIpQLSdWX0O7nLWosnz2q8DCJb0Rs1mySufl3B11UdqIQXx1nxZxRA/formResponse";

const FIELD_IDS = {
  nome: "entry.197888522",
  email: "entry.1868279900",
  cargo: "entry.1281904430",
  celular: "entry.1654925442",
  cidade: "entry.643149584",
  cpf: "entry.1001588893",
  endereco: "entry.1611657879",
  estadoCivil: "entry.1923522246",
  genero: "entry.1469012976",
};
// ============================================================

function Field({ label, name, type = "text", placeholder, register, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-black/80 font-body text-xs tracking-[0.18em] uppercase font-medium">
        {label}
      </label>
      <div className="relative border border-black/80 rounded-xl">
        <input
          type={type}
          placeholder={placeholder}
          autoComplete="off"
          {...register(name)}
          className={`
            w-full px-4 py-3.5 font-body text-sm rounded-xl text-black
            ${error ? "border-red-500/70 focus:border-red-500 focus:shadow-none" : ""}
          `}
          style={error ? { borderColor: "rgba(239,68,68,0.7)" } : {}}
        />
        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M8 5v3M8 10.5v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-400/90 text-xs font-body">{error.message}</p>
      )}
    </div>
  );
}

export default function FormSection() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const els = entry.target.querySelectorAll("[data-fade]");
          els.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeStyle = () => ({
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.65s ease, transform 0.65s ease",
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const body = new FormData();
    body.append(FIELD_IDS.nome, data.nome);
    body.append(FIELD_IDS.email, data.email);
    body.append(FIELD_IDS.cargo, data.cargo);
    body.append(FIELD_IDS.celular, data.celular);
    body.append(FIELD_IDS.cidade, data.cidade);
    body.append(FIELD_IDS.cpf, data.cpf);
    body.append(FIELD_IDS.endereco, data.endereco);
    body.append(FIELD_IDS.estadoCivil, data.estadoCivil);
    body.append(FIELD_IDS.genero, data.genero);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body,
        mode: "no-cors",
      });
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  console.log(status);
  return (
    <section
      id="formulario"
      ref={sectionRef}
      className="relative py-28 overflow-hidden border-t border-red-600/80"
    >
      <div className="divider-red absolute top-0 left-0 right-0" />

      {/* bg accents */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(198,29,34,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-10 left-10 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            fill="none"
            stroke="#C61D22"
            strokeWidth="0.8"
            transform="rotate(15 50 50)"
          />
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            fill="none"
            stroke="#C61D22"
            strokeWidth="0.5"
            transform="rotate(30 50 50)"
          />
        </svg>
      </div>
      <div
        className="absolute bottom-10 right-10 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="#C61D22"
            strokeWidth="0.8"
          />
          <circle
            cx="40"
            cy="40"
            r="20"
            fill="none"
            stroke="#C61D22"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="max-w-lg mx-auto px-6 relative z-10">
        {/* Heading */}
        {status === null && (
          <div data-fade style={fadeStyle()} className="text-center mb-12">
            <h2 className="font-body text-4xl md:text-5xl text-white font-bold mb-3">
              Cadastre-se <span className="text-gradient-red">agora</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5 mb-5">
              <span className="h-px w-28 bg-white opacity-40" />
            </div>
          </div>
        )}

        {/* Card */}
        <div data-fade style={fadeStyle()} className="bg-white p-8 rounded-3xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            {status == null && (
              <>
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
                  label="Cargo *"
                  name="cargo"
                  placeholder="Seu cargo"
                  register={register}
                  error={errors.cargo}
                />
                <Field
                  label="Celular *"
                  name="celular"
                  type="tel"
                  placeholder="(51) 9 0000-0000"
                  register={register}
                  error={errors.celular}
                />
                <Field
                  label="Cidade *"
                  name="cidade"
                  placeholder="Sua cidade"
                  register={register}
                  error={errors.cidade}
                />
                <Field
                  label="CPF *"
                  name="cpf"
                  placeholder="000.000.000-00"
                  register={register}
                  error={errors.cpf}
                />
                <Field
                  label="Endereço *"
                  name="endereco"
                  placeholder="Rua, número, bairro"
                  register={register}
                  error={errors.endereco}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-black/80 font-body text-xs tracking-[0.18em] uppercase font-medium">
                    Estado Civil *
                  </label>
                  <select
                    {...register("estadoCivil")}
                    className="w-full px-4 py-3.5 font-body text-black text-sm border border-black/80 rounded-xl"
                  >
                    <option value="">Selecione...</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                    <option value="uniao_estavel">União Estável</option>
                  </select>
                  {errors.estadoCivil && (
                    <p className="text-red-400 text-xs">
                      {errors.estadoCivil.message}
                    </p>
                  )}
                </div>

                {/* Gênero — select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-black/80 font-body text-xs tracking-[0.18em] uppercase font-medium">
                    Gênero *
                  </label>
                  <select
                    {...register("genero")}
                    className="w-full px-4 py-3.5 font-body text-black text-sm border border-black/80 rounded-xl"
                  >
                    <option value="">Selecione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="nao_binario">Não-binário</option>
                    <option value="prefiro_nao_informar">
                      Prefiro não informar
                    </option>
                  </select>
                  {errors.genero && (
                    <p className="text-red-400 text-xs">
                      {errors.genero.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-red w-full py-4 text-sm rounded-xl mt-1 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Cadastrar"
                  )}
                </button>
              </>
            )}

            {status === "success" && (
              <>
                <svg
                  className="mt-0.5 shrink-0 mx-auto"
                  width="26"
                  height="26"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 8l2.5 2.5L11 6"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-green-600 text-lg text-center font-body">
                  Cadastro realizado com sucesso! Em breve você receberá nossas
                  novidades.
                </p>
              </>
            )}

            {status === "error" && (
              <div
                className="flex items-start gap-3 p-4 rounded-sm"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                }}
              >
                <svg
                  className="mt-0.5 shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 5v3M8 11v.5"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
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
  );
}
