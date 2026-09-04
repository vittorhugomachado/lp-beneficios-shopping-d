import { useEffect, useRef } from "react";

const stores = [
  {
    id: 1,
    name: "43 Graus",
    initial: "43",
    color: "#C61D22",
    logo: "/43-graus.png",
    benefit: ["10% OFF na loja toda"],
    details: ["Desconto não cumulativo com outras promoções"],
  },
  {
    id: 2,
    name: "Atlett",
    initial: "A",
    color: "#E8282E",
    logo: "/atlett.png",
    benefit: ["15% de desconto em produtos não promocionais"],
    details: ["Desconto não cumulativo com outras promoções"],
  },
  {
    id: 3,
    name: "Cruzeiros´s Bar",
    initial: "C",
    color: "#E8282E",
    logo: "/cruzeiros.png",
    benefit: ["R$69,90 Prato: Penne Espetacular ou Picanha do Dia (uma fatia) acompanhado uma sobremesa do dia e um refrigerante, suco ou água"],
    details: [""],
  },
  {
    id: 4,
    name: "Chiquinho Sorvetes",
    initial: "A",
    color: "#E8282E",
    logo: "/inova.png",
    benefit: ["10% de desconto em todos os produtos de copo"],
    details: ["Exceto para as linhas Casquinhas, Cascões, Produtos Sazonais e Adicionais"],
  },
  {
    id: 5,
    name: "Inova",
    initial: "A",
    color: "#E8282E",
    logo: "/inova.png",
    benefit: ["5% de desconto no Plano Inova, com a 1ª parcela por R$ 99,00"],
    details: ["Desconto não cumulativo com outras promoções"],
  },
  {
    id: 6,
    name: "Johnny Rockets",
    initial: "J",
    color: "#E8282E",
    logo: "/johnny-rockets.png",
    benefit: ["30% de desconto em todo cardápio"],
    details: [],
  },
  {
    id: 7,
    name: "Feliz Farma",
    initial: "A",
    color: "#E8282E",
    logo: "/feliz-farma.png",
    benefit: ["R$10,00 reais de desconto para compras a partir de R$79,90"],
    details: ["Desconto não cumulativo com outras promoções"],
  },
  {
    id: 8,
    name: "Lupo",
    initial: "A",
    color: "#E8282E",
    logo: "/lupo.png",
    benefit: ["10% OFF em toda a loja"],
    details: ["Desconto não cumulativo com outras promoções"],
  },
  {
    id: 9,
    name: "Mc Donalds",
    initial: "M",
    color: "#C61D22",
    logo: "image.png",
    benefit: [
      "Promoção dos combos Big Mac, Quarteirão e Cheddar McMelt por apenas R$ 26,00",
    ],
    details: ["Apenas no Caixa"],
  },
  {
    id: 10,
    name: "Nikids",
    initial: "N",
    color: "#C61D22",
    logo: "/nikids.png",
    benefit: ["Nas compras acima de R$ 100, ganhe um brinde ou 10% OFF"],
    details: [],
  },
  {
    id: 11,
    name: "Pappu's Açaí",
    initial: "P",
    color: "#711C6F",
    logo: "/pappus-logo.png",
    benefit: [
      "Das 10h às 12h, 15% de desconto em açaí ou sorvete",
      "10% de desconto em açaí, sorvete ou fondue",
      "R$ 14,99 salada de frutas 200g",
    ],
    details: [],
  },
  {
    id: 12,
    name: "Rei do Mate",
    initial: "R",
    color: "#C61D22",
    logo: "rei-do-mate.png",
    benefit: [
      "Nas compras a partir de R$ 50,00, ganhe um café expresso pequeno ",
    ],
    details: [],
  },
  {
    id: 13,
    name: "Tennis One",
    initial: "T",
    color: "#C61D22",
    logo: "logo-tenis-one.jpg",
    benefit: [
      "10% de desconto no crédito, 15% no PIX e no débito",
      ,
    ],
    details: ["Os 10% de desconto são válidos inclusive para os tênis que já estão em promoção"],
  },
  {
    id: 14,
    name: "Vestipijamas",
    initial: "V",
    color: "#C61D22",
    logo: "logo-vestipijamas.jpeg",
    benefit: ["15% de desconto para compras a partir de R$ 250"],
    details: ["Desconto nÃ£o cumulativo com outras promoções"],
  },
  {
    id: 15,
    name: "World Tennis",
    initial: "W",
    color: "#C61D22",
    logo: "world-tennis.jpeg",
    benefit: ["Cashback de 20%"],
    details: ["Desconto não cumulativo com outras promoções"],
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
      className="relative py-28 overflow-hidden border-t border-[#FACA27]"
    >
      <div className="divider-yellow absolute top-0 left-0 right-0" />
      <div className="divider-yellow absolute bottom-0 left-0 right-0" />

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
              <div className="w-full h-44 flex justify-center py-3 bg-white">
                <img
                  src={store.logo}
                  alt={store.name}
                  width={145}
                  className="h-full object-contain"
                />
              </div>
              <h3
                className="font-body mx-3 text-xl font-semibold text-[#FACA27] tracking-widest uppercase"
                style={{ paddingLeft: "13px", paddingRight: "13px" }}
              >
                {store.name}
              </h3>
              <ul className="list-disc list-outside text-left w-full p-6 pl-8 space-y-1">
                {store.benefit.map((benefit, index) => (
                  <li key={index} className="text-white text-base mb-3">
                    {benefit}
                  </li>
                ))}
              </ul>

              {store.details.length > 0 && (
                <>
                  <span className="w-[70%] h-px bg-[#FBC929]/70" />
                  <ul className="list-outside text-left w-full p-6 pl-8 space-y-1">
                    {store.details.map((detail, index) => (
                      <li key={index} className="text-white text-sm mb-3">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
