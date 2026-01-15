import React, { useRef } from 'react';
import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lesson } from '@/types/lesson';
import { useLessonStatus } from "@/hooks/useLessonStatus";

interface GrowthMapItemProps {
  lesson: Lesson;
  onPress: () => void;
}

export const GrowthMapItem: React.FC<GrowthMapItemProps> = ({ lesson, onPress }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const statusStyles = useLessonStatus(lesson.status, {
    doneContainer: styles.doneContainer,
    doneText: styles.doneText,
    activeContainer: styles.activeContainer,
    activeText: styles.activeText,
    lockedContainer: styles.lockedContainer,
    lockedText: styles.lockedText,
  });

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={lesson.status === 'done'}
        style={({ pressed }) => [
          styles.container,
          statusStyles.containerStyle,
          pressed && lesson.status !== 'done' && styles.pressed,
        ]}
      >
        <View style={styles.content}>
          <Ionicons
            name={statusStyles.iconName}
            size={24}
            color={statusStyles.iconColor}
            style={styles.icon}
          />
          <Text style={[styles.title, statusStyles.textStyle]}>{lesson.title}</Text>
          {lesson.status === 'active' && (
            <Ionicons name="chevron-forward" size={20} color="#3b82f6" />
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  doneContainer: {
    backgroundColor: '#f0fdf4',
    borderLeftWidth: 4,
    borderLeftColor: '#22c55e',
  },
  doneText: {
    color: '#15803d',
  },
  activeContainer: {
    backgroundColor: '#eff6ff',
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  activeText: {
    color: '#1e40af',
  },
  lockedContainer: {
    backgroundColor: '#f9fafb',
    borderLeftWidth: 4,
    borderLeftColor: '#9ca3af',
    opacity: 0.7,
  },
  lockedText: {
    color: '#6b7280',
  },
  pressed: {
    opacity: 0.8,
  },
});
