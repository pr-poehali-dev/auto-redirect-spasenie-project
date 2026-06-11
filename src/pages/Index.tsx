import { useEffect } from "react";

const REDIRECT_URL = "https://xn--e1afmapc.xn--80ae7abknf0a.xn--p1ai/";

const Index = () => {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
};

export default Index;
