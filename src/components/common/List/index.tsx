import { IChildren } from "~types/global-types";

import * as S from "./styles";

export function List({ children }: IChildren) {
    return <S.Container>{children}</S.Container>;
}
