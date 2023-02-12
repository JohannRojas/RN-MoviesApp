import Icon from '@expo/vector-icons/build/FontAwesome5';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

import { format } from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
  movieFull: MovieFull
  cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* Details */}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Icon
            name="star"
            size={16}
            color="grey"
          />

          <Text>{movieFull.vote_average}</Text>

          <Text style={{ marginHorizontal: 5, flexShrink: 1 }}>
            {
              movieFull.genres.map((genre) => genre.name).join(', ')
            }
          </Text>

        </View>

        {/* History */}

        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          {movieFull.overview}
        </Text>

        {/* Budget */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>Budget:</Text>
        <Text style={{ fontSize: 16 }}>
          {format(movieFull.budget, { code: 'USD' })}
        </Text>

      </View >

      {/* Cast */}
      <View style={{ marginTop: 10, marginBottom: 100, }}>
        <Text style={{ fontSize: 23, fontWeight: 'bold', marginLeft:20 }}>Cast:</Text>

        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 100, marginBottom: 10 }}
        />
      </View>
    </>
  );

};