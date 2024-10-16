import { useState } from "react";
import StarTrue from "./components/StarTrue";
import StarFalse from "./components/StarFalse";

function getNotaMedia() {
    // TO DO - Substitua pela lógica de cálculo da nota média
    return 3;
}

interface Props {
    note?: number;
    disabled?: boolean;
}

export default function StarAvaliation({ note, disabled }: Props) {
    const [hoveredStars, setHoveredStars] = useState(0);
    const [selectedStars, setSelectedStars] = useState(getNotaMedia());

    const handleMouseEnter = (index: number) => {
        if (!disabled) {
            setHoveredStars(index + 1);
        }
    };
    const handleMouseLeave = () => {
        if (!disabled) {
            setHoveredStars(0);
        }
    };
    const handleClick = (index: number) => {
        if (!disabled) {
            setSelectedStars(index + 1);
        }
    };

    return (
        <div className="flex items-center">
            {note && Array.from({ length: 5 }, (_, i) => (
                <div>
                    {i < note ? <StarTrue /> : <StarFalse />}
                </div>
            ))}

            {!note && Array.from({ length: 5 }, (_, i) => (
                <div
                    key={i}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(i)}>
                    {i < (hoveredStars || selectedStars) ? <StarTrue /> : <StarFalse />}
                </div>
            ))}
        </div>
    );
}
