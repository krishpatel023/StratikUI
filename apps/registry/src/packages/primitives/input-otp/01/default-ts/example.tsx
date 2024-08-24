"use client";
import ArrowHeading from "@registry/ui/ArrowHeading";
import Message from "@registry/ui/Message";
import { useState } from "react";
import { OTPInput } from "@registry/packages/primitives/input-otp/01/default-ts/InputOTP";

export default function OTPImplementation() {
  const [otp1, setOtp1] = useState<string | null>("");
  const [otp2, setOtp2] = useState<string | null>("");

  return (
    <div className="w-full min-h-80 flex flex-col justify-center items-center text-center gap-4">
      <Message className="static mb-10">Paste this to check the paste functionality as well : 874352</Message>

      <ArrowHeading text="OTP Input without partition" />
      <OTPInput length={6} setOTP={setOtp1} />
      <p className="text-foreground">OTP : {otp1 ? otp1 : "null"}</p>
      <ArrowHeading text="OTP Input with partition" />
      <OTPInput length={6} setOTP={setOtp2} partition={[3, 3]} />
      <p className="text-foreground">OTP : {otp2 ? otp2 : "null"}</p>
    </div>
  );
}
