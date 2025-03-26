export default function Header() {
    return (
        <header className="absolute top-0 flex w-full justify-center px-12 py-5">
            <nav>
                <ul className="flex gap-3 text-[18px]">
                    <li className="text-slate-300/80 hover:text-slate-300 cursor-pointer duration-200">Inicio</li>
                    <li className="text-slate-300/80 hover:text-slate-300 cursor-pointer duration-200">Sobre mim</li>
                    <li className="text-slate-300/80 hover:text-slate-300 cursor-pointer duration-200">Projetos</li>
                </ul>
            </nav>
        </header>
    )
}