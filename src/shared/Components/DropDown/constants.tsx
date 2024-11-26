import { signout, signoutParams } from "@/shared/utils/signout";
import { ArrowRightEndOnRectangleIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

interface Params {
  signoutParams: signoutParams;
  userSub: string | undefined | null;
  showFeedback: (value: boolean) => void;
}

const UserMenuItens = ({
  signoutParams,
  userSub,
  showFeedback,
}: Params) => [
  {
    icon: <ClipboardDocumentCheckIcon className="h-5 w-5" />,
    onClickFunction: () => {
      navigator.clipboard.writeText(userSub || "");
      showFeedback(true)
    },
    text: `SUB: ${userSub}`,
    buttonTitle: 'Clique para copiar',
  },
  {
    icon: <ArrowRightEndOnRectangleIcon className="h-5 w-5" />,
    onClickFunction: () => signout(signoutParams),
    text: "Sair",
  },
];

const NotificationItens = ({
  notificationNode,
}: { notificationNode: React.ReactNode}) => [
  {
    children: notificationNode,
  },
];

export { UserMenuItens, NotificationItens };
