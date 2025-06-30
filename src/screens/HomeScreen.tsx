// src/screens/HomeScreen.tsx

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  GestureResponderEvent,
} from 'react-native';
import { Text, Card, Surface, useTheme } from 'react-native-paper';
import { Ionicons }                      from '@expo/vector-icons';
import { useNavigation }                 from '@react-navigation/native';
import QuickActionButton                 from '../components/QuickActionButton';
import { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';

type Action = {
  key: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: (e: GestureResponderEvent) => void;
};

export default function HomeScreen() {
  const theme = useTheme();
  const nav = useNavigation();

  const actions: Action[] = [
    {
      key: 'report',
      label: 'Report Incident',
      icon: 'alert-circle-outline',
      onPress: () => nav.navigate('ReportIncident' as never),
    },
    {
      key: 'history',
      label: 'View History',
      icon: 'time-outline',
      onPress: () => nav.navigate('ReportHistory' as never),
    },
    {
      key: 'community',
      label: 'Community',
      icon: 'people-outline',
      onPress: () => nav.navigate('Community' as never),
    },
    {
      key: 'chatroom',
      label: 'Chatroom',
      icon: 'chatbubble-ellipses-outline',
      onPress: () => nav.navigate('Chat' as never),
    },
    {
      key: 'lockout',
      label: 'Lockout Ping',
      icon: 'notifications-outline',
      onPress: () => console.log('Ping housemates'),
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Surface style={[styles.headerPill, { backgroundColor: theme.colors.accent }]}>
          <Ionicons name="home-outline" size={20} color={theme.colors.primary} />
          <View style={{ marginLeft: 8, flex: 1 }}>
            <Text variant="titleMedium" style={{ color: theme.colors.primary }}>
              Home R401
            </Text>
            <Text variant="bodySmall" style={{ color: theme.colors.primary }}>
              64 members
            </Text>
          </View>
          <Ionicons name="chevron-down-outline" size={18} color={theme.colors.primary} />
        </Surface>
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={28}
          color={theme.colors.primary}
          onPress={() => nav.navigate('Chat' as never)}
        />
      </View>

      <Text variant="headlineLarge" style={styles.greeting}>
        Good Morning!
      </Text>

      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <QuickActionButton
            icon={item.icon}
            label={item.label}
            onPress={item.onPress as any}
          />
        )}
        keyExtractor={(i) => i.key}
        numColumns={2}
        columnWrapperStyle={styles.actionsRow}
        contentContainerStyle={styles.actionsContainer}
        scrollEnabled={false}
      />

      <Text variant="titleLarge" style={styles.sectionTitle}>
        Your House
      </Text>
      <Card style={styles.houseCard}>
        <Card.Title
          title="Communal Work Items"
          left={(props: IconProps) => (
            <Ionicons {...props} name="list-outline" size={24} color={theme.colors.primary} />
          )}
        />
        <Card.Content>
          <Text>🧹 Bathroom cleaning</Text>
          <Text>🗑️ Trash duty</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  headerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 24,
    flex: 1,
    marginRight: 12,
  },

  greeting: {
    marginHorizontal: 16,
    marginBottom: 12,
  },

  actionsContainer: {
    paddingHorizontal: 16,
  },
  actionsRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  houseCard: {
    margin: 16,
    borderRadius: 12,
    elevation: 1,
  },
});
