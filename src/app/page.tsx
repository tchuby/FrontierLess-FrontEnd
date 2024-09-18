import Link from "@/components/Link";

export default function Home() {
  return (
    <div>
      <Link href="/feed">
        Ira para o Feed
      </Link>
      <Link href="/profile">
        Ira para perfil
      </Link>
      <Link href="/findProject">
        Ira para Buscar
      </Link>
      <Link href="/login">
        Ira para login
      </Link>
      <Link href="/register">
        Ira para Cadastrar-se
      </Link>
    </div>
  );
}
