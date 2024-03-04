import './ButtonComponent.css';

export default function ButtonComponent(color, texto) {
    const misEstilos = {
        backgroundcolor: color,
    };

    return (
        <>
            <button style={misEstilos}>
                {texto}
            </button>
        </>
    );
}