// src/app/login/page.tsx
"use client";

import FormLogin from "@/components/FormLogin";

export default function Login() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;

        try {
            const response = await fetch('https://07e2fc8b-a91a-47a9-a85e-f5e45e515b2e.mock.pstmn.io/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Entrar no FrontierLess</h2>
            </div>
            <FormLogin submit={handleSubmit} />
        </div>
    );
}
