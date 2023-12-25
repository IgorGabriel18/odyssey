import { List, X } from "@phosphor-icons/react";

import logoIcon from "~assets/icons/logo.svg";
import { Image, Navigation } from "~components/common";
import { useNavbar } from "~hooks/useNavbar";
import { renderIf } from "~utils/render";

import * as S from "./styles";

export function Navbar() {
    const { visibility, renderButton, handleClickToggleVisibility, renderNavigation, isLoading } = useNavbar();

    return (
        <S.Container>
            <S.SubContainer>
                <Image
                    src={logoIcon}
                    alt="Logo Icon"
                    $size="primary"
                />
                {renderIf(
                    renderButton,
                    <S.MenuButton
                        type="button"
                        onClick={handleClickToggleVisibility}
                    >
                        {!visibility ? <List className="menu-button__icon" /> : <X className="menu-button__icon" />}
                    </S.MenuButton>
                )}
                <Navigation
                    render={renderNavigation}
                    $breakpoint="md"
                    $navbarAnimation={{ loading: isLoading }}
                    click={handleClickToggleVisibility}
                    $color="primary"
                    $typography="subTitle"
                    $align="center"
                />
            </S.SubContainer>
        </S.Container>
    );
}
