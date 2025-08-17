import { useState } from "react";

export default function useForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    return {
        values,
        handleChange,
        handleSubmit,
        setValues,
    };
}
