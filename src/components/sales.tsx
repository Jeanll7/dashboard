import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Sales = () => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Ultimos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4 mt-auto" />
        </div>
        <CardDescription>
          Novos clientes nas ultimas 24 horas
        </CardDescription>
      </CardHeader>
      <CardContent>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Jeanll7.png" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Jean Developer</p>
            <span className="text-[12px] sm:text-sm text-gray-400">jean@teste.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Jeanll7.png" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Jean Developer</p>
            <span className="text-[12px] sm:text-sm text-gray-400">jean@teste.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/Jeanll7.png" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Jean Developer</p>
            <span className="text-[12px] sm:text-sm text-gray-400">jean@teste.com</span>
          </div>
        </article>

      </CardContent>
    </Card>
  );
};

export default Sales;
