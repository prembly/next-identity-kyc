"use client";
import useIdentityPayKYC from "../../../index";

export default function Home() {
  const config: any = {
    first_name: "test",
    last_name: "test",
    email: "kayode@myidentitypass.com",
    merchant_key: "",
    user_ref: "a unique ref for your user",
    is_test: false, //set this to true for a test
    config_id: "<configuration ID retrieve from your widget settings>", //optional
    callback: (response: any) => console.log(response),
  };

  const verifyWithIdentity = useIdentityPayKYC(config);

  const handleTrigger = () => {
    console.log(verifyWithIdentity());
  };

  return (
    <main>
      <button onClick={handleTrigger}>Click</button>
    </main>
  );
}
