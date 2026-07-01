import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDB } from "../db/index";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { sqliteDB } from "@/db/index";
import ToastProvider from "../context/toast.provider";

export default function RootLayout() {
  useEffect(() => {
    initDB();
  }, []);

  useDrizzleStudio(sqliteDB);

  return (
    <ToastProvider
      onHide={() =>
        setToast(prev => ({
          ...prev,
          visible: false,
        }))
      }>
      <Stack screenOptions={{ headerShown: false }} />
    </ToastProvider>
  )
}