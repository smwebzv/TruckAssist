export interface ITabButtonsList {
  id: number;
  name?: string;
  status?: string;
  count?: number;
  image?: any;
  description?: string;
  value?: string;
}

export interface ISliderData {
  id?: number;
  title?: string;
  text?: string;
  icon?: JSX.Element;
  lastTime?: string;
  type?: string;
}

export interface ISliderList {
  type: string;
  data: ISliderData[];
}
