import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ValidationSchemaProps, validationSchema } from "~utils/formValidation";

export const useContact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ValidationSchemaProps>({
        resolver: zodResolver(validationSchema)
    });
    const onReset = () => reset();

    const onSubmit = ({ email }: ValidationSchemaProps) => {
        alert(`Email sent successfully!\n\n${email}`);
        onReset();
    };

    return {
        register,
        errors,
        onSubmit: handleSubmit(onSubmit)
    };
};
