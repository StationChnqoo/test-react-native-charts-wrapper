import { StyleSheet, View } from "react-native";

import { LineChart } from "react-native-charts-wrapper";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          data={{
            dataSets: [
              { label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] },
            ],
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  chart: {
    flex: 1,
  },
});
