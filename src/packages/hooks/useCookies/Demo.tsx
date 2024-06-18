"use client";

import { Button } from "@/packages/ui/Button";
import useCookies from "./useCookies";
import { useState } from "react";
import { Input } from "@/packages/ui/Input";

export const Helper = () => {
  const { setCookie, getCookie, getAllCookies, removeCookie } = useCookies();

  const [cookieValue, setCookieValue] = useState("");
  const [cookies, setCookies] = useState({});
  const [action, setAction] = useState<
    "Set" | "Get" | "Get All" | "Remove" | null
  >(null);

  const handleSaveCookie = () => {
    if (!cookieValue) return;
    setCookie("demoCookie", cookieValue, 30 * 24 * 60 * 60, "essential");
    setAction("Set");
    handleReadCookie();
  };
  const handleReadCookie = () => {
    const val = getCookie("demoCookie");
    if (val) {
      setCookies(val);
      setAction("Get");
    }
  };
  const handleReadAllCookies = () => {
    const val = getAllCookies();
    if (val) {
      setCookies(val);
      setAction("Get All");
    }
  };

  const handleRemoveCookie = () => {
    removeCookie("demoCookie", "essential");
    setCookies({});
    setAction("Remove");
    handleReadAllCookies();
  };
  return (
    <div className="min-h-80 w-full flex flex-col justify-center items-center gap-6 text-black dark:text-white">
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
        <Button onClick={handleSaveCookie}>Set Cookie</Button>
        <Button onClick={handleReadCookie}>Get Cookie</Button>
        <Button onClick={handleReadAllCookies}>Get All Cookies</Button>
        <Button onClick={handleRemoveCookie}>Remove Cookie</Button>
      </div>
      <div className="flex flex-col overflow-clip text-center">
        {action && <h1>Action: {action} Successful</h1>}
        {action === null ? (
          <div>
            <p>Click any of the buttons to get started.</p>
          </div>
        ) : action === "Get All" ? (
          <div className="">
            <p className="text-lg  font-semibold text-blue-500 mt-6">
              All Cookies
            </p>
            {Object.keys(cookies).map((key, i) => (
              <p key={i}>{key}</p>
            ))}
          </div>
        ) : action === "Get" ? (
          <div>
            <p>demoCookie : {JSON.stringify(cookies)}</p>
          </div>
        ) : (
          <>
            <p className="text-lg  font-semibold text-blue-500 mt-6">
              Saved Cookie
            </p>
            <p className="">{JSON.stringify(cookies)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export const HelperStringTsx = `export const Helper = () => {
  const { setCookie, getCookie, getAllCookies, removeCookie } = useCookies();

  const [cookieValue, setCookieValue] = useState("");
  const [cookies, setCookies] = useState({});
  const [action, setAction] = useState<
    "Set" | "Get" | "Get All" | "Remove" | null
  >(null);

  const handleSaveCookie = () => {
    if (!cookieValue) return;
    setCookie("demoCookie", cookieValue, 30 * 24 * 60 * 60, "essential");
    setAction("Set");
    handleReadCookie();
  };
  const handleReadCookie = () => {
    const val = getCookie("demoCookie");
    if (val) {
      setCookies(val);
      setAction("Get");
    }
  };
  const handleReadAllCookies = () => {
    const val = getAllCookies();
    if (val) {
      setCookies(val);
      setAction("Get All");
    }
  };

  const handleRemoveCookie = () => {
    removeCookie("demoCookie", "essential");
    setCookies({});
    setAction("Remove");
    handleReadAllCookies();
  };
  return (
    <div className="min-h-80 w-full flex flex-col justify-center items-center gap-6 text-black dark:text-white">
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
        <Button onClick={handleSaveCookie}>Set Cookie</Button>
        <Button onClick={handleReadCookie}>Get Cookie</Button>
        <Button onClick={handleReadAllCookies}>Get All Cookies</Button>
        <Button onClick={handleRemoveCookie}>Remove Cookie</Button>
      </div>
      <div className="flex flex-col overflow-clip text-center">
        {action && <h1>Action: {action} Successful</h1>}
        {action === null ? (
          <div>
            <p>Click any of the buttons to get started.</p>
          </div>
        ) : action === "Get All" ? (
          <div className="">
            <p className="text-lg  font-semibold text-blue-500 mt-6">
              All Cookies
            </p>
            {Object.keys(cookies).map((key, i) => (
              <p key={i}>{key}</p>
            ))}
          </div>
        ) : action === "Get" ? (
          <div>
            <p>demoCookie : {JSON.stringify(cookies)}</p>
          </div>
        ) : (
          <>
            <p className="text-lg  font-semibold text-blue-500 mt-6">
              Saved Cookie
            </p>
            <p className="">{JSON.stringify(cookies)}</p>
          </>
        )}
      </div>
    </div>
  );
};`;

export const HelperStringJsx = `export const Helper = () => {
  const { setCookie, getCookie, getAllCookies, removeCookie } = useCookies();

  const [cookieValue, setCookieValue] = useState("");
  const [cookies, setCookies] = useState({});
  const [action, setAction] = useState(null);

  const handleSaveCookie = () => {
    if (!cookieValue) return;
    setCookie("demoCookie", cookieValue, 30 * 24 * 60 * 60, "essential");
    setAction("Set");
    handleReadCookie();
  };
  const handleReadCookie = () => {
    const val = getCookie("demoCookie");
    if (val) {
      setCookies(val);
      setAction("Get");
    }
  };
  const handleReadAllCookies = () => {
    const val = getAllCookies();
    if (val) {
      setCookies(val);
      setAction("Get All");
    }
  };

  const handleRemoveCookie = () => {
    removeCookie("demoCookie", "essential");
    setCookies({});
    setAction("Remove");
    handleReadAllCookies();
  };
  return (
    <div className="min-h-80 w-full flex flex-col justify-center items-center gap-6 text-black dark:text-white">
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
        <Button onClick={handleSaveCookie}>Set Cookie</Button>
        <Button onClick={handleReadCookie}>Get Cookie</Button>
        <Button onClick={handleReadAllCookies}>Get All Cookies</Button>
        <Button onClick={handleRemoveCookie}>Remove Cookie</Button>
      </div>
      <div className="flex flex-col overflow-clip text-center">
        {action && <h1>Action: {action} Successful</h1>}
        {action === null ? (
          <div>
            <p>Click any of the buttons to get started.</p>
          </div>
        ) : action === "Get All" ? (
          <div className="">
            <p className="text-lg  font-semibold text-blue-500 mt-6">
              All Cookies
            </p>
            {Object.keys(cookies).map((key, i) => (
              <p key={i}>{key}</p>
            ))}
          </div>
        ) : action === "Get" ? (
          <div>
            <p>demoCookie : {JSON.stringify(cookies)}</p>
          </div>
        ) : (
          <>
            <p className="text-lg  font-semibold text-blue-500 mt-6">
              Saved Cookie
            </p>
            <p className="">{JSON.stringify(cookies)}</p>
          </>
        )}
      </div>
    </div>
  );
};`;
