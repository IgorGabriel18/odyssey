import { IChildren, IFont } from "~types/global-types";

import * as S from "./styles";

export function SubTitle({ children, ...styles }: IFont & IChildren) {
    return <S.Container {...styles}>{children}</S.Container>;
}
