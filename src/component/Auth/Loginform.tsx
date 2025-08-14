import { Icons } from "@/assets";
import { useState } from "react";
import Button from "../ui/Button ";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginSchemaType } from "@/schemas/authschema";
import { loginSchema } from "@/schemas/authschema";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/state/store";
import { loginUser } from "@/state/reduxSlices/AuthSlice";

const Loginform = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { isLoading, isError, errorMessage } = useSelector((state: RootState) => state.auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginSchemaType) => {
        const result = await dispatch(loginUser(data));

        if (loginUser.fulfilled.match(result)) {
            navigate("/dashboard");
        } else {
            console.error("Login failed", result.payload || result.error);
        }
    };



    const [isPassVisible, setIsPassVisible] = useState(false);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="relative">
                <Icons.Email className="absolute top-1/2 -translate-y-1/2 left-4" width={15} height={15} />
                <input
                    {...register("email")}
                    className="placeholder:text-sm border w-full outline-0 border-dark-green/30 rounded-3xl pl-10 pr-4 py-2"
                    type="email"
                    placeholder="Email"
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            <div>
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
                {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
                <div className="grid place-content-end">
                    <Link to={"/forgot_password"} className="text-sm text-green-600 mt-2">
                        Forgot Password?
                    </Link>
                </div>
            </div>

            <Button style="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Submit"}
            </Button>

            {isError && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </form>
    );
};

export default Loginform;
