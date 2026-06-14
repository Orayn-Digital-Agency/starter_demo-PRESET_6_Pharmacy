import businessData from '@/config/business-data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-4"
      style={{ backgroundColor: '#0F1B2D' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-sora font-semibold text-sm text-white">
          {businessData.businessName}
        </span>

        <span className="font-inter text-xs text-white/40 order-last sm:order-none">
          &copy; {year} {businessData.businessName}. {businessData.city}, Nigeria.
        </span>

        <a
          href="https://orayn.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-xs text-white/40 hover:text-white/70 transition-colors duration-200"
        >
          Built by Orayn Digital Agency
        </a>
      </div>
    </footer>
  )
}
