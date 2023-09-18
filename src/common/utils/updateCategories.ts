import { useEffect } from "react";
import useCategories from "../hooks/useCategories"

export const updateCategories = () => {
    const updateDate = useCategories((state) => state.fetch);
    useEffect(() => {
        updateDate();
    }, [])
}