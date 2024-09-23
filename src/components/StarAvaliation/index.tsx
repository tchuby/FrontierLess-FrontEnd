import StarTrue from "./components/StarTrue"
import StarFalse from "./components/StarFalse"

function getNotaMedia(){

    //TO DO
    
    return 3;
}

export default function StarAvaliation() {
    return (
        <div className="flex items-center"> 
            {
                // Cria um array de 5 elementos e renderiza as estrelas com base na nota
                Array.from({ length: 5 }, (_, i) => (
                    i < getNotaMedia() ? <StarTrue key={i} /> : <StarFalse key={i} />
                ))
            }
        </div>

    )
}