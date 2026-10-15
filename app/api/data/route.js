import fs from 'fs';
import path from 'path';

/**
 * GET /api/data
 *
 * Returns all portfolio data from public/data.json
 * Used by portfolioStore to fetch data ONCE
 * Shared by all sections
 */

export async function GET(request) {
  try {
    // Read data.json from public folder
    const dataPath = path.join(process.cwd(), 'public', 'data.json');
    const fileContent = fs.readFileSync(dataPath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Return with cache headers
    return Response.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error reading data.json:', error);
    return Response.json(
      { error: 'Failed to load portfolio data' },
      { status: 500 }
    );
  }
}

/**
 * FLOW:
 *
 * portfolioStore.js calls: fetch('/api/data')
 *          ↓
 * This route reads: public/data.json
 *          ↓
 * Returns: { metadata, experiences, projects, skills, dailyDrivers, ... }
 *          ↓
 * All sections use this data
 */

