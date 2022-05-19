import { useEffect } from 'react'

// Custom scroll bar function
export default () => {
    const scrollBar = () => {
        const progress = document.querySelector('.scroll__bar');
        const totalHeight = document.body.scrollHeight - window.innerHeight;

        const progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + '%'
    } 

    useEffect(() => {
        window.addEventListener('scroll', scrollBar, { passive: true });

        return () => {
            window.removeEventListener('scroll', scrollBar);
        }
    }, [])
}