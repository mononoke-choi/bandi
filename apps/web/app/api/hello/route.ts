import { HTTP_STATUS } from '../../../service/httpStatus';

/**
 * @swagger
 * paths:
 *  /api/hello:
 *    get:
 *      tags:
 *        - sample
 *      summary: greeting
 *      description: >
 *        say hello
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                required:
 *                  - message
 */
export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello Bandi!' }), {
    status: HTTP_STATUS.OK,
  });
}

export const runtime = 'experimental-edge';
