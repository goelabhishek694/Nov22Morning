import {useCallback, useState} from "react";

function useVisibility(initialVisibilityState = false) {
    const [isVisible,setIsVisible] = useState(initialVisibilityState);

    const show = useCallback(() => {
        setIsVisible(true)
    },[])

    const hide = useCallback(() => {
        setIsVisible(false)
    },[]);

    const toggle = useCallback(() => {
        setIsVisible(prev => !prev);
    },[]);

    return {
        isVisible,
        show,
        hide,
        toggle
    }
}

export default useVisibility;

// useVisibility();

