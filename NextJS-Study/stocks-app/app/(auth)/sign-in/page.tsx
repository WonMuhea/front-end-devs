'use client'
import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import InputField from "@/components/forms/InputField";
import {Button} from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<SignInFormData> ({
        defaultValues: {
            email:'',
            password:'',
        },
        mode: 'onBlur'
    })
    const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
        try {
            console.log(data)
        }catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1 className="form-title">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    register={register}
                    error={errors.email}
                    validation={{required: 'Email is required', pattern: {
                            value: /^\w+@\w+\.\w+$/,
                            message: 'Invalid email format' // This is the message that will show
                        }}}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{required: 'Password is required', minLength: {
                            value: 8,
                            message: 'Name must be at least 8 characters'
                        }}}
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing In...' : 'Log In'}
                </Button>
                <FooterLink text="Do not have an account?" linkText="Sign up" href="/sign-up"/>
            </form>
        </>
    )
}
export default SignIn
