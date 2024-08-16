import { useEffect } from 'react';

export function useScrollListener() {
    useEffect(() => {
        function handleScroll() {
            const div = document.getElementById('Search');
            if (div) {
                if (window.scrollY > 10) {
                    div.style.backgroundColor = '#f7f7f7';
                } else {
                    div.style.backgroundColor = '#f0f2f5';
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
}