import { Icons } from "@/assets"
import { useState } from "react";
import Button from "../ui/Button ";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginSchemaType } from "@/schemas/authschema";
import { loginSchema } from "@/schemas/authschema";

const Loginform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema)
    });


    const onSubmit = (data: LoginSchemaType) => {
        console.log(data);
    }

    const [isPassVisible, setIsPassVisible] = useState(false);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="relative " >
                <Icons.Email className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input {...register("email")} className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2" type="email" placeholder="Email" />
            </div>
            <div>

                <div className="relative " >
                    <Icons.Padlock className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                    <input {...register("password")} type={isPassVisible ? "text" : "password"} placeholder="Password" className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2" />

                    <div className="absolute top-1/2 -translate-y-1/2 right-4">
                        {isPassVisible ? (
                            <Icons.EyeSlashed
                                width={15}
                                height={15}
                                onClick={() => setIsPassVisible(!isPassVisible)}
                            />
                        ) : (
                            <Icons.Eye
                                width={15}
                                height={15}
                                onClick={() => setIsPassVisible(!isPassVisible)}
                            />
                        )}
                    </div>
                </div>

                <div className="grid place-content-end">
                    <Link to={"/forgot_password"} className="text-sm  text-green-600 mt-2">Forgot Password? </Link>
                </div>

            </div>


            <Button style='w-full'>
                Submit
            </Button>

        </form>
    )
}

export default Loginform