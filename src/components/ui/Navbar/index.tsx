import { List, X } from "@phosphor-icons/react";

import logoIcon from "~assets/icons/logo.svg";
import { Image, Navigation } from "~components/common";
import { useNavbar } from "~hooks/useNavbar";
import { renderIf } from "~utils/render";

import * as S from "./styles";

export function Navbar() {
    const { loading, visibility, handleClick, renderButton, renderNavigation } = useNavbar();

    return (
        <S.Container>
            <S.SubContainer>
                <Image
                    $size="primary"
                    src={logoIcon}
                    alt="Logo icon"
                />
                {renderIf(
                    renderButton,
                    <S.MenuButton
                        type="button"
                        onClick={handleClick}
                    >
                        {!visibility ? <List className="menu-button__icon" /> : <X className="menu-button__icon" />}
                    </S.MenuButton>
                )}
                {renderIf(
                    renderNavigation,
                    <Navigation
                        $breakpoint="md"
                        $navbarAnimation={{ loading: loading }}
                        $color="primary"
                        $typography="subTitle"
                        $align="center"
                        click={handleClick}
                    />
                )}
            </S.SubContainer>
        </S.Container>
    );
}
