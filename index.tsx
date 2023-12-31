/* eslint-disable prettier/prettier */
"use client";
import { useEffect } from "react";

import { useIdentityScriptLoader } from "./src/components/loadScript";

declare global {
  interface Window {
    IdentityKYC: any;
  }
}

if (typeof window !== "undefined") {
  window.IdentityKYC = window.IdentityKYC || {};
}

interface Props {
  first_name: string;
  last_name: string;
  email: string;
  merchant_key: string;
  user_ref: string;
  is_test: boolean;
  config_id: string;
  callback: () => void;
}

const useIdentityPayKYC = (props: Props) => {
  const [scriptLoaded, scriptError] = useIdentityScriptLoader();

  const options = {
    first_name: props.first_name,
    last_name: props.last_name,
    email: props.email,
    merchant_key: props.merchant_key,
    user_ref: props.user_ref,
    config_id: props.config_id,
    is_test: props.is_test,
    callback: props.callback,
  };

  const verifyWithIdentity = () => {
    if (scriptLoaded && typeof window !== "undefined") {
      window.IdentityKYC.verify(options);
    }
  };

  useEffect(() => {
    if (scriptError) {
      throw new Error("Could not load identitypay KYC script");
    }
  }, [scriptError]);

  return verifyWithIdentity;
};

export default useIdentityPayKYC;
