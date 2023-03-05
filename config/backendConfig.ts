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
      connectionURI: "https://try.supertokens.com",
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
            clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
            clientSecret: "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",
          }),
        ],
        contactMethod: "EMAIL",
        flowType: "MAGIC_LINK",
      }),
      SessionNode.init(),
      Dashboard.init({
        apiKey: "supertokens_is_awesome",
      }),
    ],
    isInServerlessEnv: true,
  }
}
