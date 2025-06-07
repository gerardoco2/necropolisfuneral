"Use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { SubmitHandler, useForm } from "react-hook-form";
import Login from "@/components/Login";

const SignIn: React.FC = () => {
  return <Login />;
};

export default SignIn;
