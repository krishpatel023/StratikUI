"use client";

import Button from "@/ui/Button";
import useCookies from "@registry/hooks/useCookies/01/default-ts/useCookies";
import { useEffect, useState } from "react";
import Input from "@/ui/Input";

export default function UseCookiesExample() {
  const {
    setCookie,
    getCookie,
    getAllCookies,
    removeCookie,
    resetCookiePreferences,
  } = useCookies();

  const [cookieValue, setCookieValue] = useState("");

  const [message, setMessage] = useState(
    "Click any of the buttons to get started."
  );
  const [displayData, setDisplayData] = useState(null);

  const resetPreferences = () => {
    resetCookiePreferences();
  };

  const handleSaveCookie = () => {
    if (!cookieValue) return;
    setCookie("demoCookie", cookieValue, 30 * 24 * 60 * 60, "essential");
    setMessage("Cookie Saved under the name of 'demoCookie'");
    setDisplayData(null);
  };
  const handleReadCookie = () => {
    const val = getCookie("demoCookie");
    if (val) {
      setDisplayData({ demoCookie: val });
      setMessage("Cookie Fetched");
    }
  };
  const handleReadAllCookies = () => {
    const val = getAllCookies();
    if (val) {
      setDisplayData(val);
      setMessage("All Cookies Fetched");
    }
  };

  const handleRemoveCookie = () => {
    removeCookie("demoCookie", "essential");
    setDisplayData(null);
    setMessage("Cookie named 'demoCookie' removed");
  };

  useEffect(() => {
    resetPreferences();
  }, []);

  return (
    <div className="min-h-80 w-full flex flex-col justify-center items-center gap-6 text-foreground">
      <div>
        <h1>useCookie</h1>
      </div>
      <div>
        <Input
          label="Cookie Value"
          placeholder="Cookie Value"
          onChange={(e) => setCookieValue(e.target.value)}
        />
      </div>
      <div className="flex gap-4 flex-col @md:flex-row">
        <Button onPress={handleSaveCookie}>Set Cookie</Button>
        <Button onPress={handleReadCookie}>Get Cookie</Button>
        <Button onPress={handleReadAllCookies}>Get All Cookies</Button>
        <Button onPress={handleRemoveCookie}>Remove Cookie</Button>
      </div>

      <div className="flex flex-col text-start">
        {message && <h1>{message}</h1>}
        {displayData && (
          <div className=" h-max mt-10">
            {"{"}
            {Object.keys(displayData).map((key, i) => (
              <div key={i} className="flex gap-2">
                <p className="text-accent-secondary">{key} : </p>
                <p className="max-w-60 overflow-hidden">
                  {displayData[key]} {displayData[key].length > 50 && "..."}
                </p>
              </div>
            ))}
            {"}"}
          </div>
        )}
      </div>
    </div>
  );
}
