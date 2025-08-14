import { Icons } from "@/assets";
import { useState, useEffect } from "react";
import Button from "../ui/Button ";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fullSignupSchema, signupSchema } from "@/schemas/authschema";
import type { FullSignupSchemaType, SignupSchemaType } from "@/schemas/authschema";

import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/state/reduxSlices/AuthSlice";
import type { AppDispatch, RootState } from "@/state/store";
import { useNavigate } from "react-router";

const Signupform = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { isLoading, isError, errorMessage, isLoggedIn } = useSelector(
        (state: RootState) => state.auth
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FullSignupSchemaType>({
        resolver: zodResolver(fullSignupSchema),
    });

    const [isPassVisible, setIsPassVisible] = useState(false);

    const onSubmit = (data: FullSignupSchemaType) => {
        const transformedData: SignupSchemaType = signupSchema.parse(data);
        dispatch(signupUser(transformedData));
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/dashboard");
        }
    }, [isLoggedIn, navigate]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            {/* Full Name */}
            <div className="relative">
                <Icons.Profile className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Full Name"
                    className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2"
                />
                {errors.name && (
                    <span className="text-red-500 text-xs absolute -bottom-4 left-0">
                        {errors.name.message}
                    </span>
                )}
            </div>

            {/* Email */}
            <div className="relative">
                <Icons.Email className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2"
                />
                {errors.email && (
                    <span className="text-red-500 text-xs absolute -bottom-4 left-0">
                        {errors.email.message}
                    </span>
                )}
            </div>

            {/* Password */}
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
                {errors.password && (
                    <span className="text-red-500 text-xs absolute -bottom-4 left-0">
                        {errors.password.message}
                    </span>
                )}
            </div>

            {/* Terms Agreement */}
            <div className="relative">
                <div className="flex gap-2 items-center mt-2">
                    <input {...register("agree")} type="checkbox" id="agree" />
                    <label htmlFor="agree" className="text-xs text-dark-green/80">
                        I agree to the <a className="underline" href="">Terms & Privacy</a>
                    </label>
                </div>
                {errors.agree && (
                    <span className="text-red-500 text-xs -bottom-4 absolute left-0">
                        {errors.agree.message}
                    </span>
                )}
            </div>

            {/* Submit Button */}
            <Button style="w-full" disabled={isLoading} type="submit">
                {isLoading ? "Creating account..." : "Submit"}
            </Button>

            {/* Error Message */}
            {isError && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
        </form>
    );
};

export default Signupform;
