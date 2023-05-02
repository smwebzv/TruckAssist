
export interface IListProps {
    data: IFilterDataProps [],
    type: string,
}

export interface IFilterDataProps {
    id?: number,
    list?: IListProps,
    icon?: string;
    iconActive?: string;
    name?: string;
    checked?: boolean;
    state?: string;
    capital?: string;
    type?: string;
    value?: string;
    valueDesc?: string;
    typeDesc?: string;
}

export interface IFilterModalProps {
    filterData: IFilterDataProps [],
    selectedServices: any,
    selectedLocation: string,
    numberOfSelectedFilters: number,
    isButtonForCloseActive: boolean
}