"use client";

import useCookies from "@registry/packages/hooks/useCookies/01/default-js/useCookies";
import { Button } from "@registry/packages/primitives/buttons/02/default-js/Button";
import { Modal } from "@registry/packages/primitives/modals/01/default-js/Modal";
import { Switch } from "@registry/packages/primitives/switch/01/default-js/Switch";
import { useState } from "react";

export const CookiePrompt = ({ active, setActive }) => {
  const [details, setDetails] = useState(false);

  const message = {
    cookie:
      "Cookies are used to store information about your preferences and usage of the site. We use cookies to ensure that you get the best experience on our site.",
    details: {
      essential: "Essential cookies are necessary for the website to function properly and provide basic features.",
      functional:
        "Functional cookies enhance the website's functionality by remembering your preferences, such as language settings, display options, or recently viewed items.",
      analytics:
        "Analytics cookies collect data about your usage of the website, such as pages visited, time spent on the website, and interactions with site elements.",
      advertising: "These cookies often involve sharing your data with third-party advertisers and ad networks.",
    },
  };

  const { cookiePreferences, toggleCookieCategory, rejectAllCookiePreferences, acceptAllCookiePreferences } =
    useCookies();

  return (
    <>
      <Modal
        position="center bottom"
        className="max-w-[35rem] w-[90%] @md:max-w-[40rem] bg-background border border-outline-secondary"
        isOpen={active && !details}
        setOpen={setActive}
      >
        <div className="w-full flex flex-col @md:flex-row">
          <div className="w-full @md:w-3/4">
            <h1 className="text-xl font-medium mb-4">Privacy Policy</h1>
            <p className="mb-8 text-secondary-foreground font-medium">{message.cookie}</p>
          </div>
          <div className="flex gap-4 justify-start @md:justify-center items-center">
            <Button
              className="py-1 px-3 h-12 rounded-md font-medium bg-foreground text-background"
              variant="complementary"
              onClick={() => {
                acceptAllCookiePreferences();
                setActive(false);
              }}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              onClick={() => setDetails(true)}
              className="py-1 px-3 h-12 rounded-md font-medium border-2 border-foreground text-foreground "
            >
              Settings
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        position="right bottom"
        className="max-w-[25rem] bg-background border border-outline-secondary bottom-0 right-0 @sm:bottom-4 @sm:right-4"
        isOpen={active && details}
        setOpen={() => {
          setActive(false);
          setDetails(false);
        }}
      >
        <div className="max-w-[23rem]">
          <h1 className="text-xl font-medium mb-4">Privacy Policy</h1>
          {Object.keys(cookiePreferences).map((key) => {
            return (
              <div className="flex gap-2 justify-center items-center mb-4" key={key}>
                <span className="w-[90%]">
                  <h1 className="text-base font-semibold capitalize mb-1">{key}</h1>
                  <p className="text-sm text-secondary-foreground font-medium">{message.details[key]}</p>
                </span>
                <Switch
                  isSelected={cookiePreferences[key]}
                  onChange={() => toggleCookieCategory(key)}
                  variant="accent"
                />
              </div>
            );
          })}
          <div className="flex gap-4">
            <Button
              className="py-1 px-3 rounded-md font-medium bg-foreground text-background"
              variant="complementary"
              onClick={() => {
                acceptAllCookiePreferences();
                setDetails(false);
                setActive(false);
              }}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                rejectAllCookiePreferences();
                setDetails(false);
                setActive(false);
              }}
              className="py-1 px-3 rounded-md font-medium border-2 border-foreground text-foreground "
            >
              Cookie Settings
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
