import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import Link from "../Link";

export default function Form() {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <form className="space-y-6" action="#" method="POST">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="mt-2">
                        <Input id="email" name="email" type="email" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Senha</Label>
                        <div className="text-sm">
                            <Link href="#">Esqueceu a senha?</Link>
                        </div>
                    </div>
                    <div className="mt-2">
                        <Input id="password" name="password" type="password" />
                    </div>
                </div>

                <div>
                    <Button type="submit">Entrar</Button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Não possui login?
                <Link href="#"> Cadastrar-se</Link>
            </p>
        </div>
    );
}