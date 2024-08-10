"use client";

import useCookies, {
  CookieCategory,
} from "@registry/hooks/useCookies/01/default-ts/useCookies";
import { Button } from "@registry/primitives/buttons/02/default-ts/Button";
import {
  Modal,
  ModalTrigger,
} from "@registry/primitives/modals/01/react_aria-ts/Modal";
import { Switch } from "@registry/primitives/switch/01/react_aria-ts/Switch";
import { useState } from "react";
import { Button as ReactAriaButton } from "react-aria-components";

export const CookiePrompt = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      <ModalTrigger
        isOpen={active && !details}
        onOpenChange={(open) => setActive(open)}
      >
        <Modal
          position="center bottom"
          className="max-w-[35rem] md:max-w-[45rem] bg-background border border-outline-secondary"
        >
          <div className="w-full @md:max-w-80">
            <h1 className="text-xl font-medium mb-4">Privacy Policy</h1>
            <p className="mb-8 text-secondary-foreground font-medium">
              {message.cookie}
            </p>
            <div className="flex gap-4">
              <Button
                className="py-1 px-3 rounded-md font-medium bg-foreground text-background"
                variant="complementary"
                onClick={() => {
                  acceptAllCookiePreferences();
                  setActive(false);
                }}
              >
                Accept All
              </Button>
              <ReactAriaButton
                onPress={() => setDetails(true)}
                className="py-1 px-3 rounded-md font-medium border-2 border-foreground text-foreground "
              >
                Cookie Settings
              </ReactAriaButton>
            </div>
          </div>
        </Modal>
      </ModalTrigger>

      <ModalTrigger
        isOpen={active && details}
        onOpenChange={(open) => {
          setActive(open);
          setDetails(false);
        }}
      >
        <Modal
          position="right bottom"
          className="max-w-[25rem] bg-background border border-outline-secondary"
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
                    <h1 className="text-base font-semibold capitalize mb-1">
                      {key}
                    </h1>
                    <p className="text-sm text-secondary-foreground font-medium">
                      {message.details[key as CookieCategory]}
                    </p>
                  </span>
                  <Switch
                    isSelected={cookiePreferences[key as CookieCategory]}
                    onChange={() => toggleCookieCategory(key as CookieCategory)}
                    variant="accent"
                  />
                </div>
              );
            })}
            <div className="flex gap-4">
              <ReactAriaButton
                onPress={() => {
                  acceptAllCookiePreferences();
                  setDetails(false);
                  setActive(false);
                }}
                className="py-1 px-3 rounded-md font-medium bg-foreground text-background "
              >
                Accept All
              </ReactAriaButton>
              <ReactAriaButton
                onPress={() => {
                  rejectAllCookiePreferences();
                  setDetails(false);
                  setActive(false);
                }}
                className="py-1 px-3 rounded-md font-medium border-2 border-foreground text-foreground "
              >
                Reject All
              </ReactAriaButton>
            </div>
          </div>
        </Modal>
      </ModalTrigger>
    </>
  );
};
