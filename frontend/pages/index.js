import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <>
      <Carousel fetchType="movies_popular" />
      <Carousel fetchType="series_popular" />
      <Carousel fetchType="genre_family" />
      <Carousel fetchType="genre_documentary" />
    </>
  )
}
