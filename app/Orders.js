import React from "react";
import { FlatList, View, Text, StyleSheet, Button } from "react-native";

function Orders({ orders, completed ,deleteIt}) {

    // view of the order in the list 
  const ViewItem = ({ order }) => (
    <View>
      {order.isComplete ? (
        // when the order is completed
        <View style={styles.OrderViewComplete}>
          <Text style={styles.OrderId}>Table No: {order.tableId}</Text>
          <Text>Customer Name: {order.customerName}</Text>
          <Text>Phone: {order.phone}</Text>
          <Text>Dishes: {order.dishes.join(", ")}</Text>
          {/* delete the order */}
          <Button title="delete" onPress={()=>deleteIt(order.tableId)}/>
        </View>
      ) : (
        // when order is not completed
        <View style={styles.OrderView}>
          <Text style={styles.OrderId}>Table No: {order.tableId}</Text>
          <Text>Customer Name: {order.customerName}</Text>
          <Text>Phone: {order.phone}</Text>
          <Text>Dishes: {order.dishes.join(", ")}</Text>
          <View style={styles.ButtonAlign}>
            {/* mark order complete */}
          <Button title="complete" onPress={() => completed(order.tableId)} />
          {/* mark order incomplete */}
          <Button title="delete" onPress={()=>deleteIt(order.tableId)}/>
          </View>
        
        </View>
      )}
    </View>
  );
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <ViewItem order={item} />}
    />
  );
}

// custom styling of component elements
const styles = StyleSheet.create({
  OrderView: {
    width: 250,
    alignItems: "center",
    backgroundColor: "aqua",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  OrderViewComplete: {
    width: 250,
    alignItems: "center",
    backgroundColor: "lightgrey",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  OrderId: {
    fontWeight: "bold",
    alignItems: "center",
  },
  ButtonAlign:{
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "80%", 
    marginTop: 5
}
});

export default Orders;
