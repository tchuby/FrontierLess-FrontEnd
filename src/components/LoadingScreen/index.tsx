// LoadingScreen.tsx
export default function LoadingScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
            <div className="flex flex-col items-center absolute inset-0 justify-center">
                <p className="mb-5 text-lg text-gray-700">Preparando projetos, Por favor aguarde</p>
                <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-emerald-500"></div>
            </div>
        </div>
    );
}
