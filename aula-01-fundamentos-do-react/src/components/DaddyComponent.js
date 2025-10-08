import SonComponent from "./SonComponent";

const DaddyComponent = () => {
    return (
        <>
            <div>
                <h2>Início do Componente Pai</h2>
                <SonComponent />
                <h2>Fim do Componente Pai</h2>
            </div>
        </>
    )
}

export default DaddyComponent;