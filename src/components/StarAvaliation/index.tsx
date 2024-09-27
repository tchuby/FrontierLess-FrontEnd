import { useState } from "react";
import StarTrue from "./components/StarTrue";
import StarFalse from "./components/StarFalse";

function getNotaMedia() {
    // TO DO - Substitua pela lógica de cálculo da nota média
    return 3;
}

interface Props {
    lock?: boolean;  // Propriedade para bloquear a interação
}

export default function StarAvaliation({ lock }: Props) {
    const [hoveredStars, setHoveredStars] = useState(0);
    const [selectedStars, setSelectedStars] = useState(getNotaMedia());

    const handleMouseEnter = (index: number) => {
        if (!lock) {
            setHoveredStars(index + 1);
        }
    };
    const handleMouseLeave = () => {
        if (!lock) {
            setHoveredStars(0);
        }
    };
    const handleClick = (index: number) => {
        if (!lock) {
            setSelectedStars(index + 1);
        }
    };

    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
                <div
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i)}
                >
                    {i < (hoveredStars || selectedStars) ? <StarTrue /> : <StarFalse />}
                </div>
            ))}
        </div>
    );
}
