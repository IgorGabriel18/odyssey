import { ImgHTMLAttributes } from "react";

import * as S from "./styles";

export function Image({ $size, ...ImgAttributes }: S.IContainerProps & ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <S.Container
            $size={$size}
            {...ImgAttributes}
        />
    );
}
