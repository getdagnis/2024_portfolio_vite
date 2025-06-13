/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onCall } from 'firebase-functions/v2/https';
import fetch from 'node-fetch';
import { logger } from 'firebase-functions';
import { config } from 'firebase-functions';

export const askAI = onCall(async (request) => {
  const keys = config().openrouter.keys.split(',');
  const prompt = request.data.prompt;

  for (const key of keys) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://yourdomain.com',
        },
        body: JSON.stringify({
          model: 'nousresearch/deephermes-3-mistral-24b-preview:free',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 600,
        }),
      });

      const json = await res.json();

      if (json.choices?.[0]?.message?.content) {
        return { content: json.choices[0].message.content };
      }

      if (res.status === 429 || !json.choices) continue;

      throw new Error(json.error?.message || 'Unknown error');
    } catch (err) {
      logger.warn('API key failed:', key.slice(0, 8), err.message);
      continue;
    }
  }

  throw new Error('All API keys failed or were rate-limited.');
});
