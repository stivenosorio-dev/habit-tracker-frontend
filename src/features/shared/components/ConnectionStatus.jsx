import { useOnlineStatus } from "../../habits/hooks/useOnlineStatus";

function ConnectionStatus (){
    const isOnline = useOnlineStatus();

    return (
        <p role="status">
            {isOnline ? 'Conectado a internet' : 'Sin conexión a internet'}
        </p>
    );
}

export default ConnectionStatus;


