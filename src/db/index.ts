import * as SQlite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as schema from '@/db/schema';

export const sqliteDB = SQlite.openDatabaseSync("worktimeTacker.db")

export const db = drizzle(sqliteDB, {schema})