export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Desktop */}
      <img
        src="/desktop.jpeg"
        alt="Shopping D"
        className="hidden sm:block w-full h-full object-cover"
      />
      {/* Mobile */}
      <img
        src="/mobile.png"
        alt="Shopping D"
        className="block sm:hidden w-full h-auto object-cover"
      />
    </section>
  );
}
