import { ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useContext } from "react";

import bg1Image from "~assets/images/background-1.png";
import bg2Image from "~assets/images/background-2.png";
import bg3Image from "~assets/images/background-3.png";
import bg4Image from "~assets/images/background-4.png";
import bg5Image from "~assets/images/background-5.png";
import {
    Link,
    List,
    ListCardPrimary,
    ListCardSecondary,
    MainTitle,
    SectionContainer,
    SectionTitle,
    SubTitle,
    Text
} from "~components/common";
import { ScreenContext } from "~contexts/ScreenContext";
import { useContact } from "~hooks/useContact";
import { useSlider } from "~hooks/useSlider";
import { currentlyTrendingGamesItems, gameDistributorItems, platformSupportItems } from "~utils/constants";

import * as S from "./styles";

export function PageContent() {
    const { screenWidth, breakpoint } = useContext(ScreenContext);
    const { currentTestimonial, prevSlide, nextSlide } = useSlider();
    const { onSubmit, errors, register } = useContact();

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
                    gapItems: screenWidth >= breakpoint().md ? "mega" : "lg",
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
                    gapItems: screenWidth >= breakpoint().md ? "xxl" : "md",
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
                $contentBox={{
                    size: "md",
                    gapItems: screenWidth >= breakpoint().md ? "xxl" : "md",
                    itemsPosition: "center"
                }}
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
            <SectionContainer
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "center",
                    bg: { file: bg3Image, sizeFull: true }
                }}
                $contentBox={{
                    size: "xl",
                    gapItems: screenWidth >= breakpoint().md ? "xl" : "md",
                    itemsPosition: "center"
                }}
            >
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align="center"
                >
                    Game Development for All Platforms: Where Innovation Meets Fun!
                </MainTitle>
                <Text
                    $color="secondary"
                    $typography="bodyText"
                    $align="center"
                >
                    We turn ideas into reality! With our game development services, we deliver high-quality experiences
                    for both mobile and PC platforms. Whether on your smartphone or computer, our experts in Mobile Game
                    Development and PC Game Development are ready to create engaging games that captivate and dazzle.
                    Let us take your vision beyond the bounds of imagination.
                </Text>
                <List>
                    {platformSupportItems.map(({ icon, title }) => (
                        <ListCardPrimary
                            key={title}
                            $container={{ size: "min" }}
                            $size="min"
                            src={icon}
                            alt={title}
                            title={title}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                $container={{
                    bg: {
                        file: bg5Image,
                        sizeFull: true
                    },
                    contentBoxPositionInLargeScreen: "end"
                }}
                $contentBox={{
                    size: "md",
                    gapItems: screenWidth >= breakpoint().md ? "xxl" : "md",
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="bodyText"
                    $align="center"
                    $lines="left&right"
                >
                    TESTIMONIALS
                </SectionTitle>
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align="center"
                >
                    What our Customers are
                    <br />
                    saying
                </MainTitle>
                <S.Testimonial>
                    <S.TestimonialGroup>
                        <S.TestimonialLegend>{currentTestimonial.name}</S.TestimonialLegend>
                        <Text
                            $color="secondary"
                            $typography="bodyText"
                            $align="center"
                        >
                            {currentTestimonial.testimonial}
                        </Text>
                    </S.TestimonialGroup>
                    <S.TestimonialButton
                        type="button"
                        onClick={prevSlide}
                    >
                        <CaretLeft className="testimonial-button__icon" />
                    </S.TestimonialButton>
                    <S.TestimonialButton
                        type="button"
                        onClick={nextSlide}
                    >
                        <CaretRight className="testimonial-button__icon" />
                    </S.TestimonialButton>
                </S.Testimonial>
            </SectionContainer>
            <SectionContainer
                $container={{
                    bg: {
                        file: bg4Image
                    },
                    contentBoxPositionInLargeScreen: "start"
                }}
                $contentBox={{
                    size: "sm",
                    gapItems: screenWidth >= breakpoint().md ? "xxl" : "md",
                    itemsPosition: screenWidth >= breakpoint().md ? "start" : "center"
                }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="legend"
                    $align={screenWidth >= breakpoint().md ? "left" : "center"}
                >
                    EXPLORE A NEW DIMENSION
                </SectionTitle>
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align={screenWidth >= breakpoint().md ? "left" : "center"}
                >
                    Ready to unlock your potentials in a world of fun?
                </MainTitle>
                <Link
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                    href=""
                >
                    Join for Free!
                </Link>
            </SectionContainer>
            <SectionContainer
                $container={{ contentBoxPositionInLargeScreen: "center" }}
                $contentBox={{
                    size: "full",
                    gapItems: "mega",
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="legend"
                    $align="center"
                    $lines="left&right"
                >
                    CONTACT US
                </SectionTitle>
                <S.Form onSubmit={onSubmit}>
                    <SubTitle
                        $color="main"
                        $typography="sectionTitle"
                        $align={screenWidth >= breakpoint().md ? "left" : "center"}
                    >
                        Stay in the loop
                    </SubTitle>
                    <Text
                        $color="main"
                        $typography="bodyText"
                        $align={screenWidth >= breakpoint().md ? "justify" : "center"}
                    >
                        Subscribe to receive the latest news and updates about Odyssey. We promise not to spam you!
                    </Text>
                    <S.FormGroup>
                        <S.FormInput
                            type="email"
                            placeholder="Enter email address"
                            spellCheck="false"
                            autoComplete="off"
                            {...register("email")}
                        />
                        <S.FormButton type="submit">
                            <ArrowRight className="form-button__icon" />
                        </S.FormButton>
                        {errors.email && (
                            <Text
                                $colorVariant="error"
                                $typography="legend"
                                $align="center"
                            >
                                {errors.email.message}
                            </Text>
                        )}
                    </S.FormGroup>
                </S.Form>
            </SectionContainer>
        </S.Container>
    );
}
