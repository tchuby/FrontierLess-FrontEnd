import { useState, useEffect } from "react";
import StarTrue from "./components/StarTrue";
import StarFalse from "./components/StarFalse";

interface Props {
    note?: number;
    disabled?: boolean;
    onGradeSelect?: (grade: number) => void;
    grade?: number;
}

export default function StarAvaliation({ note, disabled, grade = 1, onGradeSelect }: Props) {
    const [hoveredStars, setHoveredStars] = useState(0);
    const [selectedStars, setSelectedStars] = useState(grade);

    useEffect(() => {
        if (!grade) {
            setSelectedStars(1);
        } else {
            setSelectedStars(grade);
        }
    }, [grade]);

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
            const starsValue = Math.max(index + 1, 1);
            setSelectedStars(starsValue);

            if (onGradeSelect) {
                onGradeSelect(starsValue);
            }
        }
    };

    return (
        <div className="flex items-center">
            {note && Array.from({ length: 5 }, (_, i) => (
                <div key={i}>
                    {i < note ? <StarTrue /> : <StarFalse />}
                </div>
            ))}

            {!note && Array.from({ length: 5 }, (_, i) => (
                <div key={i} onMouseEnter={() => handleMouseEnter(i)} onMouseLeave={handleMouseLeave} onClick={() => handleClick(i)}>
                    {i < (hoveredStars || selectedStars) ? <StarTrue /> : <StarFalse />}
                </div>
            ))}
        </div>
    );
}
