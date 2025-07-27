import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Health check endpoint for monitoring
  const healthCheck = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Marincool Website',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    uptime: process.uptime(),
  }

  res.status(200).json(healthCheck)
}