import { Html, Head, Main, NextScript } from "next/document"
import AddIcon from "@mui/icons-material/Add"
import Fab from "@mui/material/Fab"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Stack
          alignItems="center"
          sx={{ bottom: 60, left: 0, m: "0 auto", position: "absolute", right: 0 }}
        >
          <Fab aria-label="add" variant="extended">
            <AddIcon sx={{ mr: 0.5 }} /> Create
          </Fab>
        </Stack>
        <Stack alignItems="center" mt={3}>
          <Typography fontSize={20} fontWeight={300} sx={{ letterSpacing: 2 }} variant="h1">
            OpenFuse
          </Typography>
        </Stack>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
