import useSWRMutation from 'swr/mutation';
import Api, { UserTypes } from '@/api/user';

async function sendLogin(url: string, { arg }: { arg: UserTypes }) {
  return Api.login(arg);
}
export default function useUser(payload: UserTypes) {
  const { data, isMutating, trigger } = useSWRMutation('api/login', sendLogin);
  return {
    trigger,
    response:data
  }

