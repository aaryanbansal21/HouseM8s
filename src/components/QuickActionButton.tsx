// src/components/QuickActionButton.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function QuickActionButton({ icon, label, onPress }: Props) {
  const theme = useTheme();
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <Ionicons name={icon} size={28} color={theme.colors.primary} />
        <Text variant="bodyMedium" style={styles.label}>
          {label}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 12,
    elevation: 1,
    marginBottom: 12,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  label: {
    marginTop: 8,
    textAlign: 'center',
  },
});
