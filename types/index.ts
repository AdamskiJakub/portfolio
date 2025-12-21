import { ReactNode } from "react";

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface AboutInfoItem {
  title: string;
  id?: number;
  stage?: string;
  icons?: ReactNode[];
  about?: {
    title: string;
    id: number;
  }[];
}

export interface AboutDataItem {
  title: string;
  info: AboutInfoItem[];
}

export type AboutData = AboutDataItem[];
