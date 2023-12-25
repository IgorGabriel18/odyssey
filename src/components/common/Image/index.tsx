import { ImgHTMLAttributes } from "react";

import * as S from "./styles";

export function Image({ $size, ...restImgAttributes }: S.IContainerProps & ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <S.Container
            {...{ $size }}
            {...restImgAttributes}
        />
    );
}
