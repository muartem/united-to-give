import NeedsLogo from '@/assets/images/needs1.png'

export const responsive = {
  desktop: {
    breakpoint: {max: 1024, min: 0},
    items: 3,
  },
  tablet: {
    breakpoint: {max: 1024, min: 768},
    items: 3,
  },
  mobile: {
    breakpoint: {max: 768, min: 0},
    items: 1,
  },
}

export const slides = (t) => [
  {
    img: NeedsLogo,
    title: 'NAME OF THE sourse',
    text: '“....” - from there'
  },
  {
    img: NeedsLogo,
    title: 'NAME OF THE sourse',
    text: '“....” - from there'
  },
  {
    img: NeedsLogo,
    title: 'NAME OF THE sourse',
    text: '“....” - from there'
  },
  {
    img: NeedsLogo,
    title: 'NAME OF THE sourse',
    text: '“....” - from there'
  },
  {
    img: NeedsLogo,
    title: 'NAME OF THE sourse',
    text: '“....” - from there'
  },
  {
    img: NeedsLogo,
    title: 'NAME OF THE sourse',
    text: '“....” - from there'
  },
]
