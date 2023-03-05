import { Html, Head, Main, NextScript } from "next/document"
import AddIcon from "@mui/icons-material/Add"
import Fab from "@mui/material/Fab"
import Link from "next/link"
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Stack
          alignItems="center"
          sx={{ bottom: 60, left: 0, m: "0 auto", position: "absolute", right: 0 }}
        >
          <Link href="/create">
            <Fab aria-label="add" variant="extended">
              <AddIcon sx={{ mr: 0.5 }} /> Create
            </Fab>
          </Link>
        </Stack>
        <Stack alignItems="center" mt={3}>
          <Link href="/">
            <Typography
              fontSize={20}
              fontWeight={300}
              sx={{
                letterSpacing: 2,
                maskImage:
                  "linear-gradient(-75deg, rgba(0,0,0,.8) 30%, #000 50%, rgba(0,0,0,.8) 70%)",
                maskSize: "200%",
                animation: "shine 4s linear infinite",
              }}
              variant="h1"
            >
              OpenFuse
            </Typography>
          </Link>
        </Stack>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
