import { readFileSync } from 'fs';
import { join } from 'path';

import { HTTP_STATUS } from '../../../service/httpStatus';

import { Notification } from './notification';

/**
 * @swagger
 * paths:
 *  /api/notifications:
 *    get:
 *      tags:
 *        - sample
 *      summary: config
 *      description: >
 *        recent notification list
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    title:
 *                      type: string
 *                    date:
 *                      type: string
 *                  required:
 *                    - title
 *                    - date
 */
export async function GET() {
  const dataDir = join(process.cwd(), '/public/notifications.json');
  const jsonString = await readFileSync(dataDir, 'utf8');
  const { data } = JSON.parse(jsonString) as {
    data: Notification[];
  };

  return new Response(JSON.stringify(data), {
    status: HTTP_STATUS.OK,
  });
}
