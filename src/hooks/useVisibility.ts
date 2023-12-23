import { useState, useEffect } from "react";

interface IUseVisibility {
    timeoutDuration?: number;
    activateEffect?: boolean;
    newVisibility?: boolean;
}

export const useVisibility = ({ timeoutDuration, activateEffect, newVisibility }: IUseVisibility = {}) => {
    const [visibility, setVisibility] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickToggleVisibility = () => {
        if (visibility) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setVisibility(false);
            }, timeoutDuration || 0);
        } else {
            setVisibility(true);
        }
    };

    useEffect(() => {
        setVisibility(newVisibility!);
    }, [activateEffect]);

    return { visibility, loading, handleClickToggleVisibility };
};
