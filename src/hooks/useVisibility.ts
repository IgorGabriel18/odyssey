import { useLayoutEffect, useState } from "react";

interface IUseVisibility {
    condition?: boolean;
    newVisibilityToLargeScreen?: boolean;
    delay?: number;
}

export const useVisibility = ({ condition, newVisibilityToLargeScreen, delay }: IUseVisibility = {}) => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClickToggleVisibility = () => {
        if (visibility) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setVisibility(false);
            }, delay || 0);
        } else {
            setVisibility(!visibility);
        }
    };

    useLayoutEffect(() => {
        setVisibility(newVisibilityToLargeScreen!);
    }, [condition]);

    return { isLoading, visibility, handleClickToggleVisibility };
};
