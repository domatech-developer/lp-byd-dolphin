"use client";
import "./CarouselDefault.scss";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./components/CarouselDotButton";
import { PrevButton, NextButton, usePrevNextButtons } from "./components/CarouselArrowButtons";
import AutoScroll, { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

type PropType = {
  options?: EmblaOptionsType;
  plugins?: any[];
  activeSlide?: boolean;
  autoScroll?: boolean;
  autoScrollOptions?: AutoScrollOptionsType;
  hideButtons?: boolean;
  children: React.ReactNode;
};

const CarouselDefault: React.FC<PropType> = ({
  options,
  activeSlide,
  autoScroll,
  children,
  autoScrollOptions,
  hideButtons = false,
  plugins = []
}) => {
  const emblaPlugins: any[] = [...plugins];
  activeSlide && emblaPlugins.push(ClassNames());
  autoScroll && emblaPlugins.push(AutoScroll({ ...autoScrollOptions }));
  const [emblaRef, emblaApi] = useEmblaCarousel(options, emblaPlugins);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="carouselDefault">
      <div className="carouselDefault__viewport" ref={emblaRef}>
        <div className="carouselDefault__container">{children}</div>
      </div>

      <div className="carouselDefault__controls">
        {!hideButtons && (
          <div className="carouselDefault__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselDefault;
