import Button from "../Button";
import Input from "../Input";
import Link from "../Link";

interface Props {
    submit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormLogin({ submit }: Props) {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submit}>
                <Input id="email" name="email" type="email">Email</Input>
                <Input id="password" name="password" type="password">Senha</Input>
                <Button type="submit">Entrar</Button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Não possui login?
                <Link href="/register"> Cadastrar-se</Link>
            </p>
        </div>
    );
}
