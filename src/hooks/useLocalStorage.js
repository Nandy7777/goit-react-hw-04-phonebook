import { useState, useEffect } from 'react';

export default function useLocalStorage(defaultValue) {
    const [state, setState] = useState(() => {
        return (
          JSON.parse(window.localStorage.getItem('contacts')) ?? defaultValue
        );
    });

    useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(state));
    }, [state]);

    return [state, setState];
};
