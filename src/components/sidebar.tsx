import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import {
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users,
} from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

export const Sidebar = () => {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link 
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full" 
              href="#">
              <Package className="w-4 h-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" 
                  href="#">
                  <Home className="w-5 h-5" />
                  <span className="sr-only">Início</span>
                </Link>                
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" 
                  href="#">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="sr-only">Pedidos</span>
                </Link>                
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" 
                  href="#">
                  <Package className="w-5 h-5" />
                  <span className="sr-only">Produtos</span>
                </Link>                
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" 
                  href="#">
                  <Users className="w-5 h-5" />
                  <span className="sr-only">Clientes</span>
                </Link>                
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" 
                  href="#">
                  <Settings2 className="w-5 h-5" />
                  <span className="sr-only">Configurações</span>
                </Link>                
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground" 
                  href="#">
                  <LogOut className="w-5 h-5" />
                  <span className="sr-only">Sair</span>
                </Link>                
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom />
                <span className="sr-only">Abrir / fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-xs">
              <div className="flex flex-col h-full">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                    prefetch={false}
                  >
                    <Package className="w-5 h-5 transition-all" />
                    <span className="sr-only">Logo do projeto</span>
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <Home className="w-5 h-5 transition-all" />
                    Início
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <ShoppingBag className="w-5 h-5 transition-all" />
                    Pedidos
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <Package className="w-5 h-5 transition-all" />
                    Produtos
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <Users className="w-5 h-5 transition-all" />
                    Clientes
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <Settings2 className="w-5 h-5 transition-all" />
                    Configurações
                  </Link>
                </nav>

                {/* Link de Sair no final */}
                <div className="mt-auto flex justify-between text-lg font-medium gap-4 px-2 py-5">
                  <Link
                    href="#"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <LogOut className="w-5 h-5 transition-all" />
                    Sair 
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <h2 className="font-semibold">Menu</h2>
        </header>
      </div>
    </div>
  );
};
