"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { IoLogIn, IoLogInOutline, IoShield } from "react-icons/io5";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
        <IoShield />
        <span className="group-hover:text-gray-800">Espere...</span>
      </button>
    );
  }
  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
      >
        <IoLogInOutline />
        <span className="group-hover:text-gray-800">Ingresar</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
    >
      <CiLogout />
      <span className="group-hover:text-gray-800">Logout</span>
    </button>
  );
};
