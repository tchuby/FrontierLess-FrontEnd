import { useState } from 'react';

interface Filter {
    action: string;
    property: string;
    condition: string;
    value: string;
}

export default function FormSearch() {
    const [filters, setFilters] = useState<Filter[]>([
        { action: 'Include', property: 'Referring domain', condition: 'Exactly matching', value: '' },
    ]);

    const handleInputChange = (index: number, field: keyof Filter, value: string) => {
        const newFilters = [...filters];
        newFilters[index][field] = value;
        setFilters(newFilters);
    };

    const handleClearAll = () => {
        setFilters([
            { action: 'Include', property: 'Referring domain', condition: 'Exactly matching', value: '' },
        ]);
    };

    return (
        <>
            {filters.map((filter, index) => (
                <div key={index} className="grid grid-cols-1 gap-3 mb-3 w-full">
                    <div>
                        <input
                            type="text"
                            value={filter.value}
                            onChange={(e) => handleInputChange(index, 'value', e.target.value)}
                            placeholder="Procurar"
                            className="border border-gray-300 rounded p-2 w-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <select
                            value={filter.action}
                            onChange={(e) => handleInputChange(index, 'action', e.target.value)}
                            className="border border-gray-300 rounded p-2">
                            <option></option>
                            <option>Destino</option>
                        </select>

                        <select
                            value={filter.property}
                            onChange={(e) => handleInputChange(index, 'property', e.target.value)}
                            className="border border-gray-300 rounded p-2">
                            <option></option>
                            <option>Status</option>
                        </select>

                        <select
                            value={filter.condition}
                            onChange={(e) => handleInputChange(index, 'condition', e.target.value)}
                            className="border border-gray-300 rounded p-2">
                            <option></option>
                            <option>Tipo de intercambio</option>
                        </select>
                    </div>
                </div>
            ))}

            <div className="flex justify-between mt-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded">
                    Aplicar
                </button>
                <button onClick={handleClearAll} className="text-gray-600">
                    Clear all
                </button>
            </div>
        </>
    );
}
