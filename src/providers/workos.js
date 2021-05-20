export default function WorkOS(options) {
  const apiUrl = options.apiUrl || 'api.workos.com';

  return {
    id: 'workos',
    name: 'WorkOS',
    type: 'oauth',
    version: '2.0',
    scope: '',
    params: {
      grant_type: 'authorization_code',
      client_id: options.clientId,
      client_secret: options.clientSecret
    },
    accessTokenUrl: `https://${apiUrl}/sso/token`,
    authorizationUrl: `https://${apiUrl}/sso/authorize?response_type=code`,
    profileUrl: `https://${apiUrl}/sso/profile`,
    profile: (profile) => {
      return {
        ...profile,
        name: `${profile.first_name} ${profile.last_name}`
      }
    },
    ...options
  }
}
