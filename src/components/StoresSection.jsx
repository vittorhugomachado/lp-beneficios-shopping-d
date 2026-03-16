import { useEffect, useRef } from "react";

// ============================================================
//  LOJAS DO SHOPPING D — 9 itens
//  Substitua `logo` por um caminho de imagem real: '/logos/loja-x.png'
//  ou use uma URL externa.
//  O campo `color` é a cor de destaque do placeholder;
//  pode ser removido quando o logo real for usado.
// ============================================================
const stores = [
  {
    id: 1,
    name: "43 Graus",
    initial: "43",
    color: "#C61D22",
    logo: "/images/lojas/43-graus.png",
    benefit: [
      "Desconto de 15% em todos os produtos da loja, exceto itens promocionais",
    ],
    details: "Promoção não cumulativa",
  },
  {
    id: 2,
    name: "Chilli Beans",
    initial: "CB",
    color: "#E8282E",
    logo: "/images/lojas/chilli-beans.png",
    benefit: [
      "Desconto de 15% exceto produtos promocionais (Óculos solar, Relógios, Armação e Lente de Grau)",
    ],
    details: "Válido até 22/03/2025",
  },
  {
    id: 3,
    name: "Cruzeiro's Bar",
    initial: "CB",
    color: "#9A1519",
    logo: "/images/lojas/cruzeiros-bar.png",
    benefit: [
      "Promoção 1 - Prato Principal + sobremesa do dia + bebida não alcoólica por R$ 60,00 (Opções: Prato São Paulo, Filé de Frango ou Penne Espetacular)",
      "Promoção 2 - Na compra de um prato executivo, ganhe uma bebida não alcoólica",
    ],
    details:
      "Válido de segunda a quinta das 11h30 às 16h até 05/04/2025. Promoção não acumulativa",
  },
  {
    id: 4,
    name: "Kidstok",
    initial: "K",
    color: "#C61D22",
    logo: "/images/lojas/kidstok.png",
    benefit: ["Desconto de 10% em todos os produtos da loja"],
    details: "",
  },
  {
    id: 5,
    name: "Los",
    initial: "L",
    color: "#E8282E",
    logo: "/images/lojas/los.png",
    benefit: [
      "Primeira hora de Lan House grátis",
      "Desconto de 35% na compra da coleção vintage Team One",
      "Desconto de 25% na Lan House",
    ],
    details: "",
  },
  {
    id: 6,
    name: "Lupo",
    initial: "L",
    color: "#9A1519",
    logo: "/images/lojas/lupo.png",
    benefit: ["Desconto de 10% em todas as compras"],
    details: "Desconto não cumulativo com outras promoções da loja",
  },
  {
    id: 7,
    name: "Mei Mei",
    initial: "MM",
    color: "#C61D22",
    logo: "/images/lojas/mei-mei.png",
    benefit: [
      "Desconto de 10% no buffet",
      "Compre um yakissoba a la carte e ganhe 01 harumaki doce ou 01 hot doce",
    ],
    details: "",
  },
  {
    id: 8,
    name: "Nikids",
    initial: "N",
    color: "#E8282E",
    logo: "/images/lojas/nikids.png",
    benefit: ["Desconto de 10% a partir de 2 balões de gás hélio"],
    details: "Válido somente para o produto descrito",
  },
  {
    id: 9,
    name: "Poderoso Timão",
    initial: "PT",
    color: "#9A1519",
    logo: "/images/lojas/poderoso-timao.png",
    benefit: ["Desconto de 20% em todos os produtos da loja"],
    details: "Promoção não é válida para coleção 24/25 Nike",
  },
  {
    id: 10,
    name: "Rei do Mate",
    initial: "RM",
    color: "#C61D22",
    logo: "/images/lojas/rei-do-mate.png",
    benefit: [
      "Na compra de um açaí do seu jeito de 500 ml ganhe uma água Cristal 500 ml",
      "Na Compra de um lanche Toast, ganhe 01 Mate gelado puro ou com limão 300ml",
      "Na compra de 02 Salgados, ganhe 01 Mate gelado puro (300ml) ou 01 café expresso pequeno",
    ],
    details: "",
  },
  {
    id: 11,
    name: "Renata Style",
    initial: "RS",
    color: "#E8282E",
    logo: "/images/lojas/renata-style.png",
    benefit: [
      "Desconto de 10% para compras à vista",
      "Desconto de 5% para compras parceladas",
    ],
    details: "",
  },
  {
    id: 12,
    name: "World Tennis",
    initial: "WT",
    color: "#9A1519",
    logo: "/images/lojas/world-tennis.png",
    benefit: [
      "Desconto de 20% em todos os produtos da loja, com parcelamento em até 10x sem juros",
    ],
    details: "",
  },
];

export default function StoresSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const heading = entry.target.querySelector("[data-heading]");
          if (heading) {
            heading.style.opacity = "1";
            heading.style.transform = "translateY(0)";
          }

          const cards = entry.target.querySelectorAll("[data-store-card]");
          cards.forEach((card, i) => {
            setTimeout(
              () => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              },
              80 + i * 70,
            );
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
    transform: "translateY(24px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  });

  return (
    <section
      id="lojas"
      ref={sectionRef}
      className="relative py-28 bg-[#B9161B] overflow-hidden"
    >
      <div className="divider-red absolute top-0 left-0 right-0" />
      <div className="divider-red absolute bottom-0 left-0 right-0" />

      {/* Subtle bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198,29,34,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div data-heading style={fadeStyle()} className="text-center mb-16">
          <h2 className="font-body text-4xl md:text-5xl text-white font-bold mb-3">
            <span className="text-gradient-red">Lojas {""}</span>
            Participantes
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-28 bg-white " />
          </div>
        </div>

        {/* Grid responsivo: 3 colunas em desktop, 2 em tablet, 1 em mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
          {stores.map((store) => (
            <div
              key={store.id}
              data-store-card
              style={fadeStyle()}
              className="store-card rounded-2xl flex flex-col items-center justify-start gap-3 overflow-hidden"
            >
              <div className="w-full flex justify-center py-3 bg-white">
                <img src={store.logo} alt={store.name} width={145} />
              </div>
              <h3 className="font-body text-xl font-semibold text-[#FACA27] tracking-widest uppercase">
                {store.name}
              </h3>
              <ul className="list-disc list-outside text-left w-full p-6 pl-8 space-y-1">
                {store.benefit.map((benefit, index) => (
                  <li key={index} className="text-white text-base mb-3">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
