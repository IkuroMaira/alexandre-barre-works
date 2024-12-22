export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body>
        <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-6">
                <ul className="flex space-x-6">
                    <li><a href="/" className="hover:text-blue-600">Accueil</a></li>
                    <li><a href="/gallery" className="hover:text-blue-600">Galerie</a></li>
                    <li><a href="/about" className="hover:text-blue-600">À propos</a></li>
                    <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-100 mt-12">
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-gray-600">© 2024 Mon Portfolio</p>
            </div>
        </footer>
        </body>
        </html>
    );
}