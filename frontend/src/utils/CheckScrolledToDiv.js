import { useEffect } from 'react'

// Function checking when scrolling over section and setting state to its active class
export default (setActive) => {
    const checkScrollToDiv = () => {
        const sectionCont = ['.header__container', '.projects__container', '.reviews__container']
        const sectionNames = ['home-active', 'projects-active', 'testimonials-active']

        for (let i=0; i < sectionCont.length; i++) {
            const elementTarget = document.querySelector(sectionCont[i]);

            if(sectionCont[i] === '.reviews__container') {
                if ((window.innerHeight + window.scrollY + (elementTarget.offsetHeight / 2)) >= document.body.offsetHeight) {
                    setActive(sectionNames[i])
                }
            } else {
                if (window.scrollY > (elementTarget.offsetTop - elementTarget.offsetHeight)) {
                    setActive(sectionNames[i])
                }
            }
        }
    }

    // On page load assign above function to scroll listener,
    // With passive true so the browser loads scrolling functionality before the Javascript.
    useEffect(() => {
        window.addEventListener('scroll', checkScrollToDiv, { passive: true });

        // Clean up
        return () => {
            window.removeEventListener('scroll', checkScrollToDiv);
        }
    }, [])
}