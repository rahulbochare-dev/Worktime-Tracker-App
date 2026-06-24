import { Stack } from "expo-router";
import { useEffect } from "react";
import { initDB } from "../db/index";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { sqliteDB } from "@/db/index";

export default function RootLayout() {
  useEffect(() => {
    initDB();
  }, []);

  useDrizzleStudio(sqliteDB);
  
  return <Stack screenOptions={{ headerShown: false }} />;
}