import { useContext } from "react";

import bg1Image from "~assets/images/background-1.png";
import bg2Image from "~assets/images/background-2.png";
import {
    Link,
    List,
    ListCardPrimary,
    ListCardSecondary,
    MainTitle,
    SectionContainer,
    SectionTitle
} from "~components/common";
import { ScreenContext } from "~contexts/ScreenContext";
import { currentlyTrendingGamesItems, gameDistributorItems } from "~utils/constants";

import * as S from "./styles";

export function PageContent() {
    const { screenWidth, breakpoint } = useContext(ScreenContext);

    return (
        <S.Container>
            <SectionContainer
                $isTopOfPage
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "start",
                    bg: { file: bg1Image, sizeFull: true }
                }}
                $contentBox={{
                    size: "full",
                    gapItems: screenWidth >= breakpoint().md ? "xxl" : "lg",
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="subTitle"
                    $align="center"
                    $lines="left&right"
                >
                    GAMEWORLD DISTRIBUTORS
                </SectionTitle>
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align="center"
                >
                    Connecting Players & Games in an Immersive
                    <br />
                    environment
                </MainTitle>
                <Link
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                    href=""
                >
                    Become a Member for Free!
                </Link>
            </SectionContainer>
            <SectionContainer
                $container={{
                    contentBoxPositionInLargeScreen: "center"
                }}
                $contentBox={{
                    size: "xl",
                    gapItems: screenWidth >= breakpoint().md ? "xxl" : "lg",
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="sectionTitle"
                    $align={screenWidth >= breakpoint().md ? "left" : "center"}
                >
                    Currently Trending Games
                </SectionTitle>
                <List $scroll={{ countItems: currentlyTrendingGamesItems.length }}>
                    {currentlyTrendingGamesItems.map(({ thumbnail, followers, name }) => (
                        <ListCardPrimary
                            key={name}
                            $container={{ scroll: true, size: "min" }}
                            $size="full"
                            src={thumbnail}
                            title={followers}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                $container={{
                    contentBoxPositionInLargeScreen: "end",
                    bg: {
                        file: bg2Image
                    }
                }}
                $contentBox={{ size: "md", gapItems: "xxl", itemsPosition: "center" }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="sectionTitle"
                    $align={screenWidth >= breakpoint().md ? "left" : "center"}
                >
                    We are the Best Game Distributors for all Gamers
                </SectionTitle>
                <List>
                    {gameDistributorItems.map(({ title, description }) => (
                        <ListCardSecondary
                            key={title}
                            {...{ title, description }}
                        />
                    ))}
                </List>
            </SectionContainer>
        </S.Container>
    );
}
