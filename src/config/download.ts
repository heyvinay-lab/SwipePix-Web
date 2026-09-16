/**
 * Centralized APK Download Configuration for SwipePix.
 * Single source of truth for app version and direct distribution asset path.
 * 
 * Verified against public/downloads/SwipePix-1.0.0.apk:
 * - Size: 4,486,854 bytes (~4.28 MB)
 * - SHA-256: 0c2656105ccc884be70a493555643099ce63f28264070ad99a9866b03e48a3cb
 */
export const DOWNLOAD_CONFIG = {
  version: "1.0.0",
  apkUrl: "/downloads/SwipePix-1.0.0.apk",
  fileName: "SwipePix-1.0.0.apk",
  fileSizeBytes: 4486854,
  fileSizeFormatted: "4.28 MB",
  sha256: "0c2656105ccc884be70a493555643099ce63f28264070ad99a9866b03e48a3cb",
  minAndroid: "Android 13+ (API 33-35)",
  noAccountRequired: true
};
