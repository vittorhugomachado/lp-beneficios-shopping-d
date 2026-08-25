
# README — Como Atualizar as Lojas

## 📍 Onde atualizar

As lojas exibidas na seção **"Lojas Participantes"** do site estão cadastradas diretamente no arquivo:

```text
src/components/StoresSection.jsx
```

Dentro desse arquivo, procure pela constante:

```jsx
const stores = [
```

**É nessa lista que todas as lojas devem ser adicionadas, removidas ou alteradas.**

---

# 🏪 Estrutura de uma loja

Cada loja possui a seguinte estrutura:

```jsx
{
  id: 1,
  name: "Nome da Loja",
  initial: "N",
  color: "#C61D22",
  logo: "/logo.png",
  benefit: [
    "Benefício oferecido ao associado",
    "Outro benefício"
  ],
  details: [
    "Observação ou condição do benefício"
  ],
},
```

## Campos

### `id`

Identificador único da loja.

```jsx
id: 1,
```

Cada loja deve possuir um `id` diferente.

Exemplo:

```jsx
id: 17,
```

Se a última loja cadastrada possui `id: 16`, a próxima pode utilizar `id: 17`.

---

### `name`

Nome que será exibido para a loja.

```jsx
name: "43 Graus",
```

Exemplo:

```jsx
name: "Supermercado Exemplo",
```

---

### `initial`

Inicial da loja.

```jsx
initial: "A",
```

Atualmente esse campo não é utilizado visualmente na seção, mas deve ser mantido na estrutura para preservar o padrão dos dados.

---

### `color`

Cor associada à loja.

```jsx
color: "#C61D22",
```

Também deve ser mantida na estrutura mesmo que atualmente não esteja sendo utilizada diretamente na exibição dos cards.

---

### `logo`

Caminho da imagem da logo.

```jsx
logo: "/atlett.png",
```

A imagem deve estar disponível na pasta pública do projeto.

Por exemplo:

```text
public/
├── 43-graus.png
├── atlett.png
├── nikids.png
└── nova-loja.png
```

Nesse caso, no `StoresSection.jsx`:

```jsx
logo: "/nova-loja.png",
```

### ⚠️ Atenção

Confira sempre o nome do arquivo da imagem.

Por exemplo, se o arquivo se chama:

```text
logo-nova-loja.png
```

não utilize:

```jsx
logo: "/nova-loja.png",
```

O correto será:

```jsx
logo: "/logo-nova-loja.png",
```

---

# 🎁 Campo `benefit`

É onde são cadastrados os benefícios oferecidos pela loja.

```jsx
benefit: [
  "10% OFF na loja toda",
],
```

A loja pode ter **um ou vários benefícios**.

Exemplo com um benefício:

```jsx
benefit: [
  "10% OFF na loja toda",
],
```

Exemplo com vários:

```jsx
benefit: [
  "10% OFF em compras acima de R$ 100",
  "15% OFF no pagamento via PIX",
  "Frete grátis para associados",
],
```

Cada benefício deve ficar entre aspas e separado por vírgula.

---

# 📋 Campo `details`

É utilizado para informações adicionais ou condições dos benefícios.

Exemplo:

```jsx
details: [
  "Desconto não cumulativo com outras promoções",
],
```

Se não houver nenhuma observação, deixe uma lista vazia:

```jsx
details: [],
```

### Exemplo

```jsx
benefit: [
  "15% OFF na loja toda",
],
details: [
  "Desconto não cumulativo com outras promoções",
],
```

---

# ➕ Como adicionar uma nova loja

Dentro de:

```text
src/components/StoresSection.jsx
```

adicione um novo objeto dentro de `stores`.

Exemplo:

```jsx
{
  id: 17,
  name: "Nova Loja",
  initial: "N",
  color: "#C61D22",
  logo: "/nova-loja.png",
  benefit: [
    "10% OFF na loja toda",
    "Frete grátis para associados",
  ],
  details: [
    "Desconto não cumulativo com outras promoções",
  ],
},
```

### ⚠️ Não esqueça da vírgula

Cada loja deve ser separada da próxima por uma vírgula:

```jsx
{
  id: 16,
  name: "Rei do Mate",
  // ...
},

{
  id: 17,
  name: "Nova Loja",
  // ...
},
```

---

# ❌ Como remover uma loja

Localize o objeto correspondente dentro da lista `stores` e remova-o completamente.

Por exemplo:

```jsx
{
  id: 17,
  name: "Nova Loja",
  initial: "N",
  color: "#C61D22",
  logo: "/nova-loja.png",
  benefit: [
    "10% OFF na loja toda",
  ],
  details: [],
},
```

Remova todo esse bloco.

---

# ✏️ Como alterar uma loja existente

Basta localizar a loja e modificar os campos necessários.

Por exemplo, para alterar o benefício:

### Antes

```jsx
benefit: [
  "10% OFF na loja toda",
],
```

### Depois

```jsx
benefit: [
  "15% OFF na loja toda",
],
```

Não é necessário alterar nenhuma outra parte do componente.

---

# 🖼️ Como trocar a logo

1. Coloque a nova imagem da loja na pasta `public`.
2. Copie o nome exato do arquivo.
3. Altere o campo `logo`.

Exemplo:

```jsx
logo: "/nova-logo.png",
```

---

# ⚠️ Importante sobre o restante do arquivo

**Não é necessário alterar o restante do `StoresSection.jsx` para atualizar as lojas.**

A parte responsável pela animação, layout, responsividade e exibição dos cards já está configurada.

Normalmente, as alterações necessárias ficam somente dentro de:

```jsx
const stores = [
  // lojas aqui
];
```

---

# 🔄 Checklist antes de publicar

* [ ] A loja foi adicionada dentro de `const stores`.
* [ ] O `id` é único.
* [ ] O nome da loja está correto.
* [ ] A logo foi colocada na pasta `public`.
* [ ] O caminho da logo está correto.
* [ ] Os benefícios estão escritos corretamente.
* [ ] As condições estão no campo `details`.
* [ ] As vírgulas e chaves estão corretas.
* [ ] O site foi executado/testado após a alteração.
* [ ] A logo aparece corretamente.
* [ ] Os benefícios aparecem corretamente.

---

# 📌 Exemplo completo

Uma nova loja pode ser cadastrada assim:

```jsx
{
  id: 17,
  name: "Loja Exemplo",
  initial: "L",
  color: "#C61D22",
  logo: "/loja-exemplo.png",
  benefit: [
    "10% OFF em toda a loja",
    "5% OFF adicional no PIX",
  ],
  details: [
    "Descontos não cumulativos com outras promoções",
  ],
},
```

### Regra principal

> **Para atualizar as lojas do Clube de Benefícios, altere somente a lista `stores` localizada em `src/components/StoresSection.jsx`.**
