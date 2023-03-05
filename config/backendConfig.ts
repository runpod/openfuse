import ThirdPartyPasswordlessNode from "supertokens-node/recipe/thirdpartypasswordless"
import SessionNode from "supertokens-node/recipe/session"
import Dashboard from "supertokens-node/recipe/dashboard"
import { appInfo } from "./appInfo"
import { AuthConfig } from "../interfaces"

export let backendConfig = (): AuthConfig => {
  return {
    framework: "express",
    supertokens: {
      // this is the location of the SuperTokens core.
      connectionURI: process.env.SUPERTOKENS_URI,
    },
    appInfo,
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
      ThirdPartyPasswordlessNode.init({
        providers: [
          // We have provided you with development keys which you can use for testing.
          // IMPORTANT: Please replace them with your own OAuth keys for production use.
          ThirdPartyPasswordlessNode.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ],
        contactMethod: "EMAIL",
        flowType: "MAGIC_LINK",
      }),
      SessionNode.init(),
      Dashboard.init({
        apiKey: process.env.SUPERTOKENS_KEY,
      }),
    ],
    isInServerlessEnv: true,
  }
}
