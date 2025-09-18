import Link from "next/link";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className=" container px-4 py-8 md:py-12 mx-auto lg:max-w-[1200px] xl:max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">TechStore</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Tu tienda de tecnologia de confianza. Ofrecemos los mejores
                            productos tecnológicos al mejor precio
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Laptops
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Celulares
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Tablets
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Accesorios
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Información</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    {" "}
                                    Políticas y privacidad
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Términos y condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <address className="not-italic text-sm text-muted-foreground space-y-2">
                            <p>Calle 107, la tecnologia</p>
                            <p>Cali</p>
                            <p>info@techstore.com</p>
                            <p>Telefono: +57 304 657 9897</p>
                        </address>
                        <div className="flex gap-4 mt-4">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <SiFacebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <SiInstagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <SiX className="h-5 w-5" />
                                <span className="sr-only">X</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} TechStore. Todos los derechos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
