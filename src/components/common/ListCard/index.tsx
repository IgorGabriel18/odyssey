import { IChildren } from "~types/global-types";

import * as S from "./styles";

export function ListCard({ children, ...style }: S.IContainerProps & IChildren) {
    return <S.Container {...style}>{children}</S.Container>;
}
