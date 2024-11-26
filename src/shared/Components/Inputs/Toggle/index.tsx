import { Switch } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  enabled: boolean, 
  setEnabled: Dispatch<SetStateAction<boolean>>
};

export const ToggleStatus = ({ enabled, setEnabled }: Props) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Switch
      checked={enabled}
      className={classNames(
        enabled ? "border-primary-base" : "border-gray-strong",
        "relative inline-flex h-6 w-10 items-center flex-shrink-0 cursor-pointer rounded-full border-2 bg-white transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:primary-base focus:ring-offset-2"
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled
            ? "translate-x-[18px] bg-primary-base"
            : "translate-x-0.5 bg-gray-strong",
          "pointer-events-none inline-block h-4 w-4 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};
