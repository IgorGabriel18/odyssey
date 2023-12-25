import { ArrowRight } from "@phosphor-icons/react";
import { AnchorHTMLAttributes } from "react";

import { IChildren, IFont } from "~types/global-types";

import * as S from "./styles";

export function LinkRef({
    children,
    ...stylesAndAttributes
}: IFont & AnchorHTMLAttributes<HTMLAnchorElement> & IChildren) {
    return (
        <S.Container {...stylesAndAttributes}>
            {children}
            <ArrowRight className="container__icon" />
        </S.Container>
    );
}
