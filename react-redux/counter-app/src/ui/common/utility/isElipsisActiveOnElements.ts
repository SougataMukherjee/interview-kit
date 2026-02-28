export const IsEllipsisActiveOnElements=(element: React.MutableRefObject<HTMLElement>|null)=>{
    const e=element && element.current;
    return (
        (e &&
            ((e.offsetHeight&&e.scrollHeight&&e.offsetHeight<e.scrollHeight)||
            (e.offsetWidth&&e.scrollWidth&&e.offsetWidth<e.scrollWidth)||false
        )
        )
    )
}