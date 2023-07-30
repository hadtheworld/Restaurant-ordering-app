import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddOrderForm = ({ onAddOrder }) => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [tableId, setTableId] = useState("");
  const [dishes, setDishes] = useState("");


  const handleAddOrder = () => {
    // For simplicity, I assume all fields are required.

    // setting up the order object to be passed on to intdex.js
    const newOrder = {
      customerName,
      phone,
      tableId,
      // Assuming dishes are entered as comma-separated values
      dishes: dishes.split(",").map((dish) => dish.trim()),

    //   Close the open form upon clicking the button
      closeForm: false,
    };

    // Call the onAddOrder function with the new order data
    onAddOrder(newOrder);

    // Reset the form after adding the order
    setCustomerName("");
    setPhone("");
    setTableId("");
    setDishes("");

  };

  return (
    <View style={styles.container}>
        {/* taking name input */}
      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={customerName}
        onChangeText={(text) => setCustomerName(text)}
      />

      {/* taking phone input */}
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />

      {/* taking table Id input */}
      <TextInput
        style={styles.input}
        placeholder="Table ID"
        value={tableId}
        onChangeText={(text) => setTableId(text)}
      />

      {/* taking Dishes seperated by commas input */}
      <TextInput
        style={styles.input}
        placeholder="Dishes (comma-separated)"
        value={dishes}
        onChangeText={(text) => setDishes(text)}
      />

      {/* Submit button */}
      <Button title="Add Order" onPress={handleAddOrder} />
    </View>
  );
};

// custom styling for container and inut fields
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    top: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default AddOrderForm;
