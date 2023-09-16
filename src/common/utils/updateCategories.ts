import { useEffect } from "react";
import useCategories from "../hooks/useCategories"

export const updateCategories = () => {
    const update = useCategories((state) => state.fetch);
    useEffect(() => {
        update();
    }, [])
}