// hooks/useLocalStorage.ts
import {useState, useEffect} from 'react';

// Custom event interface for localStorage changes
interface LocalStorageChangeEvent extends CustomEvent {
    detail: {
        key: string;
        newValue: any;
    };
}

// Declare the custom event on the Window interface
declare global {
    interface WindowEventMap {
        localStorageChange: LocalStorageChangeEvent;
    }
}

export function useLocalStorage(key: string, defaultValue: string): [string, (value: string) => void] {
    const [value, setValue] = useState<string>(() => {
        if (typeof window !== 'undefined') {
            try {
                const stored = localStorage.getItem('viewState');
                return stored ? stored : defaultValue;
            } catch (error) {
                console.error(`Error parsing localStorage value for key "${key}":`, error);
                return defaultValue;
            }
        }
        return defaultValue;
    });

    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key) {
                try {
                    const newValue = e.newValue ? e.newValue : defaultValue;
                    console.log('newValue', newValue);
                    setValue(newValue);
                } catch (error) {
                    console.error(`Error parsing storage event value for key "${key}":`, error);
                    setValue(defaultValue);
                }
            }
        };

        // Custom event for same-tab changes
        const handleCustomStorage = (e: LocalStorageChangeEvent) => {
            if (e.detail.key === key) {
                setValue(e.detail.newValue);
            }
        };

        // Listen for storage events from other tabs/windows
        window.addEventListener('storage', handleStorageChange);

        // Listen for custom storage events from same tab
        window.addEventListener('localStorageChange', handleCustomStorage);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('localStorageChange', handleCustomStorage);
        };
    }, []);

    const setStoredValue = (newValue: string) => {
        try {
            setValue(newValue);
            localStorage.setItem('viewSate', newValue);

            // Dispatch custom event for same-tab listening
            window.dispatchEvent(new CustomEvent('localStorageChange', {
                detail: {key, newValue}
            }));
        } catch (error) {
            console.error(`Error setting localStorage value for key "${key}":`, error);
        }
    };

    return [value, setStoredValue];
}