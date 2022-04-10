import React from 'react';
import GoogleLogin from 'react-google-login';
import { AiOutlineGoogle } from 'react-icons/ai';
const GoogleLoginButton = ({ handleSuccess, handleFailure }) => {
  return (
    <GoogleLogin
      clientId="786533845097-ptfkqg3fqcdgdurjmnjtcjpa1olh5c8b.apps.googleusercontent.com"
      buttonText="Sign in with google"
      render={(renderProps) => (
        <button
          className="cursor-pointer bg-blue-500 text-white font-bold font-main px-3 gap-4 py-2 rounded-md flex justify-between items-center hover:bg-blue-400 focus:bg-blue-400 transition-all duration-200 ease-in-outactive:bg-blue-500 active:scale-95"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <AiOutlineGoogle className="text-2xl" />
          Sign in with Google
        </button>
      )}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
