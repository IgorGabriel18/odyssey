import { ImgHTMLAttributes } from "react";

import { Image, SubTitle, Text } from "~components/common";
import { optionsIconType } from "~types/global-types";

import * as S from "./styles";

interface IListCardProps {
    title: string;
    description?: string;
    $sizeImg?: optionsIconType;
}

export function ListCard({
    title,
    description,
    $sizeImg,
    ...imgHTMLAttributes
}: IListCardProps & ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <S.Container>
            <Image
                $size={$sizeImg}
                {...imgHTMLAttributes}
            />
            <SubTitle
                $color="primary"
                $typography="bodyText"
                $align="center"
            >
                {title}
            </SubTitle>
            {description && (
                <Text
                    $color="secondary"
                    $typography="legend"
                    $align="center"
                >
                    {description}
                </Text>
            )}
        </S.Container>
    );
}
