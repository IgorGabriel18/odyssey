import { Link } from "~components/common";
import { IFont } from "~types/global-types";
import { pageContentItems } from "~utils/constants";

import * as S from "./styles";

interface INavigationProps {
    click?: () => void;
}

export function Navigation({
    $breakpoint,
    $navbarAnimation,
    $color,
    $typography,
    $align,
    click
}: S.IContainerProps & IFont & INavigationProps) {
    return (
        <S.Container
            $breakpoint={$breakpoint}
            $navbarAnimation={$navbarAnimation}
        >
            {pageContentItems.map(({ ref, title }) => (
                <Link
                    key={ref}
                    href={`#${ref}`}
                    $color={$color}
                    $typography={$typography}
                    $align={$align}
                    onClick={click}
                >
                    {title}
                </Link>
            ))}
        </S.Container>
    );
}
