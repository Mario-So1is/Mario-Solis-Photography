export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface Gallery {
  id: string;
  title: string;
  thumbnailImg: string;
  images: GalleryImage[];
}

export const galleriesData: Gallery[] = [
  {
    id: 'morning-fog',
    title: 'Morning Fog',
    thumbnailImg: 'https://picsum.photos/seed/fog/800/1000',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/fog1/1200/800', alt: 'Morning Fog 1' },
      { id: 2, url: 'https://picsum.photos/seed/fog2/800/1200', alt: 'Morning Fog 2' },
      { id: 3, url: 'https://picsum.photos/seed/fog3/1000/1000', alt: 'Morning Fog 3' },
      { id: 4, url: 'https://picsum.photos/seed/fog4/1200/600', alt: 'Morning Fog 4' },
    ],
  },
  {
    id: 'deep-moss',
    title: 'Deep Moss',
    thumbnailImg: 'https://picsum.photos/seed/moss/800/600',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/moss1/1200/800', alt: 'Deep Moss 1' },
      { id: 2, url: 'https://picsum.photos/seed/moss2/800/1200', alt: 'Deep Moss 2' },
      { id: 3, url: 'https://picsum.photos/seed/moss3/1000/1000', alt: 'Deep Moss 3' },
    ],
  },
  {
    id: 'ancient-fern',
    title: 'Ancient Fern',
    thumbnailImg: 'https://picsum.photos/seed/fern/800/1200',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/fern1/1200/800', alt: 'Ancient Fern 1' },
      { id: 2, url: 'https://picsum.photos/seed/fern2/800/1200', alt: 'Ancient Fern 2' },
      { id: 3, url: 'https://picsum.photos/seed/fern3/1000/1000', alt: 'Ancient Fern 3' },
      { id: 4, url: 'https://picsum.photos/seed/fern4/1200/600', alt: 'Ancient Fern 4' },
      { id: 5, url: 'https://picsum.photos/seed/fern5/800/800', alt: 'Ancient Fern 5' },
    ],
  },
  {
    id: 'the-woods',
    title: 'The Woods',
    thumbnailImg: 'https://picsum.photos/seed/woods/800/800',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/woods1/1200/800', alt: 'The Woods 1' },
      { id: 2, url: 'https://picsum.photos/seed/woods2/800/1200', alt: 'The Woods 2' },
      { id: 3, url: 'https://picsum.photos/seed/woods3/1000/1000', alt: 'The Woods 3' },
    ],
  },
  {
    id: 'pine-needles',
    title: 'Pine Needles',
    thumbnailImg: 'https://picsum.photos/seed/pine/800/1000',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/pine1/1200/800', alt: 'Pine Needles 1' },
      { id: 2, url: 'https://picsum.photos/seed/pine2/800/1200', alt: 'Pine Needles 2' },
      { id: 3, url: 'https://picsum.photos/seed/pine3/1000/1000', alt: 'Pine Needles 3' },
    ],
  },
  {
    id: 'autumn-decay',
    title: 'Autumn Decay',
    thumbnailImg: 'https://picsum.photos/seed/autumn/800/700',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/autumn1/1200/800', alt: 'Autumn Decay 1' },
      { id: 2, url: 'https://picsum.photos/seed/autumn2/800/1200', alt: 'Autumn Decay 2' },
      { id: 3, url: 'https://picsum.photos/seed/autumn3/1000/1000', alt: 'Autumn Decay 3' },
    ],
  },
  {
    id: 'cold-stone',
    title: 'Cold Stone',
    thumbnailImg: 'https://picsum.photos/seed/stone/800/1100',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/stone1/1200/800', alt: 'Cold Stone 1' },
      { id: 2, url: 'https://picsum.photos/seed/stone2/800/1200', alt: 'Cold Stone 2' },
      { id: 3, url: 'https://picsum.photos/seed/stone3/1000/1000', alt: 'Cold Stone 3' },
    ],
  },
  {
    id: 'river-bed',
    title: 'River Bed',
    thumbnailImg: 'https://picsum.photos/seed/river/800/600',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/river1/1200/800', alt: 'River Bed 1' },
      { id: 2, url: 'https://picsum.photos/seed/river2/800/1200', alt: 'River Bed 2' },
      { id: 3, url: 'https://picsum.photos/seed/river3/1000/1000', alt: 'River Bed 3' },
    ],
  },
  {
    id: 'heavy-mist',
    title: 'Heavy Mist',
    thumbnailImg: 'https://picsum.photos/seed/mist/800/900',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/mist1/1200/800', alt: 'Heavy Mist 1' },
      { id: 2, url: 'https://picsum.photos/seed/mist2/800/1200', alt: 'Heavy Mist 2' },
      { id: 3, url: 'https://picsum.photos/seed/mist3/1000/1000', alt: 'Heavy Mist 3' },
    ],
  },
  {
    id: 'rough-bark',
    title: 'Rough Bark',
    thumbnailImg: 'https://picsum.photos/seed/bark/800/800',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/bark1/1200/800', alt: 'Rough Bark 1' },
      { id: 2, url: 'https://picsum.photos/seed/bark2/800/1200', alt: 'Rough Bark 2' },
      { id: 3, url: 'https://picsum.photos/seed/bark3/1000/1000', alt: 'Rough Bark 3' },
    ],
  },
  {
    id: 'overgrown',
    title: 'Overgrown',
    thumbnailImg: 'https://picsum.photos/seed/overgrown/800/1200',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/overgrown1/1200/800', alt: 'Overgrown 1' },
      { id: 2, url: 'https://picsum.photos/seed/overgrown2/800/1200', alt: 'Overgrown 2' },
      { id: 3, url: 'https://picsum.photos/seed/overgrown3/1000/1000', alt: 'Overgrown 3' },
    ],
  },
  {
    id: 'deep-shadow',
    title: 'Deep Shadow',
    thumbnailImg: 'https://picsum.photos/seed/shadow/800/700',
    images: [
      { id: 1, url: 'https://picsum.photos/seed/shadow1/1200/800', alt: 'Deep Shadow 1' },
      { id: 2, url: 'https://picsum.photos/seed/shadow2/800/1200', alt: 'Deep Shadow 2' },
      { id: 3, url: 'https://picsum.photos/seed/shadow3/1000/1000', alt: 'Deep Shadow 3' },
    ],
  },
];
