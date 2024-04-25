import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signinSuccess,
  signinFailure,
  signinStart,
} from "../redux/user/userSlice";

export default function Login() {
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      // return setErrorMessage("Please, fill out all fields");
      return dispatch(signinFailure("Please, fill out all fields"));
    }

    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signinStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        // return setErrorMessage(data.message);
        dispatch(signinFailure(data.message));
      }

      // setLoading(false); this is done by signinFailure from redux

      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signinFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center md:justify-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold sm:text-4xl dark:to-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Alim&apos;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse
            repellendus laborum doloremque distinctio quidem quaerat debitis,
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="">
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <div className="flex gap-2 text-sm mt-5">
              <span className="">Don't have an account?</span>
              <Link to="/sign-up" className="text-blue-500">
                Sign Up
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
