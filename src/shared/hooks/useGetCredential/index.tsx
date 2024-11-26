import { useState } from "react";
import axios from "axios";
import { useDefaultContext } from "@/shared";

export const useGetCredential = () => {
  const [loadingGetCredential, setLoadingGetCredential] = useState(false)
  const { client, setCredential } = useDefaultContext()

  const fetchGetCredential = async (clientID: string) => {
    try {
      if(client.licensed) {
        setLoadingGetCredential(true)
        await axios
        .get(`/bff/auth/management/applications/${clientID}`)
        .then((resp) => {
          if(resp.data) {
            setCredential({
              clientID: resp.data.client_id,
              clientSecret: resp.data.client_secret,
              status: true,
              scores: ['Score de Estabilidade Empregatícia'],
              description: resp.data.description,
              name: resp.data.name,
            })
          }
        }).catch((error) => {
          console.log(error)
        });
      }
    } finally {
      setLoadingGetCredential(false);
    }
  };

  return {
    fetchGetCredential,
    loadingGetCredential,
  };
};
