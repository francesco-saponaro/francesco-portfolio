// Function to scroll to selected section and set active state to section
export default (scroll, active, ref, setActive) => {
    ref.current?.scrollIntoView(scroll);

    // Give it a 1 second delay so the activeSection state setting doesnt repeat twice due to the 
    // checkScrolledToDiv function, thereforecausing a styling issue 
    setTimeout(() => {
        setActive(active + '-active');
    }, 1000)
}