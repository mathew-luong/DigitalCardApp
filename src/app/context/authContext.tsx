"use client";

import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getRedirectResult,
    GoogleAuthProvider,
    signInAnonymously,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    User,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

interface defaultContextType {
    handleSignInWithGoogle: Function;
    handleSignOut: Function;
    handleLoginWithEmail: Function;
    handleRedirect: Function;
    handleNewEmailUser: Function;
    handleGuestLogin: Function;
    user: User | null | undefined;
    isLoadingUser: boolean;
}

const defaultContext: defaultContextType = {
    handleSignInWithGoogle: () => {},
    handleSignOut: () => {},
    handleLoginWithEmail: () => {},
    handleRedirect: () => {},
    handleNewEmailUser: () => {},
    handleGuestLogin: () => {},
    user: null,
    isLoadingUser: true,
};

export const AuthContext = createContext(defaultContext);

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [user, isLoadingUser, error] = useAuthState(auth);
    const router = useRouter();

    // useEffect(() => {
    //     console.log("THE AUTH STATE JUST CHANGED");
    //     handleRedirect();
    // }, [user, isLoadingUser]);

    const handleSignInWithGoogle = async () => {
        await signInWithRedirect(auth, new GoogleAuthProvider());
        return;
    };

    const handleLoginWithEmail = async (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign up a new user with email and password
    const handleNewEmailUser = async (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleGuestLogin = async () => {
        return signInAnonymously(auth);
    };

    //Checks for provider login result, then navigates
    const handleRedirect = async () => {
        const result = await getRedirectResult(auth);
        console.log("CHECKING FOR REDIRECT RESULT");
        if (result) {
            router.push("/");
        }
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                console.error("sign out error", error);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                handleSignInWithGoogle,
                handleLoginWithEmail,
                handleSignOut,
                handleRedirect,
                handleNewEmailUser,
                handleGuestLogin,
                user,
                isLoadingUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
