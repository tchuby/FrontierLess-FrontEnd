import Link from "@/components/Link";

interface Props {
  children?: React.ReactNode,
  as?: any
}

function Title({ children, as }: Props) {
  const Tag = as;
  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style>{`
        ${Tag}{
          font-family: sans-serif
        }

      `}</style>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Title as="h2">TESTE</Title>
      <Link href="/feed" >
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
