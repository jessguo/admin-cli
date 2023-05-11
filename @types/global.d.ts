/// <reference types="vite/client" />

declare module 'less-vars-to-js';

type Props = {
  children?: React.ReactNode;
};

interface ResProps {
  status: number;
  data: any;
  timestamp: number | string;
  message: string | null;
  isSuccess?: boolean;
}
