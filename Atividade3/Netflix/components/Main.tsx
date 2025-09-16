import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';

const MovieItem = ({ image }: { image: string }) => (
  <View style={styles.movieItem}>
    <Image source={{ uri: image }} style={styles.movieImage} />
  </View>
);

const MovieSection = ({title, data}: {
  title: string;
  data: { id: string; image: string }[];
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.text}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <MovieItem image={item.image} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.box}
    />
  </View>
);

export default function Main() {
  const [novidades, setNovidades] = useState<{ id: string; image: string }[]>([]);
  const [idolos, setIdolos] = useState<{ id: string; image: string }[]>([]);
  const [top10, setTop10] = useState<{ id: string; image: string }[]>([]);

  const fetchShowImage = async (showName: string) => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(showName)}`
      );
      const data = await response.json();
      if (data.length > 0 && data[0].show.image && data[0].show.image.medium) {
        return data[0].show.image.medium;
      }
    } catch (error) {
      console.error('Error fetching show image:', error);
    }
    return null;
  };

  useEffect(() => {
    const fetchAllImages = async () => {
      const novidadesShows = ['Peaky Blinders', 'Wednesday', 'Friends', 'Stranger Things'];
      const novidadesImages = await Promise.all(
        novidadesShows.map(async (show, index) => ({
          id: (index + 1).toString(),
          image: (await fetchShowImage(show)) || '',
        }))
      );
      setNovidades(novidadesImages.filter((item) => item.image));

      
      const idolosShows = ['Crash Landing on You', 'Vincenzo','Itaewon Class',];
      const idolosImages = await Promise.all(
        idolosShows.map(async (show, index) => ({
          id: (index + 1).toString(),
          image: (await fetchShowImage(show)) || '',
        }))
      );
      setIdolos(idolosImages.filter((item) => item.image));

      const top10Shows = ['City of God', 'Elite Squad', "A Dog's Will"];
      const top10Images = await Promise.all(
        top10Shows.map(async (show, index) => ({
          id: (index + 1).toString(),
          image: (await fetchShowImage(show)) || '',
        }))
      );
      setTop10(top10Images.filter((item) => item.image));
    };

    fetchAllImages();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MovieSection title="Novidades na Netflix" data={novidades} />
      <MovieSection title="Ídolos coreanos nos palcos e nas telas" data={idolos}/>
      <MovieSection title="Brasil: top 10 em filmes hoje" data={top10} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  
  sectionContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  
  text: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  
  box: {
    height: 150,
  },
  
  movieItem: {
    marginRight: 10,
  },
  
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
});
