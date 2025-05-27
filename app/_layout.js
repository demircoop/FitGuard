import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider, useAuth } from 'C:/Users/Cooper/OneDrive/Documents/injury-prevention-app/app/context/AuthContext.js';
//Absolutely pointless comment online.
function RootLayoutNav() {
  const { user, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return; // Don't navigate while loading

    const inAuthScreens = segments.includes('login') || segments.includes('signup') || segments.includes('welcome');
    const inTabsScreens = segments[0] === '(tabs)';

    if (!user && !inAuthScreens) {
      // User is not authenticated and not on auth screens, redirect to welcome
      router.replace('/welcome');
    } else if (user && (inAuthScreens || (!inTabsScreens && segments.length === 0))) {
      // User is authenticated but on auth screens or root, redirect to tabs
      router.replace('/(tabs)/');
    }
  }, [user, segments, isLoading]);

  // Show loading screen while checking authentication
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
