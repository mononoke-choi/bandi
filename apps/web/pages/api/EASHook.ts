import crypto from 'crypto';

import type { NextApiRequest, NextApiResponse } from 'next';
import safeCompare from 'safe-compare';

import { HTTP_STATUS } from '../../service/httpStatus';

const getSlackMessagePayload = (
  info: EASBuildPayload,
  isErrorBuild: boolean,
): string => {
  return JSON.stringify({
    attachments: [
      {
        blocks: [],
        color: isErrorBuild ? '#a63636' : '#36a64f',
        fields: [
          ...(info.error
            ? [
                {
                  short: false,
                  title: `ErrorCode (${info.error?.errorCode})`,
                  value: info.error?.message,
                },
              ]
            : []),
          {
            short: true,
            title: 'Project',
            value: info.projectName,
          },
          {
            short: true,
            title: 'Status',
            value: info.status,
          },
          {
            short: true,
            title: 'Platform',
            value: info.platform,
          },
          {
            short: true,
            title: 'BuildProfile',
            value: info.metadata.buildProfile,
          },
          {
            short: true,
            title: 'AppVersion',
            value: info.metadata.appVersion,
          },
        ],
        mrkdwn_in: ['text'],
        pretext: 'Expo Application Services',
        title: 'buildDetailPage',
        title_link: info.buildDetailsPageUrl,
      },
    ],
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const info = req.body as EASBuildPayload;
  const isErrorBuild = info.status !== 'finished';

  try {
    const expoSignature = req.headers['expo-signature'];

    if (!expoSignature) {
      return res
        .status(HTTP_STATUS.BAD_REQUEST)
        .send('Expo-signature header is undefined');
    }
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    const hmac = crypto.createHmac('sha1', process.env.SECRET_WEBHOOK_KEY);
    hmac.update(JSON.stringify(req.body));
    const hash = `sha1=${hmac.digest('hex')}`;

    if (
      !safeCompare(
        Array.isArray(expoSignature) ? expoSignature[0] : expoSignature,
        hash,
      )
    ) {
      res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .send("Signatures didn't match!");
    } else {
      await fetch('<YOUR_SLACK_WEBHOOK_URL>', {
        body: getSlackMessagePayload(info, isErrorBuild),
        method: 'POST',
      });
      res.status(HTTP_STATUS.OK).send('UPDATED');
    }
  } catch (error) {
    console.log('[log on vercel]', error);

    await fetch('<YOUR_SLACK_WEBHOOK_URL>', {
      body: getSlackMessagePayload(info, isErrorBuild),
      method: 'POST',
    });
    res.status(HTTP_STATUS.BAD_REQUEST);
  }
}
