import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";

let firstTime = true;

const googleUrl =
  "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=https%3A%2F%2Fdev.alphaguilty.com%2Fgoogle%2Fcallback&client_id=1094735924494-7q5rhfg5bmm72850dt8k9cuj23aemj7q.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&service=lso&o2v=2&theme=mn&ddm=0&flowName=GeneralOAuthFlow";

const GoogleLogin = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  const [searchParams] = useSearchParams();

  const onAuthDone = useCallback((authData) => {
    //   if (authData.error || authData.code) {
    //     handleData(authData);
    //   }

    setIsLoaded(true);
  }, []);

  const getAuthData = useCallback(
    (code) => {
      if (code) {
        onAuthDone({ code });

        return;
      }

      onAuthDone({ error: "Not_authorized" });
    },
    [onAuthDone]
  );

  useEffect(() => {
    const query = {
      flow: searchParams.get("flow"),
      code: searchParams.get("code"),
    };

    if (
      query.flow === "connect_google" &&
      query.code &&
      isLoaded &&
      firstTime
    ) {
      setIsLoaded(false);
      firstTime = false;

      getAuthData(query.code);
    }
  }, [getAuthData, isLoaded, searchParams]);

  const connectGoogle = useCallback(async () => {
    // if (clickInitFn) {
    //   clickInitFn("google");
    // }

    setIsLoaded(false);

    // localStorage.setItem("g_path", asPath.split("?")[0]);

    try {
      //   const { data: googleData } = await entryService.getSocialEntry("google");

      setTimeout(() => {
        window.open(googleUrl, "_self");
      });
    } catch (error) {
      console.error("Error during connect google", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      <button
        // style="task"
        // size="task"
        type="button"
        // className={className}
        // loading={!isLoaded || !isSocialLoaded}
        // disabled={!isLoaded || !isSocialLoaded}
        onClick={connectGoogle}
      >
        <>
          <div component="span" ml={1}>
            Google login
          </div>
        </>
      </button>
    </>
  );
};

export default GoogleLogin;
