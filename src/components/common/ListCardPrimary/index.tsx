import { ImgHTMLAttributes } from "react";

import * as S from "./styles";

interface IListCardProps {
    title: string;
}

export function ListCardPrimary({
    title,
    $container,
    $size,
    ...rest
}: IListCardProps & S.IContainerProps & S.IImageProps & ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <S.Container $container={$container}>
            <S.Figure>
                <S.Image
                    $size={$size}
                    {...rest}
                />
                <S.Figcaption>{title}</S.Figcaption>
            </S.Figure>
        </S.Container>
    );
}
