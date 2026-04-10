export function Footer() {
  return (
    <footer className="border-t border-surface-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Anuj. Crafted with intention.
        </p>
        <div className="flex gap-6">
          {(['Dribbble', 'LinkedIn', 'Twitter', 'GitHub'] as const).map(
            (platform) => (
              <a
                key={platform}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-sm hover:text-accent-glow transition-colors duration-300"
              >
                {platform}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  )
}
