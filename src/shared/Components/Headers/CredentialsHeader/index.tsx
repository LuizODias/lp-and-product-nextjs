import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { NotificationItens, UserMenuItens } from "../../DropDown/constants";
import Skeleton from "react-loading-skeleton";
import {
  DefaultDropDown,
  FeedbackSuccess,
  NotificationDropDown,
  Typography,
  useDefaultContext,
  useToggle,
  useVerifyUser,
} from "@/shared";
import {
  ArrowRightEndOnRectangleIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export const CredentialHeader = () => {
  const router = useRouter();
  const { state: dropDownUserState, toggle: toggleDropDownUserState } =
    useToggle();
  const {
    state: dropDownNotificationState,
    toggle: toggleDropDownNotificationState,
  } = useToggle();
  const { user, isLoading } = useUser();
  const { client } = useDefaultContext();
  const [showFeedback, setShowFeedback] = useState(false);
  const { loading: loadingUser } = useVerifyUser();

  return (
    <header className="flex sticky top-0 z-50 bg-white">
      <div className="w-full z-20 relative flex flex-row justify-end items-center gap-3 px-7 py-3 shadow-header transition-colors duration-500">
        <div className="flex flex-row gap-4 items-center">
          <div className="relative flex justify-center items-center w-full gap-1">
            <div
              className="flex flex-row text-gray-mid cursor-pointer"
              onClick={toggleDropDownNotificationState}
            >
              <BellIcon width={20} height={20} />

              {client.licensed && (
                <div className="h-1.5 w-1.5 rounded-full bg-status-errorModal absolute top-[9px] left-3 border border-white" />
              )}

              {dropDownNotificationState && client.licensed && (
                <NotificationDropDown
                  onClose={toggleDropDownNotificationState}
                  items={NotificationItens({
                    notificationNode: (
                      <p className="text-sm font-normal leading-5 text-black">
                        Agora você já pode criar credenciais de produção para
                        integrar a API ao seu sistema.
                      </p>
                    ),
                  })}
                />
              )}
            </div>
            <div
              onClick={toggleDropDownUserState}
              className="flex flex-row gap-1 text-gray-mid py-2 cursor-pointer items-center"
            >
              <FeedbackSuccess
                open={showFeedback}
                text={"SUB copiado!"}
                autoClose
                fixed
              />
              {!loadingUser ? (
                <div
                  className="text-gray-mid flex flex-row items-center gap-1 cursor-pointer"
                  onClick={() => router.push("/bff/auth/logout")}
                >
                  <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
                  <Typography as={"p"} text={"Sair"} weight="medium" size="small" textColor="mediumGray"/>
                </div>
              ) : (
                <div className="flex flex-row w-[100px] justify-end gap-4 h-5">
                  <div className="rounded-full w-6">
                    <Skeleton />
                  </div>
                  <div className="rounded w-10">
                    <Skeleton />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
