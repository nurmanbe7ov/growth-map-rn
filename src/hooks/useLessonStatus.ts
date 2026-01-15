import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useMemo } from 'react';
import { LessonStatus } from '@/types/lesson';

export interface LessonStatusStyles {
  doneContainer: StyleProp<ViewStyle>;
  doneText: StyleProp<TextStyle>;
  activeContainer: StyleProp<ViewStyle>;
  activeText: StyleProp<TextStyle>;
  lockedContainer: StyleProp<ViewStyle>;
  lockedText: StyleProp<TextStyle>;
}

export interface StatusStyles {
  containerStyle: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  iconColor: string;
  iconName: 'checkmark-circle' | 'play-circle' | 'lock-closed';
}

export const useLessonStatus = (
  status: LessonStatus,
  styles: LessonStatusStyles
): StatusStyles => {
  return useMemo(() => {
    switch (status) {
      case 'done':
        return {
          containerStyle: styles.doneContainer,
          textStyle: styles.doneText,
          iconColor: '#22c55e',
          iconName: 'checkmark-circle',
        };
      case 'active':
        return {
          containerStyle: styles.activeContainer,
          textStyle: styles.activeText,
          iconColor: '#3b82f6',
          iconName: 'play-circle',
        };
      case 'locked':
        return {
          containerStyle: styles.lockedContainer,
          textStyle: styles.lockedText,
          iconColor: '#9ca3af',
          iconName: 'lock-closed',
        };
    }
  }, [status, styles]);
};
