import { ArrowUp } from "@phosphor-icons/react";
import { useContext } from "react";

import { ScreenContext } from "~contexts/ScreenContext";
import { renderIf } from "~utils/render";

import * as S from "./styles";

export function ScrollToTopButton() {
    const { scrollButtonVisibility, handleClickScrollToTop } = useContext(ScreenContext);

    return renderIf(
        scrollButtonVisibility,
        <S.Container
            type="button"
            onClick={handleClickScrollToTop}
        >
            <ArrowUp className="container__icon" />
        </S.Container>
    );
}
