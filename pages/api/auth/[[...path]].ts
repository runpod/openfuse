import { superTokensNextWrapper } from "supertokens-node/nextjs"
import supertokens from "supertokens-node"

import { backendConfig } from "../../../config/backendConfig"
import { middleware } from "supertokens-node/framework/express"

supertokens.init(backendConfig())

export default async function superTokens(req, res) {
  await superTokensNextWrapper(
    async (next) => {
      res.setHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate")
      await middleware()(req, res, next)
    },
    req,
    res
  )
  if (!res.writableEnded) {
    res.status(404).send("Not found")
  }
}
