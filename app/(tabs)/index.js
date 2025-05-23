import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAuth } from 'C:/Users/Cooper/OneDrive/Documents/injury-prevention-app/app/context/AuthContext.js';
export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome back, {user?.name}!</Text>
        <Text style={styles.subtitle}>Ready for your injury prevention workout?</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Focus</Text>
        <Text style={styles.cardContent}>Lower Back Strengthening</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Progress</Text>
        <Text style={styles.cardContent}>3 out of 5 workouts completed</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Next Workout</Text>
        <Text style={styles.cardContent}>Core Stability - 25 minutes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
    color: '#666',
  },
});