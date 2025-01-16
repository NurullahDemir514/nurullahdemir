export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-light mb-4">404</h1>
                <p className="text-xl text-text-secondary mb-8">Sayfa bulunamadı</p>
                <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 text-text-secondary bg-surface-dark/50 hover:bg-accent/10 border border-surface-dark/50 hover:border-accent/30 rounded-lg transition-all duration-300"
                >
                    Ana Sayfaya Dön
                </a>
            </div>
        </div>
    );
} 