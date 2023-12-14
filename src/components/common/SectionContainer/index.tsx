import { IChildren } from "~types/global-types";

import * as S from "./styles";

export function SectionContainer({ children, ...styles }: S.IContainerProps & S.IContentBoxProps & IChildren) {
    return (
        <S.Container {...styles}>
            <S.ContentBox {...styles}>{children}</S.ContentBox>
        </S.Container>
    );
}
