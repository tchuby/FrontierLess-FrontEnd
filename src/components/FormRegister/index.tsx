import Input from "../Input"
import Button from "../Button"
import Link from "../Link"

export default function FormRegister() {
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <form className="space-y-6" action="#" method="POST">
                <Input id="name" name="name" type="text">Nome</Input>
                <Input id="email" name="email" type="email">Email</Input>
                <Input id="password" name="password" type="password">Senha</Input>
                <Input id="passwordConf" name="password" type="password">Confirme a senha</Input>
                
                <Button type="submit">Cadastrar-se</Button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Já possui conta?
                <Link href="/login"> Ir para Login</Link>
            </p>
        </div>
    )
}
