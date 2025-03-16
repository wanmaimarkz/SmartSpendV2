import { db } from "@/firebaseConfig";
import { collection, addDoc, deleteDoc, doc, getDocs, query, where, serverTimestamp, orderBy  } from "firebase/firestore";


export const addTransaction = async (userId: string, type: "income" | "expense", amount: number, category: string) => {
  try {
    await addDoc(collection(db, "transactions"), {
      userId,
      type,
      amount,
      category,
      date: serverTimestamp(),
      l_dt: Date.parse(new Date().toLocaleString("en-US", { timeZone: "Asia/Bangkok" })) ,
    });
  } catch (error) {
    console.error("Error adding transaction:", error);
  }
};


export const deleteTransaction = async (transactionId: string) => {
  try {
    await deleteDoc(doc(db, "transactions", transactionId));
  } catch (error) {
    console.error("Error deleting transaction:", error);
  }
};


export const getTransactions = async (userId: string) => {
  const q = query(collection(db, "transactions"), where("userId", "==", userId), orderBy("date", "desc"));
  const snapshot = await getDocs(q);
  
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    category: doc.data().category,
    amount: doc.data().amount,
    type: doc.data().type,
    l_date: new Date(doc.data().l_dt).toLocaleDateString("th-TH", { timeZone: "Asia/Bangkok" }),
    l_time: new Date(doc.data().l_dt).toLocaleTimeString("th-TH", { timeZone: "Asia/Bangkok" }),
  }));
};
