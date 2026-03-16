export default function Footer() {
  return (
    <footer className="relative bg-d-dark py-10 px-6">
      <div className="divider-red absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-body font-bold text-xl tracking-wide">
          <span className="text-gradient-red">Shopping</span>
          <span className="text-white ml-2">D</span>
        </div>
        <p className="text-white/20 font-body text-xs tracking-wide text-center">
          © {new Date().getFullYear()} Shopping D. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-white/25 hover:text-d-red text-xs font-body uppercase tracking-wider transition-colors duration-300">
            Privacidade
          </a>
          <a href="#" className="text-white/25 hover:text-d-red text-xs font-body uppercase tracking-wider transition-colors duration-300">
            LGPD
          </a>
        </div>
      </div>
    </footer>
  )
}
