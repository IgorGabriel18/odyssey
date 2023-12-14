import { GameController } from "@phosphor-icons/react";
import { useContext } from "react";

import { SubTitle, Text } from "~components/common";
import { ScreenContext } from "~contexts/ScreenContext";

import * as S from "./styles";

interface IListCardSecondaryProps {
    title: string;
    description: string;
}

export function ListCardSecondary({ title, description }: IListCardSecondaryProps) {
    const { screenWidth, breakpoint } = useContext(ScreenContext);

    return (
        <S.Container>
            <GameController className="container__icon" />
            <SubTitle
                $color="primary"
                $typography="bodyText"
                $align={screenWidth >= breakpoint().md ? "left" : "center"}
            >
                {title}
            </SubTitle>
            <Text
                $color="secondary"
                $typography="legend"
                $align={screenWidth >= breakpoint().md ? "left" : "center"}
            >
                {description}
            </Text>
        </S.Container>
    );
}
