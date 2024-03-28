"use client"

import {Provider} from "react-redux";
import {store} from "@/store/index";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({children}: Props) => {
    return (
        <Provider store={store}>

        </Provider>
    )
}