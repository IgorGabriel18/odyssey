import { HTMLProps } from "react";

import { IChildren } from "~types/global-types";

import * as S from "./styles";

export function SectionContainer({
    $isTopOfPage,
    $container,
    $contentBox,
    children,
    ...restHTMLProps
}: S.IContainerProps & S.IContentBoxProps & IChildren & HTMLProps<HTMLDivElement>) {
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
