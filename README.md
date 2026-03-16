# 🏬 Shopping D — Landing Page

Stack: **React + Vite + Tailwind CSS + React Hook Form + Zod**

---

## 🚀 Como rodar

```bash
npm install
npm run dev
```

---

## 🔗 Integração com Google Forms

### Passo 1 — Criar o formulário

1. Acesse [Google Forms](https://forms.google.com)
2. Crie um novo formulário com os campos:
   - Nome completo (Resposta curta)
   - E-mail (Resposta curta)
   - Telefone (Resposta curta)
   - CPF (Resposta curta — opcional)
3. Conecte a uma **Planilha Google** em: `Respostas > ícone de planilha`

### Passo 2 — Obter a URL de ação

1. No formulário, clique em `Pré-visualizar` (ícone de olho)
2. Inspecione a página (F12 > Elements)
3. Procure a tag `<form>` — copie o atributo `action`
   - Formato: `https://docs.google.com/forms/d/e/SEU_ID/formResponse`

### Passo 3 — Obter os IDs dos campos (entry.XXXXXXX)

1. No formulário pré-visualizado, inspecione cada campo `<input>`
2. Copie o atributo `name` de cada campo
   - Formato: `entry.1234567890`

### Passo 4 — Configurar no código

Abra o arquivo `src/components/FormSection.jsx` e substitua:

```js
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/SUBSTITUA_PELO_SEU_FORM_ID/formResponse'

const FIELD_IDS = {
  nome:     'entry.XXXXXXXXXX',  // ← seu entry ID real
  email:    'entry.XXXXXXXXXX',  // ← seu entry ID real
  telefone: 'entry.XXXXXXXXXX',  // ← seu entry ID real
  cpf:      'entry.XXXXXXXXXX',  // ← seu entry ID real
}
```

> ⚠️ **Nota técnica:** A submissão usa `mode: 'no-cors'` pois o Google Forms não suporta CORS.
> Isso significa que o JavaScript não consegue confirmar o sucesso — mas o dado é enviado normalmente.
> Por isso, após a submissão, a mensagem de sucesso é exibida de qualquer forma.

---

## 🖼 Substituir logos das lojas

Em `src/components/StoresSection.jsx`, substitua o array `stores`:

```js
const stores = [
  { id: 1, name: 'Nome da Loja', logo: '/logos/loja-1.png' },
  // ... 9 lojas no total
]
```

E no JSX, troque o placeholder pelo `<img>`:

```jsx
<img src={store.logo} alt={store.name} className="w-16 h-16 object-contain" />
```

---

## 🎨 Cores principais

| Variável         | Cor           |
|------------------|---------------|
| `d-gold`         | `#C9A84C`     |
| `d-gold-light`   | `#E8C96A`     |
| `d-gold-dark`    | `#A07830`     |
| `d-black`        | `#0D0D0D`     |
| `d-dark`         | `#1A1A1A`     |
| `d-light`        | `#F5F0E8`     |

---

## 📁 Estrutura

```
src/
├── components/
│   ├── HeroSection.jsx    ← Banner hero
│   ├── StoresSection.jsx  ← 9 logos das lojas
│   ├── FormSection.jsx    ← Formulário + Google Forms
│   └── Footer.jsx
├── hooks/
│   └── useFormSchema.js   ← Validação Zod
├── App.jsx
├── main.jsx
└── index.css
```
