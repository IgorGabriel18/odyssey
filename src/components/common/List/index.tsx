import { IChildren } from "~types/global-types";

import * as S from "./styles";

export function List({ children, ...styles }: S.IContainerProps & IChildren) {
    return <S.Container {...styles}>{children}</S.Container>;
}
