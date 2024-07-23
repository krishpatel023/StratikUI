"use client";

import { useState, useEffect } from "react";

export type CookieCategory =
  | "essential"
  | "functional"
  | "analytics"
  | "advertising";

export interface CookiePreferences {
  [key: string]: boolean;
}

export interface CookieOptions {
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

const useCookies = () => {
  const defaultValue: CookiePreferences = {
    essential: true,
    functional: true,
    analytics: true,
    advertising: true,
  };
  const [cookiePreferences, setCookiePreferences] =
    useState<CookiePreferences>(defaultValue);

  const handlePrefLoad = () => {
    const storedPreferences = localStorage.getItem("cookiePreferences");
    if (storedPreferences) {
      setCookiePreferences(JSON.parse(storedPreferences));
    }
  };
  const handlePrefUpdate = (pref: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(pref));
  };

  useEffect(() => {
    handlePrefLoad();
  }, []);

  const toggleCookieCategory = (category: CookieCategory) => {
    const newPref = {
      ...cookiePreferences,
      [category]: !cookiePreferences[category],
    };
    setCookiePreferences(newPref);
    handlePrefUpdate(newPref);
  };

  const resetCookiePreferences = () => {
    setCookiePreferences(defaultValue);
    handlePrefUpdate(defaultValue);
  };

  const rejectAllCookiePreferences = () => {
    setCookiePreferences({
      essential: false,
      functional: false,
      analytics: false,
      advertising: false,
    });
    handlePrefUpdate({
      essential: false,
      functional: false,
      analytics: false,
      advertising: false,
    });
  };

  const acceptAllCookiePreferences = () => {
    setCookiePreferences({
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    });
    handlePrefUpdate({
      essential: true,
      functional: true,
      analytics: true,
      advertising: true,
    });
  };

  const setCookie = (
    name: string,
    value: string,
    time: number,
    category: CookieCategory,
    options: CookieOptions = {
      path: "/",
    }
  ) => {
    if (cookiePreferences[category]) {
      const date = new Date();
      const timeCalaculated = date.setTime(date.getTime() + time * 1000);
      const expires = `expires=${date.toUTCString()}`;
      const cookieOptions = Object.entries(options)
        .map(([key, value]) => `${key}=${value}`)
        .join(";");
      document.cookie = `${name}=${value};${expires};path=${options.path};${category};${cookieOptions}`;
    }
  };

  const editCookie = (
    category: CookieCategory,
    name: string,
    value: string,
    days: number,
    options: CookieOptions = {}
  ) => {
    if (cookiePreferences[category]) {
      removeCookie(name, category);
      setCookie(name, value, days, category, options);
    }
  };

  const removeCookie = (name: string, category: CookieCategory) => {
    if (cookiePreferences[category]) {
      const cookiesForCategory = document.cookie.split(";");

      cookiesForCategory.forEach((cookie) => {
        const cookieName = cookie.split("=")[0].trim();
        if (cookieName === name) {
          const expires = `expires=Thu, 01 Jan 1970 00:00:00 UTC`;
          document.cookie = `${cookieName}=; ${expires}; path=/; ${category}`;
        }
      });
    }
  };

  const getCookie = (name: string): string | null => {
    const encodedName = encodeURIComponent(name);
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${encodedName}=`)) {
        return decodeURIComponent(cookie.substring(encodedName.length + 1));
      }
    }
    return null;
  };

  const getAllCookies = (): { [key: string]: string } => {
    const cookies: { [key: string]: string } = {};
    const cookiesArray = document.cookie.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
      const cookie = cookiesArray[i].trim().split("=");
      const name = decodeURIComponent(cookie[0]);
      const value = decodeURIComponent(cookie.slice(1).join("="));
      cookies[name] = value;
    }
    return cookies;
  };

  return {
    cookiePreferences,
    toggleCookieCategory,
    resetCookiePreferences,
    acceptAllCookiePreferences,
    rejectAllCookiePreferences,
    setCookie,
    editCookie,
    removeCookie,
    getCookie,
    getAllCookies,
  };
};

export default useCookies;
