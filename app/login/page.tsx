import { generateRandomString } from '../../lib/randomString'

const client_id = process.env.SPOTIFY_CLIENT_ID
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI

async function getAuthUrl() {
  const state = generateRandomString(16)
  const scope = 'user-read-private user-read-email'
  return `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}`
}

export default async function LoginPage() {
  const authUrl = await getAuthUrl()

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Login</p>
              <a
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
                href={authUrl}
              >
                Login with Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
