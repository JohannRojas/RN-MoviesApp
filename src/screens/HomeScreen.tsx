import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/GradientBackground';

import ImageColors from 'react-native-image-colors';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window')

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()

  const { top } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  const getPosterColors = async (index = 0) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const colors = await ImageColors.getColors(uri, { fallback: '#000000',
    quality: 'low',
    pixelSpacing: 5,
    cache: true,
    headers: {
      authorization: 'Basic 123',
    },})
    console.log("🚀 ~ file: HomeScreen.tsx:32 ~ getPosterColors ~ colors", colors)
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>

            {/* Main Carousel */}
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors( index ) }
            />
          </View>

          {/* Popular movies */}
          <HorizontalSlider title='Popular' movies={popular} />

          {/* Top Rated */}
          <HorizontalSlider title='Top rated' movies={topRated} />

          {/* upcoming */}
          <HorizontalSlider title='Upcoming' movies={upcoming} />

        </View>
      </ScrollView>
    </GradientBackground>
  )

}