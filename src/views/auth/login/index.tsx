import Link from "next/link";
import style from "../../auth/login/login.module.scss";
import { useState, FormEvent } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const callbackUrl =
        typeof router.query.callbackUrl === "string"
            ? router.query.callbackUrl
            : "/";

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
                callbackUrl,
            });

            if (!res?.error) {
                router.push(callbackUrl);
            } else {
                setError(res.error || "Login failed");
            }
        } catch (error) {
            setError("Wrong email or password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className={style.login}>
                {error && <p className={style.login__error}>{error}</p>}
                <h1 className={style.login__title}>Halaman login</h1>

                <div className={style.login__form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.login__form__item}>
                            <label
                                htmlFor="email"
                                className={style.login__form__item__label}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className={style.login__form__item__input}
                                required
                            />
                        </div>

                        <div className={style.login__form__item}>
                            <label
                                htmlFor="password"
                                className={style.login__form__item__label}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className={style.login__form__item__input}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={style.login__form__item__button}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Login"}
                        </button>{" "}
                        <br /><br />
                        <button
                            onClick={() => signIn("google", { callbackUrl, redirect: false })}
                            className={style.login__form__item__button}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "sign in with google"}
                        </button>
                    </form>

                    <p className={style.login__form__item__text}>
                        Belum punya akun?{" "}
                        <Link href="/auth/register">Ke Halaman Register</Link>
                    </p>
                </div>
            </div>
        </>

    );
};

export default TampilanLogin;