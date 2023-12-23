import { HTMLProps } from "react";

import { IChildren } from "~types/global-types";

import * as S from "./styles";

export function SectionContainer({
    children,
    $isTopOfPage,
    $container,
    $contentBox,
    ...restHTMLProps
}: IChildren & S.IContainerProps & S.IContentBoxProps & HTMLProps<HTMLDivElement>) {
    return (
        <S.Container
            $isTopOfPage={$isTopOfPage}
            $container={$container}
            {...restHTMLProps}
        >
            <S.ContentBox $contentBox={$contentBox}>{children}</S.ContentBox>
        </S.Container>
    );
}
