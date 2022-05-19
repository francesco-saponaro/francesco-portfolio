import { useEffect } from 'react'

// Function setting scroll position state (needed for navbar color style changes)
export default (setScroll) => {
    const checkScroll = () => {
        const position = window.pageYOffset;
        setScroll(position);
    }

    // On page load assign above function to scroll listener,
    // With passive true so the browser loads scrolling functionality before the Javascript.
    useEffect(() => {
        window.addEventListener('scroll', checkScroll, { passive: true });

        // Clean up
        return () => {
            window.removeEventListener('scroll', checkScroll);
        }
    }, [])
}