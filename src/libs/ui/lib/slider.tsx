"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper as ReactSwiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Autoplay, Pagination, Navigation, Thumbs } from "swiper/modules";

import { ResponsiveSpacing } from "@aces/types";
import { useMediaQuery } from "@aces/hooks";
import { palette, breakpoints } from "@aces/theme";

import { Box } from "./box";
import { IconButtonProps, IconButton } from "./icon-button";
import { Icon } from "./icons";

type IconButtonColor = IconButtonProps["color"];
type IconButtonShape = IconButtonProps["shape"];
type IconButtonSize = IconButtonProps["size"];

interface SliderProps {
  id: string;
  pagination?: boolean;
  autoplay?: boolean;
  speed?: number;
  loop?: boolean;
  slidesPerView?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  spaceBetween?: number;
  marginTop?: ResponsiveSpacing;
  marginBottom?: ResponsiveSpacing;
  offsetSlideBoxShadow?: boolean;
  buttonShape?: IconButtonShape;
  freeMode?: boolean;
  watchSlidesProgress?: boolean;
  setSlideHeightEqual?: boolean;
  slideHeightOffset?: number;
  thumbsSwiper?: SwiperClass;
  setThumbsSwiper?: (swiper: any) => void;
  children: React.ReactNode[];
}

interface SliderBtnProps {
  id: string;
  direction: "next" | "prev";
  buttonShape?: IconButtonShape;
  size?: IconButtonSize;
  color?: IconButtonColor;
  style?: object;
}

const slidesPerViewDefault = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
};

const bulletStyle = {
  background: palette.primary.main,
  "border-radius": 0,
  display: "inline-block",
  width: "10%",
  height: "4px",
  margin: "0 4px",
};

const activeBulletStyle = {
  ...bulletStyle,
  background: `rgba(${palette.common.white}, .75)`,
};

const bulletStyleString = Object.entries(bulletStyle)
  .map(([key, value]) => `${key}:${value}`)
  .join(";");

const activeBulletStyleString = Object.entries(activeBulletStyle)
  .map(([key, value]) => `${key}:${value}`)
  .join(";");

const paginationUI = {
  clickable: true,
  renderBullet: function (index: number, className: any) {
    const styleString = className
      .toString()
      .includes("swiper-pagination-bullet-active")
      ? activeBulletStyleString
      : bulletStyleString;
    return `<span class="${className}" style="${styleString}"></span>`;
  },
};

export const Slider = ({
  id,
  pagination,
  autoplay,
  speed = 800,
  loop = false,
  slidesPerView = slidesPerViewDefault,
  spaceBetween = 24,
  marginTop = { xs: 0 },
  marginBottom = { xs: 0 },
  offsetSlideBoxShadow = false,
  freeMode = false,
  watchSlidesProgress = false,
  setSlideHeightEqual = false,
  slideHeightOffset = 0,
  thumbsSwiper,
  setThumbsSwiper,
  children,
  ...props
}: SliderProps) => {
  const sliderRef = useRef<any>(null);
  const [slideHeight, setSlideHeight] = useState();
  const { isSmallerThanMd } = useMediaQuery();

  useEffect(() => {
    if (setSlideHeightEqual)
      setSlideHeight(sliderRef.current?.offsetHeight || 0);

    // eslint-disable-next-line
  }, [sliderRef, isSmallerThanMd]);

  return (
    <Box style={{ marginTop, marginBottom }}>
      <ReactSwiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Pagination, Autoplay, Navigation, Thumbs]}
        pagination={pagination ? paginationUI : false}
        autoplay={
          autoplay
            ? {
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        speed={speed}
        loop={loop}
        slidesPerView={slidesPerView.md}
        spaceBetween={spaceBetween}
        breakpoints={{
          [breakpoints.values.xs]: {
            slidesPerView: slidesPerView.xs,
            spaceBetween: spaceBetween,
          },
          [breakpoints.values.sm]: {
            slidesPerView: slidesPerView.sm,
            spaceBetween: spaceBetween,
          },
          [breakpoints.values.md]: {
            slidesPerView: slidesPerView.md,
            spaceBetween: spaceBetween,
          },
          [breakpoints.values.lg]: {
            slidesPerView: slidesPerView.lg,
            spaceBetween: spaceBetween,
          },
          [breakpoints.values.xl]: {
            slidesPerView: slidesPerView.xl,
            spaceBetween: spaceBetween,
          },
        }}
        style={{
          padding: offsetSlideBoxShadow ? "0.25rem" : 0,
          paddingBottom: pagination ? "4rem" : "0.5rem",
        }}
        navigation={{
          nextEl: `#${id}-next`,
          prevEl: `#${id}-prev`,
        }}
        onSwiper={setThumbsSwiper}
        {...props}
        freeMode={freeMode}
        watchSlidesProgress={watchSlidesProgress}
        ref={sliderRef}
      >
        {children.map((child, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "auto",
              minHeight: slideHeight
                ? `${slideHeight - slideHeightOffset - (pagination ? 64 : 8)}px`
                : 0,
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </Box>
  );
};

export const SliderBtn = ({
  id,
  direction,
  buttonShape,
  size,
  color,
  style,
}: SliderBtnProps) => {
  return (
    <Box>
      <IconButton
        id={`${id}-${direction}`}
        shape={buttonShape}
        aria-label={direction === "next" ? "next" : "previous"}
        size={size}
        color={color}
        style={style}
      >
        {direction === "next" ? (
          <Icon icon="ChevronRight" />
        ) : (
          <Icon icon="ChevronLeft" />
        )}
      </IconButton>
    </Box>
  );
};
