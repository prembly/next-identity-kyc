"use client";
import Image from "next/image";
import useIdentityPayKYC from "../../../src/index";
import styles from "./page.module.css";

export default function Home() {
  const config: any = {
    first_name: "test",
    last_name: "test",
    email: "kayode@myidentitypass.com",
    merchant_key: "",
    user_ref: "a unique ref for your user",
    is_test: false, //set this to through for a test
    config_id: "<configuration ID retrieve from your widget settings", //optional
    callback: (response: any) => console.log(response),
  };

  const verifyWithIdentity = useIdentityPayKYC(config);

  const handleTrigger = () => {
    console.log(verifyWithIdentity(), "<>");
  };
  return (
    <main className={styles.main}>
      <button onClick={handleTrigger}>Click</button>
    </main>
  );
}
