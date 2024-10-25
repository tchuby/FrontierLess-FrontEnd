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
      <h1>INICIO</h1>
    </div>
  );
}
