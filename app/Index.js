import { Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import AddOrderForm from "./AddOrderForm";
import Orders from "./Orders";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [orders, setOrders] = useState([]);

  // Adds new incoming order from the form 
  // raises alert if the form is incomplete and it is not added to the list
  const handleAddOrder = (newOrder) => {
    // checks for icomplete fields
    if (
      newOrder.customerName &&
      newOrder.phone &&
      newOrder.tableId &&
      newOrder.dishes
    ) {
      setOrders((prevOrders) => [...prevOrders, newOrder]);
    } else {
      // wront input alert
      alert("incomplete order");
    }
    // close the form
    setShowForm(newOrder.closeForm);
  };

  // marks the order complete upon clicking the complete button
  const markComplete = (tableId) => {
    // set new attribute isComplete for the order to true to mark it complete
    setOrders(
      orders.map((order) => {
        if (order.tableId === tableId) {
          return {
            ...order,
            isComplete: true,
          };
        }
        return order;
      })
    );
  };

  // delete the order on clicking delete button
  const deleteOrder=(tableId)=>{
    // filter order from the deleted order and saving them to get new order list
    setOrders(orders.filter(order=> order.tableId !== tableId))
  }
  return (
    <>
      <SafeAreaView style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, color: "blue" }}>Restaurant Ordering</Text>
        <TouchableOpacity
          style={{ top: 10 }}
          onPress={() => setShowForm(!showForm)}
        >
          <Text style={{backgroundColor: "lightpink", padding: 5, borderRadius: 10, margin: 10}}>New Order</Text>
        </TouchableOpacity>
        {showForm && <AddOrderForm onAddOrder={handleAddOrder} />}
        <Orders orders={orders} completed={markComplete} deleteIt={deleteOrder}/>
      </SafeAreaView>
    </>
  );
};
export default Index;
