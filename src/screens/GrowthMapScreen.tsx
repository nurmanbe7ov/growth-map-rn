import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import { GrowthMapItem } from '@/components/GrowthMapItem';
import { lessons } from '@/data/lessons';
import { Lesson } from '@/types/lesson';

export const GrowthMapScreen: React.FC = () => {
  const handleLessonPress = (lesson: Lesson) => {
    if (lesson.status === 'active') {
      console.log('Start lesson');
    } else if (lesson.status === 'locked') {
      Alert.alert(
        'Урок недоступен',
        'Этот урок пока заблокирован. Пройдите предыдущие уроки для разблокировки.',
        [{ text: 'Понятно', style: 'default' }]
      );
    }
  };

  const renderItem = ({ item }: { item: Lesson }) => (
    <GrowthMapItem lesson={item} onPress={() => handleLessonPress(item)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Growth Map</Text>
        <Text style={styles.headerSubtitle}>Карта развития</Text>
      </View>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 20,
    paddingTop: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  listContent: {
    paddingVertical: 8,
  },
});
