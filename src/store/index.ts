import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import Api, { UserTypes } from '@/api/user';
import useSWRMutation from 'swr/mutation';
import useUser from '@/api/user/login';

async function sendLogin(url: string, { arg }: { arg: UserTypes }) {
  return Api.login(arg);
}

type State = {
  token: string;
  userInfo: any;
};

type Actions = {
  login: (pamram: UserTypes) => Promise<ResProps>;
  logout: () => void;
};

const initialState: State = {
  token: '',
  userInfo: {},
};
const useUser = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,
      login: async (payload) => {
        const response = await Api.login(payload);
        if (response.isSuccess) {
          set({
            token: response.data.token,
            userInfo: response.data,
          });
        }

        return response;
      },
      logout: () => {
        useUser.persist.clearStorage();
      },
    }),
    {
      name: 'mangopower-storge',
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export default useUser;
