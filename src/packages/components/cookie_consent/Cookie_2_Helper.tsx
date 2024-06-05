"use client";

import useCookies, { CookieCategory } from "@/packages/hooks/code/useCookies";
import { Modal } from "@/packages/primitives/modal/Modal_1_Helper";
import Switch from "@/packages/primitives/switch/Switch_2_Helper";
import { useState } from "react";

export const CookiePrompt = () => {
  const [active, setActive] = useState(true);
  const [details, setDetails] = useState(false);

  const message = {
    cookie:
      "Cookies are used to store information about your preferences and usage of the site. We use cookies to ensure that you get the best experience on our site.",
    details: {
      essential:
        "Essential cookies are necessary for the website to function properly and provide basic features.",
      functional:
        "Functional cookies enhance the website's functionality by remembering your preferences, such as language settings, display options, or recently viewed items.",
      analytics:
        "Analytics cookies collect data about your usage of the website, such as pages visited, time spent on the website, and interactions with site elements.",
      advertising:
        "These cookies often involve sharing your data with third-party advertisers and ad networks.",
    },
  };

  const {
    cookiePreferences,
    toggleCookieCategory,
    rejectAllCookiePreferences,
    acceptAllCookiePreferences,
  } = useCookies();

  return (
    <>
      <Modal
        active={active && !details}
        setActive={() => {
          setActive(true);
        }}
        position="bottom-center"
        blurBg={false}
        className="bottom-0 @md:bottom-6"
      >
        <div className="max-w-[45rem]">
          <h1 className="text-xl font-medium mb-4">Privacy Policy</h1>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            {message.cookie}
          </p>
          <div className="flex gap-4">
            <button
              className="py-1 px-3 rounded-md font-medium bg-black text-white dark:bg-white dark:text-black "
              onClick={() => acceptAllCookiePreferences()}
            >
              Accept All
            </button>
            <button
              onClick={() => setDetails(true)}
              className="py-1 px-3 rounded-md font-medium border-2 border-black dark:border-white dark:text-white "
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        active={active && details}
        setActive={() => {
          setActive(true);
        }}
        position="bottom-right"
        blurBg={false}
        // Make it true if you want to disable scroll
        disableScroll={false}
        className="bottom-0 right-0 @md:bottom-6 @md:right-6"
      >
        <div className="max-w-[23rem]">
          <h1 className="text-xl font-medium mb-4">Privacy Policy</h1>
          {Object.keys(cookiePreferences).map((key) => {
            return (
              <div
                className="flex gap-2 justify-center items-center mb-4"
                key={key}
              >
                <span className="w-[90%]">
                  <h1 className="text-base font-medium capitalize mb-1">
                    {key}
                  </h1>
                  <p className="text-sm text-neutral-900 dark:text-neutral-200">
                    {message.details[key as CookieCategory]}
                  </p>
                </span>
                <Switch
                  value={cookiePreferences[key as CookieCategory]}
                  toggleValue={() =>
                    toggleCookieCategory(key as CookieCategory)
                  }
                />
              </div>
            );
          })}
          <div className="flex gap-4">
            <button
              onClick={() => acceptAllCookiePreferences()}
              className="py-1 px-3 rounded-md font-medium bg-black text-white dark:bg-white dark:text-black "
            >
              Accept All
            </button>
            <button
              onClick={() => rejectAllCookiePreferences()}
              className="py-1 px-3 rounded-md font-medium border-2 border-black dark:border-white dark:text-white "
            >
              Reject All
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
