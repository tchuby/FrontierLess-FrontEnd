import React, { useState } from "react";
import { login } from "@/services/authServices"

import Button from "../Button";
import Input from "../Input";
import Link from "../Link";

export default function FormLogin() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await login(formData);
            console.log("User logged in successfully:", data);
        } catch (error) {
            console.error("error when logging in user: ", error);
        }
    };
    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Input id="email" name="email" type="email" onChange={handleChange}>Email</Input>
                <Input id="password" name="password" type="password" onChange={handleChange}>Senha</Input>
                <Button type="submit">Entrar</Button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
                Não possui login?
                <Link href="/register"> Cadastrar-se</Link>
            </p>
        </div>
    );
}
