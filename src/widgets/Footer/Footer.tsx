
export function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-900/50 mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
                    <p>© 2026 DD Dynasty. Все права защищены.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">Discord</a>
                        <a href="#" className="hover:text-white transition">Twitter</a>
                        <a href="#" className="hover:text-white transition">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}