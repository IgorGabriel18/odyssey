import { ArrowRight, CaretLeft, CaretRight } from "@phosphor-icons/react";

import bg1Image from "~assets/images/background-1.png";
import bg2Image from "~assets/images/background-2.png";
import bg3Image from "~assets/images/background-3.png";
import bg4Image from "~assets/images/background-4.png";
import bg5Image from "~assets/images/background-5.png";
import { List, ListCard, MainTitle, SectionContainer, SectionTitle, SubTitle, Text } from "~components/common";
import { usePageContent } from "~hooks/usePageContent";
import { currentlyTrendingGamesItems, gameDistributorItems, pageContentItems } from "~utils/constants";

import * as S from "./styles";

export function PageContent() {
    const { testimonials, contact, gapItems, textAlign, fontLines } = usePageContent();

    return (
        <S.Container>
            <SectionContainer
                $isTopOfPage
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "center",
                    bg: { file: bg1Image, sizeFull: true }
                }}
                $contentBox={{
                    size: "full",
                    gapItems: gapItems,
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="bodyText"
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
                <a href={`#${pageContentItems[5].ref}`}>Become a Member for Free!</a>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[0].ref}
                $container={{
                    heightFull: false,
                    contentBoxPositionInLargeScreen: "center"
                }}
                $contentBox={{
                    size: "xl",
                    gapItems: gapItems,
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="sectionTitle"
                    $align={textAlign}
                >
                    Currently Trending Games
                </SectionTitle>
                <List $slideLayout={{ numberFrames: currentlyTrendingGamesItems.length }}>
                    {currentlyTrendingGamesItems.map(({ followers, name, thumbnail }) => (
                        <ListCard
                            key={name}
                            title={name}
                            description={followers}
                            src={thumbnail}
                            alt={name}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[1].ref}
                $container={{
                    heightFull: false,
                    contentBoxPositionInLargeScreen: "end",
                    bg: { file: bg2Image, sizeFull: false }
                }}
                $contentBox={{
                    size: "md",
                    gapItems: gapItems,
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="sectionTitle"
                    $align={textAlign}
                >
                    We are the Best Game Distributors for all Gamers
                </SectionTitle>
                <List>
                    {gameDistributorItems.map(({ title, description }) => (
                        <ListCard
                            key={title}
                            title={title}
                            description={description}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[2].ref}
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "center",
                    bg: { file: bg3Image, sizeFull: true }
                }}
                $contentBox={{
                    size: "xl",
                    gapItems: gapItems,
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
                <List>platformSupportItems</List>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[3].ref}
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "end",
                    bg: { file: bg5Image, sizeFull: true }
                }}
                $contentBox={{
                    size: "md",
                    gapItems: gapItems,
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="legend"
                    $align={textAlign}
                    $lines={fontLines}
                >
                    TESTIMONIALS
                </SectionTitle>
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align={textAlign}
                >
                    What our Customers are
                    <br />
                    saying
                </MainTitle>
                <S.Testimonial>
                    <S.TestimonialGroup>
                        <S.TestimonialLegend>{testimonials.currentTestimonial.name}</S.TestimonialLegend>
                        <Text
                            $color="secondary"
                            $typography="bodyText"
                            $align="center"
                        >
                            {testimonials.currentTestimonial.testimonial}
                        </Text>
                    </S.TestimonialGroup>
                    <button
                        type="button"
                        onClick={testimonials.prevSlide}
                    >
                        <CaretLeft className="testimonial-button__icon" />
                    </button>
                    <button
                        type="button"
                        onClick={testimonials.nextSlide}
                    >
                        <CaretRight className="testimonial-button__icon" />
                    </button>
                </S.Testimonial>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[4].ref}
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "start",
                    bg: { file: bg4Image, sizeFull: false }
                }}
                $contentBox={{
                    size: "sm",
                    gapItems: gapItems,
                    itemsPosition: "center"
                }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="legend"
                    $align={textAlign}
                    $lines={fontLines}
                >
                    EXPLORE A NEW DIMENSION
                </SectionTitle>
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align={textAlign}
                >
                    Ready to unlock your potentials in a world of fun?
                </MainTitle>
                <a href={`#${pageContentItems[5].ref}`}>Join for Free!</a>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[5].ref}
                $container={{
                    heightFull: false,
                    contentBoxPositionInLargeScreen: "center"
                }}
                $contentBox={{
                    size: "full",
                    gapItems: gapItems,
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
                <S.Form onSubmit={contact.onSubmit}>
                    <SubTitle
                        $color="main"
                        $typography="sectionTitle"
                        $align={textAlign}
                    >
                        Stay in the loop
                    </SubTitle>
                    <Text
                        $color="main"
                        $typography="bodyText"
                        $align={textAlign}
                    >
                        Subscribe to receive the latest news and updates about Odyssey. We promise not to spam you!
                    </Text>
                    <S.FormGroup>
                        <S.FormInput
                            type="email"
                            placeholder="Enter email address"
                            spellCheck="false"
                            autoComplete="off"
                            {...contact.register("email")}
                        />
                        <button type="submit">
                            <ArrowRight className="form-button__icon" />
                        </button>
                        {contact.errors.email && (
                            <Text
                                $colorVariant="error"
                                $typography="legend"
                                $align="center"
                            >
                                {contact.errors.email.message}
                            </Text>
                        )}
                    </S.FormGroup>
                </S.Form>
            </SectionContainer>
        </S.Container>
    );
}
