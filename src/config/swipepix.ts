/**
 * Centralized configuration for the official SwipePix website.
 *
 * Source of truth for release versions, platform targets, and distribution links.
 * Verified against the Android application codebase (namespace in.heyvinay.swipepix).
 */

import { DOWNLOAD_CONFIG } from './download';

export { DOWNLOAD_CONFIG };

export interface SwipePixConfig {
  appName: string;
  packageId: string;
  currentVersion: string;
  versionCode: number;
  releaseDate: string;
  releaseStatus: 'PRODUCTION_READY' | 'BETA' | 'RC';
  minimumAndroidVersion: string;
  minSdk: number;
  targetSdk: number;
  compileSdk: number;
  supportedAndroidVersions: string[];
  apkDownloadUrl: string; // direct canonical asset URL
  fileSizeBytes: number;
  fileSizeFormatted: string;
  sha256Checksum: string;
  githubRepoUrl: string;
  githubReleaseUrl: string;
  developerWebsite: string;
  officialSiteUrl: string;
  supportEmail: string;
  isPlayStoreAvailable: boolean;
}

export const SWIPEPIX_CONFIG: SwipePixConfig = {
  appName: 'SwipePix',
  packageId: 'in.heyvinay.swipepix',
  currentVersion: DOWNLOAD_CONFIG.version,
  versionCode: 1,
  releaseDate: 'September 2026',
  releaseStatus: 'PRODUCTION_READY',
  minimumAndroidVersion: 'Android 13 (API 33)',
  minSdk: 33,
  targetSdk: 35,
  compileSdk: 37,
  supportedAndroidVersions: ['Android 13 (API 33)', 'Android 14 (API 34)', 'Android 15 (API 35)'],
  // Direct APK URL from centralized download config
  apkDownloadUrl: DOWNLOAD_CONFIG.apkUrl,
  fileSizeBytes: DOWNLOAD_CONFIG.fileSizeBytes,
  fileSizeFormatted: DOWNLOAD_CONFIG.fileSizeFormatted,
  sha256Checksum: DOWNLOAD_CONFIG.sha256,
  githubRepoUrl: 'https://github.com/heyvinay-lab/SwipePix',
  githubReleaseUrl: 'https://github.com/heyvinay-lab/SwipePix/releases',
  developerWebsite: 'https://portfolio.heyvinay.in/',
  officialSiteUrl: 'https://swipepix.heyvinay.in/',
  supportEmail: 'hey@heyvinay.in',
  isPlayStoreAvailable: false, // Strict truth policy: Do NOT claim Play Store until published
};
