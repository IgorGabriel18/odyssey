import { GitBranch, GitMerge } from "@phosphor-icons/react";

import logoImage from "~assets/icons/logo.svg";
import { Image, Navigation, SubTitle, Text } from "~components/common";

import * as S from "./styles";
export function Footer() {
    return (
        <S.Container>
            <Image
                $size="primary"
                src={logoImage}
                alt="Logo icon"
            />
            <Navigation
                $breakpoint="sm"
                $color="primary"
                $typography="legend"
                $align="left"
            />
            <S.Github>
                <SubTitle
                    $color="primary"
                    $typography="subTitle"
                    $align="center"
                >
                    Developed by Igor
                </SubTitle>
                <S.Link
                    href="https://github.com/IgorGabriel18"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitBranch className="link__icon" />
                    <Text
                        $color="brand"
                        $typography="subTitle"
                        $align="center"
                    >
                        GitHub
                    </Text>
                    <GitMerge className="link__icon" />
                </S.Link>
            </S.Github>
        </S.Container>
    );
}
