import { CaretLeft, CaretRight, GameController } from "@phosphor-icons/react";

import bg1Image from "~assets/images/background-1.png";
import bg2Image from "~assets/images/background-2.png";
import bg3Image from "~assets/images/background-3.png";
import bg4Image from "~assets/images/background-4.png";
import bg5Image from "~assets/images/background-5.png";
import {
    Image,
    LinkRef,
    List,
    ListCard,
    MainTitle,
    SectionContainer,
    SectionTitle,
    SubTitle,
    Text
} from "~components/common";
import { usePageContent } from "~hooks/usePageContent";
import {
    currentlyTrendingGamesItems,
    gameDistributorItems,
    pageContentItems,
    platformSupportItems
} from "~utils/constants";

import * as S from "./styles";

export function PageContent() {
    const { itemsGap, textAlign, testimonials, contact } = usePageContent();

    return (
        <S.Container>
            <SectionContainer
                $isTopOfPage
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "center",
                    bg: { file: bg1Image, sizeFull: true }
                }}
                $contentBox={{ size: "full", itemsGap: itemsGap, itemsPosition: "center" }}
            >
                <SubTitle
                    $color="primary"
                    $typography="subTitle"
                    $align="center"
                    $lines="left&right"
                >
                    GAMEWORLD DISTRIBUTORS
                </SubTitle>
                <MainTitle
                    $color="primary"
                    $typography="mainTitle"
                    $align="center"
                >
                    Connecting Players & Games in an Immersive
                    <br />
                    environment
                </MainTitle>
                <LinkRef
                    href={`#${pageContentItems[5].ref}`}
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                >
                    Become a Member for Free!
                </LinkRef>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[0].ref}
                $container={{ contentBoxPositionInLargeScreen: "center" }}
                $contentBox={{ size: "xl", itemsGap: itemsGap, itemsPosition: "center" }}
            >
                <SectionTitle
                    $color="primary"
                    $typography="sectionTitle"
                    $align="center"
                >
                    Currently Trending Games
                </SectionTitle>
                <List>
                    {currentlyTrendingGamesItems.map(({ name, thumbnail, followers }) => (
                        <ListCard
                            key={name}
                            $size="min"
                            $wrap
                        >
                            <Image
                                src={thumbnail}
                                alt={name}
                            />
                            <SubTitle
                                $color="primary"
                                $typography="bodyText"
                                $align="center"
                            >
                                {name}
                            </SubTitle>
                            <Text
                                $color="secondary"
                                $typography="legend"
                                $align="center"
                            >
                                {followers}
                            </Text>
                        </ListCard>
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[1].ref}
                $container={{ contentBoxPositionInLargeScreen: "end", bg: { file: bg2Image } }}
                $contentBox={{ size: "md", itemsGap: itemsGap, itemsPosition: "center" }}
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
                            $size="full"
                        >
                            <GameController className="game-distributor-items__icon" />
                            <Text
                                $color="secondary"
                                $typography="legend"
                                $align={textAlign}
                            >
                                {description}
                            </Text>
                        </ListCard>
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
                $contentBox={{ size: "xl", itemsGap: itemsGap, itemsPosition: "center" }}
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
                        <ListCard
                            key={title}
                            $size="min"
                            $wrap
                        >
                            <Image
                                $size="primary"
                                src={icon}
                                alt={title}
                            />
                            <Text
                                $color="primary"
                                $typography="legend"
                                $align="center"
                            >
                                {title}
                            </Text>
                        </ListCard>
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[3].ref}
                $container={{
                    heightFull: true,
                    contentBoxPositionInLargeScreen: "end",
                    bg: { file: bg5Image }
                }}
                $contentBox={{ size: "md", itemsGap: itemsGap, itemsPosition: "center" }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="legend"
                    $align={textAlign}
                    $lines="right"
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
                            $align="justify"
                        >
                            {testimonials.currentTestimonial.testimonial}
                        </Text>
                    </S.TestimonialGroup>
                    <S.TestimonialButton
                        type="button"
                        onClick={testimonials.prevSlide}
                    >
                        <CaretLeft className="testimonial-button__icon" />
                    </S.TestimonialButton>
                    <S.TestimonialButton
                        type="button"
                        onClick={testimonials.nextSlide}
                    >
                        <CaretRight className="testimonial-button__icon" />
                    </S.TestimonialButton>
                </S.Testimonial>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[4].ref}
                $container={{
                    contentBoxPositionInLargeScreen: "start",
                    bg: { file: bg4Image }
                }}
                $contentBox={{
                    size: "sm",
                    itemsGap: itemsGap,
                    itemsPosition: "start"
                }}
            >
                <SectionTitle
                    $color="brand"
                    $typography="legend"
                    $align={textAlign}
                    $lines="right"
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
                <LinkRef
                    href={`#${pageContentItems[5].ref}`}
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                >
                    Join for Free!
                </LinkRef>
            </SectionContainer>
            <SectionContainer
                id={pageContentItems[5].ref}
                $container={{ contentBoxPositionInLargeScreen: "center" }}
                $contentBox={{ size: "full", itemsGap: itemsGap, itemsPosition: "center" }}
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
                        <S.FormButton type="submit">
                            <CaretRight className="form-button__icon" />
                        </S.FormButton>
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
