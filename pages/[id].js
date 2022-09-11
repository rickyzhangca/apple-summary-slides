import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/header';
import events from '../data/events.json';
import productTypes from '../data/productTypes.json';
import byEvent from '../data/byEvent.json';
import byProductType from '../data/byProductType.json';
import assets from '../data/assets.json';
import ChapterHeaderContainer, {
  Container,
  Title,
  SlidesContainer,
  SlideContainer,
  Subtitle,
  SlideImage,
  BackToTopButton,
  BackToTopButtonText,
  ChapterContainer,
  ChapterImage,
  ChapterTextsContainer,
  ChapterMainText,
  ChapterCaptionText,
} from './id.styles';
import { ArrowCircleUpIcon } from 'octicons-extended-react/dist/index.umd';
import Link from 'next/link';

const Page = () => {
  const router = useRouter();
  const id = router.query.id;

  const idPattern = /(.*)-(.*)/;
  if (!idPattern.test(id)) {
    return <>404 regex</>; // should 404
  }
  const [, key1, key2] = id.match(idPattern);

  // split time into another line
  // only supports WWDC and Apple Events!
  const eventNamePattern = /(WWDC|Apple Event)[\s](.*)/;

  switch (key1) {
    case 'event':
      console.log(key2);
      if (events.includes(key2)) {
        return (
          <>
            <Header />
            <ChapterHeaderContainer>
              {events.map((event) => {
                const eventName = byEvent[event][0].eventName;
                return (
                  <Link key={event} href={`/event-${event}`}>
                    <ChapterContainer>
                      <ChapterImage
                        src={`/assets/${assets[event]}`}
                        alt={'event'}
                        width={112}
                        height={72}
                        placeholder='blur'
                        blurDataURL={`/assets/${assets[event]}`}
                      />
                      {eventNamePattern.test(eventName) ? (
                        <ChapterTextsContainer>
                          <ChapterMainText>
                            {eventName.match(eventNamePattern)[1]}
                          </ChapterMainText>
                          <ChapterCaptionText>
                            {eventName.match(eventNamePattern)[2]}
                          </ChapterCaptionText>
                        </ChapterTextsContainer>
                      ) : (
                        <ChapterMainText>
                          {byEvent[event][0].eventName}
                        </ChapterMainText>
                      )}
                    </ChapterContainer>
                  </Link>
                );
              })}
            </ChapterHeaderContainer>
            <Container>
              <Title>{byEvent[key2][0].eventName}</Title>
              <SlidesContainer>
                {byEvent[key2].map((slide) => {
                  return (
                    <SlideContainer key={slide.slideFilename}>
                      <Subtitle>{slide.productName}</Subtitle>
                      <SlideImage
                        src={`/slides/${slide.slideFilename}`}
                        alt={'slide'}
                        width={1920}
                        height={1080}
                        placeholder='blur'
                        blurDataURL={`/slides/${slide.slideFilename}`}
                      />
                    </SlideContainer>
                  );
                })}
              </SlidesContainer>
              <BackToTopButton
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                <ArrowCircleUpIcon size={24} />
                <BackToTopButtonText>Back to top</BackToTopButtonText>
              </BackToTopButton>
            </Container>
          </>
        );
      }
    case 'product':
      if (productTypes.includes(key2)) {
        return (
          <>
            <Header />
            <ChapterHeaderContainer>
              {productTypes.map((productType) => {
                return (
                  <Link key={productType} href={`/product-${productType}`}>
                    <ChapterContainer>
                      <ChapterImage
                        src={`/assets/${assets[productType]}`}
                        alt={'products type'}
                        width={112}
                        height={72}
                        placeholder='blur'
                        blurDataURL={`/assets/${assets[event]}`}
                      />
                      <ChapterMainText>
                        {byProductType[productType][0].productType}
                      </ChapterMainText>
                    </ChapterContainer>
                  </Link>
                );
              })}
            </ChapterHeaderContainer>
            <Container>
              <Title>{byProductType[key2][0].productType}</Title>
              <SlidesContainer>
                {byProductType[key2].map((slide) => {
                  return (
                    <SlideContainer key={slide.slideFilename}>
                      <Subtitle>{`${slide.productName} @ ${slide.eventName}`}</Subtitle>
                      <SlideImage
                        src={`/slides/${slide.slideFilename}`}
                        alt={'slide'}
                        width={1920}
                        height={1080}
                        placeholder='blur'
                        blurDataURL={`/slides/${slide.slideFilename}`}
                      />
                    </SlideContainer>
                  );
                })}
              </SlidesContainer>
              <BackToTopButton
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}>
                <ArrowCircleUpIcon size={24} />
                <BackToTopButtonText>Back to top</BackToTopButtonText>
              </BackToTopButton>
            </Container>
          </>
        );
      }
  }
  return <>404</>;
};

// eslint-disable-next-line import/no-unused-modules
export default Page;
