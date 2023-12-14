import { AnchorHTMLAttributes } from "react";

import { IChildren, IFont } from "~types/global-types";

import * as S from "./styles";

export function Link({ children, ...styles }: IFont & AnchorHTMLAttributes<HTMLAnchorElement> & IChildren) {
    return <S.Container {...styles}>{children}</S.Container>;
}
