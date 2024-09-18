import Button from "../Button";


export default function Form() {
    return (
        <div>
            <form action="/login" method="post">
                <div>
                    <label htmlFor="login"> Login</label>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        required />
                </div>
                <div>
                    <label htmlFor="password"> Sennha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required />
                </div>
                <Button type="submit">Entrar</Button>
            </form>
        </div>
    );
}