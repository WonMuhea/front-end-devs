'use client'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import {INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS} from "@/lib/constants";
import CountrySelectField from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";


const SignUp = () => {

    /**
     * FORM ARCHITECTURE SUMMARY: SIGN-UP MODULE
     * -----------------------------------------
     * This module implements a decoupled, type-safe form using React Hook Form.
     * * 1. THE BRAIN (useForm):
     * - Uses <SignUpFormData> as a TypeScript "Contract" to prevent typos.
     * - mode: 'onBlur' ensures professional validation feedback as the user leaves a field.
     * - defaultValues prevents 'undefined' errors and manages the "Select your country..." placeholder.
     * * 2. THE CONNECTORS:
     * - register(): A "shortcut" (spread operator) for standard HTML inputs like Full Name and Email.
     * - control: The "Central Nervous System" passed to custom UI components (Select, Combobox).
     * - Controller: The "Adapter" that plugs custom components into the form's state via 'render'.
     * * 3. TYPE SAFETY & ACCESSIBILITY:
     * - Path<T>: Ensures the 'name' prop strictly matches the keys in our Form Schema.
     * - htmlFor/id: Explicitly linked for screen readers and browser autofill support.
     * * 4. VALIDATION LOGIC:
     * - Rules are Case Sensitive (e.g., 'email' vs 'Email').
     * - Patterns (Regex) and minLength are passed as objects to provide custom error messages.
     * - handleSubmit acts as the "Gatekeeper," preventing submission if any field is invalid.
     */
        const {
            register, // used in input field component, attaches event listeners the standard html inputs
            handleSubmit,
            control, //  acts as the "glue" that allows the Controller component to read and update the form state for those specific complex fields.
            formState: {errors, isSubmitting}
        } = useForm<SignUpFormData> ({
            defaultValues: {
                fullName: '',
                email:'',
                password: '',
                country: '',
                investmentGoals: 'Growth',
                riskTolerance: 'Medium',
                preferredIndustry: 'Technology'
            },
            mode: 'onBlur' // checks if the form data is valid the momement the user clicks away from the field
        })
        const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
             try {
                 console.log(data)
             }catch (error) {
                 console.log(error)
             }
        }
    return (
        <>
            <h1 className="form-title">Sign Up & Personalize</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Wonde Eshe"
                    register={register}
                    error={errors.fullName}
                    validation={{required: 'Full name is required', minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters'
                        }}}
                />
                <InputField
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="contact@gmail.com"
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
                    placeholder="Enter strong password"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{required: 'Password is required', minLength: {
                            value: 8,
                            message: 'Name must be at least 8 characters'
                        }}}
                />
                <SelectField
                    name="investmentGoals"
                    label="Investment Goals"
                    placeholder="Select your investment goal"
                    options={INVESTMENT_GOALS}
                    control={control}
                    error={errors.investmentGoals}
                    required
                />
                <SelectField
                    name="riskTolerance"
                    label="Risk Tolerance"
                    placeholder="Select your risk level"
                    options={RISK_TOLERANCE_OPTIONS}
                    control={control}
                    error={errors.riskTolerance}
                    required
                />
                <SelectField
                    name="preferredIndustry"
                    label="Preferred Industry"
                    placeholder="Select your risk level"
                    options={PREFERRED_INDUSTRIES}
                    control={control}
                    error={errors.preferredIndustry}
                    required
                />
                <CountrySelectField
                    name="country"
                    label="Country"
                    control={control}
                    error={errors.country}
                    required
                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Creating your account...' : 'Start your public account'}
                </Button>
                <FooterLink text="Already have an account?" linkText="Sign in" href="/sign-in"/>
            </form>

        </>
    )
}
export default SignUp
