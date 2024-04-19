import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin, facebookLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">Continue with</div>
      <div className="flex justify-between flex-wrap gap-2">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm btn-outline"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Github
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-accent btn-sm btn-outline"
        >
          Twitter
        </button>
        <button
          onClick={() => handleSocialLogin(facebookLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
