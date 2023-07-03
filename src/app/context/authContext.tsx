"use client";

import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    getRedirectResult,
    GoogleAuthProvider,
    signInAnonymously,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
    User,
} from "firebase/auth";
import { auth } from "../../../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { Toaster } from "react-hot-toast";

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

    const googleProvider = new GoogleAuthProvider();

    const handleSignInWithGoogle = () =>
        signInWithRedirect(auth, googleProvider);

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

    //Checks for provider login result, then navigates home
    const handleRedirect = async () => {
        return getRedirectResult(auth);
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
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        borderRadius: "24px",
                        background: "#333",
                        color: "#fff",
                        height: "42px",
                        marginTop: "8px",
                    },
                }}
            />
            {children}
        </AuthContext.Provider>
    );
}
