import  { useState, useEffect } from 'react';

export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function handleOnline(){
            setIsOnline(true);
        }

        function handleOffline(){
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
    }, []);

    return isOnline;
}