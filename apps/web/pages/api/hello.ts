import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_STATUS } from '../../service/httpStatus';

type ResponseData = {
  message: string;
};

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
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(HTTP_STATUS.OK).json({ message: 'Hello Bandi!' });
}
