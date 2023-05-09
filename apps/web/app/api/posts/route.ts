import { faker } from '@faker-js/faker/locale/ko';
import { times } from 'lodash';

import { HTTP_STATUS } from '../../../service/httpStatus';

/**
 * @swagger
 * paths:
 *  /api/posts:
 *    get:
 *      tags:
 *        - post
 *      summary: post
 *      description: >
 *        recent post list
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
 *                   description:
 *                      type: string
 *                   img:
 *                      type: string
 *                   meta:
 *                      type: object
 *                      properties:
 *                        createdAt:
 *                          type: string
 *                        location:
 *                          type: string
 *                      required:
 *                        - createdAt
 *                        - location
 *                   title:
 *                      type: string
 *                  required:
 *                    - description
 *                    - img
 *                    - meta
 *                    - title
 */
export async function GET() {
  return new Response(JSON.stringify(DATA), {
    status: HTTP_STATUS.OK,
  });
}

function getData() {
  return {
    description: faker.lorem.paragraph(),
    img: faker.image.animals(80, 80, true),
    meta: {
      createdAt: faker.date.recent(),
      location: faker.address.cityName(),
    },
    title: faker.lorem.paragraph(),
  };
}

const DATA = times(40, getData);
