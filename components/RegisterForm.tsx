"use client";

import google_icon from "@/public/assets/icons/google_icon.png"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";

type Props = {};

const RegisterForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleGoogleSignIn = async (e: any) => {
    e.preventDefault();
    try {
      await signIn("google");
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(subscribe);

    if (!email || !password || !termsAndConditions) {
      setError("Töltsd ki a kötelező mezőket!");
      return;
    } else if (password !== passwordConfirm) {
      setError("A megadott jelszavak nem egyeznek!");
      return;
    }

    try {
      const resUserExisits = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const user = await resUserExisits.json();

      if (user) {
        setError("Ez az email cím már regisztrálva van!");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          subscribe,
          termsAndConditions,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/sign-in");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registartion", error);
    }
  };

  return (
    <div className="max-w-[500px] flex flex-col justify-center bg-secondary-bg my-10 md:my-28  min-h-[592px] p-4">
      <div className="flex items-center h-[50px]">
        <Link
          className="text-center text-secondary-grey font-medium border-b-[2px] border-primary-grey p-2 w-1/2"
          href="/sign-in"
        >
          Belépés
        </Link>
        <Link
          className="text-center text-secondary-blue font-medium border-b-[2px] border-secondary-blue p-2 w-1/2 shadow-md"
          href="/register"
        >
          Regisztráció
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3">
        <h1 className="mt-5 font-medium">Regisztráció</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border border-tertiary-grey rounded text-base h-[40px] w-full pl-2"
          placeholder="Email cím"
          required
          type="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="border border-tertiary-grey rounded text-base h-[40px] w-full pl-2"
          placeholder="Jelszó"
          required
          type="password"
        />
        <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="border border-tertiary-grey rounded text-base h-[40px] w-full pl-2"
          placeholder="Jelszó megerősítése"
          required
          type="password"
        />
        <label className="flex items-center gap-2 my-1">
          <input
            onChange={(e) => setSubscribe(e.target.checked)}
            type="checkbox"
          />
          <span>
            Feliratkozom a Médiafogás hírlevelére, szeretnék személyre szabott
            ajánlatokat és promóciókat kapni! Hozzájárulok, hogy e-maileket
            kapjak az Adatvédelmi Tájékoztatónak megfelelően.
          </span>
        </label>
        <label className="flex items-center gap-2 my-1">
          <input
            onChange={(e) => setTermsAndConditions(e.target.checked)}
            required
            type="checkbox"
          />
          <span>
            A Felhasználói szabályzatot és az Adatvédelmi tájékoztatót
            elolvastam és elfogadom.
          </span>
        </label>
        <button className="h-[40px] w-full bg-primary-orange rounded font-medium text-center text-white mb-8">
          Regisztráció
        </button>
        {error && <div>Hiba: {error}</div>}
        <button
          onClick={handleGoogleSignIn}
          className="h-[40px] w-full bg-white rounded font-medium text-center text-secondary-grey border-tertiary-grey border flex justify-center items-center gap-2"
        >
          <Image
            className="h-[25px] w-[25px]"
            src={google_icon}
            alt="google_icon"
          />
          <p>Folytatás Google fiókkal</p>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
