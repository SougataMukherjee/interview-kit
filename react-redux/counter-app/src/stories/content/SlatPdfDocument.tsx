import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import type { SlatItem } from "./SlatContent";

const styles = StyleSheet.create({
  page: { padding: 20 },
  row: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: "1 solid #ccc",
  },
  section: {
    marginBottom: 5,
  },
  title: {
    fontSize: 10,
    marginBottom: 3,
  },
});

interface Props {
  items: SlatItem[];
}

const SlatPdfDocument: React.FC<Props> = ({ items }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {items.map((item) => (
        <View key={item.id} style={styles.row}>
          <View style={styles.section}>
            <Text style={styles.title}>
              RO#: {item.itemData.description.roNumber}
            </Text>
            <Text>Name: {item.itemData.description.name}</Text>
            <Text>Vehicle: {item.itemData.description.vehicle}</Text>
            <Text>Estimator: {item.itemData.description.estimator}</Text>
          </View>

          <View style={styles.section}>
            <Text>Shop: {item.itemData.details.shop}</Text>
            <Text>Due Out: {item.itemData.details.dueOut}</Text>
            <Text>
              Delivery: {item.itemData.dates.deliveryDate}
            </Text>
          </View>

          <View style={styles.section}>
            <Text>
              Sales: {item.itemData.amounts.salesTotal}
            </Text>
            <Text>
              Profit %:{" "}
              {item.itemData.percentages.grossProfitPercent}
            </Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default SlatPdfDocument;