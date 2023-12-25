import { IFont, IRender } from "~types/global-types";
import { pageContentItems } from "~utils/constants";
import { renderIf } from "~utils/render";

import * as S from "./styles";

interface INavigationProps extends S.IContainerProps, IFont, IRender {
    click?: () => void;
}

export function Navigation({
    render,
    click,
    $breakpoint,
    $navbarAnimation,
    $color,
    $typography,
    $align
}: INavigationProps) {
    return renderIf(
        render,
        <S.Container
            $breakpoint={$breakpoint}
            $navbarAnimation={$navbarAnimation}
        >
            {pageContentItems.map(({ ref, title }) => (
                <S.Link
                    key={ref}
                    href={`#${ref}`}
                    onClick={click}
                    $color={$color}
                    $typography={$typography}
                    $align={$align}
                >
                    {title}
                </S.Link>
            ))}
        </S.Container>
    );
}
