import { Icons } from "@/assets"
import { useState } from "react"
import Button from "../ui/Button "
import { Link } from "react-router"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "@/schemas/authschema"
import type { SignupSchemaType } from "@/schemas/authschema"

const Signupform = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupSchemaType>({
        resolver: zodResolver(signupSchema)
    })

    const onSubmit = (data: SignupSchemaType) => {
        console.log(data)
    }

    const [isPassVisible, setIsPassVisible] = useState(false)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="relative">
                <Icons.Profile className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input
                    {...register("fullname")}
                    type="text"
                    placeholder="Full Name"
                    className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2"
                />
                {errors.fullname && <span className="text-red-500 text-xs absolute -bottom-4 left-0">{errors.fullname.message}</span>}
            </div>
            <div className="relative">
                <Icons.Email className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2"
                />
                {errors.email && <span className="text-red-500 text-xs -bottom-4 absolute left-0">{errors.email.message}</span>}
            </div>
            <div className="relative">
                <Icons.Padlock className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input
                    {...register("password")}
                    type={isPassVisible ? "text" : "password"}
                    placeholder="Password"
                    className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2"
                />
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                    {isPassVisible ? (
                        <Icons.EyeSlashed
                            width={15}
                            height={15}
                            onClick={() => setIsPassVisible(!isPassVisible)}
                            style={{ cursor: "pointer" }}
                        />
                    ) : (
                        <Icons.Eye
                            width={15}
                            height={15}
                            onClick={() => setIsPassVisible(!isPassVisible)}
                            style={{ cursor: "pointer" }}
                        />
                    )}
                </div>
                {errors.password && <span className="text-red-500 text-xs absolute -bottom-4 left-0">{errors.password.message}</span>}

            </div>
            <div className="relative">

                <div className="flex gap-2 items-center mt-2">
                    <input
                        {...register("agree")}
                        type="checkbox"
                        id="agree"
                    />
                    <label htmlFor="agree" className="text-xs text-dark-green/80">
                        I agree to the <a className="underline" href="">Terms & Privacy</a>
                    </label>
                </div>
                {errors.agree && (
                    <span className="text-red-500 text-xs -bottom-4 absolute left-0">{errors.agree.message}</span>
                )}
            </div>

            <Button style='w-full'>
                Submit
            </Button>
        </form>
    )
}

export default Signupform