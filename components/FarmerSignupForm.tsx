"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { Input } from "./ui/input";
import CustomAlert from "./CustomAlert";
import { Label } from "./ui/label";

interface IProps {
  onSuccess?: () => void;
}

const FarmerSignupForm: FC<IProps> = ({ onSuccess }) => {
  const router = useRouter();
  const { signUp, isLoading, error, clearError } = useAuthStore();
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    cropType: "",
    language: "en",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear errors on change
    if (validationError) setValidationError("");
    if (error) clearError();
  };

  const validateForm = (): boolean => {
    if (!formData.username.trim()) {
      setValidationError("Username is required");
      return false;
    }
    if (formData.username.length < 3) {
      setValidationError("Username must be at least 3 characters long");
      return false;
    }
    if (!formData.password) {
      setValidationError("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      setValidationError("Password must be at least 6 characters long");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setValidationError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const signupData = {
      username: formData.username.trim(),
      password: formData.password,
      phone_number: formData.phoneNumber.trim() || undefined,
      crop_type: formData.cropType.trim() || undefined,
      language: formData.language || "en",
    };

    console.log(signupData, isLoading);
    const success = await signUp(signupData);

    if (success) {
      setShowSuccess(true);
      // Redirect to sign in page after 3 seconds
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        } else {
          router.push("/signin");
        }
      }, 3000);
    }
  };

  return (
    <div className="w-full">
      {showSuccess ? (
        <CustomAlert
          title="Registration Successful!"
          message="Your farmer account has been created. Redirecting you to sign in..."
          onClose={() => setShowSuccess(false)}
        />
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-medium">
          <div className="space-y-2">
            <Label htmlFor="username">Username *</Label>
            <Input
              placeholder="Choose a username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password *</Label>
            <Input
              type="password"
              placeholder="Create a password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password *</Label>
            <Input
              type="password"
              placeholder="Confirm your password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              placeholder="Enter your phone number"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cropType">Crop Type</Label>
            <Input
              placeholder="e.g., maize, rice, wheat"
              id="cropType"
              value={formData.cropType}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="language" className="text-sm font-medium text-gray-700">
              Preferred Language
            </label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-3 focus:border-blue focus:outline-none"
            >
              <option value="en">English</option>
              <option value="sw">Swahili</option>
              <option value="fr">French</option>
            </select>
          </div>

          {(validationError || error) && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {validationError || error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="my-3 flex w-full items-center justify-center rounded-full bg-blue py-3 text-white transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signin")}
              className="font-semibold text-blue hover:underline"
            >
              Sign In
            </button>
          </p>
        </form>
      )}
    </div>
  );
};

export default FarmerSignupForm;

