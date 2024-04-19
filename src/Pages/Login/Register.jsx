import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const from = "/";

  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    createUser(email, password).then(() => {
      updateUserProfile(fullName, image).then(() => {
        navigate(from);
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered form-input mt-1 block w-full border-gray-300 rounded-md"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered form-input mt-1 block w-full border-gray-300 rounded-md"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered form-input mt-1 block w-full border-gray-300 rounded-md"
              {...register("image")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered form-input mt-1 block w-full border-gray-300 rounded-md"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Register
          </button>
          <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
          <div className="mt-6">
            <SocialLogin />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
